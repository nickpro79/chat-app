import cloudinary from "../lib/cloudinary";

export const getUsersForSidebar = async (req, res) => { 
    try {
        const loggedInUserId = req.user.id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json({ users: filteredUsers });
    } catch (error) {
        console.log("Error in getUsersForSidebar:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
export const getMessages = async (req, res) => { 
    try {
        const {id: userToChatId} = req.params;
        const myId = req.user.id;

        const message = await Message.find({
            $or: [
                { senderId: myId, receiverId: userToChatId },
                { senderId: userToChatId, receiverId: myId }
            ]
        });
        res.status(200).json({ messages: message });

    } catch (error) {
        console.log("Error in getMessages:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
export const sendMessage = async (req, res) => { 
    try {
        const {text, image} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user.id;

        let imageUrl;

        if(imageUrl){
            const uploadResponse = await cloudinary.uploader.upload(image)
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl
        })

        await newMessage.save();
        //todo ----> socket.io
        res.status(201).json({newMessage });
    } catch (error) {
        console.log("Error in sendMessage:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}