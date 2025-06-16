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
case 1141:
case 55:
case 2641:
case 3597:
case 3786:
case 2385:
case 326:
case 3380:
case 1799:
case 2782:
case 3081:
case 276:
case 3282:
case 3197:
case 425:
case 2902:
case 3848:
case 3884:
case 593:
case 2286:
case 2798:
case 3135:
case 4016:
case 3267:
case 2499:
case 585:
case 1482:
case 1153:
case 3770:
case 2653:
case 3205:
case 2571:
case 2231:
case 2993:
case 1861:
case 2200:
case 1512:
case 3376:
case 2775:
case 1630:
case 359:
case 2130:
case 1654:
case 1994:
case 771:
case 2063:
case 3059:
case 3275:
case 392:
case 3168:
case 1671:
case 3700:
case 1524:
case 4069:
case 2501:
case 2171:
case 2302:
case 1112:
case 1942:
case 2554:
case 2767:
case 3306:
case 2705:
case 3879:
case 688:
case 2612:
case 3440:
case 3731:
case 2948:
case 3802:
case 1995:
case 2827:
case 3620:
case 204:
case 2984:
case 15:
case 3052:
case 726:
case 408:
case 1618:
case 63:
case 2039:
case 2492:
case 1489:
case 816:
case 1857:
case 1773:
case 1983:
case 4020:
case 1119:
case 11:
case 2555:
case 1337:
case 1703:
case 2488:
case 3534:
case 2876:
case 1525:
case 193:
case 3013:
case 759:
case 884:
case 3243:
case 1908:
case 185:
case 1383:
case 96:
case 371:
case 2473:
case 1792:
case 69:
case 2979:
case 620:
case 2384:
case 282:
case 613:
case 2047:
case 2348:
case 1744:
case 904:
case 1788:
case 1296:
case 1451:
case 3687:
case 221:
case 3893:
case 546:
case 1349:
case 2421:
case 2880:
case 1404:
case 2271:
case 1364:
case 3441:
case 642:
case 530:
case 2072:
case 3754:
case 2332:
case 3175:
case 3359:
case 2363:
case 2170:
case 561:
case 1011:
case 3336:
case 2735:
case 3076:
case 1212:
case 2500:
case 1310:
case 3328:
case 1860:
case 871:
case 3167:
case 1253:
case 1224:
case 2852:
case 537:
case 3235:
case 3981:
case 2570:
case 3839:
case 3006:
case 2223:
case 1822:
case 2768:
case 3936:
case 3598:
case 3297:
case 3182:
case 3453:
case 52:
case 3424:
case 2963:
case 1094:
case 2186:
case 1891:
case 2932:
case 3080:
case 356:
case 2093:
case 1540:
case 1964:
case 1686:
case 462:
case 1468:
case 3198:
case 3582:
case 3645:
case 1241:
case 3381:
case 597:
case 3412:
case 2640:
case 578:
case 302:
case 2797:
case 316:
case 3928:
case 3466:
case 130:
case 1196:
case 2420:
case 2881:
case 2696:
case 1907:
case 2956:
case 3543:
case 892:
case 729:
case 2462:
case 2048:
case 4088:
case 161:
case 2347:
case 1450:
case 819:
case 617:
case 1095:
case 3952:
case 294:
case 211:
case 1434:
case 650:
case 3692:
case 477:
case 137:
case 248:
case 3589:
case 1049:
case 859:
case 784:
case 3688:
case 438:
case 756:
case 234:
case 2117:
case 3673:
case 1762:
case 948:
case 3551:
case 3755:
case 1008:
case 832:
case 1733:
case 1720:
case 1365:
case 4021:
case 3504:
case 60:
case 2255:
case 716:
case 2517:
case 1829:
case 702:
case 664:
case 3621:
case 1225:
case 3863:
case 826:
case 3104:
case 1037:
case 312:
case 2415:
case 3580:
case 3646:
case 306:
case 1040:
case 2971:
case 1912:
case 1142:
case 2585:
case 3098:
case 1428:
case 399:
case 3410:
case 1436:
case 2086:
case 3935:
case 2901:
case 4046:
case 466:
case 1887:
case 3180:
case 1459:
case 2694:
case 405:
case 1542:
case 2185:
case 843:
case 2923:
case 2930:
case 1194:
case 3281:
case 3464:
case 2850:
case 3259:
case 2728:
case 1511:
case 59:
case 3997:
case 3236:
case 3576:
case 1312:
case 2834:
case 3657:
case 1820:
case 3127:
case 1481:
case 1758:
case 2572:
case 3067:
case 1715:
case 1729:
case 4057:
case 2330:
case 1111:
case 1941:
case 3506:
case 2611:
case 2354:
case 1210:
case 3527:
case 3763:
case 2759:
case 1672:
case 2172:
case 188:
case 3335:
case 2256:
case 3823:
case 1714:
case 1508:
case 3854:
case 799:
case 765:
case 2491:
case 3661:
case 1609:
case 3830:
case 3004:
case 2579:
case 1137:
case 3801:
case 428:
case 347:
case 13:
case 712:
case 1108:
case 3213:
case 881:
case 1325:
case 1679:
case 4061:
case 3074:
case 2509:
case 3350:
case 1238:
case 836:
case 1578:
case 2179:
case 61:
case 963:
case 2355:
case 3756:
case 1722:
case 2868:
case 752:
case 693:
case 2548:
case 2247:
case 3438:
case 2649:
case 2584:
case 263:
case 1583:
case 113:
case 3089:
case 2148:
case 1684:
case 3465:
case 809:
case 1195:
case 2695:
case 2422:
case 201:
case 2184:
case 1648:
case 2955:
case 924:
case 896:
case 3747:
case 1452:
case 3934:
case 3426:
case 2897:
case 1925:
case 2874:
case 1012:
case 3276:
case 2446:
case 3658:
case 1211:
case 3615:
case 2727:
case 3702:
case 517:
case 3442:
case 2532:
case 3367:
case 550:
case 3128:
case 396:
case 3305:
case 2331:
case 2054:
case 469:
case 4015:
case 3206:
case 1821:
case 2804:
case 1480:
case 2030:
case 2163:
case 3159:
case 3035:
case 557:
case 2986:
case 523:
case 1024:
case 1053:
case 3528:
case 1164:
case 2202:
case 3494:
case 972:
case 2931:
case 1340:
case 336:
case 2889:
case 3280:
case 874:
case 3967:
case 1294:
case 3181:
case 1427:
case 50:
case 3097:
case 3398:
case 2285:
case 1888:
case 1844:
case 322:
case 3975:
case 1476:
case 3785:
case 1041:
case 2780:
case 3382:
case 847:
case 435:
case 796:
case 542:
case 2284:
case 3478:
case 1295:
case 3691:
case 2547:
case 3951:
case 3437:
case 709:
case 3343:
case 1899:
case 2882:
case 661:
case 150:
case 3904:
case 1790:
case 3408:
case 1647:
case 231:
case 4091:
case 637:
case 839:
case 603:
case 2147:
case 1249:
case 2917:
case 286:
case 3389:
case 123:
case 157:
case 260:
case 2898:
case 3784:
case 954:
case 1396:
case 110:
case 2279:
case 3870:
case 3304:
case 2539:
case 931:
case 1565:
case 3449:
case 441:
case 2638:
case 3113:
case 3351:
case 3614:
case 781:
case 960:
case 1019:
case 343:
case 4060:
case 736:
case 458:
case 1526:
case 1237:
case 1577:
case 1278:
case 3495:
case 806:
case 3050:
case 2607:
case 3800:
case 2209:
case 1107:
case 812:
case 1025:
case 1639:
case 3513:
case 3660:
case 3779:
case 2626:
case 3989:
case 2805:
case 697:
case 722:
case 678:
case 1066:
case 291:
case 3483:
case 2055:
case 4014:
case 2490:
case 1126:
case 2867:
case 677:
case 1417:
case 879:
case 3789:
case 417:
case 968:
case 1842:
case 3047:
case 1288:
case 1796:
case 1587:
case 382:
case 3384:
case 410:
case 1894:
case 2885:
case 2893:
case 1292:
case 2687:
case 569:
case 321:
case 1091:
case 3774:
case 1133:
case 3666:
case 2620:
case 158:
case 3118:
case 3948:
case 1120:
case 4019:
case 2633:
case 1990:
case 2662:
case 2204:
case 3625:
case 1162:
case 2150:
case 1533:
case 2872:
case 3555:
case 118:
case 1014:
case 268:
case 36:
case 3217:
case 971:
case 4066:
case 464:
case 3876:
case 3309:
case 2534:
case 4025:
case 776:
case 1562:
case 1811:
case 3624:
case 2205:
case 2770:
case 3653:
case 3372:
case 1169:
case 1516:
case 3032:
case 2267:
case 3101:
case 259:
case 1878:
case 932:
case 2036:
case 3775:
case 1486:
case 442:
case 2809:
case 3200:
case 3985:
case 3123:
case 851:
case 2028:
case 1668:
case 2327:
case 3302:
case 2535:
case 2168:
case 292:
case 68:
case 3705:
case 2306:
case 2440:
case 2731:
case 3612:
case 195:
case 1808:
case 3523:
case 3767:
case 3554:
case 811:
case 3641:
case 558:
case 2786:
case 0:
case 3782:
case 919:
case 475:
case 1470:
case 615:
case 226:
case 834:
case 1883:
case 518:
case 135:
case 1740:
case 2081:
case 4041:
case 1346:
case 3798:
case 76:
case 1400:
case 232:
case 2927:
case 1895:
case 655:
case 2848:
case 3750:
case 3117:
case 1810:
case 3828:
case 1503:
case 128:
case 2352:
case 3734:
case 608:
case 1674:
case 1521:
case 3079:
case 2718:
case 2755:
case 1864:
case 1220:
case 3255:
case 2603:
case 2832:
case 1233:
case 1573:
case 1719:
case 3859:
case 2250:
case 1121:
case 1262:
case 2104:
case 2313:
case 2234:
case 3009:
case 1061:
case 566:
case 17:
case 3433:
case 1922:
case 1455:
case 2543:
case 1090:
case 3939:
case 420:
case 3420:
case 673:
case 3084:
case 394:
case 1544:
case 1960:
case 1287:
case 2189:
case 24:
case 348:
case 453:
case 2143:
case 2913:
case 427:
case 351:
case 2688:
case 1144:
case 779:
case 2589:
case 1188:
case 2699:
case 1682:
case 984:
case 3963:
case 3085:
case 187:
case 1545:
case 1199:
case 2453:
case 3469:
case 2297:
case 2080:
case 1929:
case 3093:
case 3186:
case 2381:
case 180:
case 1698:
case 2582:
case 3416:
case 2928:
case 216:
case 2847:
case 3640:
case 202:
case 3586:
case 3797:
case 166:
case 2723:
case 2567:
case 3332:
case 3072:
case 2175:
case 2268:
case 3531:
case 1675:
case 1329:
case 2505:
case 821:
case 916:
case 1724:
case 3813:
case 2076:
case 902:
case 229:
case 3170:
case 2167:
case 1712:
case 3852:
case 3131:
case 2027:
case 1667:
case 2328:
case 1315:
case 882:
case 2856:
case 3100:
case 3768:
case 2981:
case 1057:
case 2771:
case 748:
case 1358:
case 3584:
case 3649:
case 1387:
case 461:
case 2438:
case 3247:
case 2043:
case 1590:
case 1841:
case 363:
case 430:
case 301:
case 2407:
case 3695:
case 1933:
case 1456:
case 3148:
case 170:
case 1920:
case 144:
case 2934:
case 3897:
case 403:
case 2426:
case 58:
case 947:
case 1962:
case 3683:
case 2950:
case 490:
case 658:
case 2661:
case 562:
case 3579:
case 2004:
case 3239:
case 4008:
case 3109:
case 1161:
case 1222:
case 1738:
case 641:
case 2051:
case 1003:
case 1987:
case 1260:
case 1853:
case 2801:
case 324:
case 2252:
case 42:
case 4078:
case 1447:
case 389:
case 4037:
case 3608:
case 3179:
case 2213:
case 2074:
case 1561:
case 274:
case 1812:
case 2871:
case 3017:
case 1765:
case 240:
case 2739:
case 3318:
case 872:
case 3868:
case 1707:
case 1073:
case 831:
case 2997:
case 1606:
case 3834:
case 3000:
case 598:
case 2576:
case 886:
case 1710:
case 239:
case 4011:
case 3572:
case 3371:
case 3102:
case 3031:
case 1866:
case 2127:
case 1229:
case 2005:
case 2732:
case 906:
case 3611:
case 2176:
case 1676:
case 1764:
case 1258:
case 570:
case 999:
case 544:
case 1369:
case 3172:
case 3736:
case 2075:
case 2335:
case 3759:
case 701:
case 669:
case 2527:
case 695:
case 2646:
case 3458:
case 3971:
case 724:
case 3593:
case 212:
case 2968:
case 3415:
case 1916:
case 299:
case 3642:
case 2410:
case 4094:
case 2098:
case 814:
case 1045:
case 2397:
case 2180:
case 252:
case 1680:
case 939:
case 1969:
case 3901:
case 3429:
case 3185:
case 3694:
case 3954:
case 789:
case 4007:
case 1522:
case 3556:
case 2113:
case 3677:
case 3279:
case 1321:
case 1613:
case 4065:
case 2449:
case 772:
case 2552:
case 354:
case 4026:
case 243:
case 108:
case 1114:
case 2614:
case 2351:
case 1303:
case 1988:
case 3665:
case 1261:
case 2034:
case 3156:
case 493:
case 2513:
case 4077:
case 2050:
case 2622:
case 2483:
case 391:
case 3490:
case 3867:
case 525:
case 3055:
case 1708:
case 1514:
case 67:
case 3805:
case 2989:
case 1992:
case 3626:
case 3018:
case 1020:
case 3317:
case 2831:
case 3547:
case 745:
case 2478:
case 1087:
case 2437:
case 3248:
case 173:
case 1344:
case 3461:
case 1191:
case 1409:
case 3284:
case 400:
case 1749:
case 2904:
case 1290:
case 3882:
case 3917:
case 3147:
case 1479:
case 2408:
case 1973:
case 1591:
case 331:
case 1795:
case 943:
case 407:
case 2784:
case 360:
case 2967:
case 3293:
case 889:
case 2280:
case 236:
case 2097:
case 1345:
case 372:
case 1681:
case 3285:
case 2398:
case 2181:
case 1246:
case 909:
case 3386:
case 2785:
case 2975:
case 222:
case 1794:
case 605:
case 2411:
case 3843:
case 2382:
case 824:
case 6:
case 666:
case 2615:
case 1158:
case 209:
case 2702:
case 573:
case 767:
case 1945:
case 801:
case 3706:
case 2305:
case 2128:
case 2817:
case 4064:
case 3331:
case 3071:
case 2068:
case 345:
case 3610:
case 3272:
case 1016:
case 1628:
case 3532:
case 2367:
case 3370:
case 3804:
case 446:
case 3030:
case 2206:
case 2159:
case 3163:
case 1636:
case 2136:
case 1659:
case 2982:
case 936:
case 2772:
case 3851:
case 863:
case 2227:
case 2494:
case 3202:
case 4010:
case 2629:
case 3776:
case 1069:
case 3132:
case 786:
case 2064:
case 1571:
case 1993:
case 3029:
case 1653:
case 1624:
case 496:
case 2124:
case 3169:
case 1372:
case 4068:
case 1063:
case 409:
case 3837:
case 1154:
case 582:
case 2861:
case 2512:
case 1775:
case 1171:
case 2010:
case 3668:
case 3946:
case 2553:
case 3116:
case 2498:
case 2671:
case 3357:
case 246:
case 1270:
case 1554:
case 3015:
case 1523:
case 521:
case 395:
case 2475:
case 383:
case 2141:
case 2394:
case 741:
case 481:
case 1972:
case 758:
case 436:
case 2240:
case 1393:
case 335:
case 2467:
case 56:
case 3697:
case 2405:
case 3431:
case 3400:
case 1286:
case 718:
case 1902:
case 3895:
case 1789:
case 91:
case 285:
case 2383:
case 3842:
case 1473:
case 1348:
case 1384:
case 182:
case 2474:
case 1403:
case 795:
case 95:
case 2978:
case 2296:
case 2788:
case 1909:
case 233:
case 207:
case 2744:
case 1421:
case 2404:
case 3292:
case 1880:
case 2349:
case 805:
case 358:
case 1155:
case 3060:
case 2026:
case 25:
case 3133:
case 2166:
case 2519:
case 3203:
case 1118:
case 933:
case 880:
case 2125:
case 3990:
case 2308:
case 1056:
case 3650:
case 2773:
case 2007:
case 3022:
case 2983:
case 2065:
case 2857:
case 783:
case 624:
case 1379:
case 1039:
case 1625:
case 3014:
case 2443:
case 689:
case 21:
case 3533:
case 985:
case 2119:
case 1518:
case 2721:
case 293:
case 1309:
case 3361:
case 4034:
case 1876:
case 4050:
case 735:
case 2038:
case 3811:
case 2337:
case 1751:
case 3562:
case 2077:
case 2094:
case 499:
case 3401:
case 3545:
case 387:
case 1093:
case 3929:
case 2540:
case 406:
case 3741:
case 728:
case 3454:
case 1186:
case 412:
case 2891:
case 3471:
case 2241:
case 3958:
case 1416:
case 3599:
case 2042:
case 858:
case 2140:
case 3:
case 249:
case 452:
case 1072:
case 1332:
case 4005:
case 3675:
case 2212:
case 1735:
case 511:
case 3753:
case 2670:
case 2769:
case 949:
case 1170:
case 2011:
case 645:
case 1363:
case 1852:
case 4075:
case 3712:
case 2497:
case 3269:
case 179:
case 2822:
case 3807:
case 1254:
case 2716:
case 1570:
case 1230:
case 937:
case 1828:
case 1947:
case 1117:
case 1750:
case 1734:
case 3173:
case 2617:
case 2326:
case 447:
case 3360:
case 835:
case 4004:
case 2858:
case 2720:
case 2307:
case 1356:
case 2815:
case 3220:
case 1517:
case 3233:
case 3991:
case 7:
case 614:
case 691:
case 1859:
case 2078:
case 780:
case 1836:
case 3061:
case 1009:
case 297:
case 1956:
case 3455:
case 3922:
case 2083:
case 1696:
case 1420:
case 1881:
case 1939:
case 3689:
case 895:
case 667:
case 2434:
case 1084:
case 2450:
case 2095:
case 978:
case 3287:
case 1462:
case 997:
case 686:
case 579:
case 2787:
case 3643:
case 3391:
case 2049:
case 3592:
case 4089:
case 1000:
case 4076:
case 1728:
case 2511:
case 1850:
case 2833:
case 2602:
case 2715:
case 1232:
case 777:
case 2758:
case 2481:
case 563:
case 1102:
case 1371:
case 873:
case 1070:
case 4006:
case 1330:
case 2111:
case 3258:
case 2941:
case 3557:
case 744:
case 3676:
case 484:
case 1736:
case 2353:
case 2672:
case 3819:
case 4027:
case 1593:
case 1781:
case 1971:
case 456:
case 4080:
case 1415:
case 2594:
case 2428:
case 988:
case 524:
case 1585:
case 2459:
case 3463:
case 3546:
case 1901:
case 2953:
case 2924:
case 3680:
case 2436:
case 2693:
case 2194:
case 1930:
case 1954:
case 2542:
case 1185:
case 808:
case 355:
case 377:
case 2413:
case 1649:
case 1584:
case 3088:
case 1414:
case 213:
case 2583:
case 163:
case 682:
case 2648:
case 1955:
case 1422:
case 1695:
case 3291:
case 2549:
case 2195:
case 370:
case 1460:
case 227:
case 253:
case 2925:
case 2452:
case 1683:
case 3962:
case 621:
case 1239:
case 1579:
case 2137:
case 604:
case 715:
case 3161:
case 1491:
case 927:
case 2319:
case 3738:
case 23:
case 124:
case 3853:
case 2869:
case 3824:
case 1713:
case 2277:
case 189:
case 2578:
case 3812:
case 3561:
case 1752:
case 1509:
case 66:
case 2108:
case 3726:
case 1318:
case 3320:
case 3765:
case 3073:
case 920:
case 3707:
case 1868:
case 2816:
case 3214:
case 3742:
case 708:
case 1889:
case 1931:
case 172:
case 3681:
case 3345:
case 2427:
case 432:
case 1386:
case 2844:
case 3246:
case 2888:
case 325:
case 3472:
case 4081:
case 4059:
case 1563:
case 870:
case 3158:
case 1446:
case 4036:
case 2564:
case 1331:
case 2757:
case 2110:
case 2940:
case 3529:
case 773:
case 1706:
case 1532:
case 3016:
case 975:
case 3257:
case 3493:
case 3558:
case 1030:
case 2480:
case 419:
case 1054:
case 3515:
case 3999:
case 531:
case 3659:
case 898:
case 679:
case 1202:
case 2510:
case 3129:
case 1851:
case 2632:
case 2803:
case 2024:
case 560:
case 2053:
case 1132:
case 3069:
case 1776:
case 1664:
case 1986:
case 1677:
case 2507:
case 3522:
case 1638:
case 2565:
case 2138:
case 634:
case 3321:
case 2177:
case 855:
case 572:
case 3944:
case 3560:
case 2526:
case 154:
case 4052:
case 1875:
case 20:
case 910:
case 2761:
case 3988:
case 2019:
case 3778:
case 957:
case 923:
case 3303:
case 2025:
case 2639:
case 1156:
case 3261:
case 3122:
case 2278:
case 2538:
case 725:
case 3448:
case 2237:
case 3514:
case 3160:
case 1867:
case 2126:
case 191:
case 3373:
case 3652:
case 264:
case 2066:
case 468:
case 1626:
case 3903:
case 3087:
case 2295:
case 3388:
case 1461:
case 373:
case 694:
case 611:
case 167:
case 2283:
case 217:
case 545:
case 2899:
case 186:
case 1147:
case 1917:
case 2249:
case 2647:
case 3591:
case 3783:
case 3973:
case 2790:
case 2396:
case 3795:
case 210:
case 160:
case 223:
case 257:
case 3166:
case 1802:
case 3655:
case 1251:
case 3026:
case 2060:
case 258:
case 454:
case 1052:
case 3857:
case 526:
case 1150:
case 2634:
case 3065:
case 1717:
case 647:
case 3489:
case 1204:
case 2162:
case 2221:
case 2990:
case 2022:
case 3007:
case 2650:
case 3773:
case 3566:
case 3119:
case 3949:
case 2520:
case 674:
case 4055:
case 1872:
case 2014:
case 2273:
case 2533:
case 1550:
case 3378:
case 3077:
case 2562:
case 532:
case 640:
case 3525:
case 1274:
case 2361:
case 2842:
case 171:
case 385:
case 1243:
case 918:
case 3792:
case 300:
case 3474:
case 2244:
case 2796:
case 1885:
case 592:
case 307:
case 3788:
case 2894:
case 431:
case 2091:
case 1687:
case 486:
case 3404:
case 2292:
case 3349:
case 1893:
case 519:
case 941:
case 612:
case 3394:
case 1976:
case 472:
case 606:
case 3475:
case 1597:
case 283:
case 2245:
case 2470:
case 969:
case 126:
case 3240:
case 995:
case 665:
case 3799:
case 3405:
case 3541:
case 793:
case 2957:
case 1081:
case 568:
case 2883:
case 3342:
case 235:
case 3890:
case 82:
case 890:
case 2895:
case 2400:
case 2346:
case 3153:
case 1267:
case 445:
case 837:
case 803:
case 2635:
case 3064:
case 1980:
case 1205:
case 1669:
case 1770:
case 3630:
case 2486:
case 3512:
case 1059:
case 785:
case 2837:
case 3654:
case 159:
case 3311:
case 3553:
case 4001:
case 3524:
case 3671:
case 192:
case 1168:
case 1535:
case 3498:
case 2668:
case 3010:
case 1327:
case 1616:
case 4023:
case 3942:
case 1731:
case 1440:
case 1879:
case 861:
case 733:
case 2058:
case 4030:
case 3965:
case 1466:
case 463:
case 2418:
case 2090:
case 2922:
case 846:
case 2588:
case 1692:
case 1425:
case 3926:
case 2960:
case 3434:
case 1952:
case 928:
case 303:
case 337:
case 1913:
case 2188:
case 1644:
case 2144:
case 2914:
case 2391:
case 1688:
case 424:
case 1352:
case 228:
case 1673:
case 3219:
case 2810:
case 1174:
case 3815:
case 1755:
case 3008:
case 2521:
case 1504:
case 556:
case 2991:
case 2573:
case 2314:
case 1832:
case 1151:
case 2103:
case 2220:
case 2061:
case 1574:
case 397:
case 3225:
case 1313:
case 489:
case 3377:
case 1863:
case 1730:
case 3364:
case 2675:
case 4031:
case 1175:
case 609:
case 833:
case 807:
case 980:
case 761:
case 3814:
case 1723:
case 2216:
case 3011:
case 129:
case 966:
case 9:
case 696:
case 730:
case 3212:
case 1076:
case 3769:
case 1701:
case 2753:
case 2724:
case 2667:
case 1105:
case 1027:
case 3310:
case 2712:
case 2605:
case 885:
case 54:
case 3253:
case 1167:
case 3497:
case 3860:
case 1006:
case 4070:
case 703:
case 1981:
case 2057:
case 3716:
case 287:
case 81:
case 2545:
case 2401:
case 1182:
case 1297:
case 3435:
case 790:
case 1959:
case 681:
case 2682:
case 893:
case 3686:
case 2929:
case 3540:
case 156:
case 2741:
case 2915:
case 1198:
case 3468:
case 3042:
case 2471:
case 1381:
case 280:
case 2958:
case 797:
case 622:
case 778:
case 1645:
case 266:
case 1847:
case 116:
case 349:
case 2161:
case 970:
case 2222:
case 1854:
case 3714:
case 4079:
case 2021:
case 1004:
case 3178:
case 3265:
case 3609:
case 1252:
case 434:
case 3869:
case 565:
case 1051:
case 944:
case 2738:
case 3319:
case 2561:
case 1074:
case 2812:
case 3760:
case 3325:
case 3108:
case 875:
case 998:
case 2362:
case 3537:
case 3578:
case 3238:
case 2447:
case 2707:
case 2073:
case 1739:
case 1871:
case 2765:
case 3366:
case 3595:
case 2088:
case 3919:
case 3149:
case 2387:
case 671:
case 4048:
case 2044:
case 298:
case 277:
case 3413:
case 411:
case 494:
case 2841:
case 3583:
case 3791:
case 3195:
case 270:
case 3684:
case 788:
case 2092:
case 2439:
case 842:
case 3648:
case 2291:
case 1407:
case 1747:
case 1950:
case 2962:
case 3925:
case 353:
case 327:
case 448:
case 2190:
case 1426:
case 2916:
case 1968:
case 112:
case 73:
case 3040:
case 215:
case 3912:
case 1410:
case 165:
case 199:
case 3428:
case 574:
case 2969:
case 2546:
case 152:
case 1935:
case 3459:
case 3887:
case 80:
case 2099:
case 1082:
case 255:
case 1281:
case 3685:
case 1106:
case 3511:
case 139:
case 713:
case 3862:
case 2710:
case 2157:
case 1657:
case 720:
case 1576:
case 1236:
case 2606:
case 1997:
case 1005:
case 810:
case 3264:
case 79:
case 2866:
case 2627:
case 659:
case 1368:
case 857:
case 3602:
case 1506:
case 3941:
case 3111:
case 753:
case 3729:
case 2557:
case 2764:
case 2215:
case 3672:
case 850:
case 3210:
case 2819:
case 4002:
case 28:
case 1335:
case 3353:
case 2369:
case 2191:
case 2087:
case 2903:
case 1691:
case 4047:
case 1478:
case 3283:
case 3899:
case 2290:
case 1343:
case 317:
case 596:
case 742:
case 2973:
case 2591:
case 1408:
case 2392:
case 2479:
case 3249:
case 1784:
case 1974:
case 1748:
case 3396:
case 3138:
case 3177:
case 1304:
case 4039:
case 2321:
case 1943:
case 1113:
case 3019:
case 2778:
case 1614:
case 2303:
case 2737:
case 1351:
case 3526:
case 2560:
case 2944:
case 2114:
case 208:
case 143:
case 3761:
case 1050:
case 973:
case 3656:
case 522:
case 3639:
case 2122:
case 1034:
case 2484:
case 1800:
case 3066:
case 2020:
case 46:
case 1989:
case 2992:
case 1779:
case 2514:
case 2373:
case 1483:
case 2033:
case 1152:
case 1658:
case 3012:
case 1276:
case 750:
case 1998:
case 4063:
case 1615:
case 109:
case 2158:
case 1442:
case 1068:
case 827:
case 853:
case 629:
case 3940:
case 2529:
case 925:
case 3564:
case 2999:
case 2515:
case 1772:
case 89:
case 3663:
case 1159:
case 2493:
case 2636:
case 3480:
case 723:
case 2558:
case 757:
case 3053:
case 1629:
case 2485:
case 1035:
case 2129:
case 3510:
case 1494:
case 3803:
case 3632:
case 1280:
case 3340:
case 70:
case 181:
case 1967:
case 1181:
case 2402:
case 2681:
case 543:
case 656:
case 1398:
case 3888:
case 764:
case 3476:
case 122:
case 2246:
case 3844:
case 476:
case 1793:
case 225:
case 1382:
case 83:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750096801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,];
var gg_b = "1750096801/";

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
