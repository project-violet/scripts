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
case 1129:
case 400:
case 2464:
case 3540:
case 3852:
case 1542:
case 2102:
case 1750:
case 624:
case 1578:
case 3032:
case 3788:
case 2232:
case 333:
case 2181:
case 3306:
case 2955:
case 2842:
case 3067:
case 2550:
case 956:
case 2878:
case 1004:
case 3966:
case 3059:
case 3678:
case 1564:
case 2259:
case 308:
case 194:
case 1115:
case 1033:
case 2186:
case 3642:
case 1640:
case 3296:
case 3839:
case 3739:
case 1979:
case 3961:
case 4031:
case 3211:
case 3452:
case 2864:
case 2688:
case 2764:
case 207:
case 2724:
case 1380:
case 3382:
case 2652:
case 2553:
case 3488:
case 456:
case 2049:
case 854:
case 1450:
case 452:
case 577:
case 1868:
case 2736:
case 751:
case 1828:
case 270:
case 2431:
case 1728:
case 280:
case 836:
case 1684:
case 2836:
case 1768:
case 1893:
case 2225:
case 3025:
case 3256:
case 977:
case 2568:
case 3046:
case 2246:
case 3947:
case 2510:
case 2915:
case 1536:
case 987:
case 3492:
case 7:
case 468:
case 2593:
case 4078:
case 1474:
case 1490:
case 1605:
case 1197:
case 2241:
case 1813:
case 3792:
case 1531:
case 102:
case 3934:
case 1890:
case 1874:
case 2731:
case 1410:
case 1322:
case 487:
case 2969:
case 1362:
case 2513:
case 1468:
case 4064:
case 1117:
case 477:
case 3505:
case 1428:
case 618:
case 1902:
case 3636:
case 2051:
case 1493:
case 3412:
case 3320:
case 968:
case 2574:
case 3251:
case 3360:
case 2590:
case 965:
case 872:
case 2660:
case 1328:
case 2544:
case 1908:
case 292:
case 3127:
case 1234:
case 296:
case 3167:
case 1200:
case 221:
case 423:
case 3898:
case 3554:
case 937:
case 1185:
case 766:
case 1951:
case 3863:
case 3202:
case 3763:
case 3723:
case 523:
case 974:
case 465:
case 1956:
case 4072:
case 2698:
case 910:
case 1015:
case 584:
case 3286:
case 846:
case 1862:
case 1822:
case 842:
case 2086:
case 1247:
case 437:
case 923:
case 660:
case 2537:
case 1203:
case 318:
case 3818:
case 309:
case 1654:
case 229:
case 3860:
case 2196:
case 3718:
case 2583:
case 2933:
case 324:
case 3352:
case 2682:
case 1187:
case 1097:
case 857:
case 2658:
case 2079:
case 3672:
case 3199:
case 197:
case 1883:
case 1783:
case 383:
case 3648:
case 2342:
case 2601:
case 1949:
case 2472:
case 633:
case 1670:
case 3165:
case 2448:
case 225:
case 3406:
case 1017:
case 343:
case 969:
case 2535:
case 3801:
case 2580:
case 1483:
case 2151:
case 2606:
case 2772:
case 263:
case 2848:
case 608:
case 2748:
case 2872:
case 1353:
case 3975:
case 3758:
case 3570:
case 1780:
case 793:
case 3141:
case 569:
case 1835:
case 3858:
case 627:
case 3119:
case 1673:
case 4009:
case 2238:
case 3782:
case 3548:
case 3226:
case 3673:
case 1882:
case 848:
case 2967:
case 316:
case 1038:
case 3991:
case 2255:
case 2473:
case 1975:
case 787:
case 1858:
case 3880:
case 2501:
case 694:
case 2932:
case 1339:
case 2683:
case 3017:
case 2045:
case 2217:
case 1406:
case 2558:
case 2770:
case 2794:
case 5:
case 3949:
case 1125:
case 3670:
case 3694:
case 1165:
case 3883:
case 4:
case 1401:
case 1199:
case 3783:
case 2340:
case 878:
case 2061:
case 1388:
case 2297:
case 2680:
case 3261:
case 3097:
case 3350:
case 959:
case 1458:
case 2773:
case 3480:
case 253:
case 2873:
case 451:
case 1352:
case 2506:
case 1720:
case 1818:
case 752:
case 831:
case 1718:
case 555:
case 2215:
case 3247:
case 2454:
case 1286:
case 2047:
case 66:
case 3762:
case 118:
case 2946:
case 3722:
case 3509:
case 3956:
case 1463:
case 2925:
case 2520:
case 2257:
case 3444:
case 2965:
case 2560:
case 51:
case 2999:
case 3313:
case 602:
case 2305:
case 606:
case 2644:
case 3095:
case 650:
case 2637:
case 3844:
case 1132:
case 1763:
case 3437:
case 1898:
case 2229:
case 3069:
case 3185:
case 3908:
case 2563:
case 455:
case 1312:
case 2523:
case 2034:
case 1418:
case 2662:
case 1127:
case 3368:
case 1281:
case 3328:
case 3310:
case 23:
case 700:
case 3462:
case 2854:
case 2941:
case 3902:
case 1318:
case 1636:
case 2610:
case 1251:
case 2628:
case 1360:
case 2784:
case 1412:
case 881:
case 2592:
case 4007:
case 2971:
case 3410:
case 24:
case 3117:
case 4043:
case 1505:
case 291:
case 2693:
case 1934:
case 1584:
case 306:
case 3155:
case 3790:
case 3774:
case 226:
case 3874:
case 1208:
case 2705:
case 3337:
case 3713:
case 3344:
case 3474:
case 1323:
case 3490:
case 3605:
case 1363:
case 2512:
case 2121:
case 299:
case 3197:
case 2405:
case 2690:
case 958:
case 1398:
case 1903:
case 1046:
case 889:
case 15:
case 1025:
case 841:
case 3893:
case 1065:
case 1712:
case 3793:
case 558:
case 3710:
case 593:
case 27:
case 2354:
case 2077:
case 3277:
case 3810:
case 1382:
case 2539:
case 3157:
case 1249:
case 616:
case 966:
case 2743:
case 875:
case 1358:
case 2807:
case 744:
case 127:
case 737:
case 3640:
case 119:
case 3853:
case 1921:
case 3564:
case 2394:
case 2370:
case 108:
case 2440:
case 1543:
case 3524:
case 2103:
case 562:
case 3115:
case 2233:
case 1291:
case 1067:
case 2134:
case 1439:
case 2204:
case 466:
case 710:
case 2653:
case 2840:
case 3275:
case 133:
case 2075:
case 3542:
case 3607:
case 2314:
case 3195:
case 1788:
case 1664:
case 3750:
case 1624:
case 2230:
case 40:
case 784:
case 1216:
case 3085:
case 1752:
case 1945:
case 2100:
case 774:
case 1852:
case 2443:
case 2691:
case 2759:
case 3667:
case 1475:
case 2973:
case 3491:
case 2467:
case 665:
case 2914:
case 1253:
case 2160:
case 853:
case 3896:
case 3239:
case 2120:
case 2039:
case 3533:
case 3416:
case 1559:
case 377:
case 2264:
case 158:
case 193:
case 3064:
case 712:
case 1630:
case 1685:
case 3849:
case 2616:
case 2432:
case 515:
case 1366:
case 1326:
case 637:
case 3716:
case 2970:
case 3411:
case 2052:
case 2649:
case 2123:
case 684:
case 2163:
case 2611:
case 3449:
case 1527:
case 560:
case 2088:
case 1361:
case 0:
case 1567:
case 2732:
case 2459:
case 2696:
case 3585:
case 3935:
case 3980:
case 1958:
case 45:
case 797:
case 1982:
case 610:
case 368:
case 2727:
case 2278:
case 3891:
case 2242:
case 2867:
case 408:
case 2446:
case 2741:
case 2954:
case 3292:
case 2158:
case 3646:
case 3808:
case 1687:
case 2719:
case 3708:
case 419:
case 1170:
case 933:
case 1194:
case 1998:
case 511:
case 2101:
case 1477:
case 427:
case 2465:
case 3944:
case 1963:
case 1519:
case 3148:
case 3456:
case 352:
case 3172:
case 239:
case 3751:
case 300:
case 2899:
case 2236:
case 2651:
case 1228:
case 411:
case 908:
case 213:
case 1334:
case 2725:
case 2765:
case 3451:
case 2865:
case 4032:
case 1293:
case 1599:
case 2441:
case 3922:
case 166:
case 508:
case 1173:
case 4027:
case 1565:
case 3408:
case 1143:
case 583:
case 2547:
case 3910:
case 1107:
case 3515:
case 924:
case 2602:
case 3308:
case 87:
case 505:
case 3993:
case 706:
case 1669:
case 1803:
case 656:
case 1576:
case 1747:
case 3481:
case 1222:
case 524:
case 2060:
case 905:
case 2020:
case 2681:
case 3351:
case 76:
case 424:
case 822:
case 1054:
case 369:
case 1992:
case 1571:
case 3881:
case 2905:
case 1140:
case 151:
case 249:
case 1615:
case 3356:
case 3142:
case 2686:
case 2325:
case 1734:
case 3178:
case 2365:
case 600:
case 3990:
case 750:
case 3298:
case 1657:
case 281:
case 2476:
case 2098:
case 2188:
case 2534:
case 3802:
case 891:
case 3263:
case 2023:
case 405:
case 1244:
case 2063:
case 794:
case 3201:
case 4076:
case 365:
case 1952:
case 501:
case 1845:
case 1988:
case 1538:
case 3072:
case 3555:
case 1184:
case 2526:
case 2489:
case 2566:
case 3048:
case 337:
case 344:
case 1697:
case 2679:
case 1235:
case 2058:
case 2545:
case 1105:
case 3517:
case 2838:
case 264:
case 3479:
case 1461:
case 3282:
case 1073:
case 374:
case 3638:
case 3316:
case 1426:
case 1761:
case 3779:
case 647:
case 1939:
case 2332:
case 1721:
case 1466:
case 3953:
case 2438:
case 3879:
case 2943:
case 323:
case 2006:
case 401:
case 1375:
case 668:
case 2907:
case 4071:
case 310:
case 1283:
case 3136:
case 1617:
case 2889:
case 909:
case 2367:
case 3597:
case 2789:
case 2521:
case 2561:
case 2645:
case 4095:
case 1391:
case 807:
case 3375:
case 3445:
case 733:
case 4029:
case 2110:
case 3283:
case 3939:
case 828:
case 3466:
case 3426:
case 355:
case 2455:
case 1879:
case 1953:
case 2214:
case 2897:
case 2273:
case 1349:
case 2942:
case 2855:
case 3461:
case 3726:
case 2497:
case 3766:
case 693:
case 3421:
case 1282:
case 3866:
case 3826:
case 2113:
case 3280:
case 3235:
case 2080:
case 144:
case 2621:
case 3697:
case 3105:
case 1311:
case 1555:
case 3538:
case 1072:
case 1396:
case 1201:
case 2333:
case 708:
case 2270:
case 3845:
case 3070:
case 3094:
case 2150:
case 840:
case 912:
case 662:
case 2895:
case 3244:
case 1676:
case 2457:
case 1263:
case 1702:
case 497:
case 3800:
case 2931:
case 2729:
case 2387:
case 1298:
case 1356:
case 2502:
case 516:
case 1142:
case 512:
case 3615:
case 2647:
case 60:
case 1595:
case 1178:
case 3734:
case 1569:
case 3992:
case 1486:
case 3377:
case 1781:
case 1529:
case 3447:
case 3054:
case 1881:
case 3140:
case 3403:
case 1260:
case 1557:
case 1220:
case 814:
case 3434:
case 1009:
case 3576:
case 2715:
case 3747:
case 1481:
case 1786:
case 2634:
case 2022:
case 997:
case 3262:
case 3222:
case 3847:
case 2600:
case 161:
case 1308:
case 870:
case 1402:
case 3400:
case 3695:
case 1164:
case 3237:
case 2936:
case 597:
case 3107:
case 3114:
case 2909:
case 1408:
case 4004:
case 2395:
case 3960:
case 2329:
case 1922:
case 1962:
case 829:
case 594:
case 2787:
case 1619:
case 3173:
case 2887:
case 651:
case 817:
case 3334:
case 3293:
case 1451:
case 22:
case 1036:
case 994:
case 100:
case 2010:
case 1937:
case 1381:
case 2068:
case 3777:
case 2508:
case 821:
case 1148:
case 3923:
case 1751:
case 3084:
case 1456:
case 709:
case 718:
case 3998:
case 1625:
case 1665:
case 3477:
case 3347:
case 1386:
case 3541:
case 2357:
case 272:
case 2074:
case 1646:
case 276:
case 2551:
case 286:
case 830:
case 1708:
case 3005:
case 2205:
case 2180:
case 896:
case 3532:
case 705:
case 3982:
case 1496:
case 1659:
case 2804:
case 2704:
case 502:
case 783:
case 3040:
case 4087:
case 2240:
case 450:
case 3775:
case 773:
case 1585:
case 1530:
case 2948:
case 1504:
case 2144:
case 2397:
case 906:
case 2050:
case 2972:
case 3527:
case 56:
case 3361:
case 1411:
case 863:
case 1816:
case 2885:
case 3630:
case 3685:
case 2596:
case 3366:
case 187:
case 2207:
case 1416:
case 2430:
case 358:
case 393:
case 2137:
case 2243:
case 825:
case 1024:
case 1632:
case 177:
case 402:
case 3253:
case 2549:
case 406:
case 1109:
case 2404:
case 2675:
case 257:
case 2833:
case 1667:
case 550:
case 2511:
case 743:
case 3345:
case 2293:
case 1725:
case 792:
case 113:
case 1799:
case 3028:
case 2546:
case 3068:
case 2228:
case 2777:
case 1106:
case 2877:
case 32:
case 730:
case 20:
case 1236:
case 1419:
case 3395:
case 818:
case 346:
case 2918:
case 721:
case 809:
case 266:
case 1746:
case 2599:
case 3787:
case 1441:
case 386:
case 1719:
case 382:
case 3090:
case 3357:
case 690:
case 2687:
case 372:
case 1182:
case 2274:
case 376:
case 1092:
case 1158:
case 1841:
case 2213:
case 3180:
case 3135:
case 1741:
case 139:
case 3677:
case 3284:
case 1425:
case 495:
case 1465:
case 2477:
case 3315:
case 1101:
case 1499:
case 2541:
case 2998:
case 1231:
case 3397:
case 2567:
case 2321:
case 167:
case 3591:
case 1088:
case 3948:
case 3144:
case 48:
case 704:
case 3830:
case 54:
case 2901:
case 3885:
case 591:
case 1052:
case 47:
case 1970:
case 522:
case 3704:
case 2633:
case 1827:
case 725:
case 1278:
case 654:
case 1389:
case 2982:
case 3804:
case 1767:
case 2958:
case 2775:
case 2154:
case 2040:
case 991:
case 1039:
case 3404:
case 1467:
case 426:
case 1914:
case 1118:
case 824:
case 1427:
case 1973:
case 188:
case 2475:
case 1859:
case 3733:
case 3833:
case 1759:
case 98:
case 1691:
case 1432:
case 883:
case 1338:
case 3355:
case 258:
case 293:
case 1224:
case 2906:
case 58:
case 3430:
case 2007:
case 2861:
case 1438:
case 4034:
case 2821:
case 3214:
case 2589:
case 1332:
case 2721:
case 2761:
case 3330:
case 2655:
case 3666:
case 827:
case 1561:
case 175:
case 1521:
case 2617:
case 3304:
case 354:
case 1907:
case 3110:
case 21:
case 2283:
case 2375:
case 3964:
case 2445:
case 3417:
case 3924:
case 1489:
case 1248:
case 3817:
case 2952:
case 3294:
case 2070:
case 93:
case 2745:
case 833:
case 3978:
case 2826:
case 3755:
case 3942:
case 3497:
case 2421:
case 1838:
case 1545:
case 3113:
case 2280:
case 707:
case 1679:
case 1192:
case 3080:
case 1365:
case 3603:
case 2834:
case 4021:
case 149:
case 2615:
case 4061:
case 3647:
case 770:
case 2140:
case 1905:
case 1500:
case 498:
case 2377:
case 2054:
case 1188:
case 181:
case 1346:
case 1476:
case 1152:
case 3581:
case 3729:
case 1771:
case 3387:
case 2657:
case 860:
case 2:
case 714:
case 171:
case 2700:
case 3829:
case 332:
case 3757:
case 336:
case 3495:
case 2912:
case 3857:
case 1319:
case 3936:
case 3586:
case 3469:
case 1341:
case 672:
case 1776:
case 682:
case 2400:
case 1876:
case 1209:
case 1018:
case 189:
case 3153:
case 4026:
case 1681:
case 1020:
case 1060:
case 4066:
case 2262:
case 2703:
case 3815:
case 2576:
case 2747:
case 553:
case 2803:
case 1062:
case 74:
case 2886:
case 1022:
case 1634:
case 639:
case 791:
case 2481:
case 1153:
case 2218:
case 3209:
case 3060:
case 2220:
case 925:
case 3020:
case 3681:
case 3139:
case 379:
case 1429:
case 3547:
case 904:
case 190:
case 2910:
case 1936:
case 1469:
case 3341:
case 726:
case 722:
case 2671:
case 132:
case 463:
case 1857:
case 3319:
case 1495:
case 525:
case 1600:
case 261:
case 1387:
case 2298:
case 1769:
case 3346:
case 3152:
case 3098:
case 1581:
case 1729:
case 1829:
case 425:
case 2702:
case 2263:
case 3023:
case 2676:
case 1795:
case 3534:
case 3984:
case 2802:
case 77:
case 3905:
case 1415:
case 269:
case 404:
case 2486:
case 802:
case 2569:
case 1254:
case 3325:
case 2974:
case 3365:
case 2595:
case 2990:
case 349:
case 2356:
case 3686:
case 3545:
case 3940:
case 1080:
case 1621:
case 2258:
case 530:
case 3192:
case 3082:
case 1755:
case 1190:
case 2282:
case 1497:
case 429:
case 364:
case 1942:
case 521:
case 3359:
case 1817:
case 2131:
case 2689:
case 3001:
case 1717:
case 345:
case 3526:
case 688:
case 992:
case 2555:
case 2950:
case 3272:
case 996:
case 3907:
case 635:
case 517:
case 2136:
case 1168:
case 223:
case 303:
case 1128:
case 4002:
case 2597:
case 3521:
case 3789:
case 929:
case 375:
case 2391:
case 3112:
case 1193:
case 385:
case 1304:
case 1645:
case 2638:
case 1330:
case 1273:
case 274:
case 3438:
case 496:
case 529:
case 1455:
case 492:
case 2879:
case 2779:
case 1797:
case 2632:
case 3264:
case 277:
case 1137:
case 3224:
case 2064:
case 2811:
case 1243:
case 914:
case 1485:
case 1430:
case 2983:
case 287:
case 2416:
case 440:
case 1596:
case 3432:
case 4051:
case 1355:
case 897:
case 3616:
case 1511:
case 3973:
case 388:
case 3691:
case 514:
case 378:
case 1162:
case 1833:
case 645:
case 2667:
case 1404:
case 2239:
case 1675:
case 3120:
case 3039:
case 2491:
case 2109:
case 3914:
case 2585:
case 816:
case 2980:
case 2530:
case 1433:
case 685:
case 414:
case 812:
case 3459:
case 675:
case 1240:
case 603:
case 3827:
case 2042:
case 3867:
case 3389:
case 1804:
case 2791:
case 3727:
case 268:
case 1830:
case 540:
case 1885:
case 247:
case 480:
case 234:
case 3575:
case 3970:
case 1730:
case 2411:
case 3052:
case 2379:
case 3088:
case 4056:
case 3732:
case 2288:
case 1144:
case 1948:
case 407:
case 4011:
case 3231:
case 2665:
case 689:
case 2699:
case 2172:
case 339:
case 4049:
case 2751:
case 256:
case 3465:
case 2944:
case 3425:
case 3841:
case 3954:
case 1135:
case 2292:
case 1013:
case 3446:
case 3376:
case 428:
case 3741:
case 3719:
case 641:
case 2708:
case 186:
case 3182:
case 2646:
case 1090:
case 3819:
case 1357:
case 2808:
case 69:
case 3846:
case 2619:
case 2962:
case 1329:
case 3577:
case 1395:
case 2408:
case 3419:
case 1909:
case 2641:
case 2302:
case 1556:
case 681:
case 4091:
case 3651:
case 2381:
case 3106:
case 2937:
case 1028:
case 4016:
case 3899:
case 12:
case 320:
case 2451:
case 1093:
case 3825:
case 2856:
case 2890:
case 1008:
case 3166:
case 869:
case 206:
case 2774:
case 326:
case 202:
case 1241:
case 79:
case 3705:
case 1574:
case 779:
case 1995:
case 1590:
case 3784:
case 1309:
case 3884:
case 789:
case 3610:
case 2117:
case 2428:
case 1831:
case 391:
case 2468:
case 3693:
case 1969:
case 3971:
case 34:
case 2410:
case 1731:
case 1929:
case 3484:
case 2793:
case 749:
case 1265:
case 2893:
case 63:
case 3354:
case 957:
case 2684:
case 180:
case 170:
case 1431:
case 37:
case 1736:
case 1692:
case 399:
case 2197:
case 2344:
case 2474:
case 1593:
case 2986:
case 557:
case 771:
case 114:
case 1915:
case 2087:
case 1442:
case 2979:
case 884:
case 1372:
case 486:
case 2853:
case 2753:
case 472:
case 745:
case 1096:
case 4090:
case 92:
case 1186:
case 2033:
case 3233:
case 3147:
case 2564:
case 3394:
case 1259:
case 738:
case 128:
case 810:
case 946:
case 2450:
case 3989:
case 395:
case 2335:
case 3743:
case 107:
case 2380:
case 1688:
case 1011:
case 3707:
case 1824:
case 972:
case 865:
case 2195:
case 1232:
case 2750:
case 2578:
case 976:
case 2643:
case 986:
case 2542:
case 982:
case 653:
case 3314:
case 3100:
case 4068:
case 1464:
case 1424:
case 4028:
case 4010:
case 2169:
case 3407:
case 2085:
case 572:
case 3204:
case 1878:
case 775:
case 442:
case 1550:
case 844:
case 1842:
case 1227:
case 1778:
case 3938:
case 582:
case 1267:
case 3552:
case 436:
case 1748:
case 432:
case 834:
case 1772:
case 1848:
case 3558:
case 2483:
case 1985:
case 1930:
case 2017:
case 3045:
case 3217:
case 3870:
case 4037:
case 3894:
case 2245:
case 3967:
case 1238:
case 2055:
case 2548:
case 2226:
case 3066:
case 1904:
case 3026:
case 2266:
case 2614:
case 4062:
case 4022:
case 2880:
case 1324:
case 2780:
case 868:
case 3714:
case 2996:
case 767:
case 3061:
case 3814:
case 932:
case 3021:
case 936:
case 2350:
case 353:
case 3506:
case 3959:
case 1682:
case 3773:
case 735:
case 125:
case 2949:
case 536:
case 2911:
case 748:
case 3470:
case 2783:
case 2883:
case 3925:
case 1698:
case 3257:
case 2444:
case 2374:
case 2390:
case 800:
case 2509:
case 2956:
case 1149:
case 3518:
case 626:
case 2837:
case 1663:
case 622:
case 3305:
case 1623:
case 1276:
case 1562:
case 3999:
case 554:
case 64:
case 129:
case 739:
case 691:
case 3384:
case 1537:
case 2762:
case 2203:
case 3946:
case 1331:
case 3215:
case 4035:
case 1086:
case 4080:
case 954:
case 192:
case 2908:
case 68:
case 1544:
case 2104:
case 33:
case 720:
case 1618:
case 2462:
case 3854:
case 713:
case 3754:
case 2328:
case 3175:
case 2744:
case 1002:
case 2095:
case 3637:
case 3295:
case 1116:
case 3229:
case 2069:
case 2130:
case 2029:
case 2185:
case 699:
case 2200:
case 2554:
case 1269:
case 2798:
case 3116:
case 538:
case 201:
case 2898:
case 2763:
case 746:
case 1295:
case 545:
case 2823:
case 485:
case 614:
case 2863:
case 3336:
case 2609:
case 1854:
case 330:
case 72:
case 3660:
case 1175:
case 1598:
case 392:
case 3191:
case 3409:
case 2418:
case 396:
case 2167:
case 3544:
case 2460:
case 945:
case 1563:
case 2312:
case 903:
case 1454:
case 4058:
case 2718:
case 2820:
case 3709:
case 2818:
case 1384:
case 2720:
case 975:
case 862:
case 1305:
case 3623:
case 1644:
case 3276:
case 3663:
case 3111:
case 2076:
case 1999:
case 3562:
case 2392:
case 3522:
case 776:
case 2423:
case 1925:
case 2463:
case 772:
case 1520:
case 3698:
case 786:
case 1470:
case 2806:
case 541:
case 2573:
case 2648:
case 283:
case 2672:
case 2199:
case 2401:
case 273:
case 1177:
case 471:
case 893:
case 3289:
case 205:
case 4023:
case 979:
case 325:
case 3342:
case 3601:
case 989:
case 3156:
case 1506:
case 1959:
case 2146:
case 198:
case 941:
case 153:
case 1873:
case 304:
case 1773:
case 3583:
case 2458:
case 224:
case 1021:
case 1680:
case 2279:
case 1814:
case 449:
case 3079:
case 2594:
case 2570:
case 3324:
case 981:
case 1255:
case 4018:
case 2782:
case 3904:
case 2882:
case 4020:
case 3108:
case 4060:
case 3580:
case 1558:
case 757:
case 2406:
case 441:
case 1045:
case 949:
case 3872:
case 628:
case 1582:
case 1075:
case 1840:
case 1552:
case 3639:
case 625:
case 3878:
case 3742:
case 2439:
case 1588:
case 3091:
case 2027:
case 2291:
case 939:
case 3550:
case 3842:
case 2067:
case 3778:
case 3227:
case 1443:
case 1100:
case 2945:
case 3464:
case 3917:
case 1407:
case 2752:
case 1230:
case 3016:
case 1285:
case 2032:
case 2664:
case 2788:
case 4012:
case 3232:
case 1314:
case 539:
case 3102:
case 2358:
case 227:
case 3764:
case 1807:
case 520:
case 1650:
case 3724:
case 2211:
case 513:
case 2488:
case 439:
case 81:
case 2249:
case 4092:
case 2507:
case 1233:
case 1147:
case 3186:
case 2642:
case 2301:
case 531:
case 1103:
case 2059:
case 328:
case 2678:
case 913:
case 3259:
case 855:
case 208:
case 3997:
case 2739:
case 2921:
case 2961:
case 3478:
case 3348:
case 3096:
case 2296:
case 25:
case 314:
case 3915:
case 2492:
case 2398:
case 1287:
case 3528:
case 1405:
case 199:
case 1161:
case 1613:
case 3692:
case 3179:
case 3593:
case 435:
case 1512:
case 978:
case 380:
case 18:
case 1354:
case 1077:
case 4052:
case 1976:
case 17:
case 370:
case 3056:
case 2712:
case 4088:
case 2256:
case 3957:
case 2812:
case 2065:
case 3225:
case 215:
case 2631:
case 3265:
case 629:
case 1693:
case 3831:
case 948:
case 1145:
case 14:
case 340:
case 3929:
case 3436:
case 1971:
case 3051:
case 1668:
case 2251:
case 1628:
case 935:
case 3309:
case 488:
case 2792:
case 1805:
case 1705:
case 3241:
case 478:
case 4039:
case 1126:
case 2208:
case 2019:
case 1166:
case 2138:
case 2934:
case 2584:
case 967:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757653201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,];
var gg_b = "1757653201/";

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
