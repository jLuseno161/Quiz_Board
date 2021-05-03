//OBJETC FOR THE QUESTIONS
function TestScore(Q1, Q2, Q3, Q4, Q5) {
    this.Q1 = Q1;
    this.Q2 = Q2;
    this.Q3 = Q3;
    this.Q4 = Q4;
    this.Q5 = Q5;
}
TestScore.prototype.getQ1 = function () {
    if (this.Q1 == 'correct') {
        return 5;
    } else {
        return 0;
    }
}
TestScore.prototype.getQ2 = function () {
    if (this.Q2 == 'correct') {
        return 3;
    } else {
        return 0;
    }
}
TestScore.prototype.getQ3 = function () {
    if (this.Q3 == 'correct') {
        return 4;
    } else {
        return 0;
    }
}
TestScore.prototype.getQ4 = function () {
    if (this.Q4 == 'correct') {
        return 2;
    } else {
        return 0;
    }
}
TestScore.prototype.getQ5 = function () {
    if (this.Q5 == 'correct') {
        return 6;
    } else {
        return 0;
    }
}


$(document).ready(function () {
    $('#submit').click(function () {

        var q1 = $('input[name = questions1]:checked').val();
        var q2 = $('input[name = questions2]:checked').val();
        var q3 = $('input[name = questions3]:checked').val();
        var q4 = $('input[name = questions4]:checked').val();
        var q5 = $('input[name = questions5]:checked').val();

        var newScore = new TestScore(q1, q2, q3, q4, q5);

        var score = newScore.getQ1() + newScore.getQ2() + newScore.getQ3() + newScore.getQ4() + newScore.getQ5();
        if (!q1 || !q2 || !q3 || !q4 || !q5) {
            alert('PLease answer all questions first.')
        } else {
            $("#score-shows").show();
            $("#test").hide();
            scorePercent();
        }

        function scorePercent() {
            var sp = score / 20 * 100
            if (sp >= 80 && sp <= 100) {
                $('.score').append(sp + "%: Excellent");
            }
            // alert("You scored " + sp + "%: Excellent");
            else if (sp >= 50 && sp < 80) {
                $('.score').append(sp + "%: Fair");

            } else if (sp < 50) {
                $('h3.text').hide();
                $('.score').append(sp + "%: Please retake the test");
            }
        }
    })
})