// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



$(document).ready(function () {
    var numbers =[];
    var numbersTwo =[];
    var bufferNumber = "";
    var bufferNumber2 = "";
    $(".array-input").on("input", function (event) {

        var element = event.target;
        var elementId = element.id;
        console.log(elementId)
        var lastChar = this.value.slice(-1);
        console.log(lastChar);

        switch (elementId) {
            case '1': ////////// 1 input
                if (!isNaN(lastChar) || lastChar === "-") {
                    if (lastChar != " ") {

                        bufferNumber += lastChar;
                        console.log(bufferNumber);
                    }
                    else {
                        var inputValue = parseInt(bufferNumber);
                        if (numbers.length > 0) {
                            console.log(numbers[numbers.length - 1])
                            if (inputValue > numbers[numbers.length - 1]) {
                                $(this).next(".wrong").css("visibility", "visible");
                            }
                            else {
                                numbers.push(inputValue);
                                $(this).next(".wrong").css("visibility", "hidden");;
                            }
                        }
                        else {
                            numbers.push(inputValue);
                        }
                        bufferNumber = "";
                    }
                } else {
                    $(this).next(".wrong").css("visibility", "visible");
                    console.log("Is not a number");
                }
                console.log(numbers);
                break;

            case '2': ////////// 2 input
                if (!isNaN(lastChar) || lastChar === "-") {
                    if (lastChar != " ") {

                        bufferNumber2 += lastChar;
                        console.log(bufferNumber2);
                    }
                    else {
                        var inputValue = parseInt(bufferNumber2);
                        if (numbersTwo.length > 0) {
                            console.log(numbersTwo[numbersTwo.length - 1])
                            if (inputValue > numbersTwo[numbersTwo.length - 1]) {
                                $(this).next(".wrong").css("visibility", "visible");
                            }
                            else {
                                numbersTwo.push(inputValue);
                                $(this).next(".wrong").css("visibility", "hidden");;
                            }
                        }
                        else {
                            numbersTwo.push(inputValue);
                        }
                        bufferNumber2 = "";
                    }
                } else {
                    $(this).next(".wrong").css("visibility", "visible");
                    console.log("Is not a number");
                }
                console.log(numbersTwo);
                break;
            }
    });

    $(".data-open-modal").click(async function () {
      event.preventDefault();

      let array = [...numbers, ...numbersTwo];
      let response = await fetch(`/Home/ModalArray?array1=${JSON.stringify(array)}`);
      let result = await response.text();            

       $('.modal-body').html(result);

       $('#exampleModal').modal('show');
    });
});
