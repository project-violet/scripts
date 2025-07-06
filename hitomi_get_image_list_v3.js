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
case 1540:
case 2516:
case 912:
case 1944:
case 452:
case 1982:
case 2855:
case 968:
case 1115:
case 3745:
case 128:
case 3054:
case 1675:
case 895:
case 423:
case 540:
case 3008:
case 1661:
case 1184:
case 1223:
case 607:
case 1533:
case 4060:
case 2238:
case 1749:
case 791:
case 205:
case 3311:
case 2716:
case 1624:
case 1740:
case 3110:
case 1234:
case 2967:
case 1775:
case 1805:
case 2628:
case 978:
case 1561:
case 3288:
case 3027:
case 3974:
case 945:
case 3579:
case 1524:
case 2913:
case 2188:
case 1920:
case 709:
case 2272:
case 2877:
case 2616:
case 1896:
case 3821:
case 695:
case 2065:
case 3809:
case 3779:
case 1936:
case 3770:
case 1362:
case 2176:
case 3864:
case 1761:
case 958:
case 3925:
case 1657:
case 418:
case 1494:
case 1575:
case 3612:
case 4041:
case 1219:
case 394:
case 1387:
case 2223:
case 1528:
case 4027:
case 2246:
case 2757:
case 2487:
case 530:
case 3847:
case 656:
case 512:
case 3284:
case 3146:
case 3041:
case 3215:
case 3868:
case 2549:
case 318:
case 2733:
case 1728:
case 3986:
case 940:
case 2675:
case 362:
case 323:
case 2936:
case 545:
case 2362:
case 2649:
case 3932:
case 1948:
case 876:
case 200:
case 2657:
case 578:
case 2494:
case 352:
case 1462:
case 2575:
case 3297:
case 2234:
case 935:
case 2805:
case 3069:
case 3583:
case 558:
case 2561:
case 856:
case 3134:
case 186:
case 3004:
case 2901:
case 890:
case 349:
case 4008:
case 1913:
case 2524:
case 1188:
case 310:
case 3566:
case 2698:
case 1818:
case 1072:
case 1990:
case 2158:
case 2104:
case 2034:
case 3603:
case 560:
case 3931:
case 3269:
case 2762:
case 78:
case 1826:
case 3891:
case 2324:
case 3260:
case 1307:
case 1843:
case 1271:
case 415:
case 955:
case 2361:
case 836:
case 3995:
case 3766:
case 2160:
case 636:
case 1019:
case 919:
case 2023:
case 1952:
case 1010:
case 2885:
case 1433:
case 381:
case 965:
case 1328:
case 3963:
case 3084:
case 2981:
case 898:
case 3241:
case 4076:
case 2416:
case 2598:
case 2357:
case 3666:
case 442:
case 3015:
case 1293:
case 1787:
case 1457:
case 1316:
case 479:
case 3412:
case 2662:
case 570:
case 587:
case 3703:
case 3873:
case 3171:
case 1034:
case 3370:
case 1762:
case 3537:
case 2307:
case 743:
case 2271:
case 827:
case 3753:
case 1169:
case 575:
case 2687:
case 2424:
case 1160:
case 1902:
case 2265:
case 1698:
case 2818:
case 2072:
case 379:
case 555:
case 2990:
case 3737:
case 2839:
case 2594:
case 4015:
case 2475:
case 1562:
case 960:
case 1158:
case 1598:
case 996:
case 2293:
case 2449:
case 2154:
case 2787:
case 3711:
case 108:
case 1662:
case 1349:
case 987:
case 2952:
case 1023:
case 2010:
case 1428:
case 3511:
case 1885:
case 3956:
case 369:
case 2587:
case 2108:
case 1798:
case 3345:
case 2570:
case 1004:
case 3071:
case 3913:
case 3507:
case 740:
case 631:
case 3967:
case 172:
case 1069:
case 3628:
case 1437:
case 1060:
case 2645:
case 2864:
case 2172:
case 397:
case 1366:
case 152:
case 2353:
case 2276:
case 3394:
case 2466:
case 3707:
case 3272:
case 3877:
case 2821:
case 3616:
case 2779:
case 2809:
case 80:
case 1453:
case 2800:
case 1058:
case 3176:
case 922:
case 2054:
case 2512:
case 682:
case 735:
case 3093:
case 1868:
case 953:
case 413:
case 973:
case 1847:
case 2670:
case 1123:
case 1284:
case 305:
case 831:
case 2110:
case 2138:
case 1859:
case 3528:
case 3210:
case 2932:
case 1864:
case 300:
case 1925:
case 2783:
case 3494:
case 2366:
case 3575:
case 4093:
case 604:
case 1612:
case 2297:
case 1353:
case 1276:
case 223:
case 1466:
case 3896:
case 1821:
case 1809:
case 1779:
case 3640:
case 3936:
case 3197:
case 3649:
case 1800:
case 2134:
case 1027:
case 2004:
case 3633:
case 563:
case 3901:
case 641:
case 249:
case 712:
case 1337:
case 139:
case 405:
case 2583:
case 1645:
case 768:
case 19:
case 3561:
case 1288:
case 3533:
case 3487:
case 1670:
case 1311:
case 3624:
case 1679:
case 2146:
case 1403:
case 1138:
case 294:
case 3142:
case 1712:
case 3661:
case 758:
case 522:
case 1545:
case 2683:
case 4071:
case 486:
case 841:
case 3757:
case 3246:
case 2986:
case 3115:
case 1745:
case 3398:
case 1512:
case 262:
case 3675:
case 3540:
case 3549:
case 3982:
case 218:
case 497:
case 3733:
case 1956:
case 281:
case 169:
case 2963:
case 2084:
case 693:
case 3981:
case 533:
case 3333:
case 1208:
case 58:
case 2445:
case 502:
case 115:
case 1637:
case 3885:
case 3814:
case 3340:
case 3349:
case 2873:
case 3:
case 2015:
case 1889:
case 320:
case 984:
case 1737:
case 3562:
case 2097:
case 770:
case 3158:
case 3902:
case 210:
case 2566:
case 3698:
case 179:
case 2258:
case 2204:
case 1227:
case 4010:
case 3169:
case 2835:
case 796:
case 4019:
case 2995:
case 2766:
case 3160:
case 3034:
case 2269:
case 3762:
case 893:
case 2891:
case 1483:
case 889:
case 3324:
case 2260:
case 871:
case 62:
case 902:
case 933:
case 2254:
case 1241:
case 2880:
case 1666:
case 3449:
case 2312:
case 420:
case 2956:
case 269:
case 775:
case 3038:
case 1042:
case 1963:
case 617:
case 4034:
case 1917:
case 748:
case 3010:
case 851:
case 1204:
case 2822:
case 1470:
case 2227:
case 4046:
case 651:
case 1835:
case 1479:
case 3424:
case 1995:
case 1383:
case 1603:
case 1931:
case 1269:
case 2483:
case 2537:
case 2379:
case 1260:
case 3990:
case 2737:
case 242:
case 3830:
case 1566:
case 3265:
case 3818:
case 82:
case 132:
case 765:
case 1258:
case 4068:
case 1567:
case 3983:
case 598:
case 660:
case 180:
case 177:
case 3118:
case 3395:
case 3732:
case 896:
case 1748:
case 638:
case 3331:
case 2501:
case 2736:
case 2529:
case 3139:
case 2218:
case 2520:
case 4050:
case 1402:
case 2644:
case 3143:
case 1390:
case 1713:
case 887:
case 3827:
case 3222:
case 206:
case 2536:
case 2682:
case 3306:
case 3532:
case 2302:
case 421:
case 2499:
case 1651:
case 1767:
case 1135:
case 2940:
case 2544:
case 167:
case 724:
case 1648:
case 111:
case 374:
case 3778:
case 2381:
case 536:
case 1928:
case 3363:
case 2180:
case 2933:
case 2601:
case 2782:
case 2744:
case 2893:
case 1352:
case 2402:
case 1720:
case 819:
case 1644:
case 2191:
case 474:
case 655:
case 106:
case 3804:
case 3235:
case 2399:
case 2548:
case 37:
case 3860:
case 3525:
case 257:
case 1302:
case 998:
case 865:
case 3406:
case 72:
case 2005:
case 3092:
case 3431:
case 1230:
case 3725:
case 280:
case 1239:
case 3574:
case 1501:
case 717:
case 1924:
case 914:
case 761:
case 1077:
case 2096:
case 1520:
case 1865:
case 4009:
case 2751:
case 3417:
case 3356:
case 2667:
case 1381:
case 36:
case 1452:
case 4000:
case 1629:
case 1601:
case 4064:
case 546:
case 3114:
case 3463:
case 751:
case 1620:
case 1744:
case 3841:
case 2613:
case 464:
case 2352:
case 848:
case 1582:
case 321:
case 51:
case 936:
case 3059:
case 2551:
case 288:
case 640:
case 2168:
case 3911:
case 2987:
case 44:
case 1998:
case 3884:
case 2444:
case 956:
case 2159:
case 416:
case 835:
case 301:
case 2351:
case 2150:
case 1838:
case 3842:
case 3247:
case 3756:
case 1344:
case 3486:
case 2823:
case 1810:
case 2690:
case 2846:
case 2752:
case 2085:
case 1382:
case 2699:
case 2348:
case 126:
case 3105:
case 1448:
case 2590:
case 147:
case 1962:
case 70:
case 3374:
case 1467:
case 1030:
case 3897:
case 1100:
case 4089:
case 3196:
case 1109:
case 1039:
case 2652:
case 434:
case 2429:
case 2192:
case 840:
case 1413:
case 1018:
case 1277:
case 2420:
case 2781:
case 1150:
case 1823:
case 1846:
case 1752:
case 1085:
case 907:
case 845:
case 1699:
case 2451:
case 188:
case 1014:
case 0:
case 1987:
case 3378:
case 612:
case 556:
case 2581:
case 2301:
case 2329:
case 2467:
case 830:
case 2030:
case 3876:
case 3617:
case 1313:
case 2039:
case 1790:
case 1652:
case 1429:
case 995:
case 2164:
case 4073:
case 3595:
case 444:
case 1296:
case 3221:
case 2872:
case 1420:
case 2502:
case 137:
case 226:
case 3022:
case 1590:
case 247:
case 401:
case 2043:
case 1994:
case 316:
case 1834:
case 3506:
case 1599:
case 1205:
case 2336:
case 1625:
case 1059:
case 1050:
case 4005:
case 3940:
case 1185:
case 714:
case 3582:
case 121:
case 3949:
case 1047:
case 3636:
case 3629:
case 1674:
case 3933:
case 3055:
case 480:
case 1463:
case 3744:
case 589:
case 3893:
case 2578:
case 1417:
case 1273:
case 602:
case 1945:
case 16:
case 798:
case 68:
case 2786:
case 3180:
case 2331:
case 3501:
case 3529:
case 1495:
case 971:
case 802:
case 3077:
case 2021:
case 3865:
case 3520:
case 1431:
case 3230:
case 2983:
case 2064:
case 2118:
case 736:
case 1291:
case 17:
case 1860:
case 1525:
case 2686:
case 3975:
case 3122:
case 292:
case 1869:
case 3720:
case 2143:
case 951:
case 411:
case 2222:
case 3729:
case 1804:
case 3701:
case 1235:
case 3682:
case 467:
case 2306:
case 2674:
case 517:
case 3173:
case 1317:
case 2114:
case 2841:
case 643:
case 154:
case 2273:
case 2356:
case 3667:
case 3214:
case 26:
case 1586:
case 1632:
case 2059:
case 406:
case 3648:
case 311:
case 174:
case 3551:
case 1778:
case 2050:
case 1808:
case 629:
case 993:
case 2047:
case 3548:
case 1532:
case 2291:
case 27:
case 357:
case 2525:
case 1686:
case 3005:
case 1126:
case 3191:
case 1143:
case 571:
case 1827:
case 2774:
case 71:
case 1306:
case 2970:
case 1130:
case 3513:
case 2979:
case 2495:
case 1021:
case 2431:
case 727:
case 1678:
case 1983:
case 377:
case 380:
case 2725:
case 1118:
case 1395:
case 3748:
case 3590:
case 2432:
case 809:
case 1425:
case 3994:
case 3834:
case 3599:
case 337:
case 2325:
case 3348:
case 941:
case 1022:
case 1474:
case 691:
case 3401:
case 3192:
case 23:
case 283:
case 3296:
case 1221:
case 1663:
case 1209:
case 3420:
case 2374:
case 1706:
case 1876:
case 2292:
case 1617:
case 707:
case 1264:
case 2937:
case 904:
case 3313:
case 4039:
case 1378:
case 4030:
case 1080:
case 2815:
case 1631:
case 1903:
case 4018:
case 244:
case 2073:
case 3552:
case 3014:
case 2911:
case 2486:
case 3752:
case 3846:
case 3085:
case 426:
case 3699:
case 50:
case 1606:
case 3444:
case 1763:
case 3482:
case 609:
case 4043:
case 3351:
case 201:
case 2842:
case 2247:
case 1656:
case 4014:
case 199:
case 2200:
case 13:
case 3164:
case 2209:
case 2663:
case 3018:
case 1374:
case 3467:
case 3030:
case 2531:
case 2876:
case 1897:
case 2264:
case 24:
case 3121:
case 3109:
case 1432:
case 504:
case 3043:
case 3962:
case 873:
case 2731:
case 2506:
case 1325:
case 4085:
case 2022:
case 1105:
case 1035:
case 3344:
case 3382:
case 2717:
case 3819:
case 2606:
case 437:
case 673:
case 1884:
case 3602:
case 2386:
case 2763:
case 1842:
case 1756:
case 1556:
case 2378:
case 2089:
case 2563:
case 1268:
case 766:
case 2080:
case 2695:
case 1478:
case 2903:
case 863:
case 144:
case 622:
case 1073:
case 1911:
case 1305:
case 389:
case 2132:
case 393:
case 2002:
case 2718:
case 1125:
case 3006:
case 3136:
case 2405:
case 3997:
case 3837:
case 3232:
case 2526:
case 2739:
case 911:
case 451:
case 3321:
case 471:
case 792:
case 2377:
case 2743:
case 2539:
case 2894:
case 2726:
case 1614:
case 3120:
case 3300:
case 1267:
case 3101:
case 2530:
case 3492:
case 1213:
case 3680:
case 11:
case 2496:
case 2518:
case 6:
case 1477:
case 2220:
case 3689:
case 3853:
case 585:
case 820:
case 1514:
case 2639:
case 774:
case 1910:
case 3278:
case 3017:
case 2355:
case 2630:
case 3984:
case 2618:
case 506:
case 3063:
case 808:
case 2081:
case 3580:
case 3589:
case 1455:
case 2282:
case 2186:
case 3915:
case 2244:
case 3182:
case 957:
case 417:
case 3450:
case 2626:
case 3459:
case 1714:
case 3811:
case 511:
case 3464:
case 2396:
case 3113:
case 1377:
case 1539:
case 3791:
case 1934:
case 567:
case 4063:
case 2213:
case 3866:
case 424:
case 1518:
case 1496:
case 3421:
case 21:
case 1220:
case 3735:
case 1201:
case 1132:
case 1718:
case 317:
case 2972:
case 625:
case 1405:
case 3976:
case 1526:
case 3591:
case 1739:
case 227:
case 1543:
case 1282:
case 1887:
case 3151:
case 1186:
case 3359:
case 906:
case 4006:
case 76:
case 580:
case 3347:
case 489:
case 3691:
case 2714:
case 3368:
case 2052:
case 2514:
case 1639:
case 3573:
case 2919:
case 4095:
case 4031:
case 721:
case 1618:
case 1081:
case 2938:
case 2455:
case 1755:
case 1082:
case 2833:
case 4032:
case 2385:
case 3768:
case 926:
case 2993:
case 2605:
case 3954:
case 331:
case 2051:
case 3550:
case 805:
case 744:
case 3559:
case 3759:
case 1414:
case 2156:
case 3908:
case 1816:
case 1677:
case 3152:
case 1281:
case 2314:
case 3480:
case 537:
case 2849:
case 1555:
case 2439:
case 30:
case 2067:
case 2705:
case 2875:
case 3592:
case 1339:
case 3668:
case 404:
case 2013:
case 2418:
case 1020:
case 4078:
case 2971:
case 1330:
case 1655:
case 3927:
case 1131:
case 3074:
case 1001:
case 156:
case 3422:
case 1036:
case 3647:
case 3199:
case 1807:
case 3190:
case 2824:
case 3335:
case 3792:
case 2299:
case 2290:
case 3659:
case 207:
case 441:
case 1252:
case 600:
case 3078:
case 547:
case 3473:
case 526:
case 1840:
case 3263:
case 1314:
case 2281:
case 828:
case 1849:
case 3600:
case 2117:
case 2555:
case 341:
case 2755:
case 4025:
case 266:
case 1385:
case 3941:
case 1993:
case 1051:
case 3845:
case 2828:
case 3700:
case 2036:
case 2106:
case 3435:
case 3958:
case 2202:
case 2343:
case 2807:
case 3709:
case 431:
case 1965:
case 3206:
case 1299:
case 3322:
case 74:
case 290:
case 1290:
case 1048:
case 3491:
case 107:
case 3764:
case 3564:
case 716:
case 1439:
case 1875:
case 628:
case 1430:
case 2339:
case 3295:
case 1013:
case 1418:
case 3509:
case 2577:
case 2131:
case 2001:
case 2984:
case 2063:
case 610:
case 2468:
case 3081:
case 2580:
case 3178:
case 1056:
case 2589:
case 3923:
case 95:
case 3630:
case 398:
case 1803:
case 1347:
case 3643:
case 564:
case 2286:
case 2144:
case 1691:
case 3626:
case 4090:
case 2622:
case 1151:
case 2447:
case 2780:
case 1359:
case 3244:
case 2915:
case 2006:
case 3730:
case 2136:
case 3405:
case 336:
case 1976:
case 2232:
case 2837:
case 3526:
case 3739:
case 1535:
case 921:
case 2095:
case 706:
case 3518:
case 2364:
case 3220:
case 1167:
case 3201:
case 3229:
case 1400:
case 4052:
case 1113:
case 3377:
case 12:
case 1988:
case 3726:
case 3894:
case 2120:
case 2300:
case 2492:
case 2031:
case 810:
case 1182:
case 2773:
case 2803:
case 2347:
case 1450:
case 869:
case 1811:
case 2635:
case 2350:
case 815:
case 2151:
case 1780:
case 2359:
case 1915:
case 1468:
case 1580:
case 2056:
case 1589:
case 3938:
case 679:
case 711:
case 964:
case 3910:
case 1017:
case 57:
case 3919:
case 1095:
case 1680:
case 1364:
case 842:
case 3477:
case 1689:
case 1853:
case 2392:
case 2167:
case 2400:
case 3396:
case 2113:
case 2464:
case 954:
case 22:
case 3614:
case 879:
case 2673:
case 3862:
case 3174:
case 1101:
case 757:
case 1129:
case 1031:
case 1006:
case 780:
case 1997:
case 859:
case 1232:
case 1837:
case 2591:
case 327:
case 974:
case 615:
case 346:
case 189:
case 2535:
case 669:
case 2148:
case 3125:
case 217:
case 2668:
case 501:
case 3013:
case 3596:
case 1521:
case 2074:
case 1564:
case 3439:
case 1960:
case 3067:
case 3875:
case 1969:
case 1231:
case 3430:
case 2650:
case 4044:
case 1322:
case 3290:
case 466:
case 1491:
case 1032:
case 544:
case 4082:
case 307:
case 2025:
case 1870:
case 2647:
case 89:
case 1435:
case 3824:
case 3796:
case 3965:
case 839:
case 2391:
case 3051:
case 231:
case 2550:
case 1086:
case 788:
case 1845:
case 456:
case 599:
case 3993:
case 3840:
case 1609:
case 1621:
case 2152:
case 2373:
case 3849:
case 1600:
case 2759:
case 3252:
case 3857:
case 1181:
case 3156:
case 1078:
case 4020:
case 1217:
case 2692:
case 1473:
case 2908:
case 2322:
case 849:
case 1659:
case 2032:
case 356:
case 1422:
case 1647:
case 3106:
case 2958:
case 534:
case 3807:
case 3202:
case 2721:
case 4051:
case 2295:
case 2521:
case 2509:
case 3020:
case 852:
case 3577:
case 2904:
case 3131:
case 1074:
case 3001:
case 376:
case 3318:
case 3195:
case 10:
case 662:
case 182:
case 2231:
case 2969:
case 495:
case 2609:
case 2621:
case 1152:
case 3677:
case 862:
case 1568:
case 1480:
case 3117:
case 93:
case 3555:
case 516:
case 1692:
case 2217:
case 4013:
case 204:
case 54:
case 131:
case 1550:
case 2086:
case 2845:
case 3828:
case 407:
case 3082:
case 649:
case 366:
case 2941:
case 894:
case 1523:
case 2228:
case 235:
case 3011:
case 2519:
case 1634:
case 178:
case 145:
case 2538:
case 1249:
case 2112:
case 391:
case 2738:
case 3863:
case 2216:
case 2881:
case 422:
case 3212:
case 3676:
case 900:
case 453:
case 1257:
case 2710:
case 2393:
case 1723:
case 112:
case 505:
case 3935:
case 3895:
case 2572:
case 1062:
case 79:
case 168:
case 688:
case 3831:
case 3788:
case 1943:
case 3037:
case 1646:
case 1261:
case 3588:
case 3460:
case 1534:
case 3806:
case 2619:
case 2371:
case 3327:
case 1930:
case 1224:
case 2802:
case 2207:
case 2772:
case 4003:
case 2638:
case 1471:
case 3270:
case 2249:
case 1112:
case 3856:
case 1738:
case 1672:
case 2240:
case 363:
case 1881:
case 997:
case 3697:
case 3454:
case 2746:
case 2257:
case 3140:
case 1393:
case 1985:
case 2723:
case 4053:
case 1228:
case 1510:
case 135:
case 2546:
case 3133:
case 500:
case 3003:
case 3408:
case 1145:
case 3980:
case 1538:
case 3989:
case 3542:
case 626:
case 3124:
case 2890:
case 1610:
case 2623:
case 2261:
case 826:
case 2899:
case 1619:
case 3797:
case 1371:
case 2930:
case 3360:
case 1772:
case 1207:
case 3684:
case 2918:
case 3642:
case 3369:
case 723:
case 3922:
case 3066:
case 2465:
case 1572:
case 749:
case 2275:
case 2062:
case 268:
case 2734:
case 1365:
case 2943:
case 491:
case 3964:
case 3083:
case 508:
case 3825:
case 287:
case 270:
case 1007:
case 1765:
case 1137:
case 2024:
case 3921:
case 2977:
case 165:
case 3758:
case 3504:
case 703:
case 4045:
case 3900:
case 3397:
case 296:
case 3704:
case 1771:
case 1801:
case 2813:
case 3641:
case 1820:
case 1905:
case 3760:
case 2166:
case 333:
case 38:
case 1294:
case 238:
case 1665:
case 3541:
case 781:
case 175:
case 148:
case 443:
case 2057:
case 3198:
case 3660:
case 3384:
case 2410:
case 1028:
case 1446:
case 1338:
case 520:
case 3669:
case 2851:
case 4079:
case 1310:
case 2323:
case 3741:
case 1882:
case 1671:
case 3604:
case 2438:
case 2801:
case 343:
case 1813:
case 2693:
case 2565:
case 759:
case 2153:
case 3497:
case 2294:
case 742:
case 1848:
case 667:
case 1061:
case 2434:
case 611:
case 2007:
case 3388:
case 3079:
case 1024:
case 265:
case 1977:
case 2571:
case 1334:
case 3886:
case 2423:
case 657:
case 3187:
case 1851:
case 1419:
case 3754:
case 3484:
case 2310:
case 255:
case 2111:
case 811:
case 2844:
case 2319:
case 1103:
case 2882:
case 2287:
case 1438:
case 4083:
case 2671:
case 3627:
case 1955:
case 867:
case 1049:
case 433:
case 3947:
case 2665:
case 2016:
case 275:
case 402:
case 3415:
case 2593:
case 715:
case 3554:
case 3950:
case 1057:
case 160:
case 3959:
case 680:
case 122:
case 644:
case 883:
case 83:
case 2576:
case 899:
case 3365:
case 962:
case 2788:
case 1175:
case 1922:
case 153:
case 1066:
case 786:
case 918:
case 478:
case 3207:
case 1684:
case 173:
case 1642:
case 1369:
case 3638:
case 601:
case 3179:
case 1124:
case 1283:
case 2107:
case 3610:
case 2588:
case 2460:
case 2776:
case 3619:
case 3170:
case 1797:
case 2469:
case 797:
case 3371:
case 2327:
case 1584:
case 949:
case 3087:
case 2308:
case 3538:
case 1542:
case 2245:
case 801:
case 3510:
case 335:
case 1133:
case 1003:
case 3519:
case 2973:
case 1149:
case 2212:
case 2817:
case 1454:
case 3719:
case 1140:
case 1341:
case 705:
case 3112:
case 3738:
case 923:
case 2354:
case 844:
case 3216:
case 468:
case 1515:
case 163:
case 1784:
case 3183:
case 3224:
case 518:
case 2360:
case 2684:
case 2161:
case 273:
case 435:
case 2642:
case 1404:
case 3471:
case 1270:
case 2427:
case 2283:
case 2124:
case 3646:
case 3261:
case 1460:
case 1806:
case 3534:
case 3899:
case 700:
case 1469:
case 3275:
case 222:
case 2358:
case 368:
case 2597:
case 1576:
case 3734:
case 1788:
case 3926:
case 594:
case 3943:
case 2922:
case 1053:
case 2175:
case 1458:
case 2615:
case 1895:
case 253:
case 3465:
case 330:
case 1817:
case 358:
case 2697:
case 2454:
case 3746:
case 1116:
case 2341:
case 572:
case 3249:
case 2856:
case 4094:
case 3240:
case 1863:
case 263:
case 2584:
case 345:
case 1128:
case 2980:
case 3233:
case 1308:
case 2989:
case 1688:
case 728:
case 552:
case 1011:
case 2133:
case 99:
case 1973:
case 1012:
case 1950:
case 3057:
case 2198:
case 942:
case 1959:
case 1947:
case 854:
case 1415:
case 419:
case 874:
case 1968:
case 532:
case 2741:
case 7:
case 3103:
case 503:
case 3033:
case 2604:
case 1442:
case 1627:
case 708:
case 1045:
case 2660:
case 465:
case 1187:
case 1508:
case 4007:
case 2921:
case 3977:
case 969:
case 1070:
case 3334:
case 2083:
case 1237:
case 2560:
case 2825:
case 720:
case 915:
case 674:
case 3867:
case 3262:
case 1654:
case 4016:
case 3166:
case 233:
case 2397:
case 396:
case 1253:
case 2874:
case 143:
case 2266:
case 2641:
case 448:
case 579:
case 3793:
case 355:
case 2968:
case 3111:
case 3844:
case 4061:
case 470:
case 3287:
case 3882:
case 3671:
case 1604:
case 2442:
case 2627:
case 2886:
case 3423:
case 1660:
case 2045:
case 2211:
case 821:
case 3446:
case 3338:
case 1669:
case 1342:
case 1203:
case 2754:
case 4024:
case 348:
case 2878:
case 2012:
case 284:
case 2959:
case 450:
case 86:
case 3016:
case 2415:
case 3593:
case 3153:
case 515:
case 1769:
case 2497:
case 3905:
case 1476:
case 4040:
case 1760:
case 3372:
case 438:
case 4049:
case 18:
case 3294:
case 1397:
case 460:
case 2727:
case 3801:
case 3771:
case 569:
case 1266:
case 2388:
case 2079:
case 3765:
case 2070:
case 87:
case 621:
case 229:
case 2832:
case 4033:
case 1488:
case 2608:
case 1569:
case 2992:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751839202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,];
var gg_b = "1751839202/";

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
