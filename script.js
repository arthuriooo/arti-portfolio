$(document).ready(function(){

    var cubeSides = [
        '#cubeFront',
        '#cubeBack',
        '#cubeRight',
        '#cubeLeft',
        '#cubeTop',
        '#cubeBottom'
    ];
    var cubeRotations = [
        'rotateY(0deg)',
        'rotateY(90deg)',
        'rotateY(180deg)',
        'rotateY(-90deg)',
        'rotateX(90deg)',
        'rotateX(-90deg)'
    ];

    var cubeWidth = $('#cube').width();

    $('#middleDimension').css('perspective', cubeWidth*6);
    $('#wholeSpace').css('perspective', cubeWidth*6);

    $('#cubeTop').css({
        'height': cubeWidth
    });
    $('#cubeBottom').css({
        'height': cubeWidth,
        'bottom': '0'
    });

    var moveDeepFront = 'rotateY(0) translateZ(' + cubeWidth + 'px)';

    for (var i = 0; i < cubeSides.length; i++) {
        var rotateCube = cubeRotations[i] + ' ' + 'translateZ(' + cubeWidth/2 + 'px)';
        $(cubeSides[i]).css('transform', rotateCube);
    }

    $('#frontDimension').css('transform', moveDeepFront);

    var links = [
        ['.mainLink', 'mainHeight', 'mainwidth', 'top', 'left'],
        ['.meLink', 'meHeight', 'mewidth', 'top', 'right'],
        ['.projectsLink', 'projectsHeight', 'projectswidth', 'bottom', 'left'],
        ['.resumeLink', 'resumeHeight', 'resumewidth', 'bottom', 'right'],
        ['.contactsLink', 'contactsHeight', 'contactswidth', 'bottom', 'left']
    ]
    var linksWidthh = ['mainWidth', 'meWidth', 'projectsWidth', 'resumeWidth', 'contactsWidth'];
    var linksHeight = ['mainHeight', 'meHeight', 'projectsHeight', 'resumeHeight', 'contactsHeight'];


    var mainWidth = $('.mainLink').width();
    var meWidth = $('.meLink').width();
    var projectsWidth = $('.projectsLink').width();
    var resumeWidth = $('.resumeLink').width();

    // resumeWidth = '50%' -0.5 * resumeWidth;

    var contactsWidth = $('.contactsLink').width();

    var mainHeight = $('.mainLink').height();
    var meHeight = $('.meLink').height();
    var projectsHeight = $('.projectsLink').height();
    var resumeHeight = $('.resumeLink').height();
    var contactsHeight = $('.contactsLink').height();

    // for (var n = 0; n < links.length; n++) {
    //     $(links[n][0]).css(links[n][3], -0.5 * links[n][1]).css(links[n][4], -0.5 * links[n][2]);
    // }

    $('.mainLink').css({
        'top': -0.6 * mainHeight,
        'left': -0.6 * mainWidth
    });
    $('.meLink').css({
        'top': -0.6 * meHeight,
        'right': -0.6 * meWidth
    });
    $('.projectsLink').css({
        'bottom': -0.5 * projectsHeight,
        'left': -0.4 * projectsWidth
    });
    $('.resumeLink').css({
        'bottom': -0.5 * resumeHeight,
        'right': cubeWidth / 2 - 0.6 * resumeWidth
    });
    $('.contactsLink').css({
        'bottom': -0.5 * contactsHeight,
        'right': -0.4 * contactsWidth
    });

    // $('.spaceBorders .mainLink').css({
    //     'top': -0.5 * mainHeight,
    //     'left': -0.5 * mainWidth
    // });
    // $('.spaceBorders .meLink').css({
    //     'top': -0.5 * meHeight,
    //     'right': -0.5 * meWidth
    // });
    // $('.spaceBorders .projectsLink').css({
    //     'bottom': -0.4 * projectsHeight,
    //     'left': -0.3 * projectsWidth
    // });
    // $('.spaceBorders .resumeLink').css({
    //     'bottom': -0.4 * resumeHeight,
    //     'right': cubeWidth / 2 - 0.6 * resumeWidth
    // });
    // $('.spaceBorders .contactsLink').css({
    //     'bottom': -0.4 * contactsHeight,
    //     'right': -0.3 * contactsWidth
    // });

    // var pageWidth = $(window).width();
    // var pageHeight = $(window).height(); 

    // $(document).mousemove(function(e){
    //     var cursorX = e.clientX;
    //     var cursorY = e.clientY;

    //     var cubeRotX = -1 * (pageWidth / 2 - cursorX) / 100;
    //     var cubeRotY = (pageHeight / 2 - cursorY) / 100;
    //     // var cubeRotZ = 0;
    //     var frontRotX = -1 * (pageWidth - cursorX) / 30 + 'px';
    //     var frontRotY = -1 * (pageHeight - cursorY) / 30 + 'px';

    //     var cubeTransformation = 'rotateX(' + cubeRotY + 'deg) rotateY(' + cubeRotX +'deg)';
    //     // var frontTransformation = '';

    //     $("#cube").css('transform', cubeTransformation);
    //     $("#frontContainerMainItems").css({
    //         'top': frontRotY,
    //         'left': frontRotX
    //     });
    // });

    var artiActivated = false;

    var colors = [
        [],
        [],
        [],
        [],
        []
    ];

    // var degrees = [
    //     'rotateX(45deg) rotateY(-45deg)',
    //     'rotateX(135deg) rotateY(-135deg)',
    //     'rotateX(-225deg) rotateY(225deg)',
    //     'rotateX(315deg) rotateY(-315deg)'
    // ];

    var degrees = [
        'rotateX(0deg) rotateY(0deg)',
        'rotateX(0deg) rotateY(90deg)',
        'rotateX(0deg) rotateY(-90deg)',
        'rotateX(-180deg) rotateY(180deg)',
        'rotateX(135deg) rotateY(225deg)'
    ];

    // degrees[0] => main => x 0 y 0
    // degrees[1] => projects => x 0 y -90
    // degrees[2] => resume => x 0 y 90
    // degrees[3] => me => x 0 y 180
    // degrees[4] => contacts => x 315 y 45

    // var choosenDegree = 0;

    // var randomDegree = 0;

    // var randegree = function() {
    //     // randomDegree = Math.floor(Math.random() * (4 - 0)) + 0;
    //     while (randomDegree == choosenDegree) {
    //         randomDegree = Math.floor(Math.random() * (5 - 0)) + 0;
    //     }
    //     choosenDegree = randomDegree;
    //     alert(randomDegree);
    // }

    // $(".mainId").on("click", function(){
    //     randegree();
    //     var thisRotate = degrees[randomDegree];
    //     $("#cube").css('transform', thisRotate);
    //     $(".spaceLinksBehind p").css({
    //         'color': '',
    //         'border': ''
    //     });
    //     $(".spaceLinks p").css({
    //         'color': '',
    //         'border': ''
    //     });
    // });

    $(".mainId").on("click", function(){
        $("#cube").css('transform', 'rotateX(0deg) rotateY(0deg)');
        $(".spaceBorders p").css({
            'color': '',
            'border': ''
        });
        $(".spaceLinks p").css({
            'color': '',
            'border': ''
        });
    });
    $(".meId").on("click", function(){
        $("#cube").css('transform', 'rotateX(0deg) rotateY(-180deg)');
        $(".spaceBorders p").css({
            'color': '',
            'border': ''
        });
        $(".spaceLinks p").css({
            'color': '',
            'border': ''
        });
    });
    $(".projectsId").on("click", function(){
        $("#cube").css('transform', 'rotateX(0deg) rotateY(90deg)');
        $(".spaceBorders p").css({
            'color': '',
            'border': ''
        });
        $(".spaceLinks p").css({
            'color': '',
            'border': ''
        });
    });
    $(".resumeId").on("click", function(){
        $("#cube").css('transform', 'rotateX(0deg) rotateY(-90deg)');
        $(".spaceBorders p").css({
            'color': '',
            'border': ''
        });
        $(".spaceLinks p").css({
            'color': '',
            'border': ''
        });
    });
    $(".contactsId").on("click", function(){
        $("#cube").css('transform', 'rotateX(315deg) rotateY(45deg)');
        $(".spaceBorders p").css({
            'color': '',
            'border': ''
        });
        $(".spaceLinks p").css({
            'color': '',
            'border': ''
        });
    });


});
