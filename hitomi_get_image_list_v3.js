// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 853:
case 3176:
case 1694:
case 3222:
case 1649:
case 3486:
case 2094:
case 3581:
case 2627:
case 2443:
case 2656:
case 2592:
case 305:
case 856:
case 1811:
case 1013:
case 1965:
case 1979:
case 1551:
case 95:
case 1228:
case 767:
case 155:
case 2476:
case 2323:
case 2333:
case 3070:
case 3522:
case 1491:
case 4004:
case 2996:
case 3294:
case 99:
case 3345:
case 2156:
case 1056:
case 2926:
case 1773:
case 822:
case 459:
case 1794:
case 1933:
case 1893:
case 2301:
case 2179:
case 2750:
case 646:
case 2489:
case 2897:
case 290:
case 3208:
case 1962:
case 218:
case 755:
case 3011:
case 363:
case 751:
case 1823:
case 883:
case 4046:
case 934:
case 3307:
case 2828:
case 2510:
case 2479:
case 3610:
case 15:
case 463:
case 3451:
case 2520:
case 871:
case 708:
case 140:
case 377:
case 3717:
case 3780:
case 1585:
case 3854:
case 124:
case 4006:
case 3955:
case 452:
case 1084:
case 1345:
case 1875:
case 3839:
case 3004:
case 1851:
case 3436:
case 2395:
case 2964:
case 2939:
case 3151:
case 1900:
case 1712:
case 828:
case 2543:
case 2537:
case 2470:
case 1313:
case 1458:
case 3653:
case 1499:
case 292:
case 1818:
case 3223:
case 2445:
case 1959:
case 518:
case 3595:
case 771:
case 1215:
case 3516:
case 3465:
case 30:
case 1108:
case 2987:
case 1471:
case 3373:
case 1555:
case 2826:
case 375:
case 2230:
case 2556:
case 3806:
case 3867:
case 2367:
case 309:
case 2859:
case 3056:
case 1018:
case 3563:
case 2532:
case 1754:
case 1475:
case 3212:
case 1016:
case 1464:
case 1888:
case 869:
case 930:
case 1220:
case 1522:
case 3789:
case 83:
case 929:
case 1430:
case 2432:
case 2536:
case 1676:
case 637:
case 704:
case 2273:
case 1971:
case 2560:
case 2655:
case 2238:
case 2752:
case 2698:
case 3057:
case 932:
case 492:
case 422:
case 1263:
case 4003:
case 2061:
case 1274:
case 3769:
case 548:
case 423:
case 2041:
case 406:
case 482:
case 896:
case 1219:
case 1891:
case 1322:
case 114:
case 2754:
case 349:
case 3901:
case 3683:
case 1992:
case 1769:
case 3604:
case 2778:
case 516:
case 3795:
case 730:
case 227:
case 358:
case 415:
case 2546:
case 1478:
case 3896:
case 3837:
case 3113:
case 3341:
case 2108:
case 2155:
case 868:
case 2130:
case 2617:
case 720:
case 1376:
case 3910:
case 1414:
case 496:
case 1070:
case 1579:
case 2264:
case 651:
case 1438:
case 838:
case 397:
case 1954:
case 3980:
case 3573:
case 1599:
case 46:
case 93:
case 3915:
case 215:
case 942:
case 1798:
case 2480:
case 3439:
case 1170:
case 3565:
case 3692:
case 902:
case 2380:
case 2136:
case 1803:
case 2465:
case 1402:
case 172:
case 2387:
case 517:
case 3897:
case 2029:
case 3911:
case 2232:
case 1248:
case 2741:
case 2763:
case 1169:
case 2607:
case 1266:
case 2669:
case 3833:
case 112:
case 3361:
case 3862:
case 3301:
case 2799:
case 1844:
case 1783:
case 2355:
case 2077:
case 4000:
case 819:
case 1983:
case 1775:
case 3460:
case 3020:
case 3520:
case 2661:
case 45:
case 1633:
case 650:
case 414:
case 1584:
case 882:
case 1661:
case 2024:
case 4081:
case 1578:
case 4076:
case 3758:
case 1819:
case 3599:
case 583:
case 694:
case 134:
case 1692:
case 2895:
case 2255:
case 2761:
case 2572:
case 889:
case 1740:
case 2493:
case 1078:
case 3524:
case 1251:
case 1330:
case 3762:
case 81:
case 1175:
case 1920:
case 1436:
case 127:
case 1702:
case 1135:
case 3387:
case 887:
case 591:
case 3308:
case 3624:
case 176:
case 2300:
case 3908:
case 2801:
case 1810:
case 3290:
case 1815:
case 3463:
case 1388:
case 2472:
case 1407:
case 1131:
case 200:
case 3848:
case 3438:
case 709:
case 2066:
case 1427:
case 721:
case 2966:
case 3461:
case 3959:
case 1536:
case 1960:
case 924:
case 1871:
case 3656:
case 3961:
case 408:
case 3757:
case 3876:
case 2015:
case 1586:
case 1420:
case 76:
case 879:
case 2025:
case 2412:
case 1591:
case 1532:
case 2019:
case 3718:
case 3755:
case 3918:
case 3227:
case 1778:
case 717:
case 1244:
case 4080:
case 3625:
case 725:
case 880:
case 2581:
case 2046:
case 3633:
case 1106:
case 2032:
case 2175:
case 2571:
case 578:
case 1232:
case 331:
case 1662:
case 1611:
case 3326:
case 1913:
case 3628:
case 3432:
case 144:
case 3247:
case 2959:
case 284:
case 2851:
case 970:
case 1934:
case 1761:
case 3582:
case 3419:
case 1967:
case 1981:
case 977:
case 2450:
case 120:
case 2908:
case 1053:
case 1117:
case 2035:
case 2249:
case 1963:
case 850:
case 389:
case 3786:
case 1296:
case 1320:
case 3687:
case 778:
case 587:
case 3938:
case 2954:
case 3660:
case 2464:
case 908:
case 627:
case 2143:
case 2399:
case 3639:
case 1334:
case 3721:
case 656:
case 3198:
case 2292:
case 2010:
case 2705:
case 2021:
case 1642:
case 2358:
case 3842:
case 1361:
case 1028:
case 1192:
case 3274:
case 460:
case 2666:
case 3018:
case 327:
case 509:
case 213:
case 323:
case 2743:
case 2680:
case 1682:
case 487:
case 2584:
case 3791:
case 3098:
case 153:
case 667:
case 385:
case 10:
case 3181:
case 3155:
case 1950:
case 3946:
case 982:
case 2115:
case 1786:
case 3871:
case 1726:
case 782:
case 3136:
case 3644:
case 2517:
case 1240:
case 2506:
case 3642:
case 2919:
case 1311:
case 692:
case 2332:
case 3988:
case 1152:
case 718:
case 3458:
case 3788:
case 2625:
case 1966:
case 2639:
case 1470:
case 737:
case 3724:
case 2736:
case 1455:
case 3995:
case 3046:
case 1149:
case 443:
case 1312:
case 2218:
case 2327:
case 1459:
case 1998:
case 3694:
case 1573:
case 3114:
case 3793:
case 372:
case 455:
case 3045:
case 964:
case 2646:
case 3976:
case 3014:
case 3303:
case 2850:
case 642:
case 2722:
case 3723:
case 3273:
case 616:
case 409:
case 2896:
case 3784:
case 626:
case 1663:
case 245:
case 3445:
case 2557:
case 3081:
case 2667:
case 2606:
case 1181:
case 3306:
case 4023:
case 2384:
case 1068:
case 2047:
case 3125:
case 148:
case 1304:
case 3588:
case 2753:
case 1483:
case 2303:
case 1925:
case 263:
case 206:
case 373:
case 1416:
case 346:
case 1264:
case 3594:
case 2352:
case 6:
case 1343:
case 3084:
case 479:
case 1291:
case 2772:
case 3808:
case 647:
case 426:
case 1247:
case 3142:
case 2390:
case 1713:
case 739:
case 1309:
case 1910:
case 185:
case 952:
case 1095:
case 945:
case 2981:
case 2890:
case 3787:
case 2809:
case 3015:
case 802:
case 1529:
case 2735:
case 2257:
case 2085:
case 1128:
case 1546:
case 2313:
case 3523:
case 3104:
case 3187:
case 2146:
case 998:
case 2471:
case 826:
case 1677:
case 1339:
case 796:
case 800:
case 454:
case 67:
case 1820:
case 3399:
case 2640:
case 526:
case 3241:
case 3507:
case 2452:
case 369:
case 4047:
case 187:
case 2586:
case 3543:
case 2502:
case 321:
case 2990:
case 3527:
case 872:
case 427:
case 1246:
case 3850:
case 3450:
case 501:
case 2986:
case 769:
case 170:
case 3410:
case 1051:
case 3220:
case 8:
case 2524:
case 563:
case 1428:
case 2342:
case 4086:
case 1917:
case 2879:
case 1185:
case 367:
case 3494:
case 2288:
case 1352:
case 2207:
case 931:
case 4093:
case 1976:
case 2233:
case 3281:
case 456:
case 558:
case 3729:
case 1481:
case 139:
case 2316:
case 3858:
case 1146:
case 2070:
case 2248:
case 175:
case 2609:
case 3017:
case 968:
case 399:
case 1168:
case 2309:
case 3970:
case 3204:
case 2871:
case 3572:
case 56:
case 4055:
case 3093:
case 2589:
case 248:
case 2421:
case 2980:
case 1447:
case 3371:
case 3942:
case 2117:
case 3471:
case 1671:
case 3920:
case 3883:
case 2065:
case 243:
case 2486:
case 3033:
case 4025:
case 3877:
case 3846:
case 3534:
case 956:
case 3741:
case 914:
case 1126:
case 756:
case 3828:
case 1867:
case 729:
case 2724:
case 3577:
case 521:
case 3235:
case 1747:
case 1757:
case 1391:
case 1375:
case 3357:
case 1182:
case 1316:
case 3950:
case 109:
case 2878:
case 1808:
case 1737:
case 1725:
case 2145:
case 2160:
case 1025:
case 543:
case 749:
case 234:
case 4026:
case 3035:
case 3455:
case 113:
case 3323:
case 3148:
case 3270:
case 993:
case 3732:
case 126:
case 433:
case 2831:
case 3317:
case 3300:
case 2696:
case 1680:
case 1530:
case 3288:
case 3470:
case 3813:
case 2251:
case 1941:
case 2460:
case 1162:
case 2245:
case 4088:
case 2744:
case 1344:
case 250:
case 2216:
case 1956:
case 3602:
case 3731:
case 609:
case 3675:
case 239:
case 1167:
case 3700:
case 3985:
case 3511:
case 3398:
case 4039:
case 3987:
case 3832:
case 1417:
case 3631:
case 315:
case 2063:
case 2714:
case 2014:
case 3794:
case 1003:
case 2866:
case 1445:
case 1435:
case 2545:
case 3063:
case 181:
case 2770:
case 4092:
case 1453:
case 3393:
case 2748:
case 2290:
case 53:
case 2280:
case 2064:
case 3097:
case 3605:
case 1349:
case 476:
case 2360:
case 1581:
case 3904:
case 135:
case 2790:
case 793:
case 2071:
case 1539:
case 2278:
case 1050:
case 165:
case 2963:
case 359:
case 3952:
case 3553:
case 3827:
case 3492:
case 2601:
case 3267:
case 2653:
case 3526:
case 559:
case 1474:
case 379:
case 2505:
case 3038:
case 223:
case 2422:
case 2392:
case 2525:
case 2347:
case 1206:
case 2415:
case 2140:
case 715:
case 3083:
case 2574:
case 788:
case 2183:
case 743:
case 1527:
case 3691:
case 1807:
case 1519:
case 1932:
case 2643:
case 293:
case 2435:
case 2036:
case 1199:
case 249:
case 3978:
case 2195:
case 555:
case 772:
case 1885:
case 2612:
case 2491:
case 3170:
case 1449:
case 3139:
case 550:
case 1451:
case 296:
case 2172:
case 3144:
case 478:
case 1860:
case 2961:
case 1926:
case 1665:
case 3174:
case 1103:
case 1776:
case 3403:
case 1695:
case 461:
case 2180:
case 199:
case 3164:
case 1040:
case 597:
case 1443:
case 237:
case 97:
case 3253:
case 2463:
case 2662:
case 3630:
case 3415:
case 3122:
case 1250:
case 3310:
case 3621:
case 183:
case 295:
case 1328:
case 3782:
case 623:
case 731:
case 5:
case 3029:
case 2339:
case 2815:
case 486:
case 2708:
case 2946:
case 4045:
case 445:
case 1259:
case 1943:
case 1838:
case 2974:
case 2767:
case 1756:
case 2854:
case 398:
case 4068:
case 453:
case 522:
case 2569:
case 1186:
case 786:
case 3864:
case 734:
case 2434:
case 3052:
case 2152:
case 228:
case 371:
case 3611:
case 2717:
case 1142:
case 2457:
case 0:
case 116:
case 1698:
case 2260:
case 2250:
case 101:
case 1212:
case 2454:
case 471:
case 3533:
case 3163:
case 440:
case 901:
case 811:
case 1039:
case 3249:
case 2932:
case 302:
case 3013:
case 2509:
case 1565:
case 1496:
case 2840:
case 3272:
case 2576:
case 3550:
case 2786:
case 1358:
case 3508:
case 2788:
case 1469:
case 3199:
case 2951:
case 3845:
case 310:
case 2558:
case 1023:
case 2279:
case 1386:
case 178:
case 2567:
case 699:
case 2026:
case 561:
case 2664:
case 2119:
case 820:
case 2060:
case 2757:
case 171:
case 3607:
case 2198:
case 2045:
case 2485:
case 1873:
case 1721:
case 1855:
case 3990:
case 1105:
case 1399:
case 881:
case 131:
case 1518:
case 2203:
case 281:
case 3612:
case 2118:
case 1684:
case 1017:
case 285:
case 3519:
case 1571:
case 3767:
case 2086:
case 3891:
case 3315:
case 1533:
case 299:
case 2975:
case 64:
case 2991:
case 3112:
case 80:
case 3662:
case 177:
case 1872:
case 1510:
case 813:
case 3652:
case 2915:
case 1774:
case 520:
case 3452:
case 3965:
case 3537:
case 3525:
case 3299:
case 3108:
case 1231:
case 3541:
case 420:
case 1548:
case 416:
case 388:
case 474:
case 2365:
case 2564:
case 489:
case 2305:
case 1827:
case 1055:
case 812:
case 347:
case 3454:
case 3571:
case 1745:
case 2500:
case 3992:
case 3869:
case 3006:
case 1623:
case 31:
case 1504:
case 1749:
case 2621:
case 3665:
case 287:
case 1760:
case 1145:
case 1421:
case 1568:
case 862:
case 3686:
case 3972:
case 2282:
case 3558:
case 2007:
case 2466:
case 2252:
case 664:
case 1829:
case 1292:
case 1368:
case 470:
case 2336:
case 221:
case 606:
case 1636:
case 1243:
case 1404:
case 1951:
case 3913:
case 3861:
case 3238:
case 584:
case 2267:
case 3284:
case 3428:
case 1163:
case 989:
case 1845:
case 265:
case 495:
case 801:
case 943:
case 147:
case 145:
case 2013:
case 957:
case 2112:
case 1098:
case 2501:
case 940:
case 3437:
case 4077:
case 3736:
case 944:
case 150:
case 1640:
case 136:
case 742:
case 3873:
case 576:
case 194:
case 3749:
case 867:
case 1618:
case 4062:
case 2747:
case 1071:
case 2131:
case 65:
case 3239:
case 2092:
case 2894:
case 4015:
case 2715:
case 1795:
case 431:
case 3422:
case 3005:
case 3648:
case 1675:
case 972:
case 314:
case 3226:
case 3358:
case 2467:
case 1277:
case 2:
case 3649:
case 1964:
case 2363:
case 439:
case 3725:
case 278:
case 1282:
case 24:
case 3474:
case 950:
case 1593:
case 3994:
case 3255:
case 3984:
case 3216:
case 2575:
case 1711:
case 3412:
case 1299:
case 1069:
case 2481:
case 808:
case 1886:
case 3863:
case 2307:
case 2354:
case 69:
case 2425:
case 528:
case 2458:
case 3939:
case 1424:
case 2150:
case 2016:
case 1401:
case 1625:
case 2892:
case 2941:
case 3727:
case 2310:
case 2582:
case 680:
case 106:
case 110:
case 3645:
case 1273:
case 1735:
case 608:
case 2784:
case 3062:
case 1141:
case 306:
case 3583:
case 436:
case 2619:
case 3040:
case 2755:
case 2451:
case 2167:
case 545:
case 1479:
case 712:
case 3712:
case 2442:
case 3349:
case 23:
case 1061:
case 703:
case 356:
case 1113:
case 2934:
case 2956:
case 860:
case 2110:
case 1360:
case 96:
case 2138:
case 2424:
case 466:
case 3775:
case 2798:
case 280:
case 3561:
case 2459:
case 3655:
case 3335:
case 2682:
case 3934:
case 1646:
case 3228:
case 1505:
case 3188:
case 1454:
case 2839:
case 1166:
case 3048:
case 2924:
case 3895:
case 2515:
case 198:
case 1868:
case 1501:
case 3390:
case 1710:
case 1340:
case 3517:
case 3409:
case 2197:
case 4079:
case 1067:
case 3089:
case 2349:
case 2719:
case 1315:
case 1253:
case 2727:
case 3570:
case 1347:
case 2610:
case 353:
case 3275:
case 232:
case 1945:
case 1021:
case 3021:
case 329:
case 1265:
case 1511:
case 2596:
case 779:
case 633:
case 3030:
case 3355:
case 1994:
case 391:
case 2518:
case 1596:
case 3101:
case 2824:
case 1752:
case 4072:
case 1883:
case 1477:
case 85:
case 1957:
case 1764:
case 1191:
case 1961:
case 1978:
case 3230:
case 396:
case 1523:
case 3372:
case 360:
case 886:
case 2689:
case 3709:
case 2253:
case 2371:
case 3591:
case 2477:
case 2827:
case 2335:
case 3720:
case 546:
case 3311:
case 4074:
case 2776:
case 2213:
case 197:
case 3945:
case 1859:
case 917:
case 1524:
case 2967:
case 2254:
case 4063:
case 1341:
case 3054:
case 9:
case 2875:
case 1538:
case 167:
case 1589:
case 322:
case 3476:
case 3434:
case 713:
case 2096:
case 3651:
case 2100:
case 631:
case 1594:
case 3658:
case 1229:
case 88:
case 702:
case 1542:
case 3928:
case 4084:
case 130:
case 450:
case 3481:
case 2957:
case 3262:
case 156:
case 3206:
case 2385:
case 2224:
case 762:
case 2277:
case 3948:
case 152:
case 1914:
case 1178:
case 948:
case 815:
case 596:
case 1372:
case 1833:
case 3777:
case 3689:
case 3130:
case 3388:
case 2803:
case 592:
case 3957:
case 3743:
case 1708:
case 2765:
case 1359:
case 1498:
case 3882:
case 911:
case 1707:
case 1517:
case 904:
case 2512:
case 1846:
case 2694:
case 745:
case 2386:
case 219:
case 2598:
case 2173:
case 541:
case 1790:
case 4064:
case 2461:
case 4078:
case 2237:
case 723:
case 340:
case 774:
case 1797:
case 1619:
case 3829:
case 2995:
case 2806:
case 354:
case 1779:
case 1452:
case 137:
case 257:
case 3513:
case 1958:
case 1366:
case 1570:
case 2319:
case 3564:
case 2082:
case 3182:
case 3548:
case 2636:
case 1911:
case 3528:
case 2633:
case 1863:
case 1351:
case 352:
case 2922:
case 2869:
case 910:
case 2331:
case 3482:
case 3705:
case 3892:
case 1955:
case 313:
case 611:
case 1973:
case 316:
case 1610:
case 2734:
case 2211:
case 1864:
case 344:
case 2164:
case 787:
case 2246:
case 1276:
case 4013:
case 3676:
case 622:
case 3201:
case 600:
case 1877:
case 3484:
case 3576:
case 421:
case 195:
case 1230:
case 3424:
case 1305:
case 3682:
case 969:
case 3627:
case 3271:
case 1058:
case 573:
case 3364:
case 2193:
case 799:
case 706:
case 3696:
case 1213:
case 1922:
case 2293:
case 2346:
case 538:
case 3799:
case 2265:
case 2758:
case 3473:
case 3922:
case 1410:
case 614:
case 855:
case 4050:
case 590:
case 3405:
case 1288:
case 2440:
case 865:
case 3479:
case 220:
case 2359:
case 1099:
case 4020:
case 632:
case 846:
case 2483:
case 677:
case 2901:
case 683:
case 579:
case 3983:
case 3347:
case 465:
case 3233:
case 1190:
case 2887:
case 3852:
case 4027:
case 3196:
case 63:
case 3314:
case 2132:
case 123:
case 3900:
case 3411:
case 1772:
case 3752:
case 2374:
case 25:
case 2775:
case 1093:
case 3488:
case 3425:
case 937:
case 3552:
case 580:
case 1448:
case 3744:
case 3971:
case 224:
case 2642:
case 3887:
case 1755:
case 3348:
case 2913:
case 1894:
case 572:
case 2989:
case 3302:
case 3184:
case 3472:
case 2315:
case 3332:
case 174:
case 405:
case 923:
case 3801:
case 1405:
case 3132:
case 2774:
case 1609:
case 754:
case 4010:
case 1751:
case 2037:
case 3160:
case 2965:
case 3330:
case 2984:
case 1255:
case 3060:
case 2003:
case 1024:
case 2613:
case 1367:
case 2516:
case 1294:
case 3875:
case 2344:
case 1035:
case 324:
case 3189:
case 4089:
case 615:
case 1001:
case 3394:
case 534:
case 3185:
case 3766:
case 2958:
case 1300:
case 3497:
case 2948:
case 3666:
case 1107:
case 1109:
case 2088:
case 1939:
case 2531:
case 179:
case 216:
case 3360:
case 987:
case 2141:
case 2455:
case 3117:
case 3012:
case 824:
case 3646:
case 842:
case 488:
case 3356:
case 3973:
case 3835:
case 3818:
case 330:
case 2361:
case 2263:
case 927:
case 193:
case 3380:
case 1127:
case 1691:
case 3771:
case 1284:
case 279:
case 1984:
case 1987:
case 2605:
case 2170:
case 3224:
case 2792:
case 4:
case 3919:
case 1830:
case 2969:
case 1468:
case 2368:
case 1272:
case 3860:
case 1415:
case 350:
case 2318:
case 336:
case 894:
case 1419:
case 2398:
case 649:
case 2375:
case 2436:
case 2808:
case 447:
case 2553:
case 1927:
case 1396:
case 3328:
case 3068:
case 2699:
case 3047:
case 907:
case 845:
case 3032:
case 2712:
case 59:
case 1674:
case 617:
case 3532:
case 3792:
case 1817:
case 3986:
case 1502:
case 1223:
case 2072:
case 843:
case 3297:
case 2528:
case 1804:
case 2311:
case 395:
case 2579:
case 3601:
case 1275:
case 2678:
case 1785:
case 3505:
case 3378:
case 3542:
case 1968:
case 48:
case 4036:
case 2020:
case 3643:
case 1249:
case 62:
case 2533:
case 1493:
case 1364:
case 2600:
case 1630:
case 2563:
case 2561:
case 544:
case 3435:
case 3885:
case 3340:
case 332:
case 1205:
case 2855:
case 2838:
case 3531:
case 1576:
case 497:
case 1919:
case 2856:
case 2297:
case 3180:
case 3559:
case 1500:
case 442:
case 2022:
case 366:
case 2123:
case 836:
case 2299:
case 2187:
case 3243:
case 1657:
case 999:
case 2891:
case 73:
case 2182:
case 1704:
case 3186:
case 3761:
case 4071:
case 2109:
case 1006:
case 1115:
case 3395:
case 262:
case 3890:
case 1668:
case 3779:
case 4051:
case 1227:
case 888:
case 3715:
case 1465:
case 2186:
case 1411:
case 3261:
case 711:
case 593:
case 2648:
case 2816:
case 3760:
case 3855:
case 636:
case 3221:
case 3907:
case 2120:
case 3733:
case 3406:
case 2121:
case 3019:
case 3826:
case 2357:
case 3442:
case 1688:
case 1137:
case 1759:
case 1858:
case 209:
case 3154:
case 2904:
case 1731:
case 3634:
case 3359:
case 1370:
case 1678:
case 2985:
case 3671:
case 1889:
case 1064:
case 1044:
case 2829:
case 3346:
case 3459:
case 502:
case 3283:
case 1780:
case 1658:
case 960:
case 770:
case 2603:
case 1822:
case 2620:
case 138:
case 3392:
case 817:
case 2377:
case 485:
case 378:
case 2783:
case 1604:
case 995:
case 348:
case 3448:
case 1601:
case 1066:
case 2397:
case 1104:
case 613:
case 90:
case 785:
case 1980:
case 1812:
case 814:
case 2157:
case 2074:
case 480:
case 230:
case 3342:
case 1392:
case 3095:
case 2920:
case 3657:
case 747:
case 2222:
case 2437:
case 1202:
case 795:
case 484:
case 3025:
case 530:
case 2006:
case 2291:
case 2053:
case 2637:
case 2382:
case 1834:
case 267:
case 3318:
case 1091:
case 3433:
case 3426:
case 837:
case 3608:
case 3257:
case 2039:
case 3026:
case 2073:
case 3259:
case 2239:
case 297:
case 635:
case 3429:
case 630:
case 2649:
case 3566:
case 1302:
case 2294:
case 2356:
case 3764:
case 705:
case 376:
case 412:
case 1686:
case 1153:
case 829:
case 1655:
case 2729:
case 1600:
case 3606:
case 874:
case 345:
case 2426:
case 258:
case 381:
case 1210:
case 3344:
case 2822:
case 794:
case 671:
case 3109:
case 765:
case 2902:
case 3022:
case 2923:
case 1124:
case 3773:
case 2369:
case 1224:
case 3279:
case 3966:
case 1930:
case 3152:
case 1638:
case 652:
case 2227:
case 303:
case 3580:
case 807:
case 507:
case 33:
case 2972:
case 3368:
case 3103:
case 1503:
case 3745:
case 2165:
case 3597:
case 1189:
case 52:
case 2604:
case 2521:
case 1354:
case 158:
case 1439:
case 540:
case 1203:
case 2468:
case 2874:
case 3551:
case 4073:
case 1045:
case 467:
case 491:
case 3930:
case 1816:
case 681:
case 3167:
case 1408:
case 2751:
case 2845:
case 458:
case 119:
case 918:
case 1567:
case 996:
case 2276:
case 1566:
case 3742:
case 3567:
case 1750:
case 2814:
case 3753:
case 3819:
case 3065:
case 3053:
case 3909:
case 2067:
case 3334:
case 2320:
case 1734:
case 2148:
case 506:
case 173:
case 3200:
case 1258:
case 2153:
case 2925:
case 1605:
case 3825:
case 2129:
case 2340:
case 1387:
case 2090:
case 3816:
case 1280:
case 2370:
case 1356:
case 1654:
case 1172:
case 2888:
case 3446:
case 3893:
case 425:
case 1728:
case 151:
case 693:
case 1848:
case 3376:
case 2877:
case 527:
case 1060:
case 3617:
case 2204:
case 2762:
case 832:
case 2652:
case 532:
case 3304:
case 74:
case 2766:
case 1606:
case 291:
case 926:
case 2402:
case 3153:
case 2419:
case 3453:
case 732:
case 3237:
case 3999:
case 1176:
case 1835:
case 3578:
case 916:
case 1369:
case 3707:
case 2594:
case 28:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1681819201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,];
var gg_b = "1681819201/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
