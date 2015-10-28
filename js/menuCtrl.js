angular.module("teahouse").controller("menuCtrl", function($scope, $sce){
    
    var categories = [
        {"name":"Cream Blend",
         "price":"$4.25",
         "drinks":"<li>Watermelon Cream Blend<\/li><li>Peach Cream Blend<\/li><li>Taro Coconut Cream Blend<\/li><li>Passion Fruit Cream Blend<\/li><li>Orange Cream Blend<\/li><li>Pina Colada<\/li><li>Peppermint Cream Blend<\/li><li>Frozen Japanese Green Tea<\/li><li>Mango Cream Blend<\/li><li>Pineapple Cream Blend<\/li><li>Strawberry Banana Cream Blend<\/li><li>Taro Cream Blend<\/li><li>Honeydew Cream Blend<\/li><li>Coconut Cream Blend<\/li><li>Avocado Cream Blend<\/li><li>Avocado Coffee Cream Blend<\/li><li>Banana Cream Blend<\/li><li>Papaya Cream Blend<\/li><li>Cookies and Cream Blend<\/li>"},
        
        {"name":"Ice Blend",
         "price":"$4.00",
         "drinks":"<li>Mango Ice Blend<\/li><li>Passion Fruit Ice Blend<\/li><li>Orange Ice Blend<\/li><li>Peach Ice Blend<\/li><li>Pineapple Ice Blend<\/li><li>Green Apple Ice Blend<\/li><li>Strawberry Ice Blend<\/li><li>Cherry Ice Blend<\/li><li>Watermelon Ice Blend<\/li><li>Lychee Ice Blend<\/li>"},
        
        {"name":"Cream Tea",
         "price":"$4.00",
         "drinks":"<li>Teahouse Cream Tea<\/li><li>Jasmine Green Tea w/Cream<\/li><li>Almond Cream Tea<\/li><li>Taro Cream Tea<\/li><li>Coconut Cream Tea<\/li><li>Peppermint Green Tea w/Cream<\/li><li>Honeydew Cream Tea<\/li><li>Thai Tea<\/li>"},
        
        {"name":"Green Tea",
         "price":"$4.00",
         "drinks":"<li>Fresh Green Tea<\/li><li>Jasmine Green Tea<\/li><li>Passion Fruit Green Tea<\/li><li>Green Apple Green Tea<\/li><li>Strawberry Green Tea<\/li><li>Peppermint Green Tea<\/li><li>Lemon Green Tea<\/li><li>Peach Green Tea<\/li><li>Lychee Green Tea<\/li><li>Mango Green Tea<\/li>"},
        
        {"name":"Black Tea",
         "price":"$4.00",
         "drinks":"<li>Black Tea<\/li><li>Lychee Black Tea<\/li><li>Passion Fruit Black Tea<\/li><li>Green Apple Black Tea<\/li><li>Strawberry Black Tea<\/li><li>Peppermint Black Tea<\/li><li>Lemon Black Tea<\/li><li>Peach Black Tea<\/li><li>Mango Black Tea<\/li>"},
        
        {"name":"Juice",
         "price":"$4.50",
         "drinks":"<li>Fresh Fruit Tea Juice<\/li><li>Fresh Carrot Juice<\/li><li>Fresh Orange Juice<\/li><li>Fresh Carrot Orange Juice<\/li><li>Fresh Watermelon Juice<\/li><li>Fresh Apple Juice<\/li>"},
        
        {"name":"Coffee",
         "price":"$4.25",
         "drinks":"<li>Teahouse Coffee<\/li><li>Vietnamese Coffee<\/li><li>Ice Cream Coffee<\/li><li>Vanilla Coffee Cream Blend<\/li><li>Mocha Coffee<\/li><li>Mocha Ice Cream Coffee<\/li><li>Frozen Mocha Coffee<\/li><li>Coffee Cream Blend<\/li><li>Hot Chocolate<\/li>"},
    ];

    filterMenu = function(){
        angular.forEach(categories, function(category) {
            category.drinks = $sce.trustAsHtml(category.drinks);
        });

        $scope.categories = categories;
    };
    
    filterMenu();
    
});