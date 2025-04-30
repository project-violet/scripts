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
case 3923:
case 728:
case 1186:
case 2018:
case 1979:
case 1864:
case 1290:
case 1456:
case 2958:
case 2357:
case 1524:
case 188:
case 1759:
case 767:
case 4078:
case 943:
case 3213:
case 2461:
case 1704:
case 3678:
case 3339:
case 233:
case 1952:
case 780:
case 1772:
case 3288:
case 714:
case 3518:
case 1662:
case 2284:
case 2602:
case 837:
case 226:
case 4064:
case 1730:
case 2674:
case 3156:
case 2764:
case 1448:
case 3591:
case 1401:
case 2252:
case 3355:
case 278:
case 2859:
case 3909:
case 1735:
case 2091:
case 2279:
case 2872:
case 327:
case 643:
case 2990:
case 1553:
case 3664:
case 608:
case 2022:
case 508:
case 3954:
case 368:
case 3311:
case 2144:
case 3614:
case 308:
case 1041:
case 1344:
case 79:
case 668:
case 3064:
case 4036:
case 3574:
case 1753:
case 2736:
case 627:
case 3929:
case 2691:
case 2439:
case 1194:
case 3187:
case 585:
case 1945:
case 3457:
case 2714:
case 1530:
case 427:
case 685:
case 1628:
case 2498:
case 3589:
case 3812:
case 3791:
case 1062:
case 2853:
case 3783:
case 3903:
case 1836:
case 2245:
case 113:
case 846:
case 1504:
case 3121:
case 191:
case 2411:
case 3263:
case 3192:
case 105:
case 1572:
case 2450:
case 2683:
case 2240:
case 1559:
case 2578:
case 1724:
case 927:
case 2273:
case 2068:
case 122:
case 2455:
case 2185:
case 1487:
case 2618:
case 782:
case 1285:
case 1515:
case 1994:
case 3129:
case 2566:
case 2826:
case 3593:
case 1390:
case 4016:
case 1403:
case 738:
case 3867:
case 2716:
case 546:
case 1800:
case 2607:
case 71:
case 1551:
case 3576:
case 189:
case 1395:
case 1643:
case 1196:
case 1510:
case 3388:
case 3616:
case 2093:
case 3066:
case 1805:
case 130:
case 1670:
case 3707:
case 2447:
case 223:
case 1145:
case 3987:
case 2865:
case 236:
case 2700:
case 111:
case 2384:
case 1049:
case 1429:
case 3255:
case 2352:
case 3473:
case 369:
case 509:
case 1726:
case 868:
case 3600:
case 1358:
case 1777:
case 337:
case 2520:
case 3445:
case 1017:
case 409:
case 946:
case 2463:
case 4005:
case 3581:
case 1834:
case 279:
case 1506:
case 3496:
case 885:
case 2720:
case 2413:
case 2038:
case 1244:
case 3625:
case 2505:
case 3599:
case 259:
case 469:
case 2851:
case 174:
case 1409:
case 537:
case 1067:
case 2158:
case 941:
case 3000:
case 1986:
case 3948:
case 794:
case 2271:
case 437:
case 3620:
case 2725:
case 309:
case 2099:
case 1649:
case 1454:
case 2681:
case 1032:
case 1184:
case 231:
case 3538:
case 1070:
case 284:
case 2534:
case 2345:
case 3849:
case 3666:
case 1971:
case 2693:
case 1710:
case 2146:
case 3479:
case 2806:
case 1820:
case 3507:
case 441:
case 1560:
case 2766:
case 2676:
case 2007:
case 1715:
case 2340:
case 2469:
case 641:
case 346:
case 1075:
case 2190:
case 2286:
case 132:
case 1825:
case 2373:
case 2334:
case 1204:
case 3073:
case 1795:
case 3268:
case 3713:
case 3908:
case 2110:
case 3040:
case 3788:
case 2596:
case 3823:
case 863:
case 1879:
case 3941:
case 170:
case 198:
case 2481:
case 1360:
case 3563:
case 1852:
case 2063:
case 1790:
case 3096:
case 790:
case 778:
case 2316:
case 2688:
case 961:
case 186:
case 152:
case 449:
case 2573:
case 726:
case 1609:
case 1884:
case 661:
case 2669:
case 733:
case 2846:
case 2106:
case 280:
case 0:
case 2959:
case 3809:
case 301:
case 214:
case 2019:
case 3399:
case 3547:
case 1120:
case 3274:
case 3962:
case 557:
case 4079:
case 3679:
case 1230:
case 2493:
case 457:
case 3769:
case 2047:
case 3117:
case 4052:
case 3466:
case 3519:
case 461:
case 251:
case 2427:
case 1326:
case 2264:
case 949:
case 3338:
case 2972:
case 406:
case 256:
case 2126:
case 3569:
case 1443:
case 477:
case 495:
case 2584:
case 1097:
case 282:
case 2325:
case 3222:
case 2647:
case 2552:
case 3719:
case 1470:
case 3167:
case 1023:
case 12:
case 207:
case 3079:
case 1100:
case 2579:
case 1896:
case 2320:
case 1558:
case 1603:
case 3052:
case 3434:
case 3912:
case 2619:
case 666:
case 1105:
case 2407:
case 3381:
case 3084:
case 134:
case 1845:
case 2236:
case 577:
case 1475:
case 601:
case 306:
case 3645:
case 3170:
case 1224:
case 966:
case 901:
case 721:
case 3400:
case 758:
case 995:
case 2165:
case 1467:
case 2438:
case 1936:
case 3696:
case 3928:
case 3731:
case 172:
case 2160:
case 3376:
case 1432:
case 1914:
case 1351:
case 2745:
case 3405:
case 1310:
case 3283:
case 803:
case 792:
case 3640:
case 3175:
case 2796:
case 3218:
case 1546:
case 1:
case 2499:
case 150:
case 2631:
case 4045:
case 1048:
case 1900:
case 3967:
case 779:
case 1304:
case 1001:
case 403:
case 3368:
case 2234:
case 3542:
case 3657:
case 1260:
case 1894:
case 3436:
case 1428:
case 648:
case 615:
case 2977:
case 3414:
case 3932:
case 1692:
case 1359:
case 2422:
case 548:
case 1785:
case 2491:
case 1621:
case 4057:
case 736:
case 2639:
case 2124:
case 503:
case 603:
case 3302:
case 3561:
case 2483:
case 723:
case 2153:
case 915:
case 2880:
case 3750:
case 3374:
case 948:
case 3299:
case 3892:
case 229:
case 3711:
case 4094:
case 3970:
case 877:
case 1934:
case 895:
case 2571:
case 1330:
case 801:
case 3238:
case 2364:
case 712:
case 1114:
case 3755:
case 238:
case 2885:
case 857:
case 3322:
case 118:
case 3141:
case 2011:
case 2661:
case 3733:
case 2050:
case 1886:
case 1164:
case 3108:
case 13:
case 4071:
case 1462:
case 3555:
case 806:
case 2594:
case 1087:
case 2468:
case 1744:
case 3671:
case 2633:
case 1656:
case 3761:
case 1206:
case 963:
case 3550:
case 784:
case 747:
case 3511:
case 124:
case 2135:
case 3293:
case 4086:
case 663:
case 1920:
case 303:
case 1585:
case 2642:
case 2557:
case 294:
case 1441:
case 3949:
case 2489:
case 1092:
case 315:
case 2159:
case 2906:
case 1408:
case 849:
case 3598:
case 2172:
case 1210:
case 1925:
case 3742:
case 3137:
case 2104:
case 463:
case 1601:
case 2844:
case 3318:
case 1648:
case 1348:
case 3386:
case 1947:
case 3185:
case 433:
case 3068:
case 3578:
case 847:
case 1712:
case 155:
case 810:
case 1072:
case 38:
case 3683:
case 3450:
case 4083:
case 3296:
case 2718:
case 990:
case 2192:
case 2078:
case 2263:
case 757:
case 3411:
case 1537:
case 706:
case 533:
case 926:
case 2494:
case 1624:
case 3853:
case 4018:
case 761:
case 2828:
case 3002:
case 2791:
case 321:
case 2219:
case 1963:
case 4022:
case 933:
case 2636:
case 1653:
case 1508:
case 3074:
case 1356:
case 3714:
case 2457:
case 4091:
case 578:
case 590:
case 490:
case 2247:
case 243:
case 2929:
case 3736:
case 1030:
case 1883:
case 16:
case 1728:
case 2574:
case 1480:
case 2361:
case 1818:
case 749:
case 426:
case 1111:
case 2614:
case 2014:
case 4002:
case 268:
case 421:
case 458:
case 3804:
case 3022:
case 3689:
case 2774:
case 2664:
case 3536:
case 3990:
case 3872:
case 1223:
case 836:
case 3442:
case 2702:
case 592:
case 3091:
case 2789:
case 2355:
case 378:
case 390:
case 2591:
case 492:
case 1988:
case 2156:
case 3674:
case 2269:
case 658:
case 326:
case 2862:
case 3284:
case 921:
case 2288:
case 1802:
case 1024:
case 3835:
case 333:
case 766:
case 2678:
case 1444:
case 812:
case 48:
case 3461:
case 1969:
case 2583:
case 992:
case 3083:
case 58:
case 823:
case 1672:
case 1762:
case 2997:
case 1889:
case 175:
case 1512:
case 3357:
case 2101:
case 2808:
case 3018:
case 2923:
case 2471:
case 197:
case 423:
case 3373:
case 2182:
case 2034:
case 512:
case 612:
case 3286:
case 3190:
case 2793:
case 1961:
case 3340:
case 3007:
case 3944:
case 1651:
case 2484:
case 1060:
case 2363:
case 4076:
case 2507:
case 1113:
case 3396:
case 1575:
case 2956:
case 1933:
case 1458:
case 623:
case 1188:
case 347:
case 412:
case 3345:
case 3534:
case 384:
case 2776:
case 310:
case 936:
case 1615:
case 88:
case 523:
case 1893:
case 1077:
case 536:
case 2538:
case 703:
case 892:
case 331:
case 479:
case 2319:
case 3099:
case 209:
case 3725:
case 1827:
case 1567:
case 715:
case 3500:
case 748:
case 2000:
case 3488:
case 1446:
case 2123:
case 3158:
case 858:
case 821:
case 1749:
case 359:
case 1495:
case 3720:
case 2261:
case 1626:
case 431:
case 2211:
case 1549:
case 3463:
case 1397:
case 1732:
case 3985:
case 826:
case 3705:
case 3860:
case 3294:
case 2875:
case 237:
case 2600:
case 659:
case 2020:
case 3431:
case 1287:
case 142:
case 2921:
case 2473:
case 3352:
case 3081:
case 947:
case 104:
case 531:
case 4038:
case 2369:
case 3980:
case 631:
case 1677:
case 984:
case 510:
case 2987:
case 1015:
case 323:
case 2707:
case 3447:
case 647:
case 1221:
case 547:
case 1775:
case 2616:
case 1665:
case 931:
case 3877:
case 2313:
case 4007:
case 1292:
case 1163:
case 1051:
case 1354:
case 3419:
case 1770:
case 241:
case 3607:
case 1911:
case 959:
case 1950:
case 3716:
case 1010:
case 833:
case 2867:
case 1743:
case 3826:
case 2129:
case 3257:
case 484:
case 1382:
case 410:
case 3631:
case 1509:
case 2763:
case 3499:
case 249:
case 1991:
case 2673:
case 162:
case 39:
case 951:
case 2218:
case 894:
case 1090:
case 2175:
case 743:
case 2283:
case 2376:
case 3773:
case 1095:
case 3663:
case 2327:
case 2731:
case 2143:
case 853:
case 1426:
case 2696:
case 939:
case 3953:
case 3165:
case 980:
case 1046:
case 3740:
case 914:
case 1819:
case 1582:
case 3366:
case 100:
case 4031:
case 206:
case 1228:
case 614:
case 3069:
case 680:
case 580:
case 2084:
case 2381:
case 1460:
case 1349:
case 428:
case 451:
case 514:
case 2912:
case 1199:
case 4047:
case 539:
case 3320:
case 257:
case 3579:
case 2416:
case 307:
case 576:
case 439:
case 1317:
case 667:
case 2222:
case 3325:
case 4019:
case 414:
case 2829:
case 528:
case 480:
case 3214:
case 1138:
case 1703:
case 1983:
case 651:
case 356:
case 628:
case 4069:
case 2338:
case 682:
case 3264:
case 3890:
case 3427:
case 2882:
case 3752:
case 656:
case 2289:
case 2519:
case 582:
case 3784:
case 607:
case 571:
case 671:
case 507:
case 367:
case 1813:
case 838:
case 2962:
case 1797:
case 3476:
case 482:
case 1332:
case 1181:
case 314:
case 201:
case 3959:
case 81:
case 2202:
case 1451:
case 2684:
case 380:
case 1410:
case 3106:
case 1723:
case 3846:
case 456:
case 1754:
case 2531:
case 2045:
case 3115:
case 160:
case 1529:
case 3573:
case 49:
case 1869:
case 1646:
case 3688:
case 873:
case 1974:
case 3316:
case 3540:
case 2096:
case 3613:
case 3278:
case 3063:
case 1782:
case 125:
case 1127:
case 3151:
case 2307:
case 1709:
case 1176:
case 727:
case 144:
case 1237:
case 187:
case 2788:
case 2908:
case 2713:
case 2420:
case 4088:
case 3930:
case 59:
case 2073:
case 3031:
case 3474:
case 2318:
case 3844:
case 3104:
case 1521:
case 1168:
case 2137:
case 1435:
case 2742:
case 673:
case 3172:
case 709:
case 1748:
case 1080:
case 1833:
case 2464:
case 89:
case 2949:
case 1701:
case 394:
case 1981:
case 473:
case 3266:
case 3557:
case 3039:
case 203:
case 2162:
case 1102:
case 1927:
case 1842:
case 2281:
case 2511:
case 3135:
case 871:
case 3336:
case 1328:
case 3220:
case 3633:
case 882:
case 1993:
case 2671:
case 41:
case 3055:
case 529:
case 856:
case 3594:
case 2391:
case 1217:
case 746:
case 429:
case 2555:
case 973:
case 4033:
case 2108:
case 3910:
case 3771:
case 3050:
case 2848:
case 2733:
case 2478:
case 1189:
case 1976:
case 3314:
case 2141:
case 1459:
case 2801:
case 538:
case 3951:
case 3885:
case 338:
case 1044:
case 1341:
case 2389:
case 1787:
case 1907:
case 3364:
case 953:
case 2238:
case 814:
case 1556:
case 2533:
case 31:
case 3571:
case 3655:
case 2299:
case 3418:
case 2374:
case 2071:
case 3033:
case 2750:
case 3880:
case 828:
case 3965:
case 3153:
case 4050:
case 2943:
case 2561:
case 2821:
case 2302:
case 4011:
case 14:
case 3216:
case 2798:
case 263:
case 3042:
case 3491:
case 135:
case 1855:
case 2414:
case 3378:
case 694:
case 1243:
case 3926:
case 3698:
case 1938:
case 2436:
case 1721:
case 737:
case 2207:
case 2542:
case 2657:
case 3234:
case 2368:
case 4039:
case 553:
case 2967:
case 1118:
case 1850:
case 94:
case 1135:
case 2656:
case 935:
case 2966:
case 1055:
case 2744:
case 3404:
case 2087:
case 3217:
case 3587:
case 2462:
case 23:
case 2164:
case 1910:
case 1661:
case 3756:
case 1011:
case 1314:
case 1951:
case 3644:
case 3861:
case 1474:
case 3085:
case 2601:
case 1844:
case 3168:
case 3521:
case 1104:
case 1402:
case 2580:
case 774:
case 1098:
case 800:
case 2871:
case 635:
case 1906:
case 2408:
case 1786:
case 1159:
case 3981:
case 2441:
case 2178:
case 2092:
case 1642:
case 64:
case 2021:
case 2324:
case 716:
case 3312:
case 54:
case 1216:
case 711:
case 1586:
case 3362:
case 844:
case 1124:
case 887:
case 299:
case 1491:
case 2621:
case 1042:
case 2692:
case 2359:
case 3855:
case 1757:
case 3680:
case 3243:
case 1698:
case 2428:
case 3183:
case 3275:
case 4080:
case 3453:
case 3938:
case 2304:
case 2001:
case 3792:
case 3850:
case 3118:
case 1611:
case 3907:
case 1650:
case 1364:
case 1061:
case 2226:
case 2330:
case 3898:
case 2412:
case 3424:
case 2687:
case 789:
case 2916:
case 2056:
case 2136:
case 730:
case 1483:
case 1205:
case 1794:
case 3232:
case 2544:
case 2335:
case 3839:
case 3228:
case 1236:
case 1177:
case 2475:
case 960:
case 3597:
case 2105:
case 219:
case 1924:
case 2558:
case 2603:
case 925:
case 1579:
case 2896:
case 3523:
case 22:
case 944:
case 3465:
case 2840:
case 1647:
case 182:
case 1325:
case 2873:
case 1584:
case 2097:
case 1126:
case 3983:
case 902:
case 3509:
case 460:
case 3991:
case 2:
case 1499:
case 3090:
case 2310:
case 587:
case 3922:
case 3107:
case 1160:
case 2432:
case 3847:
case 272:
case 1773:
case 3095:
case 625:
case 1438:
case 2936:
case 660:
case 2590:
case 1088:
case 3819:
case 402:
case 560:
case 300:
case 77:
case 2009:
case 360:
case 2417:
case 500:
case 252:
case 2166:
case 3370:
case 1573:
case 462:
case 3646:
case 1688:
case 3869:
case 286:
case 3262:
case 1316:
case 3974:
case 4090:
case 3343:
case 2790:
case 3695:
case 2259:
case 3782:
case 1151:
case 270:
case 344:
case 3237:
case 298:
case 1481:
case 3989:
case 3176:
case 387:
case 3375:
case 2879:
case 1110:
case 3690:
case 4046:
case 2682:
case 2795:
case 302:
case 1031:
case 1334:
case 962:
case 2697:
case 1752:
case 151:
case 3415:
case 1300:
case 3658:
case 2230:
case 2623:
case 2120:
case 2003:
case 765:
case 139:
case 1895:
case 3181:
case 3332:
case 2978:
case 1305:
case 180:
case 3723:
case 1779:
case 720:
case 2758:
case 3888:
case 1846:
case 604:
case 3893:
case 216:
case 3606:
case 2184:
case 131:
case 1815:
case 2649:
case 504:
case 3717:
case 542:
case 2482:
case 3827:
case 2152:
case 3256:
case 3490:
case 3303:
case 642:
case 1271:
case 1488:
case 2986:
case 1810:
case 1158:
case 1851:
case 274:
case 2617:
case 3876:
case 159:
case 404:
case 3532:
case 2577:
case 4006:
case 1038:
case 1720:
case 3026:
case 1413:
case 232:
case 2825:
case 1373:
case 718:
case 2565:
case 3610:
case 3543:
case 1469:
case 1340:
case 1676:
case 1007:
case 2715:
case 73:
case 3060:
case 1944:
case 2497:
case 942:
case 3113:
case 2820:
case 1806:
case 2971:
case 904:
case 724:
case 1146:
case 3881:
case 184:
case 1534:
case 1345:
case 3615:
case 2670:
case 1447:
case 2145:
case 123:
case 3221:
case 3309:
case 2760:
case 2805:
case 3955:
case 964:
case 2346:
case 1877:
case 3665:
case 2280:
case 2196:
case 289:
case 3292:
case 3899:
case 1027:
case 897:
case 3660:
case 1607:
case 3950:
case 2800:
case 2675:
case 1716:
case 3743:
case 2390:
case 1257:
case 112:
case 2285:
case 3131:
case 2515:
case 2994:
case 2506:
case 4077:
case 3549:
case 617:
case 3732:
case 1294:
case 1860:
case 2017:
case 3147:
case 540:
case 1379:
case 2358:
case 517:
case 2726:
case 3287:
case 3517:
case 3939:
case 2429:
case 342:
case 564:
case 2632:
case 80:
case 1865:
case 3677:
case 1980:
case 1700:
case 3767:
case 2816:
case 1824:
case 3035:
case 121:
case 2996:
case 3653:
case 27:
case 3203:
case 1074:
case 2530:
case 3356:
case 40:
case 3155:
case 2945:
case 3931:
case 60:
case 192:
case 2421:
case 2973:
case 1691:
case 50:
case 2753:
case 3883:
case 4053:
case 750:
case 3480:
case 975:
case 7:
case 3818:
case 3150:
case 3111:
case 2535:
case 1622:
case 1089:
case 1618:
case 597:
case 3348:
case 3947:
case 2814:
case 1273:
case 3822:
case 222:
case 1455:
case 1578:
case 2724:
case 3891:
case 72:
case 2037:
case 2559:
case 1683:
case 3072:
case 719:
case 291:
case 3537:
case 475:
case 2504:
case 1245:
case 3624:
case 2836:
case 734:
case 2062:
case 497:
case 2246:
case 2662:
case 2772:
case 3024:
case 2012:
case 1835:
case 2704:
case 3444:
case 455:
case 265:
case 2984:
case 3874:
case 2380:
case 3969:
case 4072:
case 296:
case 1083:
case 3762:
case 655:
case 555:
case 2637:
case 2385:
case 1357:
case 2864:
case 1958:
case 397:
case 2979:
case 3297:
case 1689:
case 1804:
case 2641:
case 4035:
case 3528:
case 3161:
case 2608:
case 1536:
case 842:
case 955:
case 798:
case 56:
case 1872:
case 30:
case 1442:
case 2735:
case 3741:
case 2401:
case 1252:
case 190:
case 2171:
case 1764:
case 46:
case 4030:
case 3708:
case 3988:
case 2730:
case 3053:
case 752:
case 126:
case 2028:
case 3913:
case 786:
case 1602:
case 1995:
case 2839:
case 3335:
case 445:
case 524:
case 1302:
case 1943:
case 1128:
case 624:
case 3136:
case 3277:
case 3916:
case 1374:
case 1071:
case 1299:
case 1970:
case 3687:
case 4087:
case 63:
case 2424:
case 1694:
case 3412:
case 2191:
case 2898:
case 53:
case 3330:
case 1975:
case 645:
case 1238:
case 3226:
case 618:
case 2308:
case 3857:
case 2787:
case 518:
case 1755:
case 2044:
case 3114:
case 3900:
case 3048:
case 2118:
case 1086:
case 2850:
case 945:
case 1967:
case 1368:
case 2685:
case 4021:
case 1657:
case 2811:
case 4092:
case 3894:
case 2938:
case 852:
case 3372:
case 2183:
case 3428:
case 742:
case 2243:
case 1932:
case 1887:
case 3785:
case 3359:
case 3692:
case 1112:
case 3621:
case 163:
case 924:
case 704:
case 4048:
case 1293:
case 3920:
case 983:
case 3585:
case 103:
case 3324:
case 3178:
case 3092:
case 1949:
case 2701:
case 148:
case 2981:
case 115:
case 2748:
case 3408:
case 2080:
case 1856:
case 3871:
case 881:
case 740:
case 3210:
case 3580:
case 1742:
case 2435:
case 717:
case 1276:
case 1057:
case 2521:
case 1318:
case 2861:
case 3648:
case 2459:
case 1322:
case 1801:
case 2644:
case 483:
case 1478:
case 2976:
case 1141:
case 3886:
case 1848:
case 2756:
case 819:
case 33:
case 834:
case 1555:
case 1391:
case 2217:
case 3744:
case 3966:
case 1671:
case 2174:
case 1761:
case 3656:
case 683:
case 2328:
case 3206:
case 2472:
case 1550:
case 2842:
case 2249:
case 82:
case 583:
case 2927:
case 2888:
case 3758:
case 177:
case 2451:
case 534:
case 2332:
case 3235:
case 519:
case 2797:
case 1652:
case 1547:
case 2813:
case 4023:
case 42:
case 1962:
case 52:
case 2367:
case 2658:
case 2503:
case 1117:
case 62:
case 1854:
case 1466:
case 2241:
case 1289:
case 797:
case 1519:
case 950:
case 1338:
case 775:
case 1897:
case 550:
case 1268:
case 1073:
case 3204:
case 5:
case 481:
case 1713:
case 2690:
case 1040:
case 1908:
case 899:
case 3964:
case 3879:
case 3272:
case 3449:
case 1563:
case 2709:
case 3360:
case 398:
case 370:
case 2237:
case 92:
case 1941:
case 472:
case 1307:
case 2782:
case 3852:
case 3259:
case 572:
case 3790:
case 672:
case 2343:
case 934:
case 2193:
case 3365:
case 2869:
case 4082:
case 2370:
case 3166:
case 352:
case 450:
case 1045:
case 3609:
case 3224:
case 3009:
case 1645:
case 2819:
case 3315:
case 686:
case 2212:
case 1803:
case 2426:
case 1928:
case 1696:
case 470:
case 498:
case 372:
case 2847:
case 3432:
case 1376:
case 2107:
case 1405:
case 598:
case 570:
case 3351:
case 2922:
case 698:
case 670:
case 1283:
case 3310:
case 3546:
case 1588:
case 3629:
case 3:
case 1673:
case 2991:
case 2509:
case 3873:
case 1222:
case 1829:
case 1719:
case 755:
case 2058:
case 3840:
case 1167:
case 824:
case 2918:
case 1416:
case 998:
case 2523:
case 157:
case 3896:
case 845:
case 3558:
case 3603:
case 1052:
case 1912:
case 1434:
case 2863:
case 161:
case 986:
case 1747:
case 83:
case 3845:
case 334:
case 1381:
case 2460:
case 2349:
case 3253:
case 2228:
case 952:
case 516:
case 2767:
case 1440:
case 2006:
case 2677:
case 1870:
case 3049:
case 2119:
case 1992:
case 616:
case 204:
case 242:
case 1921:
case 1255:
case 2517:
case 393:
case 2287:
case 1020:
case 3777:
case 3358:
case 2323:
case 1875:
case 3667:
case 137:
case 574:
case 3017:
case 2147:
case 1445:
case 2732:
case 3834:
case 1211:
case 2549:
case 1799:
case 416:
case 1250:
case 4070:
case 3994:
case 532:
case 2382:
case 3515:
case 3285:
case 3173:
case 1634:
case 1129:
case 865:
case 1593:
case 2838:
case 2743:
case 632:
case 974:
case 1867:
case 3675:
case 3800:
case 4043:
case 2950:
case 1298:
case 820:
case 2770:
case 1527:
case 2051:
case 2354:
case 3395:
case 2163:
case 1576:
case 3196:
case 3643:
case 888:
case 4075:
case 3280:
case 1313:
case 3346:
case 1388:
case 330:
case 2221:
case 1832:
case 1987:
case 3145:
case 1707:
case 1239:
case 432:
case 1109:
case 1776:
case 3070:
case 2615:
case 1666:
case 1242:
case 2881:
case 1479:
case 3710:
case 911:
case 3971:
case 1956:
case 2933:
case 2458:
case 822:
case 3820:
case 3043:
case 689:
case 589:
case 1507:
case 1363:
case 3560:
case 1817:
case 2651:
case 3715:
case 2961:
case 3075:
case 2610:
case 891:
case 1182:
case 1331:
case 2329:
case 3825:
case 332:
case 654:
case 2495:
case 1197:
case 3244:
case 4049:
case 2876:
case 1599:
case 3617:
case 374:
case 240:
case 1948:
case 1000:
case 3706:
case 217:
case 2303:
case 2490:
case 2256:
case 3152:
case 2827:
case 3482:
case 109:
case 264:
case 3454:
case 511:
case 3649:
case 3184:
case 1319:
case 1538:
case 2606:
case 316:
case 930:
case 611:
case 2169:
case 67:
case 1522:
case 2635:
case 1269:
case 2053:
case 760:
case 1036:
case 3730:
case 4008:
case 2133:
case 1156:
case 854:
case 2708:
case 35:
case 3171:
case 3878:
case 1355:
case 3735:
case 20:
case 2630:
case 811:
case 47:
case 3553:
case 3608:
case 702:
case 893:
case 2528:
case 922:
case 3641:
case 2868:
case 1014:
case 1311:
case 622:
case 3456:
case 3290:
case 2889:
case 3385:
case 2512:
case 2604:
case 3637:
case 2254:
case 405:
case 830:
case 2762:
case 2672:
case 1213:
case 3984:
case 2444:
case 3704:
case 3295:
case 2392:
case 2659:
case 4037:
case 1678:
case 2142:
case 422:
case 1339:
case 3952:
case 97:
case 513:
case 2802:
case 2024:
case 3772:
case 3662:
case 1518:
case 3246:
case 3062:
case 1828:
case 3836:
case 1903:
case 2139:
case 3504:
case 488:
case 1192:
case 1263:
case 2919:
case 2537:
case 391:
case 2059:
case 565:
case 305:
case 665:
case 3572:
case 496:
case 2198:
case 2712:
case 255:
case 3037:
case 2891:
case 4012:
case 2004:
case 588:
case 3157:
case 2822:
case 3814:
case 2947:
case 420:
case 2562:
case 1614:
case 1502:
case 3535:
case 2150:
case 988:
case 762:
case 3008:
case 3940:
case 1361:
case 1064:
case 2030:
case 26:
case 3973:
case 3421:
case 3194:
case 816:
case 143:
case 3945:
case 1722:
case 65:
case 2155:
case 55:
case 2356:
case 1333:
case 3530:
case 1636:
case 2508:
case 2653:
case 2541:
case 2035:
case 1219:
case 2963:
case 1589:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746032401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,];
var gg_b = "1746032401/";

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
