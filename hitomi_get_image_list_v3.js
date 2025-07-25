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
case 1013:
case 3915:
case 3472:
case 2599:
case 3788:
case 72:
case 1316:
case 1902:
case 1866:
case 3231:
case 2751:
case 2091:
case 340:
case 197:
case 164:
case 3433:
case 361:
case 2042:
case 1800:
case 542:
case 2804:
case 3403:
case 1973:
case 3075:
case 1580:
case 1643:
case 343:
case 2369:
case 2197:
case 778:
case 2445:
case 4072:
case 1932:
case 2612:
case 1523:
case 1797:
case 2402:
case 1458:
case 1909:
case 1410:
case 336:
case 381:
case 1600:
case 1225:
case 685:
case 829:
case 3593:
case 1875:
case 2290:
case 3030:
case 3727:
case 2621:
case 1666:
case 2070:
case 3956:
case 3000:
case 1294:
case 2786:
case 1355:
case 637:
case 1289:
case 2910:
case 2619:
case 508:
case 1939:
case 3377:
case 1843:
case 2337:
case 891:
case 2414:
case 2738:
case 3258:
case 3778:
case 3521:
case 315:
case 3117:
case 842:
case 2924:
case 2574:
case 3534:
case 1401:
case 3692:
case 611:
case 3641:
case 1203:
case 2931:
case 2995:
case 1165:
case 2901:
case 1822:
case 2152:
case 66:
case 3504:
case 2765:
case 4082:
case 1041:
case 2708:
case 1424:
case 1272:
case 2023:
case 3760:
case 4025:
case 1398:
case 3684:
case 1361:
case 2326:
case 3841:
case 1811:
case 591:
case 3706:
case 3699:
case 1535:
case 3022:
case 2893:
case 2080:
case 1505:
case 2159:
case 1591:
case 4094:
case 3512:
case 3736:
case 202:
case 2513:
case 1099:
case 1759:
case 3387:
case 94:
case 529:
case 1240:
case 68:
case 3259:
case 3311:
case 2739:
case 3861:
case 982:
case 642:
case 1341:
case 751:
case 1392:
case 2264:
case 3898:
case 3028:
case 1236:
case 455:
case 909:
case 2110:
case 927:
case 3518:
case 1114:
case 2486:
case 4027:
case 1548:
case 3144:
case 2696:
case 2709:
case 1628:
case 1537:
case 702:
case 39:
case 1399:
case 1173:
case 1167:
case 537:
case 3488:
case 2516:
case 2773:
case 3661:
case 1384:
case 3733:
case 2451:
case 370:
case 608:
case 2158:
case 748:
case 838:
case 373:
case 1569:
case 572:
case 3703:
case 3115:
case 769:
case 1758:
case 2702:
case 2026:
case 131:
case 2598:
case 3789:
case 3964:
case 865:
case 1526:
case 3616:
case 3794:
case 993:
case 2069:
case 2476:
case 3436:
case 2305:
case 2818:
case 4006:
case 2342:
case 990:
case 1313:
case 1863:
case 1877:
case 4060:
case 1654:
case 3190:
case 3046:
case 511:
case 1908:
case 3366:
case 2952:
case 1183:
case 3816:
case 1965:
case 3297:
case 3478:
case 2720:
case 2783:
case 1374:
case 3953:
case 58:
case 885:
case 1120:
case 1701:
case 607:
case 3917:
case 278:
case 1663:
case 1677:
case 837:
case 747:
case 3330:
case 395:
case 1854:
case 2370:
case 3596:
case 1288:
case 2007:
case 118:
case 3655:
case 691:
case 419:
case 1938:
case 2618:
case 2465:
case 1743:
case 3191:
case 2207:
case 326:
case 3168:
case 1564:
case 3142:
case 2143:
case 2536:
case 3827:
case 716:
case 214:
case 609:
case 3688:
case 1775:
case 627:
case 1389:
case 3461:
case 682:
case 371:
case 3277:
case 3498:
case 2237:
case 856:
case 3149:
case 3324:
case 545:
case 73:
case 84:
case 2130:
case 1104:
case 3246:
case 3331:
case 1553:
case 788:
case 2371:
case 2496:
case 753:
case 2704:
case 1121:
case 2166:
case 750:
case 2734:
case 662:
case 3301:
case 3547:
case 3627:
case 2578:
case 7:
case 3888:
case 1382:
case 296:
case 2344:
case 67:
case 1477:
case 1298:
case 1261:
case 3907:
case 418:
case 2608:
case 2876:
case 556:
case 1729:
case 279:
case 3586:
case 2418:
case 4055:
case 2053:
case 2793:
case 3948:
case 3678:
case 466:
case 3806:
case 1193:
case 2963:
case 2977:
case 2647:
case 1711:
case 3310:
case 3287:
case 3860:
case 1340:
case 4016:
case 2676:
case 2946:
case 1060:
case 991:
case 2122:
case 1006:
case 1950:
case 510:
case 787:
case 1303:
case 1659:
case 1333:
case 2450:
case 3969:
case 3551:
case 2847:
case 929:
case 907:
case 3799:
case 1446:
case 3059:
case 3416:
case 2588:
case 1372:
case 1079:
case 2845:
case 1299:
case 527:
case 1196:
case 3010:
case 1921:
case 1040:
case 87:
case 1858:
case 3352:
case 575:
case 509:
case 358:
case 1728:
case 582:
case 1571:
case 1284:
case 2419:
case 4074:
case 2056:
case 1934:
case 2614:
case 3970:
case 2930:
case 235:
case 1610:
case 1919:
case 2867:
case 2639:
case 3222:
case 3833:
case 3949:
case 1400:
case 893:
case 965:
case 2223:
case 3872:
case 1378:
case 2044:
case 2582:
case 1466:
case 3211:
case 4057:
case 2809:
case 2525:
case 1292:
case 1443:
case 3413:
case 363:
case 1072:
case 2975:
case 2412:
case 3285:
case 0:
case 464:
case 3672:
case 645:
case 497:
case 2081:
case 2632:
case 1003:
case 3905:
case 3798:
case 3058:
case 2589:
case 360:
case 2667:
case 144:
case 341:
case 3879:
case 3761:
case 3502:
case 23:
case 1515:
case 3545:
case 3169:
case 1754:
case 1581:
case 3200:
case 1422:
case 288:
case 96:
case 4084:
case 1831:
case 2503:
case 809:
case 875:
case 57:
case 3567:
case 1895:
case 3573:
case 2249:
case 1801:
case 2922:
case 2533:
case 2090:
case 2883:
case 250:
case 2270:
case 2820:
case 1746:
case 3923:
case 1025:
case 3162:
case 4092:
case 3514:
case 1118:
case 613:
case 268:
case 1631:
case 2911:
case 4041:
case 64:
case 2718:
case 3001:
case 3275:
case 249:
case 1624:
case 3682:
case 498:
case 3107:
case 2929:
case 714:
case 216:
case 199:
case 1327:
case 2493:
case 862:
case 1213:
case 3024:
case 610:
case 3539:
case 2683:
case 3441:
case 1411:
case 176:
case 3889:
case 936:
case 2908:
case 2846:
case 1952:
case 12:
case 752:
case 1850:
case 3417:
case 266:
case 3018:
case 2795:
case 2055:
case 2701:
case 3182:
case 3528:
case 1124:
case 1349:
case 3771:
case 4017:
case 2663:
case 2947:
case 2452:
case 218:
case 1465:
case 2938:
case 3648:
case 3662:
case 3978:
case 496:
case 4064:
case 1959:
case 2526:
case 3189:
case 3936:
case 961:
case 526:
case 940:
case 1069:
case 1391:
case 1305:
case 943:
case 683:
case 1818:
case 3312:
case 1342:
case 3125:
case 1368:
case 3669:
case 2313:
case 2877:
case 2863:
case 3464:
case 2016:
case 2654:
case 2459:
case 3587:
case 132:
case 1997:
case 40:
case 3133:
case 2399:
case 2173:
case 310:
case 1732:
case 1253:
case 798:
case 1451:
case 414:
case 3554:
case 1158:
case 125:
case 1217:
case 313:
case 2098:
case 217:
case 3238:
case 1702:
case 3103:
case 3715:
case 1026:
case 624:
case 1745:
case 2507:
case 1739:
case 871:
case 3826:
case 2341:
case 1264:
case 356:
case 3393:
case 2139:
case 2236:
case 3756:
case 3276:
case 2114:
case 339:
case 1486:
case 2562:
case 2548:
case 1555:
case 2260:
case 3744:
case 1714:
case 1696:
case 2887:
case 692:
case 1709:
case 2628:
case 3563:
case 354:
case 3925:
case 3214:
case 2361:
case 3209:
case 4090:
case 563:
case 1893:
case 362:
case 1080:
case 488:
case 541:
case 2505:
case 3490:
case 2084:
case 2591:
case 2568:
case 2542:
case 973:
case 3543:
case 2279:
case 102:
case 3680:
case 824:
case 2099:
case 2759:
case 2176:
case 3989:
case 3202:
case 583:
case 1420:
case 2147:
case 558:
case 1574:
case 416:
case 3178:
case 309:
case 3500:
case 1281:
case 2401:
case 298:
case 1483:
case 2233:
case 857:
case 1995:
case 3880:
case 1901:
case 3471:
case 148:
case 1152:
case 1765:
case 468:
case 626:
case 2920:
case 2041:
case 2629:
case 2092:
case 2752:
case 580:
case 892:
case 2424:
case 2909:
case 3511:
case 1439:
case 284:
case 4044:
case 2914:
case 3127:
case 841:
case 2600:
case 1634:
case 2225:
case 1049:
case 2875:
case 3019:
case 2666:
case 3585:
case 1348:
case 995:
case 3034:
case 3868:
case 487:
case 4056:
case 1812:
case 1786:
case 2355:
case 1604:
case 2630:
case 3444:
case 2186:
case 1337:
case 3979:
case 1414:
case 863:
case 1599:
case 2945:
case 2675:
case 2151:
case 1432:
case 2902:
case 557:
case 1958:
case 592:
case 1751:
case 3188:
case 1271:
case 3903:
case 1467:
case 1473:
case 766:
case 3350:
case 1042:
case 2800:
case 1834:
case 3870:
case 1804:
case 2830:
case 3283:
case 390:
case 147:
case 2580:
case 1819:
case 2643:
case 3481:
case 1369:
case 3522:
case 3849:
case 3642:
case 3415:
case 1445:
case 2932:
case 3605:
case 3220:
case 718:
case 2282:
case 2458:
case 221:
case 2544:
case 3155:
case 3671:
case 168:
case 3737:
case 2763:
case 1718:
case 581:
case 536:
case 3890:
case 1985:
case 2429:
case 1177:
case 2993:
case 3386:
case 2624:
case 1235:
case 1291:
case 308:
case 1620:
case 1929:
case 2556:
case 3212:
case 1242:
case 299:
case 1268:
case 3707:
case 1579:
case 1540:
case 559:
case 2411:
case 774:
case 69:
case 3510:
case 3221:
case 926:
case 561:
case 3558:
case 1154:
case 2515:
case 13:
case 3999:
case 540:
case 3423:
case 2824:
case 2094:
case 3234:
case 2274:
case 153:
case 2422:
case 3984:
case 3769:
case 1503:
case 2831:
case 1249:
case 1533:
case 4080:
case 3204:
case 504:
case 1090:
case 1883:
case 1270:
case 150:
case 1146:
case 543:
case 1:
case 1820:
case 815:
case 1572:
case 342:
case 451:
case 2025:
case 971:
case 606:
case 3957:
case 2241:
case 3032:
case 167:
case 1525:
case 2443:
case 2292:
case 1364:
case 194:
case 1814:
case 3442:
case 3293:
case 2033:
case 3615:
case 1645:
case 3073:
case 1975:
case 3067:
case 3491:
case 1602:
case 2475:
case 307:
case 2003:
case 1589:
case 746:
case 836:
case 1015:
case 881:
case 3726:
case 2079:
case 2299:
case 1128:
case 1845:
case 2921:
case 2040:
case 3308:
case 2858:
case 2284:
case 2430:
case 187:
case 1419:
case 515:
case 3974:
case 1056:
case 3449:
case 1796:
case 2934:
case 135:
case 2610:
case 730:
case 2904:
case 840:
case 1639:
case 1873:
case 3347:
case 3501:
case 1317:
case 1223:
case 3014:
case 2378:
case 3338:
case 1582:
case 634:
case 2466:
case 3009:
case 570:
case 1676:
case 1808:
case 3302:
case 2060:
case 2852:
case 1946:
case 806:
case 1122:
case 25:
case 3469:
case 337:
case 3853:
case 2303:
case 2454:
case 2659:
case 3817:
case 1450:
case 385:
case 3296:
case 2036:
case 636:
case 372:
case 1064:
case 573:
case 3332:
case 960:
case 2078:
case 3314:
case 1344:
case 196:
case 3038:
case 2463:
case 1129:
case 2298:
case 3864:
case 2261:
case 2859:
case 3309:
case 61:
case 1876:
case 2729:
case 2652:
case 3047:
case 1418:
case 3448:
case 3462:
case 1111:
case 1053:
case 3955:
case 1793:
case 4048:
case 2918:
case 4062:
case 1356:
case 640:
case 980:
case 2785:
case 2379:
case 3617:
case 2193:
case 4037:
case 834:
case 3065:
case 2711:
case 365:
case 3008:
case 38:
case 2216:
case 3552:
case 924:
case 2553:
case 3749:
case 1371:
case 873:
case 338:
case 3770:
case 1704:
case 2027:
case 1166:
case 2700:
case 1851:
case 2517:
case 1928:
case 1269:
case 870:
case 2134:
case 1578:
case 3174:
case 2766:
case 89:
case 3320:
case 4026:
case 2088:
case 992:
case 2487:
case 2112:
case 2564:
case 2697:
case 3113:
case 36:
case 3051:
case 1390:
case 1712:
case 425:
case 1536:
case 1248:
case 799:
case 1262:
case 1506:
case 114:
case 3735:
case 274:
case 1560:
case 1175:
case 1651:
case 10:
case 432:
case 615:
case 3112:
case 2998:
case 1168:
case 3325:
case 3743:
case 1191:
case 3088:
case 2559:
case 1713:
case 2768:
case 3697:
case 988:
case 2113:
case 26:
case 708:
case 2157:
case 3775:
case 211:
case 950:
case 1277:
case 1498:
case 1135:
case 49:
case 1097:
case 4087:
case 2552:
case 602:
case 3216:
case 1508:
case 1246:
case 1565:
case 1149:
case 28:
case 2770:
case 3428:
case 3027:
case 3730:
case 877:
case 1331:
case 52:
case 689:
case 2086:
case 1547:
case 4028:
case 1395:
case 3121:
case 916:
case 2383:
case 1254:
case 2320:
case 578:
case 3134:
case 1538:
case 2174:
case 3766:
case 3261:
case 2309:
case 791:
case 3463:
case 3477:
case 2864:
case 2047:
case 2462:
case 647:
case 495:
case 1836:
case 1455:
case 707:
case 1948:
case 1962:
case 1678:
case 729:
case 2141:
case 2955:
case 265:
case 1310:
case 1287:
case 2407:
case 1792:
case 3379:
case 4077:
case 3193:
case 2065:
case 346:
case 1180:
case 35:
case 967:
case 994:
case 1636:
case 2780:
case 532:
case 3659:
case 3006:
case 333:
case 1123:
case 2296:
case 285:
case 330:
case 1660:
case 1969:
case 112:
case 1551:
case 2367:
case 1228:
case 525:
case 2332:
case 434:
case 3372:
case 577:
case 1059:
case 272:
case 4066:
case 3040:
case 3921:
case 3079:
case 2815:
case 2365:
case 2974:
case 459:
case 3934:
case 905:
case 979:
case 2470:
case 158:
case 3571:
case 3430:
case 3284:
case 1803:
case 2531:
case 2595:
case 2347:
case 1222:
case 1833:
case 1679:
case 1949:
case 569:
case 1583:
case 1640:
case 772:
case 3466:
case 1520:
case 2014:
case 2656:
case 1872:
case 2338:
case 2844:
case 2681:
case 3292:
case 3443:
case 291:
case 3787:
case 163:
case 3072:
case 1413:
case 2957:
case 3241:
case 2405:
case 678:
case 3590:
case 2442:
case 1935:
case 3033:
case 1905:
case 3003:
case 1991:
case 1968:
case 1672:
case 2435:
case 3306:
case 2198:
case 1761:
case 2726:
case 3360:
case 1058:
case 62:
case 2002:
case 1840:
case 1457:
case 160:
case 2999:
case 3515:
case 2423:
case 3824:
case 1169:
case 1545:
case 2558:
case 1502:
case 848:
case 2871:
case 2769:
case 3831:
case 3094:
case 3581:
case 157:
case 2234:
case 1625:
case 3422:
case 3274:
case 1484:
case 914:
case 1567:
case 4022:
case 2219:
case 3025:
case 242:
case 3150:
case 1716:
case 1694:
case 547:
case 2671:
case 3257:
case 4011:
case 2155:
case 2941:
case 2737:
case 1162:
case 3544:
case 1825:
case 1514:
case 3118:
case 124:
case 2992:
case 3429:
case 1001:
case 1275:
case 76:
case 1095:
case 1137:
case 2762:
case 2890:
case 2212:
case 399:
case 3327:
case 711:
case 1031:
case 632:
case 1889:
case 376:
case 1024:
case 2707:
case 3695:
case 1539:
case 3601:
case 1492:
case 3316:
case 553:
case 4058:
case 3902:
case 1346:
case 1472:
case 1915:
case 1224:
case 1043:
case 3945:
case 1788:
case 3151:
case 352:
case 588:
case 441:
case 3675:
case 397:
case 1981:
case 1874:
case 161:
case 1231:
case 53:
case 3973:
case 3967:
case 887:
case 11:
case 2481:
case 3643:
case 1201:
case 2522:
case 2849:
case 1295:
case 2870:
case 1354:
case 1403:
case 2283:
case 3057:
case 3797:
case 3282:
case 696:
case 550:
case 2642:
case 2972:
case 2668:
case 104:
case 3932:
case 136:
case 384:
case 3914:
case 2127:
case 549:
case 92:
case 2511:
case 2585:
case 2456:
case 1593:
case 568:
case 2891:
case 2034:
case 2868:
case 483:
case 2318:
case 1377:
case 3939:
case 3843:
case 1813:
case 2979:
case 2649:
case 2670:
case 3289:
case 1066:
case 2940:
case 3630:
case 1899:
case 3147:
case 4024:
case 60:
case 1482:
case 8:
case 710:
case 1884:
case 3203:
case 522:
case 3495:
case 209:
case 275:
case 3138:
case 1534:
case 1029:
case 1692:
case 3983:
case 3570:
case 3431:
case 3108:
case 1504:
case 2530:
case 1519:
case 2267:
case 2273:
case 1328:
case 3752:
case 535:
case 3629:
case 83:
case 713:
case 424:
case 3272:
case 2982:
case 3920:
case 1153:
case 3361:
case 1841:
case 756:
case 2106:
case 2925:
case 1760:
case 3535:
case 1699:
case 2575:
case 2160:
case 594:
case 457:
case 3568:
case 977:
case 2623:
case 739:
case 849:
case 1736:
case 2490:
case 1210:
case 1387:
case 2989:
case 3176:
case 2680:
case 2239:
case 492:
case 3622:
case 3759:
case 1740:
case 579:
case 6:
case 3710:
case 3507:
case 1311:
case 1861:
case 1779:
case 1385:
case 2756:
case 2179:
case 3986:
case 1028:
case 3139:
case 814:
case 3109:
case 653:
case 239:
case 3114:
case 1329:
case 3562:
case 3548:
case 1144:
case 3628:
case 2577:
case 2563:
case 63:
case 2744:
case 969:
case 3887:
case 1087:
case 2546:
case 951:
case 2133:
case 3399:
case 19:
case 2265:
case 3173:
case 3167:
case 1698:
case 727:
case 709:
case 3384:
case 1661:
case 3951:
case 1322:
case 3145:
case 2247:
case 1703:
case 2554:
case 3102:
case 2715:
case 3061:
case 3497:
case 668:
case 426:
case 213:
case 3758:
case 3098:
case 1181:
case 2238:
case 3357:
case 2807:
case 331:
case 2194:
case 1789:
case 386:
case 134:
case 1375:
case 1406:
case 3976:
case 2936:
case 1794:
case 2312:
case 2848:
case 2906:
case 687:
case 1436:
case 622:
case 2587:
case 2960:
case 1046:
case 2837:
case 2669:
case 3863:
case 3877:
case 896:
case 3965:
case 2321:
case 3846:
case 3183:
case 3055:
case 1953:
case 728:
case 3120:
case 2607:
case 1300:
case 3374:
case 1330:
case 2304:
case 1596:
case 1917:
case 2528:
case 2637:
case 3663:
case 2319:
case 2251:
case 3677:
case 3947:
case 2648:
case 2978:
case 2662:
case 694:
case 667:
case 3724:
case 318:
case 1171:
case 1655:
case 1941:
case 1737:
case 2162:
case 2825:
case 2514:
case 726:
case 3177:
case 3163:
case 2137:
case 1890:
case 1762:
case 475:
case 955:
case 1212:
case 3242:
case 427:
case 3268:
case 2682:
case 2107:
case 3683:
case 2889:
case 1510:
case 3579:
case 33:
case 292:
case 1423:
case 2397:
case 2169:
case 1221:
case 1690:
case 1558:
case 2502:
case 1984:
case 388:
case 3503:
case 1204:
case 3750:
case 1116:
case 501:
case 823:
case 3249:
case 2573:
case 2567:
case 1351:
case 3533:
case 3572:
case 454:
case 2532:
case 142:
case 2716:
case 3820:
case 1844:
case 3525:
case 3364:
case 1681:
case 394:
case 3814:
case 47:
case 2603:
case 1405:
case 2285:
case 490:
case 2935:
case 1468:
case 3645:
case 3975:
case 3412:
case 1073:
case 2905:
case 1161:
case 428:
case 2991:
case 666:
case 1856:
case 2942:
case 3081:
case 2229:
case 3632:
case 884:
case 3015:
case 1913:
case 2879:
case 2633:
case 241:
case 1726:
case 2058:
case 2798:
case 2840:
case 2457:
case 3589:
case 260:
case 2010:
case 919:
case 3966:
case 1308:
case 801:
case 1815:
case 1365:
case 598:
case 1039:
case 387:
case 1644:
case 3419:
case 4034:
case 283:
case 3614:
case 3796:
case 1449:
case 3056:
case 3404:
case 1531:
case 2803:
case 1595:
case 3639:
case 3867:
case 3873:
case 2222:
case 897:
case 1347:
case 3317:
case 2833:
case 712:
case 4019:
case 3280:
case 3434:
case 2970:
case 4004:
case 631:
case 3421:
case 3223:
case 1014:
case 1338:
case 3122:
case 3676:
case 1302:
case 3946:
case 2358:
case 1853:
case 900:
case 783:
case 137:
case 4050:
case 185:
case 903:
case 2660:
case 1076:
case 2969:
case 1817:
case 2551:
case 1367:
case 2228:
case 3847:
case 866:
case 3064:
case 1332:
case 3838:
case 944:
case 2799:
case 2416:
case 3588:
case 1314:
case 763:
case 1038:
case 396:
case 1047:
case 3608:
case 2836:
case 379:
case 3638:
case 3356:
case 2806:
case 2962:
case 664:
case 1141:
case 1955:
case 3053:
case 760:
case 1407:
case 2287:
case 2052:
case 2792:
case 1008:
case 2937:
case 1617:
case 741:
case 1339:
case 3977:
case 3647:
case 2508:
case 3130:
case 2149:
case 2324:
case 439:
case 1770:
case 757:
case 3704:
case 2331:
case 3719:
case 3496:
case 3371:
case 518:
case 3928:
case 2301:
case 2547:
case 3269:
case 3734:
case 999:
case 1383:
case 1320:
case 2888:
case 2538:
case 2627:
case 456:
case 976:
case 3721:
case 44:
case 2191:
case 2926:
case 2105:
case 2713:
case 1559:
case 3207:
case 586:
case 2576:
case 3536:
case 620:
case 3143:
case 1791:
case 1051:
case 1735:
case 1157:
case 2688:
case 698:
case 3248:
case 3175:
case 2263:
case 2498:
case 2097:
case 2461:
case 3987:
case 3560:
case 32:
case 2063:
case 3438:
case 2782:
case 2297:
case 4065:
case 2478:
case 3720:
case 644:
case 1321:
case 3952:
case 465:
case 2816:
case 603:
case 740:
case 2953:
case 1607:
case 761:
case 2300:
case 1304:
case 1453:
case 3370:
case 1869:
case 833:
case 4047:
case 1771:
case 3349:
case 1319:
case 1648:
case 85:
case 1662:
case 4038:
case 3408:
case 3131:
case 1807:
case 3959:
case 3561:
case 952:
case 1194:
case 3598:
case 3650:
case 781:
case 2789:
case 736:
case 2964:
case 234:
case 2375:
case 3335:
case 2406:
case 3069:
case 1286:
case 1189:
case 964:
case 485:
case 4076:
case 2794:
case 2616:
case 1312:
case 574:
case 1050:
case 1790:
case 3368:
case 1862:
case 3476:
case 2436:
case 819:
case 1669:
case 1464:
case 715:
case 533:
case 2488:
case 3732:
case 3516:
case 332:
case 3997:
case 676:
case 29:
case 411:
case 3451:
case 2550:
case 2698:
case 270:
case 3767:
case 55:
case 3773:
case 3253:
case 2661:
case 699:
case 1247:
case 3217:
case 2115:
case 4051:
case 2703:
case 46:
case 3158:
case 1781:
case 377:
case 273:
case 1715:
case 621:
case 3745:
case 14:
case 2181:
case 1238:
case 3264:
case 2156:
case 156:
case 2259:
case 874:
case 1826:
case 2861:
case 1096:
case 1756:
case 1276:
case 519:
case 2427:
case 1179:
case 2028:
case 438:
case 2518:
case 2329:
case 3709:
case 48:
case 3557:
case 1214:
case 500:
case 3244:
case 2022:
case 655:
case 2699:
case 162:
case 3893:
case 2494:
case 899:
case 1160:
case 3776:
case 1623:
case 3256:
case 3159:
case 1136:
case 917:
case 503:
case 1543:
case 2425:
case 3513:
case 1245:
case 2899:
case 674:
case 182:
case 3215:
case 2117:
case 1202:
case 215:
case 1566:
case 1717:
case 3931:
case 3747:
case 408:
case 1178:
case 109:
case 127:
case 2029:
case 1396:
case 3152:
case 1530:
case 1093:
case 1753:
case 1267:
case 2328:
case 1232:
case 3765:
case 2153:
case 2944:
case 236:
case 844:
case 734:
case 4014:
case 2479:
case 281:
case 1127:
case 2440:
case 3307:
case 4009:
case 1511:
case 3290:
case 2727:
case 2030:
case 521:
case 1456:
case 3049:
case 630:
case 3786:
case 1805:
case 1891:
case 1842:
case 1034:
case 1318:
case 259:
case 2377:
case 1444:
case 918:
case 1979:
case 2813:
case 3409:
case 1021:
case 2066:
case 3910:
case 3604:
case 986:
case 3821:
case 646:
case 3599:
case 1635:
case 2915:
case 2472:
case 3432:
case 429:
case 2874:
case 407:
case 193:
case 261:
case 2433:
case 3834:
case 3584:
case 3091:
case 2657:
case 240:
case 3005:
case 1903:
case 2075:
case 21:
case 1522:
case 1933:
case 2295:
case 1849:
case 1870:
case 3804:
case 1283:
case 795:
case 2403:
case 1605:
case 3402:
case 1642:
case 1415:
case 1972:
case 4032:
case 706:
case 204:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753448402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,];
var gg_b = "1753448402/";

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
