const show = () => {
    var accordion = document.querySelectorAll('.accordion');

    for(let i = 0; i < accordion.length ; i++) {
        accordion[i].addEventListener('click', function () {

            //toggle accordion
            this.classList.toggle('active');
            
            // show answer
            let answer = this.nextElementSibling;
            answer.classList.toggle('active');
        });
    };
    
};

show();