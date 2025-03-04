import React from "react";
import Button from "./Button";

const ConfirmationModal = ({ taskID, taskTitle, onClose, onConfirm }: any) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-dark-gray-900 p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-xl text-white font-bold mb-4 text-center">Confirmation</h2>
                <h2 className="text-l text-white text-center mb-4"> { 
                        "Are you sure you want to delete the task '" + taskTitle + "' ?"
                    }
                </h2>

                <div className="flex justify-around mt-8">
                <Button
                    type="cancel"
                    customClass="px-4 py-2 rounded-lg"
                    action={onClose}
                    value="Cancel"
                />
                <Button
                    type="delete"
                    customClass="px-4 py-2 rounded-lg"
                    action={onConfirm}
                    params={taskID}
                    value="Confirm"
                />
                </div>
            </div>
        </div>
    )
};

export default ConfirmationModal;