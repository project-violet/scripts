// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 1206:
case 2799:
case 2509:
case 1064:
case 1882:
case 306:
case 1583:
case 2551:
case 2675:
case 934:
case 532:
case 2943:
case 1447:
case 978:
case 2725:
case 1460:
case 1448:
case 2021:
case 1590:
case 4018:
case 3789:
case 3192:
case 3722:
case 2948:
case 2960:
case 2906:
case 3968:
case 415:
case 3672:
case 1243:
case 2714:
case 682:
case 2016:
case 409:
case 1306:
case 3589:
case 487:
case 708:
case 522:
case 3036:
case 1348:
case 1360:
case 1783:
case 2055:
case 1296:
case 1566:
case 6:
case 2469:
case 3449:
case 2105:
case 1805:
case 958:
case 1655:
case 1571:
case 1343:
case 1120:
case 3249:
case 1790:
case 1500:
case 493:
case 1367:
case 1802:
case 2102:
case 1503:
case 1636:
case 1340:
case 1486:
case 1949:
case 4033:
case 2052:
case 3996:
case 959:
case 926:
case 2734:
case 3514:
case 946:
case 151:
case 1127:
case 1797:
case 1128:
case 3269:
case 3709:
case 1798:
case 787:
case 3469:
case 4037:
case 3105:
case 2249:
case 1546:
case 1386:
case 1708:
case 1598:
case 1268:
case 1240:
case 3509:
case 3799:
case 1267:
case 4010:
case 3182:
case 206:
case 1440:
case 166:
case 936:
case 3664:
case 3195:
case 1746:
case 3369:
case 1263:
case 1892:
case 1463:
case 3948:
case 1072:
case 3947:
case 950:
case 2940:
case 2968:
case 514:
case 3906:
case 2185:
case 2672:
case 2349:
case 171:
case 3667:
case 2856:
case 1475:
case 774:
case 2606:
case 3668:
case 2421:
case 1060:
case 1048:
case 1275:
case 1594:
case 1704:
case 651:
case 1006:
case 326:
case 4022:
case 359:
case 439:
case 2647:
case 461:
case 2660:
case 2648:
case 1464:
case 1916:
case 2538:
case 2964:
case 2537:
case 875:
case 3717:
case 2216:
case 1519:
case 2355:
case 476:
case 420:
case 1921:
case 3530:
case 2643:
case 194:
case 3252:
case 2737:
case 234:
case 3518:
case 3436:
case 3452:
case 456:
case 748:
case 429:
case 1364:
case 763:
case 78:
case 666:
case 904:
case 1115:
case 3730:
case 449:
case 728:
case 2161:
case 2316:
case 3812:
case 3049:
case 430:
case 379:
case 350:
case 671:
case 2069:
case 3141:
case 1876:
case 2686:
case 906:
case 1539:
case 334:
case 454:
case 2518:
case 1344:
case 236:
case 4051:
case 4009:
case 2730:
case 3733:
case 2812:
case 1112:
case 428:
case 749:
case 212:
case 250:
case 182:
case 1936:
case 48:
case 653:
case 1372:
case 1649:
case 1841:
case 729:
case 448:
case 2667:
case 2336:
case 3856:
case 3533:
case 2668:
case 3221:
case 3832:
case 3421:
case 1244:
case 324:
case 4014:
case 2972:
case 1068:
case 1040:
case 259:
case 270:
case 226:
case 3647:
case 246:
case 776:
case 3660:
case 673:
case 3416:
case 3538:
case 3964:
case 1739:
case 1:
case 2717:
case 3216:
case 761:
case 2835:
case 3710:
case 438:
case 358:
case 1135:
case 2944:
case 3975:
case 1789:
case 3588:
case 2593:
case 2703:
case 3587:
case 1722:
case 3616:
case 2463:
case 1534:
case 353:
case 1967:
case 1672:
case 1349:
case 271:
case 2580:
case 2708:
case 2386:
case 2268:
case 3829:
case 3583:
case 2467:
case 55:
case 3406:
case 3447:
case 266:
case 3448:
case 3460:
case 3248:
case 3590:
case 2044:
case 3247:
case 678:
case 2127:
case 3783:
case 2797:
case 1827:
case 2128:
case 2508:
case 87:
case 3566:
case 57:
case 3496:
case 1986:
case 769:
case 3343:
case 2546:
case 3500:
case 1522:
case 3787:
case 2123:
case 2503:
case 1823:
case 2636:
case 3306:
case 3788:
case 4094:
case 2652:
case 2486:
case 644:
case 1052:
case 1036:
case 3360:
case 2783:
case 3363:
case 3797:
case 1055:
case 3507:
case 1599:
case 1709:
case 4084:
case 3798:
case 3508:
case 1105:
case 892:
case 2805:
case 2655:
case 2343:
case 2120:
case 994:
case 2500:
case 2790:
case 1820:
case 2787:
case 3636:
case 3793:
case 3286:
case 3368:
case 3340:
case 3652:
case 469:
case 2969:
case 626:
case 659:
case 768:
case 2348:
case 723:
case 351:
case 1369:
case 2396:
case 3263:
case 3892:
case 2587:
case 586:
case 3463:
case 1947:
case 2443:
case 1906:
case 3885:
case 485:
case 371:
case 1714:
case 612:
case 679:
case 1016:
case 3268:
case 1129:
case 2621:
case 2206:
case 3708:
case 3598:
case 1799:
case 2064:
case 2829:
case 2882:
case 3707:
case 3597:
case 1551:
case 3440:
case 4039:
case 366:
case 1725:
case 441:
case 421:
case 733:
case 2590:
case 2260:
case 2248:
case 3044:
case 2075:
case 104:
case 2739:
case 2:
case 701:
case 296:
case 4071:
case 2135:
case 3921:
case 2063:
case 1530:
case 394:
case 1667:
case 1640:
case 1352:
case 2244:
case 3048:
case 3060:
case 3275:
case 3594:
case 3704:
case 3006:
case 2040:
case 159:
case 126:
case 146:
case 3916:
case 403:
case 1513:
case 2112:
case 150:
case 282:
case 41:
case 2936:
case 1141:
case 2372:
case 2841:
case 3876:
case 1686:
case 3955:
case 1236:
case 3375:
case 1518:
case 2344:
case 4090:
case 1517:
case 604:
case 4083:
case 966:
case 3364:
case 3115:
case 499:
case 1161:
case 2669:
case 1696:
case 1316:
case 4080:
case 3952:
case 382:
case 2124:
case 3936:
case 2096:
case 2794:
case 2504:
case 1824:
case 1069:
case 1455:
case 2955:
case 1737:
case 562:
case 606:
case 964:
case 178:
case 577:
case 71:
case 1815:
case 1416:
case 3739:
case 1964:
case 1216:
case 2519:
case 3472:
case 3584:
case 1355:
case 3063:
case 158:
case 4007:
case 1975:
case 857:
case 2475:
case 3444:
case 1606:
case 1533:
case 1421:
case 3244:
case 2060:
case 124:
case 2047:
case 2704:
case 973:
case 3068:
case 3040:
case 3067:
case 4003:
case 1660:
case 2464:
case 2916:
case 528:
case 848:
case 2245:
case 58:
case 2077:
case 2445:
case 863:
case 2897:
case 548:
case 828:
case 3474:
case 3465:
case 3070:
case 3595:
case 1962:
case 3265:
case 3001:
case 2073:
case 2893:
case 1723:
case 3887:
case 2702:
case 1180:
case 63:
case 1945:
case 3242:
case 554:
case 1834:
case 952:
case 3926:
case 910:
case 3442:
case 36:
case 383:
case 967:
case 137:
case 1822:
case 1103:
case 2792:
case 2803:
case 1523:
case 838:
case 1681:
case 1889:
case 281:
case 3365:
case 2081:
case 574:
case 972:
case 2658:
case 2807:
case 3729:
case 2657:
case 3866:
case 3199:
case 2808:
case 1528:
case 3650:
case 62:
case 245:
case 775:
case 225:
case 2931:
case 3505:
case 576:
case 840:
case 520:
case 3792:
case 3122:
case 820:
case 3653:
case 3189:
case 2954:
case 1814:
case 607:
case 3785:
case 475:
case 2365:
case 861:
case 539:
case 1311:
case 1079:
case 1050:
case 839:
case 3658:
case 3362:
case 1899:
case 561:
case 2199:
case 2871:
case 1454:
case 2679:
case 1100:
case 3846:
case 2800:
case 2795:
case 1254:
case 2274:
case 3077:
case 1426:
case 3898:
case 1226:
case 2109:
case 1601:
case 1809:
case 2529:
case 1659:
case 2582:
case 3897:
case 2883:
case 2474:
case 1670:
case 1851:
case 2465:
case 1720:
case 1190:
case 2705:
case 2595:
case 2001:
case 849:
case 529:
case 856:
case 1187:
case 829:
case 3702:
case 3592:
case 1974:
case 1354:
case 3134:
case 283:
case 26:
case 113:
case 455:
case 3401:
case 1712:
case 267:
case 1973:
case 3459:
case 3470:
case 39:
case 3270:
case 3201:
case 3761:
case 3065:
case 3074:
case 508:
case 981:
case 3894:
case 2477:
case 808:
case 189:
case 272:
case 219:
case 1978:
case 1977:
case 3611:
case 1358:
case 1662:
case 1357:
case 4005:
case 2130:
case 945:
case 2273:
case 1184:
case 925:
case 1453:
case 3950:
case 2281:
case 3301:
case 2631:
case 1139:
case 3370:
case 2377:
case 732:
case 4082:
case 3110:
case 2957:
case 4029:
case 2958:
case 1458:
case 60:
case 1813:
case 1257:
case 3291:
case 3561:
case 1258:
case 2541:
case 2373:
case 613:
case 3654:
case 1981:
case 252:
case 935:
case 3804:
case 2979:
case 3481:
case 3117:
case 515:
case 2950:
case 815:
case 627:
case 2370:
case 3631:
case 3377:
case 891:
case 500:
case 1515:
case 3378:
case 3957:
case 1810:
case 3958:
case 2491:
case 4085:
case 1756:
case 1054:
case 3373:
case 3541:
case 2654:
case 310:
case 432:
case 13:
case 1104:
case 2804:
case 96:
case 983:
case 2459:
case 695:
case 2470:
case 1556:
case 2270:
case 29:
case 3381:
case 2761:
case 2626:
case 2065:
case 1532:
case 637:
case 2776:
case 3741:
case 3277:
case 3045:
case 1724:
case 611:
case 1194:
case 1026:
case 372:
case 319:
case 2611:
case 2042:
case 1119:
case 2819:
case 1838:
case 2138:
case 2137:
case 1715:
case 1011:
case 509:
case 887:
case 12:
case 3884:
case 422:
case 3062:
case 1901:
case 2188:
case 2187:
case 2411:
case 3193:
case 2965:
case 1887:
case 4012:
case 3180:
case 3673:
case 610:
case 1242:
case 652:
case 3945:
case 462:
case 1926:
case 16:
case 183:
case 93:
case 2426:
case 327:
case 2601:
case 2809:
case 1529:
case 3727:
case 2183:
case 3331:
case 1474:
case 1883:
case 2670:
case 2720:
case 1911:
case 599:
case 1059:
case 1595:
case 1705:
case 3962:
case 1001:
case 899:
case 2079:
case 2899:
case 2166:
case 3108:
case 1729:
case 3528:
case 1199:
case 2454:
case 801:
case 3146:
case 590:
case 94:
case 501:
case 1091:
case 2825:
case 3057:
case 1795:
case 988:
case 3058:
case 337:
case 1374:
case 3431:
case 3822:
case 2326:
case 619:
case 2814:
case 311:
case 3053:
case 2107:
case 1362:
case 1657:
case 3899:
case 3166:
case 1808:
case 3691:
case 757:
case 2528:
case 618:
case 3454:
case 3100:
case 1846:
case 3825:
case 3254:
case 2058:
case 2822:
case 2103:
case 1803:
case 1122:
case 2523:
case 211:
case 181:
case 2053:
case 1081:
case 989:
case 4056:
case 3211:
case 1462:
case 1073:
case 3188:
case 4024:
case 1893:
case 3187:
case 2723:
case 1262:
case 1592:
case 3974:
case 2673:
case 197:
case 2945:
case 980:
case 898:
case 313:
case 4015:
case 3942:
case 51:
case 3601:
case 777:
case 3809:
case 81:
case 3670:
case 2197:
case 762:
case 2962:
case 831:
case 1611:
case 1819:
case 869:
case 3662:
case 3357:
case 531:
case 2715:
case 2642:
case 625:
case 2970:
case 4028:
case 118:
case 3535:
case 4027:
case 3973:
case 1459:
case 1470:
case 2556:
case 1201:
case 1133:
case 2532:
case 1776:
case 307:
case 1894:
case 2665:
case 2724:
case 681:
case 389:
case 3457:
case 541:
case 821:
case 1491:
case 841:
case 521:
case 2756:
case 635:
case 2250:
case 1576:
case 2279:
case 1654:
case 3981:
case 23:
case 365:
case 2104:
case 1804:
case 3453:
case 585:
case 1979:
case 3817:
case 885:
case 860:
case 3139:
case 75:
case 486:
case 2810:
case 1113:
case 2512:
case 2813:
case 2257:
case 3732:
case 105:
case 2258:
case 3756:
case 3054:
case 1373:
case 1541:
case 786:
case 1953:
case 2981:
case 3479:
case 3104:
case 265:
case 484:
case 1117:
case 927:
case 2253:
case 833:
case 1839:
case 2139:
case 1377:
case 3515:
case 2031:
case 792:
case 2978:
case 2977:
case 2358:
case 3837:
case 2830:
case 3379:
case 34:
case 2184:
case 1473:
case 1884:
case 3959:
case 1062:
case 388:
case 523:
case 2712:
case 167:
case 2973:
case 3674:
case 995:
case 543:
case 823:
case 3532:
case 1741:
case 911:
case 47:
case 3724:
case 3665:
case 3194:
case 3026:
case 289:
case 1478:
case 119:
case 3407:
case 4072:
case 1299:
case 2004:
case 903:
case 2706:
case 3768:
case 3740:
case 3393:
case 764:
case 3207:
case 2200:
case 1425:
case 3246:
case 2760:
case 2271:
case 2471:
case 360:
case 233:
case 91:
case 385:
case 3446:
case 2400:
case 1225:
case 1900:
case 3618:
case 580:
case 3617:
case 3586:
case 3397:
case 3131:
case 3203:
case 2390:
case 321:
case 1214:
case 649:
case 1966:
case 2999:
case 3039:
case 1414:
case 341:
case 1811:
case 3493:
case 1619:
case 889:
case 3307:
case 2287:
case 507:
case 3084:
case 2637:
case 2366:
case 3630:
case 2019:
case 2543:
case 620:
case 243:
case 2300:
case 2951:
case 1983:
case 3498:
case 3845:
case 317:
case 1409:
case 2483:
case 1451:
case 3567:
case 3303:
case 193:
case 2283:
case 3540:
case 2796:
case 3568:
case 2506:
case 3934:
case 1209:
case 2094:
case 1769:
case 2547:
case 1314:
case 2548:
case 2490:
case 2865:
case 1987:
case 1033:
case 1165:
case 3488:
case 2493:
case 1030:
case 2293:
case 1162:
case 674:
case 2307:
case 3637:
case 2084:
case 3288:
case 2786:
case 2308:
case 3371:
case 2630:
case 638:
case 343:
case 2346:
case 3951:
case 1997:
case 2480:
case 1234:
case 368:
case 84:
case 2498:
case 2845:
case 2497:
case 3874:
case 3483:
case 2297:
case 2567:
case 3283:
case 888:
case 109:
case 2298:
case 3633:
case 3796:
case 2568:
case 1389:
case 990:
case 3094:
case 2934:
case 3547:
case 231:
case 3865:
case 1993:
case 2407:
case 3914:
case 3466:
case 2408:
case 3004:
case 2208:
case 2768:
case 3596:
case 3388:
case 3706:
case 100:
case 2207:
case 2767:
case 3387:
case 68:
case 1013:
case 3748:
case 2246:
case 3200:
case 3271:
case 766:
case 3747:
case 1334:
case 260:
case 648:
case 1903:
case 115:
case 2403:
case 464:
case 53:
case 4064:
case 83:
case 1289:
case 1222:
case 3925:
case 1639:
case 2131:
case 2397:
case 1831:
case 2763:
case 221:
case 4075:
case 3610:
case 771:
case 2000:
case 3046:
case 811:
case 3744:
case 2775:
case 2319:
case 2071:
case 174:
case 2699:
case 1025:
case 496:
case 2910:
case 511:
case 3157:
case 1666:
case 1850:
case 3917:
case 1671:
case 595:
case 2404:
case 943:
case 2066:
case 1099:
case 2204:
case 2625:
case 3384:
case 537:
case 4063:
case 3007:
case 3439:
case 609:
case 3239:
case 1904:
case 3622:
case 3881:
case 3153:
case 3913:
case 2614:
case 1410:
case 3003:
case 1516:
case 600:
case 1438:
case 3080:
case 399:
case 203:
case 691:
case 1238:
case 1687:
case 3572:
case 3634:
case 482:
case 163:
case 527:
case 933:
case 2304:
case 154:
case 2575:
case 3544:
case 3930:
case 1101:
case 1170:
case 3339:
case 2651:
case 1683:
case 2870:
case 2494:
case 1919:
case 3877:
case 3878:
case 1051:
case 2083:
case 2937:
case 2938:
case 2080:
case 1313:
case 1752:
case 303:
case 1693:
case 1736:
case 2572:
case 2873:
case 3087:
case 2634:
case 1430:
case 2093:
case 130:
case 2930:
case 513:
case 3090:
case 1698:
case 3609:
case 1697:
case 1984:
case 2877:
case 149:
case 782:
case 156:
case 941:
case 80:
case 1213:
case 4043:
case 3775:
case 1858:
case 1607:
case 1608:
case 3891:
case 1413:
case 2917:
case 3404:
case 3764:
case 2384:
case 3625:
case 3204:
case 2007:
case 4060:
case 796:
case 4047:
case 2439:
case 2622:
case 1603:
case 1418:
case 1853:
case 2881:
case 2153:
case 1552:
case 2689:
case 1417:
case 2913:
case 931:
case 161:
case 139:
case 969:
case 2946:
case 1618:
case 2489:
case 3971:
case 1398:
case 1586:
case 3309:
case 2289:
case 3010:
case 2222:
case 1397:
case 2831:
case 3351:
case 1763:
case 2017:
case 121:
case 2018:
case 949:
case 2907:
case 706:
case 3499:
case 1408:
case 1208:
case 1393:
case 3425:
case 1246:
case 2334:
case 1989:
case 1446:
case 2145:
case 3409:
case 287:
case 1497:
case 1567:
case 2389:
case 3209:
case 961:
case 2749:
case 3987:
case 2993:
case 3165:
case 939:
case 1493:
case 3811:
case 1293:
case 2162:
case 1307:
case 3399:
case 1084:
case 1308:
case 3142:
case 940:
case 59:
case 3037:
case 3325:
case 2997:
case 1480:
case 2234:
case 976:
case 3038:
case 89:
case 387:
case 3145:
case 3980:
case 2451:
case 1874:
case 293:
case 1283:
case 1094:
case 1126:
case 3389:
case 2769:
case 1290:
case 1865:
case 2987:
case 2033:
case 572:
case 3030:
case 2990:
case 1487:
case 819:
case 1287:
case 1371:
case 2142:
case 1300:
case 123:
case 567:
case 3997:
case 2037:
case 1909:
case 3234:
case 3998:
case 168:
case 2038:
case 510:
case 3946:
case 552:
case 3489:
case 3289:
case 3639:
case 406:
case 810:
case 3222:
case 852:
case 2351:
case 505:
case 3908:
case 2966:
case 2414:
case 1610:
case 1914:
case 1004:
case 1388:
case 1266:
case 3549:
case 1200:
case 1748:
case 1271:
case 1471:
case 3334:
case 1154:
case 3903:
case 2604:
case 315:
case 101:
case 3014:
case 3716:
case 2218:
case 909:
case 1622:
case 2603:
case 2536:
case 2418:
case 2552:
case 2181:
case 2417:
case 1153:
case 1003:
case 239:
case 1046:
case 2213:
case 2858:
case 3338:
case 3337:
case 2608:
case 3721:
case 1157:
case 759:
case 3671:
case 1917:
case 3879:
case 668:
case 623:
case 1918:
case 3600:
case 2646:
case 1008:
case 3099:
case 2939:
case 1007:
case 746:
case 276:
case 354:
case 2318:
case 583:
case 2317:
case 1930:
case 86:
case 883:
case 1339:
case 2697:
case 2984:
case 3159:
case 3919:
case 2177:
case 1877:
case 256:
case 1097:
case 3009:
case 1098:
case 3438:
case 3516:
case 1080:
case 199:
case 3238:
case 900:
case 3687:
case 2173:
case 1572:
case 633:
case 2680:
case 2430:
case 328:
case 230:
case 4069:
case 363:
case 1284:
case 897:
case 254:
case 1575:
case 3318:
case 535:
case 3698:
case 198:
case 2233:
case 2101:
case 1609:
case 3984:
case 1859:
case 3697:
case 2683:
case 1870:
case 2159:
case 2919:
case 641:
case 349:
case 1083:
case 329:
case 2755:
case 436:
case 1937:
case 1294:
case 1938:
case 2438:
case 3752:
case 2688:
case 734:
case 3693:
case 2238:
case 3034:
case 685:
case 3173:
case 778:
case 660:
case 248:
case 3430:
case 1087:
case 479:
case 330:
case 412:
case 228:
case 1088:
case 11:
case 525:
case 2014:
case 3218:
case 2716:
case 2904:
case 3603:
case 2333:
case 3853:
case 825:
case 617:
case 545:
case 3181:
case 3552:
case 669:
case 446:
case 1614:
case 3089:
case 339:
case 426:
case 2210:
case 1000:
case 3213:
case 1775:
case 744:
case 1319:
case 274:
case 2338:
case 908:
case 2337:
case 2025:
case 3857:
case 2721:
case 3608:
case 2666:
case 1179:
case 3330:
case 340:
case 1204:
case 3939:
case 2099:
case 1764:
case 2555:
case 3869:
case 40:
case 2228:
case 102:
case 1392:
case 2227:
case 1041:
case 1745:
case 155:
case 413:
case 1886:
case 3905:
case 2531:
case 2223:
case 1402:
case 3711:
case 1927:
case 2327:
case 2163:
case 4050:
case 795:
case 3982:
case 1635:
case 3143:
case 1485:
case 1302:
case 2985:
case 1867:
case 2323:
case 3526:
case 1840:
case 1868:
case 3106:
case 2168:
case 2140:
case 992:
case 257:
case 3032:
case 2992:
case 3056:
case 3754:
case 3147:
case 3148:
case 3731:
case 2995:
case 3035:
case 3328:
case 2511:
case 4057:
case 2929:
case 4058:
case 642:
case 2320:
case 1282:
case 3985:
case 495:
case 1656:
case 3167:
case 3323:
case 1806:
case 3168:
case 3140:
case 2106:
case 437:
case 357:
case 1429:
case 1295:
case 8:
case 4053:
case 896:
case 2056:
case 2754:
case 1847:
case 1860:
case 1848:
case 1495:
case 596:
case 411:
case 2024:
case 2196:
case 2869:
case 3228:
case 2726:
case 3227:
case 3427:
case 1076:
case 2554:
case 362:
case 1061:
case 3849:
case 3012:
case 2676:
case 447:
case 1329:
case 3186:
case 2905:
case 882:
case 3531:
case 427:
case 70:
case 1395:
case 1627:
case 2412:
case 873:
case 1628:
case 2212:
case 2028:
case 1441:
case 3605:
case 3224:
case 3855:
case 2335:
case 122:
case 789:
case 1778:
case 3550:
case 4011:
case 3579:
case 44:
case 3424:
case 1136:
case 3356:
case 1152:
case 1581:
case 2852:
case 4026:
case 3415:
case 1002:
case 3215:
case 1773:
case 1085:
case 2692:
case 2312:
case 132:
case 35:
case 1872:
case 1341:
case 1573:
case 2435:
case 3821:
case 2758:
case 3256:
case 553:
case 1844:
case 2144:
case 3432:
case 286:
case 116:
case 765:
case 1577:
case 3779:
case 1361:
case 3692:
case 2816:
case 1116:
case 480:
case 3235:
case 1956:
case 25:
case 2324:
case 3172:
case 1376:
case 3435:
case 2821:
case 2232:
case 1095:
case 1121:
case 1559:
case 2682:
case 2256:
case 3758:
case 2175:
case 114:
case 871:
case 2432:
case 3144:
case 386:
case 1082:
case 1864:
case 73:
case 2315:
case 3558:
case 3557:
case 1261:
case 551:
case 1915:
case 1461:
case 3028:
case 2224:
case 1476:
case 1155:
case 2550:
case 1276:
case 1620:
case 2424:
case 3602:
case 3836:
case 2356:
case 392:
case 3852:
case 2976:
case 2961:
case 2215:
case 788:
case 407:
case 3886:
case 2329:
case 850:
case 512:
case 1711:
case 4077:
case 2395:
case 783:
case 2742:
case 1869:
case 1661:
case 2169:
case 2896:
case 1726:
case 302:
case 1554:
case 355:
case 3385:
case 435:
case 3149:
case 3867:
case 2806:
case 3840:
case 2482:
case 2295:
case 4081:
case 1754:
case 2860:
case 2848:
case 1148:
case 826:
case 3863:
case 870:
case 859:
case 1995:
case 559:
case 570:
case 425:
case 3635:
case 2843:
case 3485:
case 2840:
case 3806:
case 1168:
case 3632:
case 2545:
case 3429:
case 558:
case 3295:
case 725:
case 3848:
case 67:
case 2863:
case 1163:
case 2562:
case 1327:
case 1035:
case 2292:
case 1328:
case 2492:
case 781:
case 844:
case 2635:
case 824:
case 2886:
case 1186:
case 3329:
case 3382:
case 684:
case 1223:
case 916:
case 2928:
case 4059:
case 797:
case 4070:
case 3395:
case 3742:
case 3615:
case 1228:
case 1227:
case 3076:
case 1427:
case 2745:
case 1428:
case 534:
case 162:
case 2923:
case 3624:
case 46:
case 3205:
case 1902:
case 3765:
case 2385:
case 65:
case 2149:
case 1012:
case 3405:
case 3623:
case 1356:
case 3152:
case 1332:
case 17:
case 419:
case 472:
case 718:
case 1215:
case 4045:
case 2770:
case 2759:
case 3627:
case 3628:
case 2701:
case 2591:
case 1020:
case 1605:
case 2476:
case 322:
case 4062:
case 3778:
case 1550:
case 2276:
case 342:
case 1424:
case 1629:
case 2095:
case 2559:
case 1682:
case 1256:
case 214:
case 1456:
case 1695:
case 1750:
case 1315:
case 677:
case 405:
case 3781:
case 2932:
case 452:
case 3092:
case 410:
case 332:
case 2956:
case 3872:
case 3121:
case 3559:
case 1758:
case 314:
case 2844:
case 3082:
case 2577:
case 710:
case 2578:
case 3361:
case 2781:
case 1692:
case 804:
case 1312:
case 1235:
case 2092:
case 3932:
case 3956:
case 1685:
case 955:
case 2872:
case 2341:
case 3376:
case 49:
case 1602:
case 2581:
case 4065:
case 1852:
case 1941:
case 975:
case 4074:
case 3770:
case 2627:
case 1557:
case 3591:
case 3701:
case 2628:
case 3261:
case 2441:
case 3476:
case 1335:
case 3155:
case 222:
case 772:
case 2778:
case 2241:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745298002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,];
var gg_b = "1745298002/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
