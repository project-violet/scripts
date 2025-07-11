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
case 2931:
case 2997:
case 2887:
case 1977:
case 3835:
case 3590:
case 346:
case 224:
case 1188:
case 1787:
case 2643:
case 1584:
case 1086:
case 1281:
case 1417:
case 1513:
case 3334:
case 696:
case 3279:
case 215:
case 770:
case 3788:
case 2952:
case 918:
case 3926:
case 1004:
case 2409:
case 3753:
case 3695:
case 3365:
case 1506:
case 1116:
case 3280:
case 703:
case 2834:
case 2063:
case 243:
case 1388:
case 1294:
case 855:
case 3169:
case 1537:
case 380:
case 1591:
case 1734:
case 2865:
case 1433:
case 811:
case 2869:
case 2902:
case 901:
case 3387:
case 3165:
case 775:
case 3212:
case 3486:
case 3017:
case 3542:
case 1769:
case 1556:
case 2459:
case 106:
case 1911:
case 19:
case 1944:
case 665:
case 3715:
case 2437:
case 1471:
case 2662:
case 2250:
case 460:
case 3601:
case 301:
case 4011:
case 1808:
case 432:
case 2357:
case 2456:
case 1067:
case 2708:
case 2136:
case 3470:
case 2192:
case 1721:
case 2484:
case 1089:
case 3857:
case 1227:
case 660:
case 985:
case 1841:
case 566:
case 539:
case 3651:
case 3071:
case 1085:
case 2157:
case 1320:
case 2758:
case 3836:
case 3982:
case 2307:
case 1993:
case 2973:
case 2204:
case 1686:
case 1825:
case 387:
case 85:
case 3633:
case 1745:
case 893:
case 2725:
case 323:
case 3941:
case 379:
case 868:
case 23:
case 2782:
case 1324:
case 202:
case 2729:
case 2412:
case 2286:
case 3145:
case 2081:
case 2311:
case 1936:
case 1882:
case 1749:
case 1992:
case 77:
case 681:
case 119:
case 104:
case 3893:
case 3983:
case 3259:
case 2344:
case 2915:
case 3811:
case 2551:
case 344:
case 3349:
case 597:
case 226:
case 1618:
case 763:
case 1373:
case 541:
case 2663:
case 3844:
case 578:
case 1495:
case 2475:
case 2920:
case 1074:
case 798:
case 4040:
case 139:
case 2218:
case 2094:
case 166:
case 3908:
case 2111:
case 3617:
case 3209:
case 1124:
case 2548:
case 2919:
case 1290:
case 1352:
case 3346:
case 2267:
case 849:
case 667:
case 3400:
case 352:
case 3284:
case 1102:
case 522:
case 3398:
case 2830:
case 2595:
case 190:
case 3581:
case 2428:
case 1579:
case 564:
case 3213:
case 2599:
case 1432:
case 1496:
case 673:
case 2476:
case 1667:
case 3130:
case 1397:
case 2916:
case 3001:
case 3543:
case 3877:
case 987:
case 1622:
case 3198:
case 1689:
case 66:
case 1401:
case 3048:
case 979:
case 1964:
case 195:
case 3797:
case 3146:
case 3450:
case 429:
case 3032:
case 3096:
case 874:
case 2726:
case 754:
case 1238:
case 1000:
case 4035:
case 1512:
case 2846:
case 3330:
case 3671:
case 1197:
case 3051:
case 2177:
case 1242:
case 2160:
case 1878:
case 1746:
case 506:
case 2988:
case 3448:
case 2684:
case 1206:
case 161:
case 2161:
case 966:
case 3050:
case 433:
case 2523:
case 834:
case 820:
case 2427:
case 1581:
case 390:
case 486:
case 152:
case 1284:
case 2378:
case 1400:
case 221:
case 1668:
case 3102:
case 3730:
case 254:
case 2934:
case 613:
case 1346:
case 445:
case 1752:
case 814:
case 645:
case 2:
case 3939:
case 1051:
case 413:
case 1671:
case 3047:
case 2637:
case 2361:
case 3242:
case 3826:
case 2691:
case 3512:
case 2852:
case 3798:
case 686:
case 3238:
case 1146:
case 2656:
case 580:
case 2076:
case 1291:
case 1096:
case 825:
case 2760:
case 2777:
case 1797:
case 1731:
case 395:
case 1198:
case 3302:
case 440:
case 3401:
case 2178:
case 2126:
case 3935:
case 2897:
case 2987:
case 3622:
case 2831:
case 319:
case 3829:
case 1259:
case 1893:
case 3749:
case 2125:
case 3936:
case 3604:
case 1773:
case 538:
case 2233:
case 3810:
case 277:
case 3957:
case 2494:
case 123:
case 2659:
case 737:
case 289:
case 3173:
case 298:
case 2129:
case 4058:
case 3686:
case 3825:
case 1345:
case 1908:
case 2325:
case 2605:
case 3528:
case 3654:
case 3074:
case 3499:
case 366:
case 339:
case 27:
case 2382:
case 3495:
case 1527:
case 2217:
case 2481:
case 2012:
case 2609:
case 990:
case 242:
case 2500:
case 2329:
case 2711:
case 1349:
case 4008:
case 2824:
case 1811:
case 3940:
case 2819:
case 816:
case 3766:
case 3115:
case 3067:
case 2341:
case 3070:
case 1719:
case 3808:
case 2586:
case 1489:
case 64:
case 2438:
case 138:
case 2314:
case 799:
case 788:
case 1166:
case 2820:
case 2383:
case 2740:
case 523:
case 1720:
case 82:
case 39:
case 1068:
case 2707:
case 491:
case 3993:
case 4010:
case 3468:
case 2114:
case 3883:
case 3600:
case 2248:
case 3509:
case 3320:
case 1121:
case 2872:
case 1892:
case 3085:
case 1651:
case 2296:
case 3647:
case 2037:
case 2518:
case 2792:
case 2949:
case 1228:
case 4025:
case 2736:
case 869:
case 922:
case 4029:
case 3841:
case 3022:
case 484:
case 4082:
case 3319:
case 341:
case 3089:
case 2158:
case 3721:
case 544:
case 256:
case 58:
case 2554:
case 2251:
case 1632:
case 3172:
case 2998:
case 743:
case 1978:
case 1753:
case 2675:
case 3004:
case 1365:
case 1695:
case 1788:
case 2739:
case 1418:
case 2853:
case 364:
case 203:
case 659:
case 1279:
case 3417:
case 3086:
case 428:
case 3787:
case 892:
case 552:
case 322:
case 978:
case 735:
case 1033:
case 2735:
case 146:
case 3623:
case 2679:
case 2567:
case 2570:
case 2764:
case 3977:
case 1703:
case 2005:
case 3769:
case 2816:
case 3556:
case 1387:
case 1165:
case 2522:
case 1017:
case 1212:
case 1486:
case 2680:
case 2589:
case 1538:
case 724:
case 180:
case 3591:
case 1961:
case 459:
case 3537:
case 2930:
case 762:
case 3018:
case 3294:
case 3353:
case 270:
case 715:
case 3765:
case 848:
case 99:
case 1280:
case 1404:
case 3869:
case 65:
case 1522:
case 2387:
case 310:
case 2212:
case 2542:
case 1816:
case 2134:
case 4030:
case 1005:
case 5:
case 3694:
case 1009:
case 1612:
case 2280:
case 764:
case 170:
case 668:
case 3063:
case 3339:
case 3274:
case 2169:
case 280:
case 3571:
case 457:
case 3865:
case 1299:
case 2418:
case 1853:
case 2279:
case 315:
case 1739:
case 3952:
case 3681:
case 1675:
case 1055:
case 2187:
case 2839:
case 1463:
case 362:
case 3931:
case 1570:
case 175:
case 1567:
case 3997:
case 2835:
case 1764:
case 2369:
case 894:
case 1059:
case 1679:
case 2454:
case 285:
case 706:
case 3643:
case 1735:
case 521:
case 1295:
case 2772:
case 79:
case 1518:
case 867:
case 1949:
case 2071:
case 2651:
case 3783:
case 1141:
case 1091:
case 1296:
case 962:
case 1872:
case 3627:
case 3307:
case 2563:
case 2929:
case 218:
case 3406:
case 753:
case 3136:
case 2470:
case 1308:
case 924:
case 1251:
case 4049:
case 2467:
case 1056:
case 873:
case 2696:
case 2366:
case 2632:
case 3042:
case 156:
case 399:
case 474:
case 1183:
case 3741:
case 1158:
case 2857:
case 1945:
case 3517:
case 3714:
case 1438:
case 3533:
case 2489:
case 2601:
case 910:
case 201:
case 2321:
case 1586:
case 3866:
case 674:
case 3357:
case 1341:
case 3456:
case 3708:
case 741:
case 1707:
case 2840:
case 1504:
case 1815:
case 2720:
case 1358:
case 589:
case 858:
case 2807:
case 1013:
case 3437:
case 577:
case 2166:
case 3662:
case 3336:
case 943:
case 2485:
case 1605:
case 3144:
case 3218:
case 3532:
case 1966:
case 1325:
case 2345:
case 3548:
case 3551:
case 244:
case 2205:
case 2349:
case 28:
case 1824:
case 4066:
case 1500:
case 704:
case 631:
case 142:
case 3663:
case 608:
case 719:
case 3393:
case 1711:
case 3475:
case 2724:
case 1217:
case 1481:
case 1012:
case 1609:
case 3782:
case 1233:
case 4021:
case 2958:
case 302:
case 408:
case 2773:
case 3081:
case 3412:
case 431:
case 1793:
case 1110:
case 3311:
case 2095:
case 2562:
case 3972:
case 1873:
case 163:
case 2893:
case 1921:
case 2255:
case 1182:
case 287:
case 766:
case 3710:
case 3501:
case 1129:
case 198:
case 450:
case 3043:
case 2099:
case 1494:
case 3725:
case 1550:
case 2941:
case 279:
case 3726:
case 3953:
case 3778:
case 3027:
case 2330:
case 2051:
case 1462:
case 917:
case 2256:
case 1691:
case 1637:
case 1361:
case 865:
case 3898:
case 2877:
case 2860:
case 1831:
case 1897:
case 1178:
case 2048:
case 3638:
case 2594:
case 1760:
case 1271:
case 1076:
case 3285:
case 3642:
case 2237:
case 2096:
case 1523:
case 1802:
case 3599:
case 3377:
case 1161:
case 3360:
case 3476:
case 91:
case 860:
case 1684:
case 2001:
case 795:
case 80:
case 832:
case 261:
case 4065:
case 926:
case 4069:
case 3062:
case 154:
case 1934:
case 3761:
case 1378:
case 1606:
case 252:
case 2284:
case 2668:
case 1326:
case 2581:
case 3271:
case 2152:
case 3760:
case 2964:
case 3777:
case 3028:
case 2302:
case 884:
case 84:
case 2580:
case 2935:
case 3126:
case 3987:
case 483:
case 2622:
case 2878:
case 1898:
case 3462:
case 2131:
case 469:
case 2047:
case 3691:
case 436:
case 1177:
case 2826:
case 1846:
case 1222:
case 1953:
case 2238:
case 1595:
case 3965:
case 1830:
case 290:
case 942:
case 3606:
case 97:
case 2102:
case 321:
case 669:
case 524:
case 2290:
case 1062:
case 2448:
case 1377:
case 416:
case 2670:
case 1476:
case 3802:
case 3969:
case 627:
case 2495:
case 3382:
case 1475:
case 3500:
case 3329:
case 2373:
case 3711:
case 859:
case 126:
case 1915:
case 2940:
case 1551:
case 954:
case 4020:
case 11:
case 692:
case 1111:
case 779:
case 1596:
case 1532:
case 2576:
case 137:
case 1144:
case 2074:
case 1479:
case 4015:
case 2499:
case 377:
case 1845:
case 2957:
case 3494:
case 1725:
case 3659:
case 3079:
case 2023:
case 1043:
case 1501:
case 1480:
case 492:
case 3921:
case 3182:
case 2829:
case 219:
case 117:
case 363:
case 3125:
case 1972:
case 2604:
case 1081:
case 3655:
case 1311:
case 1849:
case 1782:
case 648:
case 102:
case 78:
case 2324:
case 278:
case 1714:
case 2022:
case 840:
case 2319:
case 241:
case 1484:
case 2089:
case 1038:
case 1200:
case 3757:
case 634:
case 701:
case 199:
case 297:
case 3554:
case 2814:
case 2505:
case 975:
case 738:
case 1136:
case 1042:
case 1247:
case 3490:
case 2468:
case 2993:
case 2600:
case 51:
case 1973:
case 1758:
case 2320:
case 1627:
case 620:
case 1340:
case 1783:
case 3141:
case 3091:
case 409:
case 2858:
case 1413:
case 537:
case 3792:
case 3736:
case 3820:
case 2372:
case 3108:
case 3383:
case 2944:
case 718:
case 609:
case 420:
case 3358:
case 29:
case 886:
case 3707:
case 3815:
case 970:
case 3819:
case 2559:
case 2766:
case 625:
case 517:
case 2115:
case 1090:
case 2262:
case 1456:
case 3341:
case 1140:
case 434:
case 2070:
case 2808:
case 3586:
case 2120:
case 3084:
case 1533:
case 53:
case 502:
case 1865:
case 2103:
case 1274:
case 1339:
case 2018:
case 1063:
case 1834:
case 4002:
case 1455:
case 3009:
case 2054:
case 1459:
case 135:
case 3005:
case 1364:
case 785:
case 206:
case 3816:
case 2556:
case 3803:
case 3522:
case 3680:
case 746:
case 2417:
case 2281:
case 2787:
case 222:
case 4052:
case 2623:
case 1139:
case 1405:
case 1997:
case 1931:
case 3570:
case 2960:
case 3764:
case 2977:
case 3888:
case 1568:
case 3998:
case 3055:
case 130:
case 3675:
case 2004:
case 1135:
case 3739:
case 264:
case 303:
case 4031:
case 2202:
case 311:
case 1813:
case 3912:
case 1020:
case 2706:
case 1768:
case 2040:
case 1015:
case 2190:
case 3472:
case 514:
case 1806:
case 2483:
case 3980:
case 3890:
case 1421:
case 2587:
case 1322:
case 171:
case 2414:
case 1602:
case 1389:
case 2338:
case 525:
case 617:
case 3770:
case 2974:
case 281:
case 2441:
case 880:
case 3261:
case 2342:
case 2756:
case 2923:
case 3979:
case 626:
case 534:
case 2569:
case 2390:
case 2677:
case 2252:
case 1185:
case 1631:
case 1697:
case 1370:
case 2408:
case 1856:
case 43:
case 3842:
case 3789:
case 402:
case 3021:
case 1943:
case 3278:
case 308:
case 3419:
case 3722:
case 2142:
case 1652:
case 2297:
case 2231:
case 3646:
case 1771:
case 294:
case 2534:
case 2791:
case 637:
case 61:
case 1189:
case 885:
case 192:
case 3698:
case 2565:
case 1122:
case 520:
case 1981:
case 4043:
case 1891:
case 1837:
case 3420:
case 3975:
case 2064:
case 169:
case 2566:
case 3416:
case 3317:
case 908:
case 1104:
case 1733:
case 2947:
case 1855:
case 273:
case 3540:
case 1088:
case 3649:
case 2039:
case 1318:
case 229:
case 950:
case 1053:
case 1673:
case 3704:
case 183:
case 2693:
case 3210:
case 1927:
case 26:
case 3453:
case 1624:
case 1558:
case 2709:
case 3117:
case 1304:
case 3065:
case 2611:
case 740:
case 3592:
case 3488:
case 1154:
case 2644:
case 1386:
case 1487:
case 12:
case 2163:
case 1717:
case 4062:
case 1244:
case 1541:
case 1003:
case 955:
case 2705:
case 3557:
case 2817:
case 376:
case 624:
case 536:
case 2549:
case 1150:
case 2640:
case 3030:
case 1615:
case 2426:
case 3593:
case 1498:
case 1963:
case 2219:
case 1300:
case 1529:
case 2162:
case 443:
case 1525:
case 3332:
case 949:
case 844:
case 296:
case 88:
case 615:
case 357:
case 3905:
case 1619:
case 1002:
case 662:
case 1207:
case 3348:
case 2220:
case 4063:
case 1510:
case 430:
case 368:
case 3258:
case 1100:
case 2127:
case 3621:
case 462:
case 1147:
case 2657:
case 2077:
case 1292:
case 1097:
case 3151:
case 1031:
case 1236:
case 3959:
case 3283:
case 2776:
case 1796:
case 3511:
case 3700:
case 2904:
case 3148:
case 52:
case 35:
case 3214:
case 3098:
case 393:
case 3196:
case 2461:
case 3132:
case 3046:
case 2636:
case 2692:
case 424:
case 2253:
case 2899:
case 1938:
case 1879:
case 2922:
case 3687:
case 3045:
case 968:
case 1942:
case 3723:
case 265:
case 2288:
case 207:
case 1239:
case 114:
case 2394:
case 791:
case 109:
case 95:
case 4038:
case 2143:
case 1073:
case 1653:
case 548:
case 1795:
case 1123:
case 1264:
case 382:
case 3991:
case 3937:
case 2985:
case 2530:
case 374:
case 2194:
case 74:
case 2044:
case 3634:
case 1174:
case 134:
case 688:
case 772:
case 2546:
case 2482:
case 3395:
case 232:
case 2429:
case 3473:
case 861:
case 957:
case 2970:
case 3774:
case 2425:
case 1990:
case 1880:
case 3560:
case 3669:
case 349:
case 592:
case 2343:
case 3984:
case 1445:
case 2410:
case 3875:
case 1881:
case 3561:
case 1991:
case 760:
case 2971:
case 3688:
case 2179:
case 4056:
case 70:
case 1199:
case 3264:
case 182:
case 2029:
case 2781:
case 3795:
case 2287:
case 2312:
case 314:
case 3239:
case 309:
case 4091:
case 3799:
case 1723:
case 1687:
case 2010:
case 1195:
case 2380:
case 1045:
case 3938:
case 3879:
case 2823:
case 4006:
case 320:
case 550:
case 3616:
case 890:
case 2265:
case 707:
case 1669:
case 1399:
case 2379:
case 1774:
case 2597:
case 3603:
case 2794:
case 3990:
case 1906:
case 3578:
case 1473:
case 3526:
case 2180:
case 4084:
case 1665:
case 3812:
case 656:
case 3174:
case 3449:
case 1634:
case 2917:
case 3510:
case 3207:
case 920:
case 603:
case 1750:
case 2376:
case 1431:
case 2608:
case 3240:
case 2477:
case 3963:
case 1101:
case 3300:
case 2573:
case 1909:
case 3620:
case 1862:
case 3582:
case 934:
case 4005:
case 1030:
case 2061:
case 2266:
case 866:
case 3672:
case 1196:
case 1827:
case 2128:
case 2683:
case 475:
case 2800:
case 2524:
case 15:
case 1098:
case 1511:
case 1700:
case 2847:
case 3732:
case 3236:
case 3031:
case 3097:
case 3292:
case 3876:
case 1621:
case 1301:
case 2933:
case 168:
case 796:
case 2614:
case 2682:
case 3927:
case 3465:
case 878:
case 2520:
case 3186:
case 1133:
case 841:
case 383:
case 1649:
case 2159:
case 3088:
case 897:
case 76:
case 3855:
case 2515:
case 1225:
case 4028:
case 700:
case 621:
case 1786:
case 2948:
case 3859:
case 2610:
case 1087:
case 1416:
case 3733:
case 2932:
case 2886:
case 1976:
case 3508:
case 2625:
case 2305:
case 758:
case 3354:
case 213:
case 336:
case 3469:
case 369:
case 454:
case 1754:
case 176:
case 593:
case 2464:
case 245:
case 2359:
case 3244:
case 3805:
case 3514:
case 767:
case 705:
case 2435:
case 3016:
case 316:
case 2105:
case 2439:
case 233:
case 1863:
case 1488:
case 3154:
case 3962:
case 1592:
case 2572:
case 3304:
case 2355:
case 2763:
case 1065:
case 568:
case 729:
case 1453:
case 2818:
case 3558:
case 2230:
case 2008:
case 2356:
case 2457:
case 574:
case 2790:
case 2113:
case 155:
case 582:
case 1767:
case 3019:
case 348:
case 1535:
case 3421:
case 1980:
case 442:
case 2870:
case 3322:
case 2867:
case 92:
case 3806:
case 1539:
case 2588:
case 3170:
case 1371:
case 3167:
case 3385:
case 2492:
case 916:
case 2661:
case 3015:
case 3768:
case 689:
case 698:
case 794:
case 2184:
case 3122:
case 983:
case 498:
case 3837:
case 150:
case 1698:
case 3771:
case 549:
case 2083:
case 3652:
case 3072:
case 3260:
case 1415:
case 2156:
case 927:
case 1278:
case 781:
case 3943:
case 2384:
case 1722:
case 642:
case 2738:
case 67:
case 1842:
case 936:
case 3466:
case 463:
case 2822:
case 2503:
case 3370:
case 2041:
case 3185:
case 1979:
case 864:
case 2889:
case 2415:
case 929:
case 3297:
case 1440:
case 3092:
case 3036:
case 2785:
case 973:
case 3534:
case 824:
case 1313:
case 547:
case 3737:
case 851:
case 1678:
case 3138:
case 2368:
case 1407:
case 2698:
case 1885:
case 250:
case 2975:
case 2979:
case 3923:
case 1742:
case 1889:
case 1999:
case 68:
case 644:
case 3057:
case 3390:
case 3660:
case 1137:
case 1503:
case 3408:
case 1516:
case 830:
case 2789:
case 2226:
case 2021:
case 1384:
case 2419:
case 862:
case 1014:
case 4095:
case 1298:
case 3784:
case 2535:
case 572:
case 2168:
case 3414:
case 3338:
case 1106:
case 1113:
case 2767:
case 3974:
case 2770:
case 1008:
case 3342:
case 3458:
case 2912:
case 3706:
case 2630:
case 1436:
case 679:
case 3190:
case 3713:
case 1391:
case 1661:
case 623:
case 3483:
case 792:
case 452:
case 769:
case 3163:
case 736:
case 186:
case 358:
case 2333:
case 1901:
case 2069:
case 1359:
case 145:
case 3705:
case 981:
case 2557:
case 3817:
case 276:
case 727:
case 1818:
case 2117:
case 1355:
case 4001:
case 461:
case 1105:
case 1439:
case 3947:
case 1804:
case 994:
case 2225:
case 2649:
case 3039:
case 329:
case 1629:
case 3755:
case 661:
case 2133:
case 3693:
case 716:
case 140:
case 4048:
case 113:
case 1305:
case 2928:
case 367:
case 3064:
case 3833:
case 2976:
case 2403:
case 2087:
case 2416:
case 1155:
case 2645:
case 3035:
case 2786:
case 3273:
case 2229:
case 1519:
case 1847:
case 2955:
case 1221:
case 2148:
case 1658:
case 2214:
case 293:
case 2544:
case 1683:
case 2747:
case 3461:
case 2196:
case 2132:
case 2241:
case 3636:
case 2046:
case 3692:
case 2827:
case 1176:
case 268:
case 83:
case 1933:
case 1614:
case 802:
case 2402:
case 3127:
case 912:
case 3896:
case 3832:
case 3060:
case 3272:
case 3657:
case 965:
case 3728:
case 1641:
case 2283:
case 817:
case 2497:
case 3162:
case 1460:
case 1477:
case 2332:
case 159:
case 826:
case 1328:
case 3545:
case 1917:
case 3220:
case 1850:
case 3918:
case 513:
case 646:
case 2351:
case 2030:
case 1061:
case 1266:
case 932:
case 3426:
case 2862:
case 3219:
case 2593:
case 4017:
case 2101:
case 685:
case 1573:
case 3967:
case 1531:
case 2577:
case 2399:
case 147:
case 191:
case 1874:
case 709:
case 3343:
case 2894:
case 3410:
case 3044:
case 2634:
case 360:
case 438:
case 3011:
case 2395:
case 3482:
case 2665:
case 401:
case 1493:
case 3598:
case 3712:
case 725:
case 1411:
case 1082:
case 1312:
case 3143:
case 3775:
case 734:
case 1029:
case 3093:
case 638:
case 2881:
case 2991:
case 3895:
case 3530:
case 312:
case 1502:
case 3922:
case 1380:
case 3635:
case 720:
case 365:
case 4071:
case 3394:
case 2843:
case 3493:
case 10:
case 1598:
case 782:
case 2024:
case 641:
case 160:
case 2526:
case 3180:
case 678:
case 1216:
case 1203:
case 2812:
case 1194:
case 234:
case 4070:
case 4067:
case 2445:
case 220:
case 49:
case 391:
case 3874:
case 1780:
case 1343:
case 854:
case 3234:
case 347:
case 3531:
case 1967:
case 3597:
case 2603:
case 959:
case 2880:
case 2374:
case 214:
case 1288:
case 1394:
case 2942:
case 3025:
case 3010:
case 1635:
case 1989:
case 112:
case 3502:
case 3823:
case 2561:
case 3971:
case 1530:
case 2688:
case 3179:
case 3444:
case 2264:
case 581:
case 4022:
case 34:
case 1093:
case 372:
case 1776:
case 1848:
case 2796:
case 863:
case 1077:
case 2147:
case 2031:
case 2350:
case 464:
case 500:
case 1896:
case 1986:
case 3933:
case 757:
case 1461:
case 2257:
case 2672:
case 1362:
case 3683:
case 2751:
case 3800:
case 3658:
case 889:
case 558:
case 94:
case 3221:
case 1904:
case 422:
case 2963:
case 1219:
case 2300:
case 1327:
case 4054:
case 2150:
case 2615:
case 3266:
case 567:
case 505:
case 1918:
case 1549:
case 1220:
case 1545:
case 3850:
case 2619:
case 2002:
case 196:
case 3328:
case 529:
case 768:
case 1954:
case 3376:
case 2240:
case 573:
case 4018:
case 3460:
case 3105:
case 1644:
case 2583:
case 4050:
case 3572:
case 2304:
case 3355:
case 100:
case 1611:
case 3763:
case 2624:
case 3818:
case 1705:
case 1950:
case 1817:
case 3464:
case 2118:
case 2805:
case 3854:
case 2514:
case 1163:
case 3901:
case 386:
case 490:
case 2717:
case 1521:
case 2487:
case 2211:
case 3948:
case 2859:
case 3610:
case 2733:
case 4000:
case 3155:
case 3996:
case 2508:
case 1759:
case 105:
case 1833:
case 1064:
case 2927:
case 2465:
case 3520:
case 340:
case 1900:
case 1693:
case 1363:
case 1039:
case 2434:
case 856:
case 3159:
case 227:
case 129:
case 1947:
case 2855:
case 173:
case 755:
case 2943:
case 2856:
case 3516:
case 3738:
case 419:
case 1677:
case 1390:
case 2466:
case 1252:
case 3503:
case 2697:
case 2631:
case 1923:
case 1756:
case 3999:
case 1569:
case 3889:
case 1871:
case 3885:
case 1565:
case 3995:
case 2837:
case 2981:
case 3626:
case 940:
case 3058:
case 3407:
case 639:
case 2771:
case 1791:
case 2652:
case 2277:
case 2260:
case 1231:
case 1092:
case 2806:
case 507:
case 3588:
case 1868:
case 4074:
case 933:
case 1040:
case 2167:
case 2385:
case 3337:
case 466:
case 3391:
case 1713:
case 1706:
case 2768:
case 512:
case 1007:
case 2813:
case 3184:
case 3230:
case 3356:
case 1441:
case 731:
case 3790:
case 2994:
case 181:
case 870:
case 2602:
case 1338:
case 3106:
case 248:
case 2421:
case 1784:
case 1587:
case 3867:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752357601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,];
var gg_b = "1752357601/";

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
