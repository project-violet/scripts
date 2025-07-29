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
var o = 1;
switch (g) {
case 2242:
case 1446:
case 1987:
case 2632:
case 2260:
case 2646:
case 1978:
case 3899:
case 1416:
case 3954:
case 2893:
case 1576:
case 1586:
case 3697:
case 2312:
case 165:
case 2795:
case 1205:
case 3698:
case 2235:
case 3717:
case 1306:
case 2615:
case 3747:
case 2402:
case 1206:
case 3300:
case 1585:
case 700:
case 1575:
case 1553:
case 96:
case 2973:
case 2983:
case 670:
case 2955:
case 794:
case 378:
case 2840:
case 1897:
case 3291:
case 2862:
case 3794:
case 1898:
case 2172:
case 2810:
case 3989:
case 2956:
case 1364:
case 3644:
case 3731:
case 191:
case 1749:
case 2558:
case 1151:
case 1761:
case 194:
case 2557:
case 3334:
case 970:
case 1264:
case 2553:
case 2575:
case 2602:
case 499:
case 2585:
case 103:
case 3028:
case 1402:
case 2052:
case 3790:
case 587:
case 588:
case 2814:
case 745:
case 3365:
case 516:
case 2415:
case 3559:
case 3497:
case 2205:
case 1795:
case 522:
case 3610:
case 3498:
case 2586:
case 145:
case 2576:
case 3662:
case 3230:
case 1360:
case 2416:
case 200:
case 2988:
case 2978:
case 532:
case 1632:
case 1260:
case 2987:
case 2977:
case 2446:
case 1242:
case 673:
case 2719:
case 2761:
case 2151:
case 1558:
case 64:
case 3950:
case 3574:
case 3584:
case 3743:
case 3414:
case 487:
case 4026:
case 1029:
case 889:
case 1182:
case 1810:
case 1172:
case 3693:
case 3204:
case 639:
case 1862:
case 1840:
case 2699:
case 432:
case 629:
case 973:
case 3304:
case 1499:
case 458:
case 2995:
case 457:
case 3515:
case 3545:
case 1659:
case 3754:
case 3164:
case 1857:
case 1788:
case 1778:
case 3884:
case 901:
case 3874:
case 441:
case 1858:
case 4006:
case 1787:
case 389:
case 3475:
case 420:
case 1470:
case 3224:
case 3947:
case 430:
case 4005:
case 3486:
case 2598:
case 3918:
case 859:
case 1540:
case 3324:
case 3948:
case 1100:
case 558:
case 3779:
case 2544:
case 3789:
case 81:
case 3994:
case 1422:
case 3859:
case 2226:
case 398:
case 2514:
case 3657:
case 2875:
case 2853:
case 2484:
case 2755:
case 3658:
case 2165:
case 169:
case 690:
case 1684:
case 2783:
case 2773:
case 2326:
case 990:
case 1919:
case 2225:
case 22:
case 2068:
case 520:
case 1092:
case 1949:
case 171:
case 202:
case 2325:
case 3931:
case 530:
case 3105:
case 2876:
case 2886:
case 2562:
case 1104:
case 1597:
case 3041:
case 925:
case 3676:
case 3011:
case 2510:
case 3282:
case 1598:
case 3990:
case 355:
case 3272:
case 3069:
case 935:
case 2470:
case 4060:
case 479:
case 1680:
case 3382:
case 3372:
case 1039:
case 464:
case 2858:
case 885:
case 2009:
case 3675:
case 2778:
case 2788:
case 2857:
case 3653:
case 635:
case 2659:
case 3003:
case 1459:
case 3822:
case 625:
case 972:
case 495:
case 1886:
case 3913:
case 3037:
case 1756:
case 1166:
case 3038:
case 1325:
case 271:
case 2949:
case 1225:
case 274:
case 3880:
case 3136:
case 3112:
case 2674:
case 1326:
case 1773:
case 2684:
case 523:
case 269:
case 1755:
case 1875:
case 3458:
case 533:
case 3135:
case 3901:
case 1226:
case 2422:
case 1544:
case 73:
case 702:
case 367:
case 2922:
case 3556:
case 3401:
case 1550:
case 3958:
case 1984:
case 3303:
case 2123:
case 97:
case 403:
case 943:
case 1799:
case 2209:
case 3369:
case 1649:
case 2263:
case 67:
case 1619:
case 2449:
case 3211:
case 3443:
case 1848:
case 3072:
case 2589:
case 3744:
case 2363:
case 445:
case 2890:
case 905:
case 187:
case 3797:
case 1495:
case 188:
case 3798:
case 4029:
case 2695:
case 732:
case 2521:
case 1127:
case 2696:
case 1267:
case 3337:
case 2554:
case 1496:
case 3819:
case 1702:
case 787:
case 788:
case 3238:
case 122:
case 3647:
case 716:
case 3618:
case 1831:
case 2843:
case 2715:
case 1363:
case 3233:
case 2339:
case 465:
case 3431:
case 1449:
case 2661:
case 3024:
case 1263:
case 2649:
case 940:
case 621:
case 354:
case 2974:
case 594:
case 2984:
case 299:
case 3051:
case 2550:
case 348:
case 3895:
case 3494:
case 3601:
case 4052:
case 1715:
case 3418:
case 618:
case 1813:
case 617:
case 836:
case 1745:
case 3976:
case 1292:
case 2702:
case 3588:
case 1970:
case 1696:
case 3587:
case 826:
case 3577:
case 2025:
case 232:
case 500:
case 310:
case 3975:
case 3308:
case 3985:
case 491:
case 9:
case 494:
case 3307:
case 1521:
case 1732:
case 1716:
case 918:
case 275:
case 1695:
case 3208:
case 2894:
case 288:
case 2495:
case 287:
case 723:
case 1473:
case 1483:
case 1854:
case 3167:
case 3878:
case 764:
case 3888:
case 1455:
case 99:
case 1012:
case 2683:
case 3168:
case 3758:
case 2655:
case 4039:
case 656:
case 2531:
case 1543:
case 3689:
case 3030:
case 1371:
case 230:
case 312:
case 3066:
case 2656:
case 3944:
case 3328:
case 258:
case 241:
case 3065:
case 3228:
case 164:
case 69:
case 2006:
case 549:
case 161:
case 1821:
case 3227:
case 779:
case 244:
case 2946:
case 2477:
case 4067:
case 2478:
case 1687:
case 2916:
case 2932:
case 42:
case 1889:
case 3004:
case 1141:
case 2133:
case 1879:
case 195:
case 3998:
case 402:
case 1169:
case 942:
case 2548:
case 2915:
case 3595:
case 2780:
case 1329:
case 2064:
case 449:
case 2850:
case 381:
case 3621:
case 720:
case 144:
case 1352:
case 3650:
case 2821:
case 1006:
case 4009:
case 569:
case 223:
case 1594:
case 158:
case 3000:
case 2501:
case 2456:
case 1252:
case 2035:
case 1108:
case 1656:
case 3993:
case 813:
case 3489:
case 758:
case 2381:
case 1005:
case 2371:
case 2513:
case 1531:
case 1722:
case 2137:
case 2281:
case 1655:
case 2036:
case 1683:
case 2784:
case 2012:
case 2774:
case 1673:
case 2455:
case 3519:
case 2042:
case 571:
case 4063:
case 2854:
case 3192:
case 2473:
case 1064:
case 3421:
case 2329:
case 469:
case 1780:
case 3323:
case 1945:
case 3776:
case 662:
case 3786:
case 2103:
case 1548:
case 3940:
case 3962:
case 2759:
case 2590:
case 3091:
case 295:
case 2879:
case 962:
case 3910:
case 1133:
case 1518:
case 3454:
case 1916:
case 1478:
case 471:
case 4092:
case 1487:
case 1946:
case 3121:
case 1085:
case 750:
case 137:
case 2301:
case 3409:
case 1394:
case 2403:
case 782:
case 1603:
case 128:
case 2201:
case 127:
case 2411:
case 2243:
case 3361:
case 1076:
case 3319:
case 1086:
case 1734:
case 182:
case 3349:
case 3838:
case 728:
case 1669:
case 2441:
case 1188:
case 3261:
case 2343:
case 3070:
case 3639:
case 2581:
case 738:
case 737:
case 2313:
case 3463:
case 2571:
case 3080:
case 3249:
case 1868:
case 2058:
case 4021:
case 3523:
case 3705:
case 2608:
case 860:
case 2156:
case 1408:
case 2730:
case 3022:
case 1700:
case 2290:
case 3189:
case 1247:
case 2972:
case 1637:
case 1218:
case 2438:
case 87:
case 3869:
case 362:
case 3811:
case 2437:
case 4054:
case 1318:
case 2155:
case 1317:
case 2183:
case 3492:
case 1924:
case 1348:
case 886:
case 250:
case 1313:
case 1581:
case 2331:
case 2178:
case 39:
case 753:
case 2188:
case 636:
case 1892:
case 818:
case 2734:
case 2641:
case 2086:
case 912:
case 1243:
case 2231:
case 2552:
case 228:
case 926:
case 612:
case 356:
case 936:
case 4050:
case 2085:
case 1920:
case 2348:
case 681:
case 1183:
case 3296:
case 3467:
case 834:
case 1155:
case 831:
case 3692:
case 1390:
case 684:
case 2318:
case 2638:
case 2248:
case 863:
case 3396:
case 2637:
case 342:
case 821:
case 2408:
case 1607:
case 2407:
case 1529:
case 3295:
case 1057:
case 3742:
case 3395:
case 1058:
case 3084:
case 3712:
case 3736:
case 1991:
case 2904:
case 1062:
case 766:
case 1289:
case 4031:
case 48:
case 3681:
case 3046:
case 2539:
case 3016:
case 1389:
case 1563:
case 321:
case 842:
case 2250:
case 2427:
case 363:
case 3964:
case 324:
case 948:
case 408:
case 2350:
case 947:
case 3015:
case 246:
case 334:
case 3452:
case 2195:
case 166:
case 2930:
case 3387:
case 4048:
case 3377:
case 2966:
case 1093:
case 3388:
case 3378:
case 280:
case 856:
case 2568:
case 1751:
case 3288:
case 1161:
case 1119:
case 1254:
case 783:
case 2623:
case 1724:
case 3906:
case 610:
case 3:
case 2965:
case 183:
case 508:
case 2044:
case 2852:
case 3507:
case 89:
case 386:
case 2014:
case 1195:
case 2829:
case 967:
case 2934:
case 146:
case 3503:
case 3652:
case 1350:
case 4001:
case 3356:
case 862:
case 37:
case 2628:
case 2509:
case 3002:
case 3823:
case 1720:
case 2389:
case 2379:
case 360:
case 3283:
case 4043:
case 3190:
case 3541:
case 1097:
case 2040:
case 667:
case 746:
case 668:
case 2010:
case 576:
case 4013:
case 1098:
case 3355:
case 515:
case 305:
case 1014:
case 1782:
case 1772:
case 1852:
case 3935:
case 283:
case 2423:
case 2724:
case 613:
case 2254:
case 2119:
case 2161:
case 2751:
case 1568:
case 3942:
case 2871:
case 2881:
case 2149:
case 3143:
case 3537:
case 1966:
case 2354:
case 3113:
case 3538:
case 1430:
case 2210:
case 2666:
case 1298:
case 2708:
case 3582:
case 325:
case 2089:
case 1466:
case 2079:
case 2262:
case 1297:
case 3891:
case 1398:
case 335:
case 3055:
case 3073:
case 2310:
case 719:
case 3412:
case 3436:
case 1050:
case 1864:
case 3202:
case 3157:
case 2923:
case 1174:
case 3606:
case 1184:
case 453:
case 119:
case 3768:
case 2665:
case 3158:
case 1737:
case 3435:
case 2122:
case 3834:
case 3929:
case 3302:
case 86:
case 1805:
case 1404:
case 3399:
case 796:
case 1691:
case 2293:
case 2180:
case 2812:
case 1525:
case 2054:
case 2860:
case 3981:
case 3520:
case 3664:
case 3739:
case 1806:
case 2733:
case 1741:
case 1634:
case 3800:
case 2434:
case 1214:
case 1159:
case 1769:
case 1526:
case 2835:
case 1711:
case 1400:
case 873:
case 3245:
case 3635:
case 2738:
case 84:
case 427:
case 2737:
case 219:
case 3345:
case 514:
case 2174:
case 304:
case 4053:
case 2465:
case 511:
case 3315:
case 438:
case 3551:
case 4085:
case 4075:
case 989:
case 1362:
case 3232:
case 3660:
case 689:
case 3642:
case 3524:
case 2397:
case 1310:
case 3612:
case 3636:
case 839:
case 4076:
case 1240:
case 4086:
case 3332:
case 1079:
case 1089:
case 3346:
case 1708:
case 482:
case 1666:
case 1210:
case 2430:
case 829:
case 2711:
case 3952:
case 2159:
case 2214:
case 1434:
case 296:
case 527:
case 2244:
case 2741:
case 2634:
case 1733:
case 2314:
case 2927:
case 3865:
case 3763:
case 538:
case 2928:
case 3175:
case 2344:
case 1842:
case 3088:
case 1054:
case 1170:
case 1812:
case 3709:
case 550:
case 3176:
case 3830:
case 697:
case 1293:
case 3186:
case 2691:
case 2404:
case 2805:
case 3359:
case 3565:
case 2506:
case 2451:
case 61:
case 2253:
case 2275:
case 1651:
case 3114:
case 1535:
case 1001:
case 2375:
case 208:
case 2094:
case 906:
case 890:
case 606:
case 1482:
case 1472:
case 2276:
case 2031:
case 1043:
case 392:
case 3566:
case 1937:
case 1560:
case 3968:
case 2723:
case 1624:
case 2376:
case 1542:
case 1512:
case 1536:
case 3771:
case 329:
case 1258:
case 3781:
case 1420:
case 3284:
case 959:
case 2620:
case 1102:
case 3374:
case 2145:
case 1903:
case 3384:
case 4014:
case 715:
case 2115:
case 1357:
case 3504:
case 2018:
case 1911:
case 176:
case 804:
case 3198:
case 2017:
case 452:
case 115:
case 2933:
case 1941:
case 3939:
case 2132:
case 34:
case 1727:
case 480:
case 373:
case 1728:
case 3270:
case 1424:
case 18:
case 1825:
case 2512:
case 3019:
case 2624:
case 1723:
case 2560:
case 3061:
case 2937:
case 1672:
case 708:
case 1505:
case 1682:
case 2938:
case 4062:
case 1031:
case 1276:
case 2472:
case 893:
case 2482:
case 1286:
case 3193:
case 1353:
case 1908:
case 108:
case 3500:
case 2001:
case 1826:
case 466:
case 1285:
case 1275:
case 78:
case 583:
case 1146:
case 36:
case 872:
case 3963:
case 2727:
case 1132:
case 2941:
case 3110:
case 3872:
case 1048:
case 3882:
case 977:
case 215:
case 2090:
case 3162:
case 3591:
case 1047:
case 3140:
case 4093:
case 1115:
case 3534:
case 685:
case 3222:
case 2903:
case 678:
case 3626:
case 1620:
case 1564:
case 825:
case 483:
case 2420:
case 2258:
case 2157:
case 101:
case 1315:
case 2767:
case 2202:
case 1792:
case 2158:
case 2768:
case 3923:
case 104:
case 876:
case 2302:
case 3400:
case 0:
case 2056:
case 272:
case 2572:
case 562:
case 1346:
case 2582:
case 3210:
case 3666:
case 1405:
case 3707:
case 1332:
case 3630:
case 3079:
case 3089:
case 2083:
case 1636:
case 2460:
case 2073:
case 235:
case 1660:
case 2412:
case 2436:
case 3340:
case 1524:
case 704:
case 969:
case 1763:
case 1185:
case 2520:
case 1175:
case 2739:
case 1464:
case 1865:
case 1952:
case 3434:
case 2399:
case 462:
case 1830:
case 3293:
case 3170:
case 3812:
case 1709:
case 2299:
case 3836:
case 971:
case 3180:
case 190:
case 1088:
case 1078:
case 3860:
case 3054:
case 3397:
case 2642:
case 49:
case 2216:
case 1436:
case 2232:
case 3398:
case 2246:
case 1460:
case 2612:
case 1083:
case 2636:
case 2316:
case 2332:
case 3297:
case 2405:
case 542:
case 1582:
case 2346:
case 1056:
case 2245:
case 1435:
case 3600:
case 204:
case 3174:
case 319:
case 509:
case 3050:
case 1202:
case 2792:
case 201:
case 3465:
case 1157:
case 2078:
case 2088:
case 290:
case 35:
case 1299:
case 2709:
case 2077:
case 2087:
case 3691:
case 3703:
case 2186:
case 93:
case 902:
case 2176:
case 3805:
case 3404:
case 1399:
case 3214:
case 88:
case 3769:
case 2952:
case 3526:
case 3741:
case 3244:
case 396:
case 4084:
case 409:
case 3806:
case 1739:
case 2175:
case 1520:
case 1664:
case 2153:
case 62:
case 3276:
case 3286:
case 1370:
case 2729:
case 3505:
case 3682:
case 1019:
case 3723:
case 3376:
case 440:
case 1992:
case 1280:
case 2967:
case 3825:
case 3506:
case 424:
case 2565:
case 2359:
case 463:
case 3275:
case 3253:
case 1820:
case 3826:
case 2259:
case 2114:
case 665:
case 4015:
case 3094:
case 3385:
case 308:
case 517:
case 2504:
case 3933:
case 1110:
case 819:
case 3048:
case 1882:
case 2198:
case 3017:
case 24:
case 540:
case 2824:
case 691:
case 3116:
case 1625:
case 16:
case 273:
case 1963:
case 524:
case 170:
case 4:
case 991:
case 1322:
case 1909:
case 2095:
case 1626:
case 534:
case 3145:
case 3115:
case 531:
case 1534:
case 1222:
case 2500:
case 1114:
case 3535:
case 2820:
case 3651:
case 1565:
case 2049:
case 3536:
case 2992:
case 2270:
case 603:
case 3542:
case 3013:
case 405:
case 2370:
case 945:
case 192:
case 1530:
case 3938:
case 2222:
case 2534:
case 3357:
case 2626:
case 3903:
case 139:
case 1851:
case 2322:
case 3102:
case 129:
case 1771:
case 3258:
case 57:
case 3420:
case 1274:
case 74:
case 2963:
case 173:
case 560:
case 3728:
case 2625:
case 1939:
case 729:
case 1824:
case 3727:
case 14:
case 1198:
case 505:
case 2110:
case 3911:
case 2140:
case 2752:
case 2591:
case 3633:
case 633:
case 2361:
case 3213:
case 425:
case 1925:
case 19:
case 2764:
case 1663:
case 979:
case 2219:
case 1439:
case 4073:
case 4083:
case 2463:
case 2080:
case 661:
case 2070:
case 435:
case 4055:
case 3581:
case 353:
case 79:
case 3920:
case 679:
case 1527:
case 3301:
case 4056:
case 3201:
case 1807:
case 3438:
case 3972:
case 2189:
case 1833:
case 2179:
case 3290:
case 3437:
case 1735:
case 262:
case 995:
case 1396:
case 709:
case 1468:
case 2667:
case 3173:
case 1296:
case 3183:
case 2706:
case 1467:
case 2668:
case 3765:
case 3155:
case 109:
case 1736:
case 1712:
case 3809:
case 1084:
case 2523:
case 3057:
case 1150:
case 1760:
case 493:
case 3766:
case 3608:
case 3730:
case 2926:
case 630:
case 3294:
case 3791:
case 327:
case 2059:
case 958:
case 3075:
case 337:
case 2527:
case 3394:
case 941:
case 401:
case 620:
case 852:
case 1639:
case 1070:
case 1080:
case 1463:
case 350:
case 3187:
case 3177:
case 3868:
case 644:
case 2439:
case 1219:
case 920:
case 1764:
case 590:
case 3188:
case 1261:
case 3178:
case 3331:
case 2925:
case 1349:
case 3611:
case 657:
case 3433:
case 1361:
case 3076:
case 1319:
case 3086:
case 3408:
case 1803:
case 2295:
case 3407:
case 2760:
case 1523:
case 501:
case 2084:
case 504:
case 2074:
case 314:
case 3951:
case 2395:
case 3317:
case 1668:
case 2467:
case 1492:
case 2296:
case 4077:
case 3348:
case 3318:
case 1667:
case 2468:
case 2692:
case 4088:
case 846:
case 2396:
case 1869:
case 162:
case 2735:
case 1811:
case 3700:
case 1841:
case 242:
case 3218:
case 3637:
case 760:
case 1002:
case 221:
case 143:
case 224:
case 1356:
case 2964:
case 529:
case 17:
case 1725:
case 1503:
case 346:
case 2015:
case 3350:
case 705:
case 2452:
case 234:
case 1373:
case 1511:
case 1383:
case 814:
case 3098:
case 2117:
case 811:
case 2147:
case 492:
case 1190:
case 3097:
case 1541:
case 2533:
case 573:
case 2671:
case 2046:
case 1255:
case 3539:
case 743:
case 1273:
case 1283:
case 699:
case 54:
case 2016:
case 3965:
case 2827:
case 2:
case 60:
case 3623:
case 632:
case 429:
case 882:
case 2194:
case 3852:
case 916:
case 1429:
case 622:
case 975:
case 1101:
case 217:
case 218:
case 3782:
case 3014:
case 2508:
case 987:
case 439:
case 988:
case 850:
case 286:
case 2377:
case 687:
case 352:
case 688:
case 2378:
case 1143:
case 2388:
case 1537:
case 837:
case 838:
case 473:
case 1960:
case 1099:
case 1942:
case 380:
case 2287:
case 3567:
case 827:
case 1936:
case 1912:
case 44:
case 932:
case 90:
case 828:
case 2288:
case 4019:
case 3563:
case 2471:
case 4049:
case 2273:
case 721:
case 1046:
case 2255:
case 1681:
case 260:
case 1671:
case 3040:
case 1118:
case 2190:
case 3062:
case 1147:
case 205:
case 1117:
case 2383:
case 3010:
case 2511:
case 2726:
case 3934:
case 3829:
case 1015:
case 131:
case 2503:
case 27:
case 163:
case 570:
case 1964:
case 3627:
case 243:
case 121:
case 2002:
case 3751:
case 1278:
case 3161:
case 3254:
case 3149:
case 3881:
case 1287:
case 3871:
case 2942:
case 2099:
case 3093:
case 1905:
case 2143:
case 1131:
case 2538:
case 1387:
case 853:
case 186:
case 1629:
case 1508:
case 117:
case 2101:
case 3423:
case 470:
case 383:
case 1906:
case 1:
case 1827:
case 2583:
case 751:
case 2573:
case 2341:
case 1333:
case 3263:
case 1613:
case 2082:
case 585:
case 1431:
case 2443:
case 748:
case 1643:
case 577:
case 267:
case 2694:
case 1793:
case 1895:
case 2129:
case 1587:
case 3696:
case 1577:
case 2181:
case 2338:
case 110:
case 1588:
case 3292:
case 3970:
case 3554:
case 2617:
case 864:
case 485:
case 823:
case 2648:
case 3813:
case 2618:
case 3392:
case 2647:
case 1448:
case 477:
case 861:
case 1152:
case 1207:
case 1710:
case 3695:
case 2798:
case 1307:
case 3716:
case 3732:
case 983:
case 1975:
case 3746:
case 1308:
case 213:
case 1985:
case 1958:
case 2051:
case 1303:
case 3984:
case 3974:
case 2494:
case 406:
case 1129:
case 946:
case 1556:
case 247:
case 1401:
case 1694:
case 2601:
case 168:
case 1744:
case 3818:
case 2643:
case 2233:
case 3847:
case 1443:
case 1211:
case 1082:
case 3848:
case 767:
case 1072:
case 768:
case 1341:
case 2024:
case 3661:
case 41:
case 1369:
case 3239:
case 1555:
case 2896:
case 1311:
case 1573:
case 2985:
case 113:
case 3128:
case 2975:
case 680:
case 2208:
case 506:
case 820:
case 387:
case 3495:
case 652:
case 388:
case 2740:
case 2152:
case 3959:
case 2690:
case 1237:
case 2447:
case 1648:
case 2418:
case 3368:
case 1861:
case 858:
case 2578:
case 2588:
case 3496:
case 3268:
case 51:
case 3025:
case 1849:
case 2328:
case 598:
case 3108:
case 80:
case 3656:
case 927:
case 2327:
case 3107:
case 3594:
case 2914:
case 822:
case 3006:
case 937:
case 2450:
case 2228:
case 2065:
case 341:
case 344:
case 1650:
case 2227:
case 650:
case 2757:
case 2167:
case 1561:
case 2887:
case 320:
case 638:
case 1549:
case 3683:
case 3673:
case 2689:
case 3722:
case 2066:
case 1479:
case 1489:
case 627:
case 212:
case 3005:
case 2595:
case 498:
case 1856:
case 3945:
case 1786:
case 4007:
case 589:
case 3770:
case 911:
case 3780:
case 2621:
case 914:
case 1223:
case 3850:
case 3064:
case 2654:
case 614:
case 3477:
case 1883:
case 3932:
case 3488:
case 899:
case 3133:
case 1940:
case 3517:
case 3138:
case 3371:
case 3381:
case 2489:
case 1066:
case 4041:
case 1689:
case 3543:
case 1030:
case 3774:
case 1877:
case 1168:
case 3271:
case 3281:
case 1887:
case 736:
case 3473:
case 3854:
case 1878:
case 1757:
case 3455:
case 953:
case 1227:
case 3821:
case 1065:
case 1450:
case 364:
case 3501:
case 4003:
case 1327:
case 3035:
case 333:
case 1944:
case 1328:
case 2962:
case 555:
case 1997:
case 3889:
case 3141:
case 1004:
case 3879:
case 395:
case 2091:
case 1998:
case 3677:
case 2855:
case 781:
case 3678:
case 3688:
case 2785:
case 2163:
case 1654:
case 181:
case 1621:
case 3902:
case 2109:
case 2421:
case 3103:
case 2786:
case 2034:
case 2323:
case 3229:
case 1595:
case 3645:
case 1365:
case 874:
case 106:
case 1559:
case 3235:
case 2747:
case 467:
case 871:
case 3402:
case 3796:
case 1027:
case 2300:
case 3632:
case 1330:
case 3242:
case 2954:
case 3236:
case 2570:
case 3342:
case 2410:
case 1230:
case 3360:
case 1497:
case 2698:
case 4072:
case 1266:
case 3312:
case 2614:
case 1845:
case 2522:
case 567:
case 2731:
case 2644:
case 568:
case 2234:
case 676:
case 615:
case 413:
case 3558:
case 1950:
case 2334:
case 3557:
case 2023:
case 2802:
case 4020:
case 3955:
case 2391:
case 1304:
case 3983:
case 3499:
case 1846:
case 915:
case 3862:
case 2291:
case 277:
case 3840:
case 278:
case 2493:
case 3182:
case 2979:
case 3172:
case 3810:
case 608:
case 2266:
case 607:
case 1440:
case 365:
case 3205:
case 2230:
case 849:
case 2498:
case 3586:
case 1580:
case 300:
case 2366:
case 3446:
case 3977:
case 3987:
case 2330:
case 1300:
case 451:
case 802:
case 3206:
case 454:
case 2028:
case 2265:
case 1921:
case 1718:
case 3844:
case 1747:
case 3445:
case 3052:
case 2559:
case 3415:
case 1717:
case 82:
case 1748:
case 2126:
case 185:
case 3898:
case 1989:
case 1979:
case 1493:
case 178:
case 1291:
case 177:
case 1794:
case 2204:
case 2846:
case 2816:
case 2832:
case 3151:
case 1023:
case 3264:
case 391:
case 554:
case 2574:
case 259:
case 785:
case 3364:
case 1234:
case 1644:
case 2743:
case 2815:
case 778:
case 2845:
case 777:
case 2713:
case 1382:
case 1372:
case 3670:
case 3039:
case 619:
case 3996:
case 1011:
case 4066:
case 2486:
case 1282:
case 2947:
case 155:
case 1069:
case 2476:
case 4030:
case 2917:
case 3104:
case 2033:
case 1676:
case 2324:
case 3459:
case 3995:
case 426:
case 1675:
case 2251:
case 1685:
case 2164:
case 919:
case 1653:
case 2475:
case 2485:
case 2874:
case 584:
case 436:
case 2453:
case 2884:
case 3068:
case 1599:
case 3225:
case 1880:
case 1136:
case 3067:
case 1142:
case 95:
case 3756:
case 1038:
case 1943:
case 302:
case 2931:
case 512:
case 3886:
case 3876:
case 1913:
case 2007:
case 3544:
case 526:
case 2008:
case 297:
case 3226:
case 800:
case 996:
case 2994:
case 1220:
case 481:
case 3484:
case 3853:
case 65:
case 2657:
case 3783:
case 3165:
case 536:
case 1457:
case 1884:
case 3009:
case 3858:
case 1485:
case 189:
case 1475:
case 2653:
case 1164:
case 1251:
case 2502:
case 1351:
case 2003:
case 2676:
case 1324:
case 2686:
case 1917:
case 3562:
case 3191:
case 1476:
case 2069:
case 2272:
case 255:
case 2282:
case 3510:
case 1721:
case 1532:
case 1224:
case 3480:
case 2382:
case 1658:
case 369:
case 1106:
case 1657:
case 2220:
case 1859:
case 2901:
case 2135:
case 1008:
case 1789:
case 4034:
case 3593:
case 797:
case 1105:
case 3092:
case 3949:
case 371:
case 2870:
case 3919:
case 2599:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753797602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,];
var gg_b = "1753797602/";

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
