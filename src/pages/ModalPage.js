import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const modal = <Modal onClose={handleClose} actionBar={<Button primary onClick={handleClose}>I Accept</Button>}>
        <p>Here is an important agreement for you to accept</p>
    </Modal>

    return (
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sapien ac mi luctus ultrices. Praesent euismod vehicula leo. Phasellus at enim augue. Duis hendrerit sagittis viverra. Sed sodales euismod ante ac pharetra. Mauris posuere nunc sapien, a auctor enim volutpat sit amet. Suspendisse potenti. Aenean vehicula posuere arcu vel vestibulum. In sodales, nunc tincidunt laoreet mattis, ante lectus vehicula sapien, ut tempor velit ante in leo. Nulla facilisi. Phasellus mollis est lacus, et ullamcorper nisi commodo et.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sapien ac mi luctus ultrices. Praesent euismod vehicula leo. Phasellus at enim augue. Duis hendrerit sagittis viverra. Sed sodales euismod ante ac pharetra. Mauris posuere nunc sapien, a auctor enim volutpat sit amet. Suspendisse potenti. Aenean vehicula posuere arcu vel vestibulum. In sodales, nunc tincidunt laoreet mattis, ante lectus vehicula sapien, ut tempor velit ante in leo. Nulla facilisi. Phasellus mollis est lacus, et ullamcorper nisi commodo et.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sapien ac mi luctus ultrices. Praesent euismod vehicula leo. Phasellus at enim augue. Duis hendrerit sagittis viverra. Sed sodales euismod ante ac pharetra. Mauris posuere nunc sapien, a auctor enim volutpat sit amet. Suspendisse potenti. Aenean vehicula posuere arcu vel vestibulum. In sodales, nunc tincidunt laoreet mattis, ante lectus vehicula sapien, ut tempor velit ante in leo. Nulla facilisi. Phasellus mollis est lacus, et ullamcorper nisi commodo et.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sapien ac mi luctus ultrices. Praesent euismod vehicula leo. Phasellus at enim augue. Duis hendrerit sagittis viverra. Sed sodales euismod ante ac pharetra. Mauris posuere nunc sapien, a auctor enim volutpat sit amet. Suspendisse potenti. Aenean vehicula posuere arcu vel vestibulum. In sodales, nunc tincidunt laoreet mattis, ante lectus vehicula sapien, ut tempor velit ante in leo. Nulla facilisi. Phasellus mollis est lacus, et ullamcorper nisi commodo et.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sapien ac mi luctus ultrices. Praesent euismod vehicula leo. Phasellus at enim augue. Duis hendrerit sagittis viverra. Sed sodales euismod ante ac pharetra. Mauris posuere nunc sapien, a auctor enim volutpat sit amet. Suspendisse potenti. Aenean vehicula posuere arcu vel vestibulum. In sodales, nunc tincidunt laoreet mattis, ante lectus vehicula sapien, ut tempor velit ante in leo. Nulla facilisi. Phasellus mollis est lacus, et ullamcorper nisi commodo et.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sapien ac mi luctus ultrices. Praesent euismod vehicula leo. Phasellus at enim augue. Duis hendrerit sagittis viverra. Sed sodales euismod ante ac pharetra. Mauris posuere nunc sapien, a auctor enim volutpat sit amet. Suspendisse potenti. Aenean vehicula posuere arcu vel vestibulum. In sodales, nunc tincidunt laoreet mattis, ante lectus vehicula sapien, ut tempor velit ante in leo. Nulla facilisi. Phasellus mollis est lacus, et ullamcorper nisi commodo et.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sapien ac mi luctus ultrices. Praesent euismod vehicula leo. Phasellus at enim augue. Duis hendrerit sagittis viverra. Sed sodales euismod ante ac pharetra. Mauris posuere nunc sapien, a auctor enim volutpat sit amet. Suspendisse potenti. Aenean vehicula posuere arcu vel vestibulum. In sodales, nunc tincidunt laoreet mattis, ante lectus vehicula sapien, ut tempor velit ante in leo. Nulla facilisi. Phasellus mollis est lacus, et ullamcorper nisi commodo et.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sapien ac mi luctus ultrices. Praesent euismod vehicula leo. Phasellus at enim augue. Duis hendrerit sagittis viverra. Sed sodales euismod ante ac pharetra. Mauris posuere nunc sapien, a auctor enim volutpat sit amet. Suspendisse potenti. Aenean vehicula posuere arcu vel vestibulum. In sodales, nunc tincidunt laoreet mattis, ante lectus vehicula sapien, ut tempor velit ante in leo. Nulla facilisi. Phasellus mollis est lacus, et ullamcorper nisi commodo et.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sapien ac mi luctus ultrices. Praesent euismod vehicula leo. Phasellus at enim augue. Duis hendrerit sagittis viverra. Sed sodales euismod ante ac pharetra. Mauris posuere nunc sapien, a auctor enim volutpat sit amet. Suspendisse potenti. Aenean vehicula posuere arcu vel vestibulum. In sodales, nunc tincidunt laoreet mattis, ante lectus vehicula sapien, ut tempor velit ante in leo. Nulla facilisi. Phasellus mollis est lacus, et ullamcorper nisi commodo et.</p>
        </div>
    )
}

export default ModalPage