function HistoryWindow(props) {
  let modalWindow = 'none';

  const getHistoryWindow = () => {
    const historyModal = document.querySelector('.hystmodal__wrap');

    if (modalWindow === 'none') {
      modalWindow = 'block';
    } else {
      modalWindow = 'none';
    }

    historyModal.style.display = modalWindow;
  };

  return (
    <div className="hystmodal">
      <div className="hystmodal__wrap" style={{ display: modalWindow }}>
        {props.text}
      </div>

      <button className="hystmodal__btn" onClick={getHistoryWindow}>
        &#8986;
      </button>
    </div>
  );
}

export default HistoryWindow;
