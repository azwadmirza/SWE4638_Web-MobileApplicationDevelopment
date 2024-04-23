import { Modal } from "react-bootstrap";

const AddOption = ({ show, setShow, option,setOption,addOption,questionIndex }) => {
    return (
        <Modal show={show} onHide={() => setShow(false)} style={{
            position: "fixed",
            top: "20%",
            width: "40%",
            left: "30%",
            backgroundColor: "white",
        }} className="rounded-xl" backdrop="static"
            keyboard={false}>
            <Modal.Header className="bg-indigo-950 px-4 py-4 rounded-xl">
                <Modal.Title>Add Question</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4 py-4">
                <input type="text" placeholder="Question" value={option} onChange={(e) => setOption(e.target.value)} className="text-black w-full border border-black rounded-lg px-4 py-2 mb-4" />
            </Modal.Body>
            <Modal.Footer className="flex justify-center bg-white px-4 py-2 rounded-xl">
                <button className="w-1/5 bg-green-800 text-white py-2 rounded-lg mt-4 me-4 hover:bg-green-600" onClick={()=>addOption(questionIndex,option)}>Add</button>
                <button className="w-1/5 bg-red-400 border border-red-900 text-white py-2 rounded-lg mt-4 hover:bg-red-600" onClick={() => setShow(false)}>Cancel</button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddOption;