var app = angular.module("app", []);

app.directive("zippy", function () {
	return {
		restrict:"E",
		transclude:true,
		//replace:true,
		//replace:true,
		scope:{
			title:"@"

		},
		template:'<div><h3 >{{title}}</h3><button ng-click="toggleContent()" class="tiny button">toggle</button><div class="panel callout radius" ng-show="isContentVisible" ng-transclude></div></div>',
		link:function(scope)
		{
			scope.isContentVisible = false;
			scope.toggleContent = function(){
				scope.isContentVisible = !scope.isContentVisible;
			}
		}
	}
})