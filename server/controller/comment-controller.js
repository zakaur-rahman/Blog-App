
import Comment from '../model/comment.js';


export const newComment = async (request, response) => {
    try {
        const comment = await new Comment(request.body);
        comment.save();

        response.status(200).json('Comment saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}


export const getAllComments = async (request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });
        console.log(comments);
        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const deleteComment = async (request, response) => {
    try {
        const comment = await Comment.findById(request.params.id);
        if (!comment) return response.status(404).send("No such comment exists");
        await comment.deleteOne()

        response.status(200).json('comment deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}