import React from 'react';
import AskModal from './AskModal';

const AskRemoveModal = (props) => {
    const {visible, onCancel, onConfirm} = props;
    return (
        <AskModal
            visible={visible}
            title="포스트 삭제"
            description="포스트를 정말 삭제하시겠습니까?"
            confirmText="삭제"
            cancelText="취소"
            onCancel={onCancel}
            onConfirm={onConfirm}
            />
    );
};

export default AskRemoveModal;