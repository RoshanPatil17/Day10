let questions = document.querySelectorAll(".faq button");

questions.forEach(function(question) {

    question.addEventListener("click", function() {

        let box = question.parentElement;

        box.classList.toggle("active");

    });

});