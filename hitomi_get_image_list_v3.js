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
case 2068:
case 3479:
case 1122:
case 1097:
case 406:
case 3630:
case 3662:
case 689:
case 371:
case 791:
case 1317:
case 769:
case 2094:
case 967:
case 3094:
case 2369:
case 2662:
case 185:
case 2630:
case 1482:
case 2066:
case 900:
case 1522:
case 1928:
case 3499:
case 1984:
case 700:
case 3416:
case 39:
case 77:
case 3569:
case 2169:
case 3415:
case 767:
case 1517:
case 1244:
case 1117:
case 1251:
case 1955:
case 3074:
case 3987:
case 2569:
case 2114:
case 1352:
case 1659:
case 29:
case 2247:
case 528:
case 2499:
case 1629:
case 1322:
case 72:
case 1228:
case 1284:
case 1726:
case 1210:
case 32:
case 3818:
case 503:
case 2140:
case 971:
case 138:
case 3787:
case 524:
case 2787:
case 1255:
case 1951:
case 2411:
case 367:
case 1921:
case 574:
case 2540:
case 1728:
case 22:
case 636:
case 3899:
case 4072:
case 2820:
case 1710:
case 300:
case 1784:
case 2818:
case 1758:
case 3816:
case 1403:
case 481:
case 802:
case 1882:
case 805:
case 616:
case 1442:
case 3340:
case 291:
case 269:
case 145:
case 118:
case 2340:
case 391:
case 771:
case 2061:
case 369:
case 3879:
case 4092:
case 656:
case 1839:
case 3222:
case 1433:
case 836:
case 52:
case 847:
case 4035:
case 151:
case 3344:
case 160:
case 3363:
case 778:
case 57:
case 2351:
case 2363:
case 111:
case 2321:
case 2473:
case 3722:
case 2252:
case 1347:
case 374:
case 4038:
case 224:
case 3824:
case 856:
case 2445:
case 1147:
case 3521:
case 2121:
case 3448:
case 3481:
case 2151:
case 1769:
case 2144:
case 3544:
case 978:
case 2446:
case 2563:
case 2551:
case 3446:
case 1857:
case 3144:
case 2448:
case 1940:
case 3121:
case 2521:
case 1827:
case 928:
case 3886:
case 2493:
case 2854:
case 1623:
case 1547:
case 488:
case 2841:
case 1661:
case 1714:
case 2454:
case 3184:
case 571:
case 2584:
case 3556:
case 3110:
case 3486:
case 2510:
case 903:
case 2893:
case 2441:
case 448:
case 3128:
case 924:
case 2126:
case 1914:
case 11:
case 2488:
case 2600:
case 2881:
case 1457:
case 1668:
case 3846:
case 1740:
case 3555:
case 3485:
case 1427:
case 2555:
case 3917:
case 889:
case 3697:
case 2525:
case 3125:
case 3881:
case 998:
case 2846:
case 1969:
case 1187:
case 3070:
case 3424:
case 412:
case 15:
case 1409:
case 2556:
case 3510:
case 1665:
case 3893:
case 3454:
case 3584:
case 415:
case 2128:
case 3441:
case 394:
case 3356:
case 3326:
case 378:
case 1387:
case 1004:
case 2090:
case 3325:
case 228:
case 3355:
case 3059:
case 2677:
case 328:
case 2355:
case 2059:
case 2029:
case 3358:
case 2952:
case 2326:
case 3873:
case 1412:
case 2356:
case 3310:
case 3007:
case 531:
case 2839:
case 509:
case 218:
case 662:
case 1023:
case 782:
case 665:
case 1053:
case 2442:
case 169:
case 245:
case 2882:
case 3839:
case 934:
case 1820:
case 1818:
case 2784:
case 2710:
case 734:
case 1850:
case 560:
case 2758:
case 4089:
case 2403:
case 1787:
case 338:
case 2944:
case 507:
case 2951:
case 2255:
case 1540:
case 3755:
case 2755:
case 3225:
case 1140:
case 1815:
case 985:
case 238:
case 3255:
case 2725:
case 425:
case 3403:
case 2284:
case 896:
case 3710:
case 511:
case 954:
case 3784:
case 3077:
case 2352:
case 1114:
case 1247:
case 3803:
case 1499:
case 3910:
case 1037:
case 2244:
case 683:
case 2955:
case 3721:
case 2251:
case 1569:
case 958:
case 3744:
case 3607:
case 2221:
case 3763:
case 3751:
case 3034:
case 2744:
case 53:
case 3221:
case 2763:
case 3117:
case 1074:
case 3955:
case 2721:
case 495:
case 3629:
case 1420:
case 334:
case 1418:
case 1747:
case 2077:
case 3659:
case 3352:
case 2803:
case 3926:
case 3097:
case 1630:
case 3152:
case 3439:
case 254:
case 1479:
case 2522:
case 3122:
case 3000:
case 3317:
case 1369:
case 121:
case 758:
case 745:
case 55:
case 963:
case 3842:
case 1094:
case 3522:
case 2122:
case 1314:
case 1380:
case 2439:
case 3674:
case 1952:
case 626:
case 909:
case 2833:
case 1634:
case 2412:
case 711:
case 1059:
case 1355:
case 3004:
case 2637:
case 1325:
case 1029:
case 760:
case 3637:
case 2387:
case 2004:
case 883:
case 680:
case 128:
case 534:
case 1677:
case 1873:
case 1328:
case 676:
case 3412:
case 707:
case 33:
case 3694:
case 1526:
case 907:
case 4083:
case 3914:
case 2409:
case 1158:
case 1845:
case 1184:
case 2665:
case 1486:
case 1110:
case 2062:
case 1556:
case 3740:
case 2666:
case 2030:
case 514:
case 951:
case 1525:
case 2187:
case 3587:
case 1125:
case 3969:
case 2668:
case 1070:
case 2587:
case 3666:
case 1848:
case 911:
case 2740:
case 2427:
case 3665:
case 3062:
case 1584:
case 582:
case 1441:
case 1424:
case 1488:
case 1600:
case 21:
case 585:
case 35:
case 1558:
case 2914:
case 3147:
case 2547:
case 2653:
case 2780:
case 2714:
case 1551:
case 1563:
case 1481:
case 1521:
case 331:
case 3940:
case 1885:
case 862:
case 4043:
case 3827:
case 1217:
case 865:
case 1446:
case 1144:
case 3857:
case 2769:
case 209:
case 3653:
case 3661:
case 93:
case 3714:
case 518:
case 3780:
case 71:
case 1886:
case 3547:
case 1252:
case 1473:
case 73:
case 307:
case 1222:
case 3433:
case 124:
case 4076:
case 360:
case 640:
case 1321:
case 351:
case 198:
case 260:
case 1752:
case 4078:
case 1722:
case 2812:
case 3506:
case 3572:
case 450:
case 1490:
case 2998:
case 1532:
case 1189:
case 2508:
case 3616:
case 1967:
case 3995:
case 183:
case 1407:
case 3505:
case 2105:
case 2964:
case 2791:
case 387:
case 3791:
case 3964:
case 949:
case 3943:
case 2995:
case 1160:
case 2012:
case 3650:
case 1589:
case 2616:
case 3106:
case 2283:
case 3620:
case 3592:
case 3306:
case 3679:
case 1470:
case 2978:
case 1332:
case 3430:
case 3902:
case 3462:
case 1360:
case 3271:
case 3975:
case 749:
case 2771:
case 1024:
case 1088:
case 1935:
case 621:
case 2305:
case 2271:
case 2462:
case 1086:
case 1731:
case 716:
case 2976:
case 1682:
case 1085:
case 3308:
case 936:
case 3027:
case 3978:
case 2306:
case 256:
case 2702:
case 2278:
case 1236:
case 3276:
case 3202:
case 3778:
case 427:
case 249:
case 1349:
case 987:
case 2775:
case 3301:
case 1093:
case 669:
case 3775:
case 2301:
case 691:
case 46:
case 2971:
case 2202:
case 1081:
case 2778:
case 3702:
case 3830:
case 3776:
case 1048:
case 2298:
case 62:
case 1859:
case 3296:
case 2719:
case 3798:
case 874:
case 1113:
case 3764:
case 3991:
case 3611:
case 3501:
case 2243:
case 3101:
case 2501:
case 1073:
case 3243:
case 143:
case 347:
case 2295:
case 3033:
case 2804:
case 2798:
case 1603:
case 2983:
case 824:
case 336:
case 3298:
case 479:
case 1767:
case 2042:
case 2645:
case 1183:
case 202:
case 4058:
case 4084:
case 3913:
case 205:
case 3693:
case 1772:
case 2260:
case 3897:
case 1705:
case 869:
case 1866:
case 3760:
case 2646:
case 516:
case 2331:
case 3681:
case 3646:
case 556:
case 4025:
case 1868:
case 2760:
case 464:
case 2681:
case 1901:
case 1371:
case 2897:
case 3260:
case 3949:
case 1591:
case 2289:
case 3232:
case 549:
case 2693:
case 3042:
case 302:
case 1206:
case 1633:
case 196:
case 800:
case 3877:
case 3003:
case 1171:
case 1837:
case 536:
case 1391:
case 2877:
case 698:
case 3834:
case 547:
case 1383:
case 1011:
case 1398:
case 1176:
case 2367:
case 3538:
case 1102:
case 1020:
case 1175:
case 1018:
case 2477:
case 3135:
case 1343:
case 3477:
case 3535:
case 1016:
case 1395:
case 628:
case 180:
case 1575:
case 89:
case 176:
case 3536:
case 1612:
case 1178:
case 589:
case 2641:
case 468:
case 705:
case 3686:
case 2400:
case 2688:
case 2932:
case 3989:
case 1196:
case 1853:
case 821:
case 1195:
case 2249:
case 1543:
case 1627:
case 3749:
case 2335:
case 3497:
case 871:
case 3335:
case 1201:
case 3039:
case 1905:
case 1164:
case 3960:
case 1375:
case 1079:
case 4051:
case 1595:
case 4044:
case 3249:
case 3400:
case 3688:
case 2213:
case 2167:
case 1376:
case 1596:
case 3624:
case 3713:
case 1198:
case 1906:
case 1465:
case 3336:
case 2686:
case 1972:
case 3654:
case 1296:
case 1804:
case 1798:
case 3113:
case 2890:
case 1983:
case 1219:
case 2603:
case 3859:
case 2767:
case 2073:
case 596:
case 1991:
case 3549:
case 2149:
case 1743:
case 638:
case 663:
case 4017:
case 1264:
case 3073:
case 860:
case 1243:
case 807:
case 1796:
case 3767:
case 1298:
case 136:
case 1719:
case 2113:
case 2829:
case 404:
case 1202:
case 4022:
case 1778:
case 2736:
case 2093:
case 365:
case 3931:
case 3235:
case 1275:
case 362:
case 645:
case 3045:
case 3642:
case 3349:
case 2735:
case 149:
case 618:
case 262:
case 831:
case 2642:
case 2349:
case 3093:
case 2931:
case 3048:
case 1776:
case 473:
case 1902:
case 3639:
case 1430:
case 2389:
case 2682:
case 2085:
case 1976:
case 85:
case 614:
case 493:
case 1306:
case 3936:
case 3470:
case 1679:
case 1372:
case 3024:
case 1305:
case 1009:
case 3088:
case 3231:
case 2086:
case 1462:
case 3054:
case 1975:
case 1271:
case 2731:
case 682:
case 2360:
case 685:
case 762:
case 2024:
case 1771:
case 2088:
case 1057:
case 2936:
case 3938:
case 3389:
case 3682:
case 2459:
case 3532:
case 2132:
case 1506:
case 2429:
case 526:
case 965:
case 3560:
case 1012:
case 1615:
case 576:
case 283:
case 1964:
case 1105:
case 1943:
case 1998:
case 2490:
case 634:
case 1783:
case 3589:
case 3132:
case 1167:
case 419:
case 2609:
case 1213:
case 3853:
case 3196:
case 3494:
case 854:
case 2972:
case 1686:
case 3119:
case 2519:
case 2906:
case 3627:
case 3543:
case 2164:
case 882:
case 2201:
case 1685:
case 1082:
case 2466:
case 2595:
case 885:
case 3701:
case 3079:
case 2195:
case 3595:
case 2543:
case 3143:
case 1039:
case 3466:
case 2564:
case 490:
case 65:
case 3198:
case 2823:
case 1932:
case 3302:
case 1688:
case 1567:
case 2494:
case 2853:
case 437:
case 2861:
case 1624:
case 3596:
case 2396:
case 3176:
case 276:
case 2576:
case 2502:
case 3102:
case 1538:
case 583:
case 3578:
case 1136:
case 2992:
case 326:
case 2016:
case 1135:
case 3343:
case 2099:
case 280:
case 3018:
case 3575:
case 3437:
case 3016:
case 1535:
case 2050:
case 1477:
case 2364:
case 401:
case 2343:
case 3612:
case 1536:
case 2398:
case 3502:
case 2102:
case 1138:
case 2474:
case 1367:
case 439:
case 376:
case 3792:
case 3633:
case 2292:
case 1131:
case 780:
case 340:
case 1877:
case 2391:
case 1003:
case 660:
case 2571:
case 3391:
case 611:
case 1531:
case 240:
case 3383:
case 3292:
case 1913:
case 470:
case 1693:
case 609:
case 2708:
case 2453:
case 2583:
case 3183:
case 2206:
case 2894:
case 1760:
case 2901:
case 2205:
case 818:
case 1897:
case 3705:
case 1648:
case 842:
case 3591:
case 2191:
case 1949:
case 2866:
case 2705:
case 845:
case 3901:
case 1042:
case 420:
case 3708:
case 3272:
case 3461:
case 3583:
case 2772:
case 3423:
case 2706:
case 2651:
case 293:
case 2621:
case 1864:
case 1491:
case 723:
case 3207:
case 4085:
case 1523:
case 1647:
case 537:
case 1704:
case 1898:
case 3729:
case 1553:
case 3759:
case 2867:
case 2229:
case 3290:
case 1204:
case 866:
case 1153:
case 3229:
case 208:
case 3790:
case 519:
case 197:
case 1895:
case 3663:
case 393:
case 773:
case 3707:
case 973:
case 692:
case 3431:
case 695:
case 1262:
case 1471:
case 539:
case 1878:
case 557:
case 2836:
case 2:
case 1361:
case 2838:
case 3:
case 2270:
case 150:
case 904:
case 2431:
case 3397:
case 179:
case 3435:
case 3577:
case 1537:
case 2831:
case 3017:
case 1402:
case 7:
case 4073:
case 1365:
case 3436:
case 3534:
case 3438:
case 1394:
case 1368:
case 129:
case 2397:
case 1871:
case 1080:
case 2577:
case 1014:
case 3377:
case 2052:
case 177:
case 1566:
case 223:
case 2197:
case 2625:
case 4081:
case 373:
case 1194:
case 3467:
case 16:
case 3658:
case 2100:
case 3684:
case 2656:
case 3610:
case 1419:
case 3990:
case 2929:
case 4093:
case 3628:
case 3656:
case 1165:
case 708:
case 3334:
case 3929:
case 1498:
case 2658:
case 3100:
case 2500:
case 2467:
case 4046:
case 3022:
case 3625:
case 127:
case 586:
case 304:
case 1568:
case 2907:
case 2377:
case 3655:
case 1166:
case 3197:
case 959:
case 2405:
case 872:
case 3968:
case 3801:
case 875:
case 1489:
case 3408:
case 1559:
case 946:
case 2223:
case 3761:
case 1190:
case 2965:
case 3723:
case 2406:
case 1590:
case 1129:
case 440:
case 3472:
case 2504:
case 3104:
case 3406:
case 2723:
case 3261:
case 3253:
case 2614:
case 2408:
case 1432:
case 3223:
case 2968:
case 3669:
case 1460:
case 3362:
case 919:
case 496:
case 3405:
case 757:
case 957:
case 1026:
case 719:
case 939:
case 2562:
case 3162:
case 270:
case 901:
case 2530:
case 3130:
case 1055:
case 1652:
case 3974:
case 164:
case 3304:
case 1170:
case 2492:
case 2304:
case 2087:
case 1390:
case 746:
case 3530:
case 1028:
case 1084:
case 1307:
case 370:
case 3937:
case 1010:
case 3562:
case 2162:
case 737:
case 1977:
case 3737:
case 770:
case 70:
case 2237:
case 359:
case 219:
case 3892:
case 1051:
case 666:
case 1063:
case 1021:
case 786:
case 246:
case 593:
case 1734:
case 237:
case 319:
case 259:
case 3047:
case 2768:
case 2266:
case 476:
case 3268:
case 3805:
case 2640:
case 357:
case 217:
case 480:
case 3294:
case 2923:
case 2808:
case 1832:
case 301:
case 1700:
case 2794:
case 2953:
case 1889:
case 201:
case 3953:
case 3794:
case 4050:
case 4018:
case 2294:
case 3923:
case 2872:
case 2765:
case 2268:
case 239:
case 2766:
case 257:
case 317:
case 90:
case 1449:
case 970:
case 1297:
case 3768:
case 3266:
case 3495:
case 227:
case 730:
case 910:
case 2568:
case 2464:
case 2166:
case 797:
case 3566:
case 1377:
case 1597:
case 456:
case 1684:
case 3565:
case 3419:
case 1990:
case 2498:
case 64:
case 3496:
case 2594:
case 3194:
case 1658:
case 2374:
case 1626:
case 2496:
case 3883:
case 1959:
case 3165:
case 3904:
case 1334:
case 3498:
case 3166:
case 1655:
case 3464:
case 1197:
case 416:
case 123:
case 999:
case 3443:
case 327:
case 2495:
case 950:
case 2168:
case 2337:
case 3537:
case 229:
case 2368:
case 681:
case 436:
case 761:
case 3366:
case 1435:
case 1970:
case 3365:
case 3069:
case 3476:
case 3174:
case 3930:
case 3402:
case 2174:
case 2930:
case 1438:
case 2402:
case 2476:
case 2365:
case 3871:
case 2366:
case 997:
case 2962:
case 930:
case 2475:
case 1831:
case 3262:
case 261:
case 832:
case 1431:
case 2876:
case 1838:
case 3353:
case 4012:
case 2230:
case 1836:
case 1770:
case 2040:
case 513:
case 3730:
case 1:
case 487:
case 210:
case 3762:
case 3875:
case 927:
case 641:
case 2471:
case 2262:
case 399:
case 1835:
case 4027:
case 297:
case 852:
case 3843:
case 1207:
case 4057:
case 2895:
case 727:
case 855:
case 848:
case 2896:
case 2153:
case 3561:
case 2204:
case 533:
case 3523:
case 2123:
case 108:
case 1729:
case 3898:
case 2704:
case 2523:
case 1790:
case 68:
case 4009:
case 3204:
case 2561:
case 3161:
case 568:
case 489:
case 76:
case 606:
case 1663:
case 330:
case 193:
case 1707:
case 929:
case 1644:
case 2491:
case 812:
case 2864:
case 1621:
case 397:
case 2843:
case 841:
case 139:
case 3797:
case 2449:
case 3860:
case 213:
case 2297:
case 3832:
case 1765:
case 1872:
case 3200:
case 561:
case 2700:
case 2832:
case 1808:
case 3889:
case 1265:
case 1794:
case 3297:
case 1640:
case 137:
case 159:
case 615:
case 268:
case 190:
case 612:
case 3234:
case 146:
case 2734:
case 3051:
case 1892:
case 1274:
case 764:
case 2051:
case 1774:
case 530:
case 3277:
case 1047:
case 2028:
case 405:
case 56:
case 2010:
case 1162:
case 3056:
case 768:
case 2058:
case 4042:
case 120:
case 1304:
case 3025:
case 3329:
case 2390:
case 1974:
case 3359:
case 3055:
case 3652:
case 1130:
case 2055:
case 1530:
case 186:
case 2170:
case 3570:
case 264:
case 1492:
case 3390:
case 2329:
case 3058:
case 3028:
case 170:
case 1937:
case 3307:
case 3084:
case 3010:
case 2460:
case 933:
case 3107:
case 2507:
case 713:
case 2997:
case 3849:
case 579:
case 2129:
case 2590:
case 2813:
case 1723:
case 2370:
case 1753:
case 1994:
case 1761:
case 3900:
case 2559:
case 3432:
case 1330:
case 2529:
case 1261:
case 3997:
case 3617:
case 1966:
case 2849:
case 1405:
case 3507:
case 1669:
case 3631:
case 2381:
case 775:
case 392:
case 772:
case 1671:
case 3239:
case 3173:
case 2573:
case 1133:
case 801:
case 2049:
case 2345:
case 3739:
case 2782:
case 6:
case 3282:
case 141:
case 3348:
case 2942:
case 839:
case 3013:
case 722:
case 2346:
case 1887:
case 2146:
case 3546:
case 2451:
case 2463:
case 3181:
case 3825:
case 454:
case 925:
case 1215:
case 2421:
case 2548:
case 3148:
case 1691:
case 2828:
case 485:
case 2373:
case 1447:
case 1718:
case 2810:
case 3856:
case 1750:
case 2858:
case 1299:
case 3545:
case 482:
case 1683:
case 608:
case 18:
case 3858:
case 3145:
case 1716:
case 846:
case 3903:
case 1333:
case 3828:
case 1250:
case 3593:
case 3810:
case 2856:
case 3884:
case 972:
case 2855:
case 2148:
case 859:
case 3421:
case 3146:
case 975:
case 3444:
case 2825:
case 3451:
case 3463:
case 2181:
case 673:
case 2585:
case 3185:
case 1915:
case 1211:
case 995:
case 3851:
case 3863:
case 1092:
case 1695:
case 870:
case 3588:
case 14:
case 3458:
case 1916:
case 3703:
case 1999:
case 3541:
case 2141:
case 3428:
case 3484:
case 2154:
case 3554:
case 1619:
case 3410:
case 458:
case 1920:
case 1698:
case 2541:
case 3586:
case 1847:
case 2484:
case 3154:
case 2554:
case 2588:
case 2458:
case 3426:
case 3124:
case 2524:
case 2844:
case 2851:
case 604:
case 1643:
case 2185:
case 3455:
case 820:
case 3635:
case 3242:
case 1072:
case 275:
case 2982:
case 3939:
case 1005:
case 1602:
case 3060:
case 1512:
case 3341:
case 463:
case 3386:
case 1112:
case 2060:
case 2354:
case 1678:
case 2324:
case 3982:
case 2242:
case 375:
case 3385:
case 2635:
case 3089:
case 3742:
case 620:
case 3350:
case 3064:
case 1273:
case 3043:
case 1422:
case 3320:
case 2692:
case 2399:
case 144:
case 3318:
case 2579:
case 686:
case 3692:
case 1773:
case 2179:
case 3579:
case 766:
case 1182:
case 3316:
case 431:
case 3019:
case 3315:
case 2098:
case 3096:
case 670:
case 409:
case 1985:
case 2002:
case 2605:
case 2076:
case 3927:
case 2515:
case 2469:
case 3957:
case 3078:
case 411:
case 1293:
case 3116:
case 3480:
case 1745:
case 3414:
case 3518:
case 2075:
case 2379:
case 2120:
case 2599:
case 525:
case 3075:
case 3379:
case 1245:
case 3599:
case 2199:
case 3120:
case 2520:
case 1924:
case 451:
case 575:
case 2414:
case 1988:
case 3909:
case 2550:
case 3150:
case 1339:
case 2608:
case 2116:
case 2480:
case 1781:
case 2957:
case 3515:
case 1417:
case 1981:
case 3869:
case 2757:
case 639:
case 2440:
case 1948:
case 1817:
case 3257:
case 3111:
case 2511:
case 1754:
case 592:
case 2209:
case 1724:
case 8:
case 2880:
case 1788:
case 2814:
case 3071:
case 2709:
case 3880:
case 1786:
case 1224:
case 1288:
case 3440:
case 1342:
case 1946:
case 2869:
case 135:
case 659:
case 637:
case 112:
case 45:
case 690:
case 1142:
case 2212:
case 1852:
case 266:
case 3212:
case 1822:
case 184:
case 152:
case 1542:
case 155:
case 1242:
case 400:
case 3072:
case 3675:
case 122:
case 2357:
case 3006:
case 1032:
case 381:
case 125:
case 3512:
case 1636:
case 467:
case 1324:
case 1388:
case 2602:
case 2005:
case 1638:
case 2676:
case 2512:
case 2979:
case 3008:
case 1089:
case 281:
case 2006:
case 175:
case 2072:
case 42:
case 3915:
case 3127:
case 2643:
case 2711:
case 1821:
case 706:
case 544:
case 2698:
case 1541:
case 3999:
case 1428:
case 1484:
case 1186:
case 1410:
case 2918:
case 78:
case 2950:
case 34:
case 3509:
case 588:
case 1524:
case 3696:
case 491:
case 1703:
case 2916:
case 24:
case 2509:
case 1188:
case 4053:
case 1426:
case 3920:
case 1141:
case 2999:
case 4023:
case 1456:
case 1203:
case 2619:
case 1154:
case 3711:
case 3527:
case 2127:
case 1585:
case 627:
case 2211:
case 3487:
case 2157:
case 3557:
case 1425:
case 2092:
case 3911:
case 1148:
case 3691:
case 206:
case 1855:
case 2715:
case 1546:
case 4068:
case 1825:
case 2220:
case 2716:
case 1545:
case 4094:
case 515:
case 2218:
case 2333:
case 3683:
case 1826:
case 2250:
case 2799:
case 512:
case 3447:
case 1856:
case 1828:
case 1810:
case 1593:
case 2718:
case 1884:
case 2447:
case 2299:
case 555:
case 2750:
case 3716:
case 471:
case 1903:
case 2887:
case 3715:
case 697:
case 1463:
case 1451:
case 630:
case 2911:
case 584:
case 2691:
case 306:
case 1421:
case 1942:
case 241:
case 610:
case 1631:
case 1782:
case 1049:
case 2779:
case 3001:
case 1173:
case 1573:
case 2001:
case 3533:
case 1013:
case 4037:
case 699:
case 1348:
case 341:
case 650:
case 252:
case 633:
case 2542:
case 255:
case 166:
case 2822:
case 2973:
case 744:
case 384:
case 506:
case 2303:
case 1212:
case 348:
case 215:
case 355:
case 668:
case 1311:
case 352:
case 212:
case 2142:
case 2342:
case 3817:
case 1257:
case 3285:
case 3981:
case 235:
case 988:
case 2946:
case 1227:
case 3724:
case 2103:
case 2241:
case 428:
case 944:
case 3754:
case 3613:
case 2031:
case 541:
case 3224:
case 2993:
case 2754:
case 2741:
case 2286:
case 3103:
case 2724:
case 3254:
case 4059:
case 1814:
case 2788:
case 3945:
case 1880:
case 494:
case 810:
case 2817:
case 2948:
case 3649:
case 1440:
case 613:
case 1727:
case 2781:
case 474:
case 915:
case 1115:
case 1957:
case 1078:
case 3281:
case 2417:
case 732:
case 581:
case 2954:
case 2793:
case 1520:
case 1608:
case 1116:
case 2035:
case 3382:
case 2293:
case 2689:
case 1516:
case 2382:
case 1150:
case 1909:
case 2986:
case 1118:
case 984:
case 1606:
case 3941:
case 1599:
case 3245:
case 1605:
case 2281:
case 3246:
case 952:
case 3781:
case 403:
case 2746:
case 955:
case 948:
case 1515:
case 3660:
case 1469:
case 54:
case 755:
case 1098:
case 1320:
case 3422:
case 1233:
case 1179:
case 784:
case 3582:
case 2182:
case 1064:
case 1043:
case 2273:
case 3539:
case 1316:
case 3182:
case 86:
case 1692:
case 2422:
case 1579:
case 3067:
case 715:
case 935:
case 288:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745586001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,];
var gg_b = "1745586001/";

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
