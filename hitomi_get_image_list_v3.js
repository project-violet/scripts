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
case 1638:
case 2546:
case 220:
case 2598:
case 3217:
case 1734:
case 3406:
case 2041:
case 499:
case 431:
case 1004:
case 2411:
case 2428:
case 629:
case 3118:
case 537:
case 605:
case 2999:
case 560:
case 1240:
case 2283:
case 2317:
case 2342:
case 1976:
case 3852:
case 1687:
case 3887:
case 3531:
case 1850:
case 3865:
case 1665:
case 2891:
case 2813:
case 14:
case 2579:
case 457:
case 2804:
case 3641:
case 1841:
case 132:
case 551:
case 2978:
case 1947:
case 1743:
case 216:
case 59:
case 1726:
case 1392:
case 1013:
case 1662:
case 1091:
case 2290:
case 1949:
case 17:
case 207:
case 2345:
case 3660:
case 1548:
case 1655:
case 1860:
case 3855:
case 582:
case 305:
case 77:
case 329:
case 3557:
case 1477:
case 526:
case 2496:
case 1779:
case 3508:
case 3403:
case 921:
case 2526:
case 3070:
case 266:
case 2543:
case 1930:
case 2816:
case 4026:
case 1205:
case 3703:
case 3907:
case 239:
case 291:
case 2748:
case 3160:
case 74:
case 1777:
case 2136:
case 1354:
case 3559:
case 1479:
case 2322:
case 378:
case 2644:
case 525:
case 1927:
case 2300:
case 1723:
case 3225:
case 1798:
case 3567:
case 306:
case 1138:
case 787:
case 5:
case 2872:
case 1237:
case 3935:
case 1821:
case 134:
case 265:
case 3044:
case 2633:
case 2124:
case 584:
case 1511:
case 1528:
case 1593:
case 1239:
case 3569:
case 4034:
case 1498:
case 1364:
case 839:
case 1423:
case 891:
case 1165:
case 1288:
case 1929:
case 3173:
case 1960:
case 1208:
case 3520:
case 2076:
case 1492:
case 523:
case 1107:
case 13:
case 2554:
case 1522:
case 1849:
case 3649:
case 142:
case 3280:
case 1158:
case 3063:
case 4054:
case 3505:
case 1812:
case 3612:
case 518:
case 854:
case 1109:
case 2166:
case 1343:
case 2380:
case 2653:
case 1326:
case 3810:
case 1099:
case 1259:
case 2328:
case 2311:
case 441:
case 547:
case 2419:
case 2049:
case 638:
case 3881:
case 3965:
case 1267:
case 2742:
case 303:
case 3987:
case 3783:
case 3952:
case 3306:
case 1495:
case 197:
case 2899:
case 3483:
case 2156:
case 3293:
case 4064:
case 1500:
case 3539:
case 3989:
case 2417:
case 577:
case 1078:
case 1269:
case 3615:
case 3127:
case 1815:
case 2442:
case 3938:
case 340:
case 744:
case 914:
case 1542:
case 1829:
case 1517:
case 101:
case 881:
case 594:
case 1764:
case 4095:
case 813:
case 3868:
case 1668:
case 2595:
case 849:
case 2700:
case 1323:
case 2656:
case 3835:
case 828:
case 2972:
case 964:
case 3994:
case 1231:
case 1827:
case 3066:
case 2425:
case 2884:
case 3901:
case 4092:
case 3786:
case 3673:
case 1545:
case 1658:
case 3858:
case 2348:
case 2722:
case 3149:
case 2916:
case 772:
case 1607:
case 1754:
case 1084:
case 2666:
case 3809:
case 252:
case 1830:
case 3630:
case 3112:
case 568:
case 1379:
case 742:
case 3574:
case 2203:
case 2422:
case 3056:
case 3296:
case 3248:
case 3486:
case 3169:
case 595:
case 1470:
case 3550:
case 1003:
case 2494:
case 1831:
case 3631:
case 81:
case 108:
case 888:
case 3235:
case 3077:
case 1111:
case 1128:
case 1193:
case 3079:
case 3268:
case 4024:
case 2134:
case 2698:
case 2335:
case 1988:
case 1356:
case 1770:
case 1538:
case 2986:
case 399:
case 3848:
case 1555:
case 1648:
case 3560:
case 95:
case 2677:
case 2536:
case 21:
case 1920:
case 596:
case 3159:
case 1696:
case 60:
case 3896:
case 288:
case 1744:
case 2701:
case 991:
case 3922:
case 2803:
case 1562:
case 3209:
case 3416:
case 1905:
case 2332:
case 3258:
case 221:
case 561:
case 3182:
case 2309:
case 3157:
case 3541:
case 1273:
case 4036:
case 467:
case 1444:
case 2401:
case 430:
case 1014:
case 2679:
case 1859:
case 3210:
case 1736:
case 3404:
case 2278:
case 776:
case 2069:
case 1006:
case 1247:
case 133:
case 52:
case 890:
case 3034:
case 1353:
case 1680:
case 2990:
case 256:
case 2067:
case 2626:
case 1974:
case 1808:
case 3608:
case 2085:
case 2179:
case 855:
case 2455:
case 3378:
case 3704:
case 1857:
case 1882:
case 1436:
case 511:
case 3131:
case 3942:
case 290:
case 2765:
case 2438:
case 2806:
case 1215:
case 3917:
case 3397:
case 1869:
case 3669:
case 3893:
case 631:
case 699:
case 448:
case 2299:
case 1940:
case 2787:
case 2082:
case 2297:
case 3518:
case 2789:
case 2487:
case 2452:
case 1276:
case 478:
case 3685:
case 915:
case 745:
case 1885:
case 1424:
case 2738:
case 3919:
case 1594:
case 3667:
case 3413:
case 2198:
case 2123:
case 1510:
case 136:
case 949:
case 3201:
case 2039:
case 2553:
case 773:
case 928:
case 2732:
case 304:
case 602:
case 1766:
case 700:
case 2709:
case 212:
case 3512:
case 952:
case 1805:
case 3605:
case 2088:
case 1145:
case 2758:
case 2671:
case 440:
case 981:
case 2301:
case 2037:
case 586:
case 253:
case 1820:
case 3620:
case 3996:
case 3316:
case 169:
case 4053:
case 2432:
case 2886:
case 3064:
case 2275:
case 913:
case 2005:
case 3372:
case 1888:
case 3515:
case 3602:
case 1802:
case 812:
case 3784:
case 524:
case 3800:
case 2468:
case 2914:
case 2735:
case 1218:
case 2664:
case 2768:
case 2435:
case 3576:
case 1456:
case 3054:
case 1581:
case 3294:
case 1333:
case 3825:
case 3484:
case 585:
case 3071:
case 862:
case 2051:
case 3102:
case 302:
case 604:
case 3527:
case 641:
case 438:
case 3265:
case 3188:
case 1250:
case 3287:
case 2695:
case 2365:
case 1568:
case 3640:
case 2883:
case 1840:
case 3499:
case 2164:
case 3797:
case 3313:
case 3928:
case 671:
case 2906:
case 1617:
case 1463:
case 1642:
case 3842:
case 522:
case 1753:
case 1260:
case 2692:
case 143:
case 2710:
case 3105:
case 2890:
case 3674:
case 1874:
case 558:
case 3530:
case 814:
case 262:
case 3778:
case 3262:
case 1851:
case 3980:
case 1122:
case 2171:
case 1558:
case 3478:
case 3573:
case 1453:
case 2362:
case 736:
case 119:
case 2040:
case 2410:
case 3120:
case 173:
case 2655:
case 2860:
case 3482:
case 3836:
case 1636:
case 107:
case 1345:
case 1577:
case 3759:
case 393:
case 1144:
case 358:
case 2101:
case 3292:
case 2949:
case 2426:
case 1050:
case 933:
case 2251:
case 2091:
case 1480:
case 624:
case 3038:
case 739:
case 1780:
case 2947:
case 1978:
case 3953:
case 3604:
case 232:
case 3351:
case 3708:
case 1579:
case 1813:
case 3769:
case 3062:
case 1891:
case 2850:
case 2652:
case 2261:
case 87:
case 1133:
case 1624:
case 3824:
case 765:
case 3485:
case 2976:
case 287:
case 1711:
case 1728:
case 1060:
case 502:
case 1317:
case 1793:
case 2240:
case 3785:
case 1283:
case 84:
case 3172:
case 2689:
case 2915:
case 2734:
case 120:
case 686:
case 1170:
case 2638:
case 2446:
case 2016:
case 3337:
case 2288:
case 324:
case 2202:
case 3506:
case 2498:
case 3113:
case 2593:
case 2239:
case 908:
case 2511:
case 2528:
case 3833:
case 715:
case 945:
case 1124:
case 1633:
case 658:
case 3001:
case 165:
case 3302:
case 2189:
case 234:
case 4028:
case 2821:
case 3672:
case 3956:
case 3870:
case 1670:
case 2138:
case 3431:
case 2798:
case 1984:
case 3339:
case 2927:
case 2601:
case 15:
case 504:
case 2973:
case 2777:
case 1136:
case 447:
case 1748:
case 139:
case 716:
case 946:
case 191:
case 2162:
case 4080:
case 2205:
case 3616:
case 3271:
case 2930:
case 589:
case 2580:
case 976:
case 1543:
case 3094:
case 3254:
case 1526:
case 2779:
case 3305:
case 2220:
case 2072:
case 1496:
case 1448:
case 3675:
case 477:
case 1021:
case 2477:
case 50:
case 3863:
case 1719:
case 3385:
case 1012:
case 696:
case 2815:
case 872:
case 1417:
case 2334:
case 2500:
case 3761:
case 1156:
case 3010:
case 2135:
case 297:
case 859:
case 4000:
case 3697:
case 2285:
case 2950:
case 1419:
case 83:
case 1393:
case 2525:
case 2099:
case 2259:
case 2792:
case 425:
case 2941:
case 943:
case 409:
case 1904:
case 1653:
case 2343:
case 1380:
case 2132:
case 1166:
case 3751:
case 1445:
case 3678:
case 3357:
case 1878:
case 2109:
case 4022:
case 410:
case 900:
case 484:
case 242:
case 3243:
case 2158:
case 650:
case 2849:
case 2522:
case 3226:
case 3359:
case 1554:
case 23:
case 3474:
case 383:
case 2208:
case 919:
case 3586:
case 2282:
case 2257:
case 897:
case 728:
case 3936:
case 149:
case 1153:
case 763:
case 3420:
case 128:
case 1592:
case 3035:
case 2110:
case 396:
case 3705:
case 3590:
case 531:
case 1027:
case 2609:
case 874:
case 2084:
case 437:
case 2754:
case 2607:
case 1396:
case 1722:
case 1916:
case 2771:
case 361:
case 1348:
case 2658:
case 801:
case 2873:
case 179:
case 969:
case 3944:
case 3720:
case 557:
case 3702:
case 1884:
case 274:
case 3009:
case 2827:
case 451:
case 1030:
case 2231:
case 3970:
case 4042:
case 3199:
case 3856:
case 1656:
case 62:
case 1595:
case 2323:
case 2918:
case 3032:
case 1214:
case 3583:
case 2668:
case 3439:
case 611:
case 3298:
case 2517:
case 244:
case 201:
case 3488:
case 2829:
case 3007:
case 2542:
case 350:
case 1679:
case 3879:
case 2444:
case 1401:
case 2014:
case 875:
case 2273:
case 2366:
case 1309:
case 3504:
case 76:
case 3330:
case 121:
case 4062:
case 2180:
case 2905:
case 276:
case 1126:
case 3971:
case 756:
case 2230:
case 3266:
case 2562:
case 3954:
case 1031:
case 2744:
case 368:
case 1701:
case 11:
case 1307:
case 2920:
case 808:
case 3877:
case 1986:
case 845:
case 2555:
case 2648:
case 2356:
case 2770:
case 2538:
case 4065:
case 394:
case 1698:
case 2902:
case 422:
case 790:
case 1134:
case 3327:
case 2939:
case 493:
case 3614:
case 1814:
case 623:
case 458:
case 4052:
case 3964:
case 3418:
case 3048:
case 245:
case 2733:
case 618:
case 1524:
case 68:
case 2552:
case 3256:
case 4038:
case 1494:
case 2831:
case 2470:
case 2565:
case 3106:
case 2227:
case 3834:
case 3080:
case 503:
case 2594:
case 1465:
case 3450:
case 1008:
case 2885:
case 1487:
case 3572:
case 2276:
case 1789:
case 1057:
case 347:
case 1297:
case 1787:
case 987:
case 1533:
case 2724:
case 2611:
case 1489:
case 2693:
case 3606:
case 3376:
case 3263:
case 1765:
case 190:
case 4094:
case 833:
case 3741:
case 2857:
case 2882:
case 3575:
case 3347:
case 1455:
case 3460:
case 323:
case 2808:
case 4001:
case 932:
case 3992:
case 1179:
case 1626:
case 2974:
case 1990:
case 156:
case 1067:
case 3843:
case 2680:
case 2951:
case 1462:
case 392:
case 2353:
case 3516:
case 3103:
case 233:
case 2006:
case 1069:
case 485:
case 2736:
case 97:
case 3441:
case 2859:
case 2196:
case 651:
case 2625:
case 3270:
case 3022:
case 901:
case 3729:
case 310:
case 2333:
case 506:
case 2456:
case 1020:
case 1272:
case 1768:
case 1435:
case 309:
case 3864:
case 325:
case 2086:
case 869:
case 2218:
case 2221:
case 1735:
case 483:
case 836:
case 2839:
case 517:
case 164:
case 3321:
case 235:
case 3923:
case 411:
case 1005:
case 2119:
case 2888:
case 974:
case 1275:
case 1432:
case 1886:
case 2820:
case 1903:
case 1654:
case 762:
case 660:
case 529:
case 2466:
case 505:
case 637:
case 3430:
case 1409:
case 2805:
case 1088:
case 1216:
case 578:
case 1709:
case 3730:
case 3578:
case 1458:
case 1002:
case 835:
case 1732:
case 1039:
case 3000:
case 2510:
case 273:
case 2959:
case 1410:
case 495:
case 1204:
case 625:
case 2453:
case 1362:
case 609:
case 2336:
case 93:
case 2645:
case 2558:
case 3360:
case 1171:
case 3017:
case 4009:
case 610:
case 3749:
case 200:
case 3042:
case 1154:
case 4058:
case 2851:
case 3747:
case 684:
case 3341:
case 162:
case 3712:
case 3690:
case 1890:
case 4007:
case 1710:
case 243:
case 2908:
case 753:
case 2753:
case 2957:
case 827:
case 798:
case 3236:
case 1781:
case 360:
case 2324:
case 180:
case 496:
case 2642:
case 800:
case 1387:
case 764:
case 2969:
case 3415:
case 3683:
case 3776:
case 4035:
case 3350:
case 997:
case 227:
case 1695:
case 2985:
case 2861:
case 3224:
case 2967:
case 2250:
case 2763:
case 2090:
case 530:
case 1481:
case 461:
case 3934:
case 1213:
case 1051:
case 1790:
case 56:
case 1063:
case 2774:
case 2308:
case 982:
case 2678:
case 1130:
case 738:
case 1647:
case 3847:
case 3132:
case 3343:
case 2853:
case 3941:
case 4086:
case 3792:
case 3099:
case 1810:
case 2936:
case 99:
case 1955:
case 2586:
case 3208:
case 3492:
case 283:
case 2081:
case 2359:
case 2226:
case 3522:
case 1490:
case 435:
case 211:
case 3158:
case 644:
case 601:
case 1962:
case 1483:
case 2699:
case 590:
case 82:
case 1539:
case 1053:
case 3795:
case 3334:
case 1293:
case 1211:
case 1989:
case 1502:
case 2184:
case 3815:
case 1127:
case 3269:
case 2385:
case 2863:
case 555:
case 1129:
case 1965:
case 3681:
case 1676:
case 3876:
case 1952:
case 883:
case 1987:
case 3285:
case 2697:
case 2032:
case 3398:
case 3464:
case 3323:
case 2739:
case 419:
case 2437:
case 2856:
case 984:
case 1994:
case 1314:
case 3231:
case 770:
case 1115:
case 2009:
case 672:
case 2684:
case 3181:
case 3542:
case 3829:
case 2007:
case 63:
case 2402:
case 301:
case 9:
case 2223:
case 642:
case 344:
case 3517:
case 2298:
case 861:
case 2058:
case 1540:
case 3668:
case 2583:
case 1868:
case 909:
case 1176:
case 2933:
case 2737:
case 2866:
case 3084:
case 3471:
case 1551:
case 1630:
case 3454:
case 51:
case 3110:
case 1296:
case 2420:
case 1248:
case 1486:
case 1832:
case 1303:
case 1901:
case 1786:
case 521:
case 697:
case 3377:
case 261:
case 850:
case 2405:
case 1149:
case 3607:
case 1807:
case 4090:
case 2295:
case 1036:
case 167:
case 387:
case 3976:
case 2485:
case 4014:
case 977:
case 130:
case 1887:
case 1852:
case 1383:
case 1531:
case 1650:
case 1981:
case 1219:
case 3434:
case 1706:
case 706:
case 1838:
case 3638:
case 2361:
case 2963:
case 1242:
case 1406:
case 3734:
case 3915:
case 3004:
case 3689:
case 2172:
case 580:
case 2514:
case 3240:
case 222:
case 3013:
case 3091:
case 3662:
case 3949:
case 2087:
case 2292:
case 3101:
case 2052:
case 258:
case 705:
case 1024:
case 2457:
case 98:
case 2482:
case 2836:
case 562:
case 475:
case 748:
case 3655:
case 2708:
case 2374:
case 1390:
case 2089:
case 332:
case 2604:
case 634:
case 2757:
case 2953:
case 1245:
case 992:
case 3726:
case 2038:
case 2616:
case 3205:
case 1386:
case 687:
case 1160:
case 3155:
case 1033:
case 1559:
case 3479:
case 3354:
case 178:
case 1582:
case 885:
case 3072:
case 3220:
case 1508:
case 3779:
case 1070:
case 1222:
case 598:
case 1403:
case 286:
case 3580:
case 1909:
case 3930:
case 1968:
case 67:
case 3187:
case 2833:
case 3528:
case 564:
case 3239:
case 3593:
case 3364:
case 2113:
case 3498:
case 1569:
case 2506:
case 3202:
case 2191:
case 224:
case 3288:
case 2337:
case 3446:
case 3927:
case 3723:
case 1225:
case 4006:
case 3798:
case 3746:
case 433:
case 106:
case 1894:
case 886:
case 767:
case 1585:
case 1714:
case 3237:
case 2388:
case 2672:
case 3818:
case 3821:
case 334:
case 3075:
case 2430:
case 171:
case 4078:
case 3466:
case 2025:
case 961:
case 810:
case 3344:
case 1549:
case 1822:
case 2854:
case 3820:
case 566:
case 1316:
case 2686:
case 1948:
case 2977:
case 809:
case 336:
case 2979:
case 591:
case 2000:
case 3766:
case 104:
case 1375:
case 141:
case 996:
case 884:
case 2578:
case 1174:
case 3805:
case 619:
case 3086:
case 2864:
case 2597:
case 209:
case 673:
case 1576:
case 3837:
case 3333:
case 1294:
case 210:
case 3581:
case 600:
case 2270:
case 2022:
case 1825:
case 3117:
case 950:
case 2427:
case 3888:
case 1688:
case 3119:
case 1372:
case 2923:
case 2727:
case 335:
case 2998:
case 442:
case 3839:
case 1161:
case 995:
case 3756:
case 2599:
case 2233:
case 1137:
case 520:
case 2776:
case 89:
case 3840:
case 2683:
case 3568:
case 1313:
case 1993:
case 1911:
case 1928:
case 1289:
case 2415:
case 851:
case 4084:
case 3125:
case 3617:
case 3969:
case 515:
case 1842:
case 3324:
case 260:
case 1527:
case 2934:
case 102:
case 1819:
case 1188:
case 3967:
case 3535:
case 1799:
case 2476:
case 3861:
case 636:
case 1287:
case 1661:
case 3100:
case 1497:
case 2042:
case 300:
case 2412:
case 3122:
case 911:
case 2017:
case 837:
case 3558:
case 3645:
case 1478:
case 474:
case 3453:
case 983:
case 319:
case 3241:
case 2186:
case 3083:
case 516:
case 3959:
case 2236:
case 3753:
case 3260:
case 1095:
case 343:
case 2690:
case 771:
case 2019:
case 2926:
case 2712:
case 3874:
case 1674:
case 444:
case 3509:
case 1304:
case 1778:
case 401:
case 2341:
case 1651:
case 2943:
case 3851:
case 635:
case 1262:
case 1185:
case 985:
case 2614:
case 47:
case 3589:
case 70:
case 375:
case 4013:
case 2823:
case 3902:
case 4091:
case 2846:
case 3229:
case 3538:
case 3770:
case 1925:
case 2513:
case 1169:
case 3565:
case 633:
case 308:
case 44:
case 3552:
case 3587:
case 3733:
case 1235:
case 3111:
case 1077:
case 2048:
case 3193:
case 2418:
case 2964:
case 3905:
case 376:
case 1207:
case 1046:
case 513:
case 1416:
case 1258:
case 1098:
case 579:
case 894:
case 1157:
case 1541:
case 581:
case 1108:
case 2879:
case 3648:
case 3555:
case 552:
case 1232:
case 2877:
case 3920:
case 1922:
case 346:
case 549:
case 2971:
case 1034:
case 2843:
case 1880:
case 563:
case 2992:
case 1608:
case 3808:
case 223:
case 2347:
case 2575:
case 1378:
case 1704:
case 2349:
case 1210:
case 2441:
case 2028:
case 434:
case 2253:
case 2760:
case 645:
case 958:
case 877:
case 3247:
case 333:
case 3212:
case 2516:
case 2995:
case 2315:
case 3276:
case 757:
case 2450:
case 1667:
case 3594:
case 1399:
case 892:
case 1491:
case 2834:
case 2750:
case 646:
case 1942:
case 1791:
case 3215:
case 1713:
case 1917:
case 1893:
case 554:
case 1828:
case 3611:
case 1811:
case 277:
case 10:
case 3724:
case 818:
case 88:
case 4039:
case 1697:
case 3897:
case 613:
case 1740:
case 2987:
case 795:
case 2676:
case 2129:
case 3742:
case 270:
case 2965:
case 3419:
case 3913:
case 1234:
case 3393:
case 3311:
case 3991:
case 3328:
case 3719:
case 3663:
case 902:
case 2127:
case 2615:
case 2502:
case 3206:
case 3417:
case 2211:
case 2228:
case 1761:
case 1440:
case 1367:
case 628:
case 4037:
case 3899:
case 3745:
case 1243:
case 3571:
case 796:
case 2649:
case 1226:
case 870:
case 1474:
case 4005:
case 1081:
case 1359:
case 3076:
case 183:
case 2955:
case 1586:
case 1936:
case 2173:
case 533:
case 2810:
case 3653:
case 1853:
case 3380:
case 2647:
case 1382:
case 1357:
case 2612:
case 1308:
case 761:
case 2063:
case 2807:
case 1405:
case 3916:
case 2149:
case 3396:
case 414:
case 379:
case 72:
case 989:
case 1944:
case 2901:
case 313:
case 2303:
case 576:
case 3975:
case 1277:
case 2486:
case 2248:
case 2296:
case 546:
case 1420:
case 480:
case 904:
case 711:
case 196:
case 941:
case 1705:
case 2112:
case 2630:
case 2809:
case 1866:
case 3666:
case 2551:
case 2176:
case 1933:
case 3214:
case 2540:
case 2868:
case 663:
case 1583:
case 1197:
case 1439:
case 3400:
case 1298:
case 462:
case 1223:
case 150:
case 1007:
case 1246:
case 3884:
case 3425:
case 2066:
case 3030:
case 1009:
case 2627:
case 508:
case 2314:
case 3972:
case 1199:
case 2835:
case 2561:
case 1856:
case 195:
case 3595:
case 1032:
case 316:
case 519:
case 1782:
case 665:
case 1089:
case 3579:
case 1374:
case 867:
case 2660:
case 3577:
case 3636:
case 193:
case 1759:
case 2024:
case 1087:
case 1052:
case 158:
case 3144:
case 830:
case 1116:
case 3050:
case 1503:
case 3290:
case 786:
case 122:
case 3480:
case 3283:
case 488:
case 3999:
case 1172:
case 3319:
case 2118:
case 2121:
case 3428:
case 3411:
case 315:
case 2406:
case 2217:
case 3598:
case 320:
case 3546:
case 2242:
case 666:
case 4031:
case 724:
case 1361:
case 421:
case 1769:
case 1613:
case 639:
case 3891:
case 1691:
case 691:
case 2706:
case 2981:
case 2865:
case 2383:
case 1340:
case 1467:
case 65:
case 3342:
case 1824:
case 1485:
case 230:
case 785:
case 3133:
case 90:
case 267:
case 3711:
case 3793:
case 1295:
case 3317:
case 3060:
case 2621:
case 2618:
case 829:
case 1302:
case 2935:
case 1388:
case 3872:
case 848:
case 3670:
case 616:
case 2894:
case 3984:
case 2225:
case 3300:
case 1731:
case 2150:
case 1191:
case 124:
case 1113:
case 2200:
case 3325:
case 3124:
case 1833:
case 2414:
case 2909:
case 1271:
case 186:
case 366:
case 1254:
case 1094:
case 2222:
case 2070:
case 2508:
case 3496:
case 4059:
case 1305:
case 3021:
case 2932:
case 3018:
case 615:
case 758:
case 2557:
case 793:
case 2141:
case 3286:
case 205:
case 2582:
case 4008:
case 3644:
case 931:
case 1844:
case 278:
case 999:
case 3322:
case 2559:
case 2033:
case 35:
case 3136:
case 2160:
case 817:
case 2386:
case 2907:
case 3816:
case 463:
case 1233:
case 3468:
case 2161:
case 184:
case 1998:
case 364:
case 662:
case 1923:
case 760:
case 737:
case 3563:
case 2372:
case 3005:
case 1427:
case 871:
case 534:
case 2825:
case 1:
case 1022:
case 110:
case 2294:
case 1729:
case 2054:
case 2637:
case 1183:
case 125:
case 109:
case 889:
case 1190:
case 751:
case 3216:
case 1578:
case 3709:
case 3002:
case 2375:
case 3732:
case 3553:
case 1473:
case 3039:
case 2201:
case 3275:
case 1977:
case 2948:
case 2316:
case 398:
case 2620:
case 353:
case 1854:
case 3707:
case 126:
case 782:
case 3301:
case 680:
case 4012:
case 2549:
case 3671:
case 271:
case 1025:
case 454:
case 4047:
case 3758:
case 2980:
case 1747:
case 1943:
case 802:
case 3566:
case 2262:
case 2778:
case 2304:
case 2530:
case 182:
case 1341:
case 726:
case 1926:
case 1712:
case 2674:
case 3890:
case 1690:
case 57:
case 3710:
case 1892:
case 2095:
case 4073:
case 19:
case 2120:
case 3410:
case 3204:
case 1186:
case 2845:
case 4030:
case 3355:
case 3171:
case 151:
case 1749:
case 3154:
case 1042:
case 1412:
case 479:
case 2139:
case 3695:
case 1895:
case 2252:
case 2661:
case 2287:
case 3338:
case 1224:
case 2819:
case 2265:
case 2188:
case 940:
case 2527:
case 1934:
case 202:
case 7:
case 587:
case 612:
case 1584:
case 3291:
case 2529:
case 380:
case 3781:
case 784:
case 452:
case 3906:
case 970:
case 1415:
case 137:
case 2391:
case 2928:
case 903:
case 449:
case 2313:
case 2993:
case 3164:
case 2499:
case 653:
case 1683:
case 2640:
case 3883:
case 3365:
case 1776:
case 1971:
case 1373:
case 1266:
case 792:
case 3803:
case 1603:
case 420:
case 3031:
case 2922:
case 2716:
case 168:
case 3701:
case 2159:
case 3307:
case 2232:
case 3677:
case 3358:
case 231:
case 2560:
case 857:
case 2848:
case 978:
case 3986:
case 415:
case 2108:
case 929:
case 3679:
case 3401:
case 948:
case 78:
case 4060:
case 2182:
case 2023:
case 321:
case 3143:
case 2098:
case 2416:
case 1048:
case 831:
case 257:
case 574:
case 2077:
case 917:
case 2235:
case 747:
case 1329:
case 1256:
case 66:
case 2631:
case 3494:
case 3284:
case 1513:
case 2169:
case 1846:
case 3646:
case 2167:
case 906:
case 1898:
case 1327:
case 501:
case 407:
case 1718:
case 2772:
case 2185:
case 61:
case 3381:
case 688:
case 2893:
case 3489:
case 2669:
case 2397:
case 3806:
case 3438:
case 1750:
case 1376:
case 439:
case 1834:
case 3634:
case 3123:
case 3198:
case 2413:
case 621:
case 1080:
case 597:
case 3465:
case 3570:
case 45:
case 3452:
case 1572:
case 3487:
case 1114:
case 3789:
case 2518:
case 1315:
case 355:
case 147:
case 1516:
case 1103:
case 572:
case 3755:
case 3177:
case 2404:
case 1028:
case 2210:
case 80:
case 118:
case 3544:
case 2682:
case 2704:
case 2657:
case 1575:
case 3455:
case 768:
case 542:
case 123:
case 1312:
case 3085:
case 3626:
case 1826:
case 3643:
case 192:
case 559:
case 2034:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752872402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,];
var gg_b = "1752872402/";

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
