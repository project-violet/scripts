// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 3688:
case 3868:
case 840:
case 1855:
case 1343:
case 434:
case 2959:
case 3907:
case 3356:
case 2295:
case 3900:
case 1114:
case 408:
case 1204:
case 3872:
case 2673:
case 3850:
case 1801:
case 2466:
case 1817:
case 394:
case 815:
case 1043:
case 2637:
case 3637:
case 228:
case 1954:
case 3083:
case 1103:
case 2795:
case 2056:
case 2293:
case 1304:
case 1777:
case 2853:
case 2578:
case 1439:
case 1481:
case 1122:
case 3337:
case 3368:
case 2792:
case 3372:
case 3304:
case 2444:
case 1181:
case 1839:
case 2721:
case 3449:
case 2070:
case 32:
case 3585:
case 1347:
case 3665:
case 3373:
case 3173:
case 3584:
case 3681:
case 2794:
case 1334:
case 2566:
case 3847:
case 2424:
case 412:
case 1617:
case 2149:
case 268:
case 2672:
case 3125:
case 388:
case 2996:
case 1805:
case 3499:
case 4014:
case 4067:
case 2750:
case 2113:
case 2676:
case 2653:
case 3487:
case 2975:
case 3318:
case 1150:
case 469:
case 1449:
case 980:
case 1952:
case 3802:
case 3759:
case 1871:
case 2793:
case 42:
case 3118:
case 2607:
case 1820:
case 3701:
case 2624:
case 1771:
case 2641:
case 211:
case 2640:
case 3723:
case 210:
case 9:
case 378:
case 2108:
case 2310:
case 3008:
case 1251:
case 1704:
case 2929:
case 3716:
case 1787:
case 3936:
case 851:
case 844:
case 1962:
case 3168:
case 3019:
case 62:
case 996:
case 2863:
case 1091:
case 2629:
case 4051:
case 3011:
case 762:
case 383:
case 1312:
case 777:
case 182:
case 3867:
case 578:
case 3073:
case 3813:
case 1916:
case 347:
case 480:
case 3041:
case 3560:
case 1877:
case 3458:
case 2084:
case 1104:
case 3746:
case 15:
case 2956:
case 511:
case 2563:
case 2774:
case 1478:
case 288:
case 256:
case 1274:
case 1632:
case 2309:
case 2426:
case 1307:
case 1865:
case 874:
case 1866:
case 380:
case 4032:
case 76:
case 1158:
case 320:
case 1018:
case 1545:
case 1782:
case 145:
case 3901:
case 3383:
case 1479:
case 3651:
case 1432:
case 3987:
case 1975:
case 2844:
case 1499:
case 4027:
case 3498:
case 3417:
case 3979:
case 3621:
case 3773:
case 2222:
case 1405:
case 3205:
case 3562:
case 4074:
case 869:
case 761:
case 1671:
case 3116:
case 1669:
case 2488:
case 3063:
case 2658:
case 967:
case 3494:
case 3735:
case 608:
case 4036:
case 465:
case 3997:
case 2072:
case 2718:
case 3659:
case 3969:
case 3589:
case 2026:
case 289:
case 2092:
case 467:
case 1596:
case 4086:
case 1281:
case 2300:
case 1924:
case 2007:
case 499:
case 1084:
case 2880:
case 2992:
case 486:
case 3100:
case 1435:
case 2450:
case 422:
case 2717:
case 2303:
case 2822:
case 502:
case 329:
case 1641:
case 4003:
case 278:
case 1218:
case 194:
case 579:
case 428:
case 4002:
case 121:
case 516:
case 3485:
case 2452:
case 2919:
case 463:
case 957:
case 4093:
case 1918:
case 2491:
case 759:
case 1740:
case 3733:
case 1965:
case 1945:
case 3737:
case 2546:
case 2940:
case 2917:
case 3530:
case 1815:
case 1841:
case 2599:
case 2109:
case 4056:
case 1553:
case 2983:
case 2592:
case 1985:
case 1371:
case 3010:
case 1452:
case 1833:
case 1961:
case 1332:
case 3914:
case 3520:
case 177:
case 1524:
case 663:
case 1393:
case 3163:
case 1764:
case 3396:
case 628:
case 312:
case 1825:
case 2387:
case 4092:
case 1:
case 2786:
case 3683:
case 3474:
case 2248:
case 3040:
case 3555:
case 3663:
case 1299:
case 2175:
case 280:
case 2352:
case 1143:
case 2373:
case 2747:
case 4095:
case 3938:
case 215:
case 561:
case 3489:
case 1412:
case 1492:
case 99:
case 1814:
case 3946:
case 2270:
case 574:
case 187:
case 782:
case 451:
case 3054:
case 2091:
case 2459:
case 811:
case 2369:
case 436:
case 2648:
case 2642:
case 839:
case 2987:
case 1873:
case 2571:
case 427:
case 3807:
case 1494:
case 1320:
case 1259:
case 3673:
case 800:
case 3814:
case 2022:
case 420:
case 3950:
case 2730:
case 3340:
case 1134:
case 3399:
case 2456:
case 1100:
case 2613:
case 819:
case 3389:
case 3739:
case 226:
case 2744:
case 2932:
case 1353:
case 2359:
case 940:
case 4048:
case 413:
case 918:
case 349:
case 1508:
case 2595:
case 114:
case 1420:
case 3464:
case 3231:
case 3353:
case 314:
case 336:
case 131:
case 3329:
case 1077:
case 1710:
case 1488:
case 1869:
case 1026:
case 1741:
case 93:
case 2273:
case 2687:
case 2967:
case 3400:
case 2055:
case 654:
case 4035:
case 1547:
case 1749:
case 2305:
case 683:
case 2576:
case 2071:
case 184:
case 1002:
case 185:
case 2650:
case 3842:
case 3060:
case 3367:
case 3156:
case 2185:
case 1378:
case 3893:
case 956:
case 776:
case 1321:
case 2923:
case 1533:
case 1976:
case 2945:
case 962:
case 1913:
case 2269:
case 3851:
case 2894:
case 386:
case 3828:
case 1169:
case 3693:
case 1337:
case 1711:
case 1979:
case 1059:
case 3459:
case 3108:
case 3580:
case 2177:
case 1638:
case 2840:
case 3104:
case 2074:
case 2882:
case 1071:
case 94:
case 3342:
case 2780:
case 889:
case 1496:
case 3672:
case 202:
case 3412:
case 1933:
case 3662:
case 721:
case 1458:
case 2510:
case 2414:
case 1668:
case 1027:
case 2420:
case 66:
case 3827:
case 2000:
case 106:
case 1969:
case 3627:
case 3455:
case 1681:
case 691:
case 1722:
case 1880:
case 1149:
case 4022:
case 1809:
case 25:
case 332:
case 1313:
case 3327:
case 2119:
case 4079:
case 3967:
case 3149:
case 73:
case 588:
case 1643:
case 2966:
case 3508:
case 1269:
case 3210:
case 3846:
case 2625:
case 2949:
case 972:
case 505:
case 1667:
case 2209:
case 1121:
case 555:
case 3709:
case 3583:
case 4039:
case 2815:
case 1569:
case 1854:
case 2344:
case 1349:
case 3270:
case 171:
case 1383:
case 2294:
case 1706:
case 3704:
case 2524:
case 1013:
case 1827:
case 1958:
case 738:
case 2360:
case 3791:
case 3531:
case 615:
case 1512:
case 2616:
case 3543:
case 2274:
case 453:
case 2349:
case 1017:
case 3713:
case 1972:
case 3081:
case 2215:
case 3817:
case 2155:
case 3998:
case 1048:
case 3241:
case 1594:
case 1213:
case 3630:
case 1636:
case 712:
case 1348:
case 1241:
case 3715:
case 3422:
case 2860:
case 3896:
case 2281:
case 2588:
case 1253:
case 1744:
case 2858:
case 1826:
case 2364:
case 1550:
case 2783:
case 521:
case 381:
case 3698:
case 2329:
case 108:
case 1195:
case 2288:
case 566:
case 1326:
case 3961:
case 3357:
case 587:
case 1023:
case 1167:
case 520:
case 1530:
case 2460:
case 3079:
case 3811:
case 2479:
case 3837:
case 150:
case 3519:
case 1460:
case 735:
case 982:
case 2484:
case 2174:
case 2043:
case 2921:
case 774:
case 3184:
case 6:
case 2751:
case 3283:
case 3228:
case 443:
case 715:
case 784:
case 1375:
case 233:
case 1966:
case 1619:
case 1620:
case 1988:
case 2933:
case 625:
case 1876:
case 1441:
case 1883:
case 598:
case 3911:
case 2375:
case 2381:
case 2206:
case 3864:
case 3248:
case 2077:
case 3921:
case 3186:
case 1106:
case 450:
case 3447:
case 501:
case 3957:
case 2036:
case 3212:
case 129:
case 3959:
case 849:
case 686:
case 2892:
case 224:
case 3944:
case 4080:
case 1235:
case 1325:
case 2431:
case 2586:
case 3127:
case 4013:
case 2819:
case 3642:
case 262:
case 3854:
case 2562:
case 2383:
case 901:
case 2278:
case 3350:
case 998:
case 1526:
case 84:
case 2112:
case 2503:
case 1271:
case 2224:
case 672:
case 2699:
case 3107:
case 3440:
case 2850:
case 3913:
case 1929:
case 1948:
case 75:
case 3636:
case 3549:
case 3825:
case 3233:
case 1522:
case 3547:
case 2284:
case 285:
case 3435:
case 1422:
case 2136:
case 1509:
case 309:
case 3370:
case 1329:
case 3550:
case 2057:
case 1445:
case 2710:
case 707:
case 3215:
case 932:
case 518:
case 3951:
case 3934:
case 2874:
case 2241:
case 1197:
case 2076:
case 1989:
case 2423:
case 841:
case 1565:
case 4058:
case 1351:
case 2050:
case 1755:
case 1379:
case 2340:
case 3696:
case 4075:
case 1226:
case 452:
case 508:
case 2436:
case 1245:
case 3282:
case 3200:
case 911:
case 3726:
case 0:
case 2635:
case 2164:
case 977:
case 2116:
case 3658:
case 814:
case 3097:
case 1063:
case 747:
case 824:
case 3000:
case 2525:
case 235:
case 1096:
case 2821:
case 2408:
case 3253:
case 1137:
case 1604:
case 3005:
case 1582:
case 953:
case 3983:
case 1273:
case 2779:
case 1842:
case 2589:
case 2802:
case 1232:
case 1176:
case 938:
case 1813:
case 1459:
case 1082:
case 2675:
case 2377:
case 2574:
case 2158:
case 3185:
case 3246:
case 2250:
case 986:
case 1097:
case 1723:
case 618:
case 2778:
case 3433:
case 845:
case 2612:
case 3394:
case 4085:
case 136:
case 391:
case 1860:
case 2371:
case 3243:
case 2971:
case 1390:
case 3675:
case 1192:
case 2379:
case 1357:
case 2323:
case 1336:
case 3820:
case 963:
case 3392:
case 725:
case 669:
case 3145:
case 3728:
case 2724:
case 1898:
case 2776:
case 2421:
case 1171:
case 2886:
case 1540:
case 3386:
case 1444:
case 3908:
case 3772:
case 3015:
case 3223:
case 2208:
case 3801:
case 446:
case 3982:
case 4068:
case 2934:
case 2703:
case 3197:
case 1400:
case 3705:
case 2924:
case 1388:
case 2412:
case 3587:
case 3981:
case 2343:
case 2438:
case 3699:
case 1605:
case 2906:
case 2261:
case 2027:
case 656:
case 2891:
case 3162:
case 1957:
case 3036:
case 630:
case 4077:
case 1635:
case 360:
case 751:
case 3201:
case 4050:
case 1870:
case 580:
case 2406:
case 517:
case 352:
case 3490:
case 1407:
case 1153:
case 26:
case 2515:
case 2538:
case 3306:
case 3436:
case 1928:
case 3384:
case 303:
case 1338:
case 2861:
case 575:
case 884:
case 1868:
case 3483:
case 3232:
case 2542:
case 253:
case 959:
case 72:
case 3397:
case 1164:
case 1593:
case 128:
case 2368:
case 3571:
case 2227:
case 535:
case 3714:
case 3970:
case 2008:
case 3756:
case 3614:
case 3601:
case 63:
case 3939:
case 50:
case 2171:
case 756:
case 181:
case 1893:
case 1500:
case 3177:
case 862:
case 3894:
case 994:
case 1265:
case 2765:
case 3160:
case 1362:
case 2507:
case 2989:
case 3293:
case 197:
case 743:
case 3251:
case 338:
case 3152:
case 1111:
case 2990:
case 3744:
case 449:
case 2818:
case 2496:
case 1160:
case 836:
case 1900:
case 525:
case 1076:
case 2875:
case 923:
case 667:
case 97:
case 3525:
case 484:
case 2825:
case 1907:
case 2126:
case 1613:
case 3105:
case 690:
case 3687:
case 2014:
case 2597:
case 1903:
case 1909:
case 2900:
case 3450:
case 466:
case 1429:
case 3043:
case 3303:
case 3078:
case 1644:
case 294:
case 3738:
case 2207:
case 3444:
case 891:
case 3500:
case 3832:
case 853:
case 2915:
case 1067:
case 1698:
case 2167:
case 1816:
case 1751:
case 286:
case 2233:
case 4049:
case 3810:
case 4076:
case 1689:
case 263:
case 2529:
case 1279:
case 3990:
case 1079:
case 375:
case 3191:
case 523:
case 1702:
case 3797:
case 2807:
case 3274:
case 3769:
case 3114:
case 3582:
case 3014:
case 287:
case 323:
case 985:
case 1504:
case 2907:
case 976:
case 736:
case 2229:
case 822:
case 350:
case 172:
case 1483:
case 260:
case 180:
case 1738:
case 277:
case 749:
case 3949:
case 497:
case 550:
case 3948:
case 983:
case 2692:
case 3182:
case 2691:
case 3670:
case 1324:
case 944:
case 2528:
case 3269:
case 3068:
case 1726:
case 868:
case 2754:
case 1788:
case 4028:
case 1473:
case 373:
case 1772:
case 1570:
case 2461:
case 3823:
case 1344:
case 1631:
case 1428:
case 3347:
case 754:
case 591:
case 3446:
case 3891:
case 2161:
case 799:
case 2268:
case 87:
case 493:
case 2816:
case 964:
case 2712:
case 2947:
case 2124:
case 2464:
case 3522:
case 2912:
case 3956:
case 2481:
case 3171:
case 1715:
case 596:
case 3415:
case 3025:
case 981:
case 2290:
case 3778:
case 3776:
case 906:
case 1323:
case 2564:
case 871:
case 1129:
case 2567:
case 432:
case 773:
case 1513:
case 3361:
case 3945:
case 823:
case 3405:
case 392:
case 2203:
case 2198:
case 1821:
case 1211:
case 2646:
case 2601:
case 1707:
case 952:
case 2678:
case 2501:
case 3604:
case 3598:
case 1642:
case 470:
case 2301:
case 2537:
case 2869:
case 3375:
case 3074:
case 1498:
case 3984:
case 975:
case 3056:
case 2565:
case 431:
case 3880:
case 3354:
case 3962:
case 1730:
case 2172:
case 3038:
case 3296:
case 4020:
case 3889:
case 328:
case 3881:
case 1797:
case 410:
case 4038:
case 3653:
case 1322:
case 3955:
case 1290:
case 2603:
case 2664:
case 1469:
case 3643:
case 3706:
case 2220:
case 472:
case 843:
case 1072:
case 1680:
case 2991:
case 4007:
case 589:
case 270:
case 3229:
case 65:
case 1342:
case 592:
case 2758:
case 3120:
case 2569:
case 1926:
case 3510:
case 1276:
case 1162:
case 2845:
case 2523:
case 3096:
case 2054:
case 1308:
case 1637:
case 2661:
case 2696:
case 864:
case 4016:
case 2513:
case 2196:
case 3302:
case 3511:
case 2504:
case 3762:
case 1222:
case 135:
case 3559:
case 2483:
case 2654:
case 3202:
case 2378:
case 2337:
case 219:
case 896:
case 2494:
case 2265:
case 1206:
case 1284:
case 4:
case 1172:
case 1599:
case 2362:
case 1190:
case 3351:
case 1035:
case 3323:
case 3343:
case 2871:
case 3469:
case 1003:
case 2568:
case 2223:
case 483:
case 763:
case 2458:
case 3761:
case 1359:
case 2153:
case 1630:
case 368:
case 3806:
case 2131:
case 3902:
case 1769:
case 1653:
case 2708:
case 1577:
case 2302:
case 1254:
case 56:
case 2418:
case 4005:
case 4041:
case 2951:
case 1431:
case 2701:
case 2889:
case 697:
case 593:
case 3070:
case 714:
case 1728:
case 461:
case 783:
case 634:
case 1112:
case 475:
case 775:
case 2644:
case 909:
case 3421:
case 2677:
case 244:
case 310:
case 3461:
case 1537:
case 2398:
case 1215:
case 3554:
case 3192:
case 2024:
case 1840:
case 510:
case 1889:
case 1684:
case 1790:
case 2355:
case 798:
case 2348:
case 3252:
case 491:
case 2657:
case 1031:
case 3542:
case 3109:
case 1286:
case 1015:
case 1612:
case 464:
case 1339:
case 1008:
case 3157:
case 319:
case 3904:
case 1874:
case 3749:
case 3890:
case 2775:
case 3030:
case 2948:
case 1083:
case 2096:
case 902:
case 2806:
case 3790:
case 3334:
case 1011:
case 1534:
case 1518:
case 512:
case 3492:
case 353:
case 2437:
case 1531:
case 2347:
case 2926:
case 295:
case 1201:
case 1372:
case 812:
case 897:
case 3331:
case 3046:
case 3285:
case 3139:
case 3298:
case 1474:
case 3558:
case 3134:
case 921:
case 2761:
case 2465:
case 3423:
case 3407:
case 2428:
case 2292:
case 545:
case 4033:
case 322:
case 279:
case 111:
case 2314:
case 281:
case 1765:
case 1994:
case 1489:
case 2590:
case 2638:
case 1672:
case 2615:
case 3972:
case 2757:
case 138:
case 3974:
case 120:
case 731:
case 3268:
case 3320:
case 3167:
case 616:
case 2849:
case 3050:
case 692:
case 1603:
case 1194:
case 993:
case 604:
case 3523:
case 124:
case 2535:
case 3146:
case 2804:
case 2267:
case 3792:
case 1584:
case 821:
case 4055:
case 1544:
case 3581:
case 3937:
case 2079:
case 3568:
case 2864:
case 1028:
case 1268:
case 1511:
case 86:
case 4066:
case 3255:
case 2219:
case 2553:
case 1848:
case 398:
case 2759:
case 209:
case 2037:
case 1686:
case 3476:
case 2575:
case 241:
case 2798:
case 2732:
case 1482:
case 1186:
case 183:
case 2904:
case 546:
case 46:
case 239:
case 2660:
case 3771:
case 531:
case 1690:
case 485:
case 1658:
case 1363:
case 3527:
case 3874:
case 60:
case 41:
case 3199:
case 2296:
case 3006:
case 204:
case 1221:
case 2749:
case 2087:
case 2130:
case 471:
case 500:
case 1895:
case 3999:
case 3995:
case 1138:
case 2830:
case 522:
case 282:
case 1615:
case 3022:
case 723:
case 4042:
case 2974:
case 2230:
case 2901:
case 2583:
case 3619:
case 661:
case 3609:
case 772:
case 1333:
case 2034:
case 304:
case 2555:
case 4063:
case 4017:
case 4026:
case 1354:
case 2411:
case 1785:
case 1908:
case 2614:
case 769:
case 3247:
case 2487:
case 3366:
case 1331:
case 21:
case 2376:
case 3539:
case 110:
case 2559:
case 2011:
case 2968:
case 3537:
case 2722:
case 2382:
case 152:
case 2235:
case 1688:
case 406:
case 3204:
case 1385:
case 1141:
case 3919:
case 2470:
case 2389:
case 2526:
case 1768:
case 678:
case 3579:
case 3360:
case 3028:
case 701:
case 1427:
case 1161:
case 1528:
case 113:
case 2952:
case 2148:
case 3031:
case 1472:
case 3592:
case 59:
case 3729:
case 3882:
case 2846:
case 2727:
case 1682:
case 1454:
case 1370:
case 3319:
case 348:
case 3309:
case 1654:
case 2257:
case 3048:
case 179:
case 1089:
case 3165:
case 613:
case 2693:
case 771:
case 3848:
case 3317:
case 3037:
case 457:
case 3312:
case 2228:
case 3623:
case 2129:
case 3839:
case 3897:
case 1196:
case 621:
case 1914:
case 990:
case 1060:
case 2824:
case 2005:
case 1571:
case 3871:
case 3566:
case 455:
case 2887:
case 943:
case 541:
case 3595:
case 3548:
case 1910:
case 2582:
case 929:
case 382:
case 362:
case 1762:
case 3532:
case 2517:
case 526:
case 1853:
case 1004:
case 2166:
case 2173:
case 2307:
case 2427:
case 2400:
case 430:
case 1844:
case 3613:
case 3140:
case 919:
case 3475:
case 1423:
case 474:
case 169:
case 1561:
case 1094:
case 3009:
case 637:
case 1335:
case 3794:
case 377:
case 2914:
case 639:
case 3377:
case 3618:
case 1832:
case 734:
case 886:
case 1586:
case 1563:
case 1303:
case 2539:
case 3144:
case 1297:
case 2913:
case 3748:
case 830:
case 1925:
case 1057:
case 659:
case 2740:
case 1486:
case 2366:
case 37:
case 100:
case 1697:
case 2157:
case 3830:
case 3239:
case 1064:
case 2049:
case 585:
case 2544:
case 907:
case 729:
case 396:
case 3860:
case 276:
case 2790:
case 156:
case 2218:
case 299:
case 2729:
case 3808:
case 2419:
case 3849:
case 1670:
case 804:
case 3346:
case 4012:
case 2857:
case 2797:
case 4089:
case 3833:
case 682:
case 2581:
case 1915:
case 1212:
case 2256:
case 2015:
case 3775:
case 3261:
case 3563:
case 1951:
case 3495:
case 2385:
case 2859:
case 1634:
case 2313:
case 737:
case 3992:
case 3369:
case 3973:
case 2350:
case 20:
case 2659:
case 2225:
case 109:
case 238:
case 913:
case 1075:
case 600:
case 655:
case 3751:
case 829:
case 1752:
case 85:
case 2898:
case 2955:
case 850:
case 1220:
case 974:
case 1266:
case 3935:
case 513:
case 3240:
case 2200:
case 1655:
case 1921:
case 2950:
case 1763:
case 140:
case 3164:
case 2540:
case 1173:
case 1205:
case 1135:
case 3198:
case 1051:
case 359:
case 1872:
case 926:
case 1389:
case 2979:
case 2372:
case 3947:
case 456:
case 3994:
case 2471:
case 3676:
case 48:
case 205:
case 558:
case 1808:
case 3135:
case 2633:
case 2115:
case 254:
case 2245:
case 223:
case 2066:
case 2573:
case 2033:
case 403:
case 1861:
case 3493:
case 3829:
case 3236:
case 931:
case 2508:
case 3988:
case 720:
case 13:
case 991:
case 711:
case 116:
case 345:
case 2810:
case 1361:
case 1102:
case 3439:
case 2856:
case 870:
case 3710:
case 3660:
case 2226:
case 3624:
case 3682:
case 3290:
case 2771:
case 3745:
case 3836:
case 2736:
case 2746:
case 543:
case 2397:
case 3093:
case 1131:
case 1971:
case 5:
case 2122:
case 1554:
case 2953:
case 2551:
case 2058:
case 2331:
case 92:
case 3091:
case 3804:
case 1293:
case 1576:
case 808:
case 2705:
case 3452:
case 2772:
case 3927:
case 3479:
case 3341:
case 3928:
case 143:
case 568:
case 564:
case 64:
case 2556:
case 3426:
case 3092:
case 3294:
case 1579:
case 1466:
case 3818:
case 1125:
case 2179:
case 3629:
case 2457:
case 3573:
case 3677:
case 650:
case 3183:
case 2162:
case 3017:
case 2475:
case 2663:
case 2330:
case 3661:
case 245:
case 1731:
case 3441:
case 2756:
case 565:
case 859:
case 2254:
case 3123:
case 2004:
case 1373:
case 2253:
case 1982:
case 1967:
case 199:
case 2698:
case 390:
case 529:
case 190:
case 166:
case 1794:
case 797:
case 3174:
case 90:
case 3968:
case 503:
case 1074:
case 2823:
case 948:
case 2787:
case 3003:
case 2262:
case 1936:
case 645:
case 479:
case 2069:
case 3128:
case 4053:
case 3292:
case 318:
case 385:
case 489:
case 1781:
case 257:
case 700:
case 1624:
case 1155:
case 2298:
case 2893:
case 3142:
case 673:
case 1828:
case 827:
case 807:
case 1646:
case 313:
case 3188:
case 1990:
case 3451:
case 3166:
case 2165:
case 549:
case 1799:
case 28:
case 35:
case 2800:
case 2123:
case 155:
case 3787:
case 507:
case 1447:
case 2876:
case 2187:
case 648:
case 1587:
case 2938:
case 407:
case 3322:
case 2244:
case 460:
case 3348:
case 2897:
case 3805:
case 3635:
case 3071:
case 3395:
case 3064:
case 482:
case 528:
case 2184:
case 3625:
case 2782:
case 425:
case 706:
case 3674:
case 2143:
case 274:
case 810:
case 1600:
case 2873:
case 4071:
case 2988:
case 492:
case 3717:
case 122:
case 2829:
case 1778:
case 1959:
case 2843:
case 905:
case 554:
case 346:
case 770:
case 2059:
case 4064:
case 1864:
case 2100:
case 978:
case 1894:
case 2009:
case 2338:
case 490:
case 867:
case 1358:
case 2848:
case 3413:
case 1088:
case 1845:
case 2619:
case 1476:
case 151:
case 496:
case 2453:
case 702:
case 2213:
case 1001:
case 38:
case 3816:
case 487:
case 2608:
case 888:
case 2918:
case 2152:
case 2554:
case 1542:
case 1720:
case 2803:
case 342:
case 3763:
case 2263:
case 3694:
case 2249:
case 3481:
case 833:
case 717:
case 3477:
case 572:
case 1468:
case 247:
case 1849:
case 3126:
case 1803:
case 1032:
case 3965:
case 3344:
case 2120:
case 283:
case 1442:
case 1501:
case 2852:
case 397:
case 917:
case 941:
case 3509:
case 24:
case 1396:
case 3834:
case 2051:
case 3032:
case 4010:
case 984:
case 649:
case 3280:
case 3517:
case 165:
case 3085:
case 3564:
case 1184:
case 3840:
case 2969:
case 3743:
case 805:
case 2711:
case 781:
case 2890:
case 3730:
case 709:
case 904:
case 3680:
case 2211:
case 1737:
case 3727:
case 3639:
case 3925:
case 1188:
case 2240:
case 2:
case 688:
case 3150:
case 1223:
case 2384:
case 96:
case 3172:
case 232:
case 429:
case 2509:
case 3909:
case 102:
case 4054:
case 3387:
case 790:
case 3978:
case 1118:
case 243:
case 1462:
case 3666:
case 3299:
case 1717:
case 2388:
case 1622:
case 3189:
case 3482:
case 3418:
case 335:
case 3207:
case 553:
case 1056:
case 3080:
case 627:
case 3434:
case 1806:
case 2048:
case 1648:
case 3002:
case 198:
case 2321:
case 174:
case 2743:
case 3242:
case 2834:
case 1346:
case 3106:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1674226802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,];
var gg_b = "1674226802/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
