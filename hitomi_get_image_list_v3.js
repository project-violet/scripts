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
case 2479:
case 2352:
case 2627:
case 2009:
case 480:
case 716:
case 796:
case 2405:
case 708:
case 987:
case 1557:
case 89:
case 340:
case 3640:
case 3092:
case 835:
case 580:
case 1690:
case 210:
case 2174:
case 1661:
case 3477:
case 1108:
case 2543:
case 2978:
case 2567:
case 2111:
case 3478:
case 2310:
case 3008:
case 876:
case 197:
case 1992:
case 1904:
case 1822:
case 527:
case 3681:
case 117:
case 1006:
case 2911:
case 1476:
case 1362:
case 3411:
case 667:
case 2178:
case 3555:
case 692:
case 1558:
case 920:
case 1079:
case 1005:
case 427:
case 2800:
case 162:
case 3556:
case 971:
case 1521:
case 2458:
case 1744:
case 2509:
case 2241:
case 1353:
case 3730:
case 3121:
case 1485:
case 428:
case 1156:
case 1054:
case 3320:
case 1969:
case 3921:
case 4050:
case 2575:
case 3702:
case 1747:
case 1089:
case 758:
case 2188:
case 3592:
case 1616:
case 118:
case 2347:
case 528:
case 1486:
case 2068:
case 198:
case 1542:
case 2753:
case 3618:
case 2344:
case 1464:
case 1795:
case 1223:
case 3617:
case 2959:
case 3466:
case 3493:
case 2184:
case 339:
case 3508:
case 3459:
case 2984:
case 1506:
case 1468:
case 3484:
case 2193:
case 2064:
case 4012:
case 134:
case 1443:
case 2187:
case 2396:
case 274:
case 707:
case 1796:
case 3954:
case 988:
case 1058:
case 740:
case 2454:
case 1748:
case 2085:
case 1880:
case 205:
case 3957:
case 2619:
case 2280:
case 3989:
case 3746:
case 3154:
case 1021:
case 2489:
case 2457:
case 3798:
case 3786:
case 1829:
case 1369:
case 3920:
case 3834:
case 14:
case 2229:
case 1999:
case 1840:
case 1613:
case 3785:
case 3227:
case 1430:
case 304:
case 138:
case 1239:
case 1497:
case 3444:
case 2769:
case 2839:
case 3224:
case 1072:
case 2144:
case 403:
case 2996:
case 2030:
case 194:
case 1835:
case 382:
case 2948:
case 319:
case 336:
case 3496:
case 1498:
case 1503:
case 399:
case 2393:
case 249:
case 2002:
case 2196:
case 2387:
case 3228:
case 114:
case 1759:
case 4024:
case 3622:
case 4027:
case 1784:
case 2365:
case 800:
case 2236:
case 3768:
case 1445:
case 3354:
case 1020:
case 2825:
case 4019:
case 2152:
case 848:
case 1818:
case 591:
case 170:
case 719:
case 3452:
case 1871:
case 1777:
case 2482:
case 2377:
case 3306:
case 354:
case 1691:
case 3182:
case 230:
case 411:
case 2073:
case 895:
case 1572:
case 3815:
case 83:
case 1307:
case 3342:
case 1082:
case 2110:
case 2597:
case 3709:
case 1392:
case 3680:
case 1003:
case 2378:
case 3410:
case 2594:
case 775:
case 2217:
case 1201:
case 704:
case 1814:
case 2704:
case 25:
case 2214:
case 952:
case 1817:
case 3599:
case 673:
case 3776:
case 850:
case 1520:
case 632:
case 2288:
case 518:
case 3831:
case 1729:
case 3761:
case 128:
case 4054:
case 445:
case 1255:
case 598:
case 3324:
case 868:
case 1050:
case 1740:
case 506:
case 841:
case 4057:
case 3885:
case 2603:
case 1491:
case 2141:
case 3532:
case 946:
case 1269:
case 3221:
case 2869:
case 498:
case 2739:
case 2682:
case 2856:
case 2329:
case 3441:
case 2412:
case 3500:
case 2941:
case 406:
case 2091:
case 1865:
case 3610:
case 372:
case 2980:
case 2180:
case 2513:
case 2381:
case 434:
case 2336:
case 3254:
case 1012:
case 2133:
case 1736:
case 1781:
case 1884:
case 3868:
case 2293:
case 2266:
case 1923:
case 3328:
case 2287:
case 2725:
case 16:
case 3206:
case 2808:
case 61:
case 271:
case 220:
case 635:
case 1771:
case 3523:
case 69:
case 955:
case 1208:
case 82:
case 2649:
case 3032:
case 3205:
case 1602:
case 726:
case 131:
case 4042:
case 1630:
case 1683:
case 3715:
case 963:
case 3644:
case 644:
case 2317:
case 1301:
case 269:
case 889:
case 2013:
case 892:
case 417:
case 562:
case 4006:
case 990:
case 3696:
case 3663:
case 785:
case 4079:
case 1207:
case 1645:
case 2211:
case 867:
case 597:
case 2804:
case 1714:
case 2892:
case 287:
case 2922:
case 1292:
case 462:
case 2701:
case 1811:
case 4005:
case 676:
case 2278:
case 3422:
case 95:
case 3203:
case 1019:
case 713:
case 2621:
case 3526:
case 3282:
case 1415:
case 421:
case 165:
case 977:
case 3688:
case 2252:
case 2918:
case 3418:
case 2370:
case 191:
case 111:
case 1631:
case 2971:
case 1416:
case 2118:
case 1667:
case 459:
case 1852:
case 1686:
case 4082:
case 1668:
case 2117:
case 301:
case 1300:
case 832:
case 2537:
case 266:
case 2914:
case 873:
case 1722:
case 1901:
case 3659:
case 3693:
case 3687:
case 2534:
case 2419:
case 1524:
case 2732:
case 2322:
case 1262:
case 1810:
case 2700:
case 3665:
case 981:
case 3127:
case 3897:
case 202:
case 701:
case 90:
case 3924:
case 3791:
case 1939:
case 3124:
case 1051:
case 3802:
case 1741:
case 2244:
case 509:
case 2341:
case 2606:
case 1461:
case 3312:
case 2929:
case 7:
case 3674:
case 360:
case 2038:
case 2129:
case 3440:
case 3501:
case 103:
case 1434:
case 38:
case 1125:
case 2061:
case 2642:
case 2090:
case 494:
case 1676:
case 3436:
case 313:
case 2981:
case 2037:
case 2380:
case 2516:
case 3845:
case 2723:
case 414:
case 2295:
case 243:
case 1733:
case 3151:
case 864:
case 1126:
case 594:
case 3350:
case 1323:
case 2935:
case 978:
case 142:
case 1675:
case 329:
case 3435:
case 1848:
case 4049:
case 2451:
case 1609:
case 3846:
case 2515:
case 2135:
case 3039:
case 2263:
case 3898:
case 4020:
case 446:
case 1265:
case 4064:
case 1180:
case 3041:
case 8:
case 3889:
case 906:
case 505:
case 1980:
case 4086:
case 2673:
case 1933:
case 1060:
case 574:
case 3338:
case 998:
case 2735:
case 1091:
case 801:
case 1335:
case 2923:
case 546:
case 373:
case 3423:
case 332:
case 3243:
case 2781:
case 4085:
case 2326:
case 474:
case 3268:
case 2736:
case 3267:
case 2740:
case 2050:
case 188:
case 228:
case 2729:
case 2255:
case 1288:
case 325:
case 3727:
case 1682:
case 1856:
case 1739:
case 3160:
case 1329:
case 4068:
case 3361:
case 3334:
case 2256:
case 3858:
case 2491:
case 2460:
case 1340:
case 2512:
case 3400:
case 364:
case 3209:
case 1314:
case 1013:
case 829:
case 2132:
case 2100:
case 463:
case 2301:
case 2932:
case 169:
case 3719:
case 2698:
case 682:
case 1317:
case 3275:
case 3432:
case 636:
case 725:
case 851:
case 2204:
case 813:
case 1701:
case 2811:
case 1211:
case 2645:
case 455:
case 563:
case 187:
case 3276:
case 623:
case 2878:
case 3022:
case 2877:
case 1649:
case 510:
case 3699:
case 3653:
case 1620:
case 280:
case 171:
case 26:
case 1808:
case 2718:
case 962:
case 3913:
case 2697:
case 732:
case 2630:
case 4076:
case 1170:
case 490:
case 2602:
case 675:
case 3580:
case 3316:
case 2722:
case 826:
case 55:
case 1114:
case 2332:
case 2901:
case 2101:
case 1537:
case 166:
case 1914:
case 639:
case 1561:
case 2668:
case 1654:
case 833:
case 872:
case 2810:
case 1732:
case 1210:
case 921:
case 3915:
case 3803:
case 2551:
case 2415:
case 3535:
case 3669:
case 2528:
case 3882:
case 3656:
case 152:
case 2019:
case 3916:
case 1118:
case 2686:
case 4073:
case 789:
case 211:
case 2631:
case 1538:
case 1971:
case 2416:
case 67:
case 1171:
case 3536:
case 1370:
case 3655:
case 581:
case 2664:
case 937:
case 1252:
case 3313:
case 341:
case 1918:
case 1723:
case 938:
case 3750:
case 2925:
case 3692:
case 1181:
case 367:
case 50:
case 3518:
case 4083:
case 3245:
case 2125:
case 3029:
case 1936:
case 2676:
case 3607:
case 3138:
case 1090:
case 2926:
case 1263:
case 1296:
case 2609:
case 40:
case 1451:
case 1515:
case 3872:
case 389:
case 1248:
case 768:
case 1428:
case 2126:
case 2733:
case 3298:
case 741:
case 2675:
case 242:
case 2741:
case 3297:
case 2939:
case 2847:
case 2028:
case 1247:
case 3294:
case 3035:
case 102:
case 2519:
case 1424:
case 203:
case 3137:
case 2434:
case 994:
case 1853:
case 3161:
case 578:
case 3517:
case 1899:
case 3961:
case 1929:
case 2437:
case 3036:
case 3514:
case 2490:
case 32:
case 3081:
case 1341:
case 3937:
case 1178:
case 217:
case 3588:
case 4013:
case 2822:
case 1442:
case 2362:
case 2476:
case 1911:
case 587:
case 163:
case 1586:
case 3373:
case 3625:
case 347:
case 2638:
case 1531:
case 3074:
case 3176:
case 3975:
case 1628:
case 2521:
case 980:
case 748:
case 3109:
case 836:
case 2005:
case 2710:
case 819:
case 2200:
case 1762:
case 1585:
case 2558:
case 629:
case 875:
case 2589:
case 3703:
case 1075:
case 1405:
case 2870:
case 420:
case 471:
case 2554:
case 3565:
case 3782:
case 1352:
case 927:
case 1977:
case 3584:
case 2108:
case 1543:
case 3011:
case 256:
case 110:
case 2690:
case 2042:
case 68:
case 1568:
case 1406:
case 3408:
case 3559:
case 1974:
case 3078:
case 2908:
case 1177:
case 1166:
case 1363:
case 234:
case 1187:
case 3850:
case 2443:
case 3088:
case 2506:
case 3577:
case 1348:
case 3601:
case 1184:
case 601:
case 1067:
case 1031:
case 350:
case 3398:
case 1987:
case 2795:
case 3574:
case 3168:
case 1993:
case 2021:
case 1165:
case 928:
case 1457:
case 1395:
case 2505:
case 3772:
case 379:
case 3345:
case 2880:
case 2579:
case 2833:
case 6:
case 2763:
case 174:
case 1965:
case 315:
case 2089:
case 854:
case 488:
case 2969:
case 3291:
case 1575:
case 3812:
case 2156:
case 1509:
case 700:
case 2744:
case 747:
case 1241:
case 3511:
case 1043:
case 206:
case 348:
case 3186:
case 1988:
case 1344:
case 1068:
case 1576:
case 1799:
case 2542:
case 3394:
case 3302:
case 3931:
case 3164:
case 3093:
case 2155:
case 3986:
case 3749:
case 1188:
case 3967:
case 2616:
case 1393:
case 1235:
case 149:
case 2446:
case 443:
case 1826:
case 214:
case 1196:
case 1002:
case 3757:
case 322:
case 3946:
case 4037:
case 1948:
case 1097:
case 344:
case 1083:
case 294:
case 1963:
case 1365:
case 543:
case 3552:
case 376:
case 2784:
case 10:
case 3145:
case 2787:
case 2766:
case 484:
case 3238:
case 2840:
case 3453:
case 335:
case 3237:
case 807:
case 3499:
case 39:
case 3385:
case 24:
case 2953:
case 178:
case 3261:
case 2999:
case 2829:
case 2153:
case 2199:
case 2369:
case 1240:
case 3510:
case 3367:
case 1046:
case 3827:
case 3386:
case 3721:
case 1769:
case 1573:
case 3331:
case 4038:
case 3902:
case 3994:
case 3130:
case 2483:
case 238:
case 3096:
case 3102:
case 2355:
case 2239:
case 502:
case 3997:
case 2613:
case 3048:
case 3983:
case 2430:
case 3547:
case 1594:
case 1502:
case 735:
case 3973:
case 2392:
case 2003:
case 0:
case 4016:
case 1311:
case 2962:
case 466:
case 1110:
case 3544:
case 1597:
case 672:
case 1530:
case 2082:
case 3462:
case 3376:
case 2307:
case 1707:
case 2520:
case 3309:
case 15:
case 3052:
case 4015:
case 965:
case 2201:
case 896:
case 2549:
case 1792:
case 566:
case 177:
case 1650:
case 2778:
case 3375:
case 3706:
case 1545:
case 722:
case 221:
case 744:
case 3595:
case 181:
case 270:
case 452:
case 2308:
case 2572:
case 3010:
case 1374:
case 1403:
case 130:
case 1598:
case 1073:
case 776:
case 2660:
case 783:
case 3596:
case 685:
case 1482:
case 3215:
case 552:
case 1377:
case 3548:
case 3537:
case 1018:
case 2414:
case 702:
case 201:
case 3117:
case 2693:
case 2659:
case 3917:
case 954:
case 3016:
case 634:
case 3732:
case 3862:
case 2:
case 3689:
case 3419:
case 2665:
case 2873:
case 2539:
case 2119:
case 3700:
case 1535:
case 3621:
case 1882:
case 1915:
case 2713:
case 3658:
case 3171:
case 2418:
case 1536:
case 3370:
case 1655:
case 618:
case 1313:
case 1014:
case 784:
case 3118:
case 698:
case 2001:
case 2525:
case 1017:
case 606:
case 3538:
case 2611:
case 444:
case 1245:
case 3037:
case 827:
case 4044:
case 752:
case 2481:
case 1029:
case 3936:
case 3642:
case 3090:
case 3136:
case 4047:
case 1750:
case 3333:
case 343:
case 422:
case 3380:
case 576:
case 1425:
case 583:
case 167:
case 3516:
case 975:
case 1246:
case 2435:
case 3428:
case 384:
case 1298:
case 2039:
case 2951:
case 1426:
case 3451:
case 2846:
case 2760:
case 766:
case 1294:
case 1202:
case 2791:
case 2883:
case 41:
case 3424:
case 3605:
case 49:
case 435:
case 3244:
case 1297:
case 3679:
case 3427:
case 2026:
case 2124:
case 3929:
case 1961:
case 4063:
case 1134:
case 1036:
case 3140:
case 2677:
case 1937:
case 4048:
case 535:
case 2249:
case 59:
case 936:
case 86:
case 880:
case 1391:
case 1820:
case 1161:
case 3853:
case 1517:
case 1360:
case 3899:
case 2610:
case 272:
case 233:
case 3980:
case 3933:
case 3060:
case 1338:
case 1854:
case 450:
case 3091:
case 1751:
case 3133:
case 3381:
case 3180:
case 3513:
case 1889:
case 1243:
case 2150:
case 2738:
case 3293:
case 3266:
case 2328:
case 173:
case 2843:
case 3450:
case 132:
case 2831:
case 4065:
case 811:
case 2327:
case 2652:
case 2737:
case 670:
case 621:
case 548:
case 415:
case 2023:
case 891:
case 1231:
case 388:
case 4066:
case 1724:
case 787:
case 2112:
case 1334:
case 2221:
case 908:
case 1858:
case 2885:
case 865:
case 1080:
case 3340:
case 4084:
case 939:
case 125:
case 3412:
case 515:
case 1285:
case 448:
case 3682:
case 1191:
case 3856:
case 1821:
case 1160:
case 1361:
case 2912:
case 3672:
case 369:
case 1719:
case 824:
case 3591:
case 400:
case 1432:
case 3560:
case 1400:
case 2875:
case 842:
case 2663:
case 1070:
case 3314:
case 788:
case 614:
case 3013:
case 1541:
case 3211:
case 3892:
case 3804:
case 387:
case 2242:
case 500:
case 3807:
case 3278:
case 2876:
case 2695:
case 1653:
case 2206:
case 3277:
case 64:
case 2716:
case 320:
case 3274:
case 4078:
case 1879:
case 1580:
case 638:
case 1113:
case 1316:
case 2715:
case 1913:
case 2644:
case 2279:
case 609:
case 862:
case 592:
case 3097:
case 1146:
case 781:
case 1044:
case 236:
case 3083:
case 2496:
case 960:
case 3030:
case 4029:
case 1368:
case 3235:
case 3359:
case 3387:
case 1851:
case 1757:
case 299:
case 1632:
case 122:
case 2972:
case 589:
case 512:
case 1946:
case 1145:
case 2389:
case 2622:
case 223:
case 2357:
case 817:
case 1238:
case 3365:
case 3195:
case 3825:
case 1552:
case 2743:
case 176:
case 567:
case 183:
case 1945:
case 30:
case 730:
case 2731:
case 2861:
case 1095:
case 2120:
case 3449:
case 680:
case 2837:
case 2767:
case 1453:
case 1237:
case 1385:
case 3420:
case 2358:
case 3755:
case 2764:
case 3147:
case 1063:
case 1194:
case 1102:
case 1930:
case 777:
case 1758:
case 2444:
case 1997:
case 2785:
case 993:
case 1048:
case 1983:
case 42:
case 2447:
case 3046:
case 3144:
case 913:
case 1197:
case 1827:
case 1386:
case 3573:
case 3947:
case 2224:
case 1994:
case 1902:
case 4018:
case 3583:
case 1819:
case 1173:
case 3530:
case 2342:
case 4071:
case 3378:
case 3594:
case 2775:
case 2680:
case 3910:
case 377:
case 3650:
case 1375:
case 2599:
case 2776:
case 3707:
case 1742:
case 2553:
case 1309:
case 3801:
case 1052:
case 3271:
case 541:
case 3152:
case 806:
case 1706:
case 2816:
case 3218:
case 9:
case 3545:
case 818:
case 3612:
case 1596:
case 1563:
case 1779:
case 2982:
case 4014:
case 1548:
case 441:
case 3546:
case 2903:
case 3374:
case 3598:
case 3073:
case 901:
case 845:
case 2478:
case 3310:
case 3111:
case 1492:
case 1373:
case 147:
case 1625:
case 258:
case 2942:
case 3178:
case 2636:
case 1588:
case 3832:
case 3762:
case 3585:
case 1909:
case 642:
case 814:
case 1626:
case 1175:
case 2635:
case 894:
case 2569:
case 624:
case 1565:
case 3627:
case 1213:
case 3479:
case 2905:
case 2813:
case 2179:
case 1408:
case 1593:
case 705:
case 1559:
case 1587:
case 2474:
case 2303:
case 240:
case 3177:
case 2092:
case 2640:
case 2106:
case 207:
case 1011:
case 3543:
case 2007:
case 2477:
case 3568:
case 2466:
case 2493:
case 3184:
case 1143:
case 3067:
case 3987:
case 3959:
case 2617:
case 3993:
case 1968:
case 3823:
case 3166:
case 3193:
case 3363:
case 1850:
case 586:
case 296:
case 985:
case 4041:
case 1577:
case 3984:
case 790:
case 3085:
case 837:
case 2954:
case 3489:
case 3165:
case 2056:
case 2154:
case 3457:
case 2798:
case 3233:
case 3395:
case 3280:
case 3619:
case 2746:
case 1772:
case 179:
case 763:
case 2212:
case 2320:
case 1065:
case 2958:
case 3509:
case 13:
case 2797:
case 3458:
case 3241:
case 195:
case 859:
case 115:
case 926:
case 1456:
case 665:
case 1291:
case 2702:
case 3575:
case 1087:
case 1302:
case 1578:
case 3347:
case 1164:
case 755:
case 4033:
case 1986:
case 4080:
case 691:
case 1511:
case 3043:
case 148:
case 933:
case 1455:
case 3988:
case 3344:
case 1964:
case 161:
case 1720:
case 2488:
case 3068:
case 3576:
case 1330:
case 3799:
case 3753:
case 1834:
case 2290:
case 560:
case 1358:
case 2261:
case 2237:
case 235:
case 29:
case 2385:
case 1949:
case 912:
case 1861:
case 3153:
case 3829:
case 1120:
case 3356:
case 3369:
case 1321:
case 2721:
case 4025:
case 2331:
case 2902:
case 2994:
case 48:
case 2183:
case 1447:
case 2827:
case 3072:
case 2197:
case 2048:
case 967:
case 1227:
case 1785:
case 2930:
case 2194:
case 2758:
case 1444:
case 2757:
case 3498:
case 92:
case 3503:
case 493:
case 2632:
case 199:
case 855:
case 1972:
case 2851:
case 2047:
case 314:
case 1251:
case 3765:
case 2368:
case 3835:
case 451:
case 1448:
case 529:
case 1463:
case 244:
case 2343:
case 593:
case 1743:
case 2552:
case 1768:
case 1354:
case 3445:
case 3020:
case 759:
case 1053:
case 1099:
case 3787:
case 3759:
case 3766:
case 3793:
case 3836:
case 1389:
case 2145:
case 3881:
case 513:
case 429:
case 321:
case 3871:
case 3777:
case 2706:
case 688:
case 3818:
case 1305:
case 370:
case 4001:
case 359:
case 1815:
case 2010:
case 1062:
case 1103:
case 1641:
case 2215:
case 1306:
case 154:
case 2779:
case 3392:
case 3304:
case 337:
case 805:
case 941:
case 1680:
case 3003:
case 3162:
case 74:
case 2547:
case 1410:
case 1633:
case 874:
case 2173:
case 3307:
case 1342:
case 3082:
case 2462:
case 2376:
case 5:
case 2544:
case 2819:
case 2309:
case 3711:
case 709:
case 1553:
case 3520:
case 2623:
case 501:
case 3201:
case 3814:
case 1179:
case 734:
case 1813:
case 2703:
case 1105:
case 1979:
case 2639:
case 2782:
case 3042:
case 3690:
case 1382:
case 3661:
case 1629:
case 1477:
case 1906:
case 2584:
case 3108:
case 3752:
case 1303:
case 1004:
case 107:
case 878:
case 2408:
case 2566:
case 2593:
case 964:
case 2587:
case 3822:
case 2077:
case 3006:
case 2588:
case 3192:
case 3362:
case 3476:
case 1411:
case 2976:
case 1636:
case 1942:
case 3907:
case 2373:
case 2492:
case 2625:
case 3638:
case 1142:
case 3107:
case 80:
case 1478:
case 745:
case 397:
case 3904:
case 3710:
case 3232:
case 2975:
case 1773:
case 3521:
case 1569:
case 2626:
case 3409:
case 3558:
case 2175:
case 3200:
case 3969:
case 3956:
case 1702:
case 2812:
case 2260:
case 717:
case 2469:
case 1349:
case 2456:
case 1797:
case 3744:
case 295:
case 585:
case 3615:
case 3353:
case 1212:
case 3399:
case 830:
case 3485:
case 652:
case 3542:
case 2383:
case 306:
case 248:
case 1618:
case 2167:
case 2397:
case 2186:
case 3464:
case 1592:
case 1504:
case 485:
case 2749:
case 3431:
case 1671:
case 2302:
case 2931:
case 3467:
case 3155:
case 2164:
case 2066:
case 3486:
case 877:
case 1614:
case 1745:
case 2577:
case 3468:
case 1055:
case 334:
case 2850:
case 108:
case 2574:
case 3795:
case 666:
case 2168:
case 1493:
case 1466:
case 1508:
case 925:
case 2346:
case 2143:
case 472:
case 1957:
case 2772:
case 279:
case 756:
case 1056:
case 1069:
case 3021:
case 3833:
case 3763:
case 426:
case 3748:
case 3880:
case 1157:
case 533:
case 3770:
case 2915:
case 2803:
case 1203:
case 2115:
case 3019:
case 554:
case 2669:
case 3528:
case 311:
case 2017:
case 1525:
case 3631:
case 724:
case 3667:
case 2916:
case 1001:
case 3686:
case 2313:
case 1688:
case 2581:
case 2116:
case 2014:
case 888:
case 454:
case 268:
case 391:
case 3664:
case 2655:
case 3722:
case 646:
case 3901:
case 1666:
case 1693:
case 2071:
case 1687:
case 2529:
case 3668:
case 101:
case 3300:
case 2018:
case 1119:
case 3810:
case 1539:
case 703:
case 2273:
case 674:
case 1:
case 3939:
case 1124:
case 2712:
case 3051:
case 3741:
case 2283:
case 1927:
case 2297:
case 2439:
case 1897:
case 3844:
case 504:
case 1830:
case 2035:
case 2391:
case 1674:
case 871:
case 1440:
case 2517:
case 1025:
case 1501:
case 303:
case 944:
case 18:
case 1249:
case 2849:
case 22:
case 2514:
case 2937:
case 690:
case 1429:
case 3253:
case 3299:
case 1312:
case 404:
case 2036:
case 2040:
case 2604:
case 193:
case 2425:
case 499:
case 887:
case 1845:
case 1678:
case 2938:
case 2571:
case 3925:
case 765:
case 3125:
case 1611:
case 2518:
case 419:
case 711:
case 212:
case 599:
case 3027:
case 289:
case 4053:
case 1039:
case 753:
case 1951:
case 1898:
case 1151:
case 3024:
case 3126:
case 1350:
case 342:
case 935:
case 129:
case 791:
case 1435:
case 582:
case 519:
case 2246:
case 99:
case 3780:
case 1734:
case 1864:
case 2231:
case 3888:
case 1327:
case 1652:
case 1886:
case 979:
case 1737:
case 3729:
case 2264:
case 3339:
case 2390:
case 2191:
case 727:
case 1912:
case 1500:
case 2285:
case 1112:
case 2724:
case 2960:
case 2858:
case 3269:
case 2991:
case 2041:
case 496:
case 408:
case 2751:
case 3012:
case 4055:
case 1480:
case 3673:
case 2728:
case 3325:
case 3735:
case 1610:
case 416:
case 439:
case 133:
case 1257:
case 1843:
case 286:
case 93:
case 731:
case 995:
case 65:
case 1738:
case 3923:
case 1868:
case 4056:
case 1328:
case 508:
case 1150:
case 3887:
case 3326:
case 2268:
case 3736:
case 3859:
case 915:
case 2243:
case 3781:
case 516:
case 3550:
case 1523:
case 3208:
case 1716:
case 2022:
case 3877:
case 36:
case 2653:
case 380:
case 947:
case 3413:
case 1279:
case 4007:
case 3630:
case 1470:
case 2805:
case 1715:
case 3697:
case 1000:
case 1032:
case 2316:
case 3694:
case 1647:
case 2879:
case 2541:
case 3132:
case 1648:
case 2400:
case 264:
case 458:
case 1663:
case 1696:
case 884:
case 2275:
case 3301:
case 3646:
case 3100:
case 1809:
case 728:
case 3204:
case 3811:
case 1876:
case 558:
case 3717:
case 1422:
case 60:
case 843:
case 1242:
case 3207:
case 3645:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757300402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,];
var gg_b = "1757300402/";

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
