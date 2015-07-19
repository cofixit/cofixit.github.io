$('#max_points').keyup(update);
$('#points').keyup(update);

function update() {
    var max_points = $('#max_points').val();
    var points = $('#points').val();
    var percent = 100*points/max_points;
    var grades = [
        {grade: "5,0", percent: 50},
        {grade: "4,0", percent: 55},
        {grade: "3,7", percent: 60},
        {grade: "3,3", percent: 65},
        {grade: "3,0", percent: 70},
        {grade: "2,7", percent: 75}, 
        {grade: "2,3", percent: 80}, 
        {grade: "2,0", percent: 85}, 
        {grade: "1,7", percent: 90}, 
        {grade: "1,3", percent: 95}, 
        {grade: "1,0", percent: 100}
    ];
    var grade = null;
    if (!isNaN(percent)) {
        $.each(grades, function(index, value) {
            if (percent < value.percent) {
                grade = value.grade;
                return false;
            }
        });
        $('#percent').text(Math.round(percent) + '%');
        $('#grade').text(grade);
    }
}
