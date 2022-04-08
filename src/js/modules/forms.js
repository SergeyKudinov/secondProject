const forms = () => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input');
        
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с вами свяжется наш специалист',
        failure: 'Что-то пошло не так...'
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    });
};

export default forms;