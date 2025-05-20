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
case 2146:
case 3565:
case 2603:
case 2464:
case 208:
case 1406:
case 1026:
case 1212:
case 536:
case 3151:
case 2604:
case 2463:
case 1900:
case 1329:
case 1666:
case 1292:
case 317:
case 1887:
case 578:
case 936:
case 2348:
case 1296:
case 12:
case 2185:
case 2275:
case 1253:
case 3536:
case 3075:
case 2373:
case 290:
case 1022:
case 4021:
case 2210:
case 896:
case 2237:
case 214:
case 3286:
case 3608:
case 3090:
case 2086:
case 3733:
case 1159:
case 2902:
case 723:
case 4043:
case 1964:
case 782:
case 443:
case 3897:
case 2660:
case 121:
case 1058:
case 4044:
case 3817:
case 2045:
case 1140:
case 3830:
case 4078:
case 1527:
case 2769:
case 3172:
case 9:
case 898:
case 2369:
case 2918:
case 168:
case 213:
case 3859:
case 1423:
case 395:
case 624:
case 3743:
case 2998:
case 1707:
case 2815:
case 2247:
case 1876:
case 1004:
case 3266:
case 980:
case 3840:
case 1515:
case 2035:
case 1117:
case 3333:
case 2101:
case 3696:
case 1984:
case 1197:
case 842:
case 444:
case 4033:
case 3334:
case 1595:
case 3653:
case 800:
case 5:
case 724:
case 3616:
case 3928:
case 3914:
case 1755:
case 206:
case 607:
case 756:
case 2941:
case 187:
case 3585:
case 1979:
case 326:
case 1867:
case 3913:
case 3277:
case 976:
case 2748:
case 2077:
case 538:
case 2658:
case 2165:
case 2132:
case 3449:
case 2567:
case 1682:
case 2923:
case 3952:
case 2551:
case 257:
case 369:
case 3405:
case 2504:
case 3040:
case 2225:
case 1469:
case 3158:
case 2503:
case 768:
case 2938:
case 1609:
case 2341:
case 1803:
case 4056:
case 668:
case 942:
case 1804:
case 1076:
case 900:
case 598:
case 3356:
case 4014:
case 2687:
case 3847:
case 2866:
case 4093:
case 1110:
case 1577:
case 3122:
case 4028:
case 3461:
case 1384:
case 2116:
case 2702:
case 3933:
case 3270:
case 1383:
case 2154:
case 3328:
case 3601:
case 787:
case 1285:
case 21:
case 3934:
case 838:
case 2318:
case 405:
case 1764:
case 363:
case 2877:
case 2706:
case 2112:
case 4071:
case 1438:
case 2560:
case 3978:
case 1907:
case 847:
case 2672:
case 925:
case 2526:
case 2718:
case 3875:
case 2009:
case 2429:
case 3943:
case 1363:
case 364:
case 3553:
case 1826:
case 1783:
case 3728:
case 1615:
case 2455:
case 525:
case 3499:
case 1784:
case 2676:
case 35:
case 44:
case 2882:
case 252:
case 3642:
case 1586:
case 3713:
case 621:
case 1858:
case 1670:
case 740:
case 3097:
case 996:
case 420:
case 3793:
case 629:
case 230:
case 1955:
case 2973:
case 766:
case 3017:
case 1779:
case 2027:
case 666:
case 2407:
case 3104:
case 1411:
case 3810:
case 3227:
case 3646:
case 2558:
case 3103:
case 2331:
case 2667:
case 351:
case 3752:
case 441:
case 596:
case 1005:
case 859:
case 3472:
case 2100:
case 2269:
case 3841:
case 4066:
case 3720:
case 1440:
case 3069:
case 2588:
case 1552:
case 171:
case 851:
case 3366:
case 1946:
case 2813:
case 1459:
case 3233:
case 673:
case 2619:
case 3823:
case 1556:
case 1513:
case 1942:
case 3335:
case 3476:
case 3234:
case 2710:
case 734:
case 3824:
case 1985:
case 3579:
case 2699:
case 4062:
case 1514:
case 3168:
case 4035:
case 3655:
case 285:
case 1061:
case 2959:
case 1102:
case 517:
case 2871:
case 3139:
case 864:
case 1796:
case 2485:
case 3377:
case 1057:
case 3898:
case 347:
case 2925:
case 1644:
case 3451:
case 928:
case 2940:
case 2828:
case 917:
case 1643:
case 2238:
case 2164:
case 3467:
case 3038:
case 1571:
case 338:
case 3927:
case 1081:
case 1198:
case 3563:
case 2605:
case 969:
case 408:
case 3564:
case 2432:
case 863:
case 1229:
case 2465:
case 1392:
case 490:
case 3806:
case 2248:
case 1354:
case 569:
case 691:
case 13:
case 3777:
case 561:
case 2184:
case 1316:
case 1255:
case 2930:
case 699:
case 2337:
case 2289:
case 1497:
case 812:
case 774:
case 3735:
case 3831:
case 79:
case 2179:
case 1417:
case 2390:
case 2657:
case 2568:
case 2021:
case 2747:
case 1124:
case 733:
case 3244:
case 2078:
case 3766:
case 554:
case 4045:
case 1868:
case 3278:
case 3091:
case 4082:
case 674:
case 765:
case 3320:
case 56:
case 1965:
case 3345:
case 243:
case 2291:
case 2043:
case 1932:
case 2206:
case 1138:
case 3848:
case 2688:
case 1652:
case 63:
case 861:
case 2412:
case 3529:
case 4009:
case 1264:
case 3426:
case 793:
case 869:
case 2492:
case 3945:
case 2581:
case 963:
case 3309:
case 1263:
case 826:
case 2937:
case 2496:
case 2910:
case 3679:
case 1336:
case 3157:
case 1614:
case 1693:
case 2990:
case 2202:
case 693:
case 2416:
case 1475:
case 3002:
case 1742:
case 3986:
case 1068:
case 86:
case 1410:
case 2844:
case 3684:
case 1437:
case 3811:
case 2878:
case 1954:
case 2759:
case 2317:
case 639:
case 1301:
case 2843:
case 1628:
case 3891:
case 1953:
case 452:
case 1912:
case 1543:
case 895:
case 241:
case 3889:
case 739:
case 398:
case 249:
case 2725:
case 1200:
case 731:
case 2740:
case 3105:
case 959:
case 2833:
case 2223:
case 771:
case 3403:
case 2325:
case 853:
case 173:
case 3727:
case 419:
case 951:
case 2224:
case 1111:
case 3663:
case 2505:
case 396:
case 4015:
case 1279:
case 551:
case 3395:
case 3869:
case 2014:
case 2717:
case 679:
case 3293:
case 3214:
case 3315:
case 3256:
case 4095:
case 710:
case 1908:
case 3294:
case 3977:
case 671:
case 1189:
case 41:
case 3962:
case 1342:
case 3935:
case 1173:
case 2668:
case 2155:
case 95:
case 3119:
case 3838:
case 794:
case 2028:
case 655:
case 2408:
case 3709:
case 2071:
case 755:
case 55:
case 2218:
case 3271:
case 828:
case 3966:
case 486:
case 975:
case 564:
case 857:
case 3492:
case 2920:
case 1751:
case 1855:
case 1064:
case 715:
case 3412:
case 51:
case 3688:
case 2426:
case 148:
case 1767:
case 1958:
case 2529:
case 3416:
case 91:
case 3990:
case 3519:
case 1829:
case 862:
case 2422:
case 2986:
case 1574:
case 2161:
case 1387:
case 3937:
case 3496:
case 34:
case 45:
case 3454:
case 2157:
case 3317:
case 3843:
case 320:
case 3759:
case 242:
case 3975:
case 2891:
case 2795:
case 200:
case 4017:
case 1776:
case 2811:
case 1980:
case 3725:
case 1445:
case 3821:
case 1772:
case 2105:
case 1000:
case 2507:
case 632:
case 1511:
case 3740:
case 1420:
case 451:
case 919:
case 2327:
case 298:
case 813:
case 1926:
case 4040:
case 1569:
case 2727:
case 1144:
case 3834:
case 3505:
case 2024:
case 552:
case 2663:
case 3223:
case 1606:
case 1143:
case 2023:
case 1372:
case 2403:
case 3325:
case 2664:
case 1602:
case 2315:
case 2256:
case 2213:
case 772:
case 2977:
case 3056:
case 2395:
case 1462:
case 3241:
case 3093:
case 296:
case 2214:
case 2293:
case 1079:
case 160:
case 2228:
case 1477:
case 3028:
case 2935:
case 2199:
case 1631:
case 1367:
case 2966:
case 2600:
case 3298:
case 808:
case 2460:
case 1538:
case 2709:
case 3071:
case 2018:
case 137:
case 1249:
case 305:
case 1304:
case 3856:
case 3588:
case 495:
case 1967:
case 3813:
case 2366:
case 1303:
case 1879:
case 1524:
case 2069:
case 4047:
case 514:
case 2824:
case 3737:
case 2579:
case 3699:
case 2234:
case 2476:
case 3710:
case 2168:
case 914:
case 1415:
case 2655:
case 3034:
case 2970:
case 3852:
case 172:
case 2335:
case 1674:
case 2786:
case 1495:
case 3033:
case 746:
case 2584:
case 1976:
case 426:
case 3550:
case 508:
case 990:
case 2915:
case 637:
case 3959:
case 2139:
case 1261:
case 2995:
case 3442:
case 3775:
case 3238:
case 3828:
case 1726:
case 3446:
case 2038:
case 737:
case 1518:
case 1691:
case 3164:
case 2467:
case 1972:
case 1884:
case 247:
case 3925:
case 469:
case 3940:
case 2451:
case 1611:
case 1506:
case 957:
case 1760:
case 1409:
case 692:
case 428:
case 3432:
case 2149:
case 748:
case 238:
case 2927:
case 1669:
case 417:
case 1281:
case 562:
case 3184:
case 276:
case 2073:
case 962:
case 3273:
case 3183:
case 4075:
case 1502:
case 1219:
case 557:
case 648:
case 2806:
case 2074:
case 2777:
case 792:
case 2048:
case 3274:
case 3436:
case 3997:
case 906:
case 3179:
case 1987:
case 3568:
case 3390:
case 3401:
case 1156:
case 870:
case 3310:
case 3661:
case 3337:
case 3289:
case 2243:
case 1152:
case 1638:
case 2188:
case 280:
case 2091:
case 3043:
case 1703:
case 453:
case 1007:
case 2244:
case 2766:
case 3747:
case 3044:
case 843:
case 1182:
case 2158:
case 3324:
case 4023:
case 949:
case 2352:
case 2405:
case 1388:
case 3240:
case 1145:
case 3835:
case 3731:
case 2040:
case 520:
case 1272:
case 2356:
case 1768:
case 1957:
case 4041:
case 3866:
case 3015:
case 920:
case 2394:
case 2636:
case 2295:
case 2059:
case 212:
case 3341:
case 684:
case 2314:
case 1617:
case 2328:
case 2457:
case 2601:
case 1085:
case 1630:
case 31:
case 3196:
case 2461:
case 3153:
case 1350:
case 2270:
case 3702:
case 1808:
case 118:
case 263:
case 2126:
case 1267:
case 3706:
case 745:
case 1251:
case 386:
case 3318:
case 3991:
case 4006:
case 1749:
case 1853:
case 3526:
case 2771:
case 3718:
case 2875:
case 3009:
case 1065:
case 1816:
case 2512:
case 2209:
case 3798:
case 2978:
case 1854:
case 2592:
case 60:
case 2481:
case 18:
case 3302:
case 25:
case 2921:
case 1892:
case 116:
case 2499:
case 1575:
case 2553:
case 1177:
case 3108:
case 388:
case 1812:
case 1659:
case 2419:
case 330:
case 3230:
case 2714:
case 3973:
case 2793:
case 3217:
case 2030:
case 1510:
case 609:
case 1001:
case 1537:
case 352:
case 2642:
case 601:
case 2097:
case 181:
case 1590:
case 2103:
case 3331:
case 701:
case 498:
case 2646:
case 3558:
case 1443:
case 622:
case 683:
case 251:
case 3407:
case 3651:
case 4031:
case 2104:
case 3027:
case 709:
case 367:
case 2151:
case 3604:
case 3463:
case 1092:
case 3931:
case 585:
case 1226:
case 2532:
case 1012:
case 228:
case 3738:
case 1761:
case 1865:
case 2536:
case 1222:
case 2439:
case 4074:
case 3373:
case 3809:
case 1319:
case 3374:
case 4073:
case 3587:
case 122:
case 2090:
case 1597:
case 314:
case 2286:
case 2321:
case 603:
case 3902:
case 2733:
case 2501:
case 2468:
case 944:
case 1115:
case 2010:
case 3237:
case 3389:
case 789:
case 3210:
case 3045:
case 544:
case 2830:
case 2220:
case 2245:
case 4011:
case 3020:
case 101:
case 2282:
case 2344:
case 3660:
case 703:
case 2378:
case 3311:
case 2778:
case 1540:
case 3815:
case 943:
case 3998:
case 1204:
case 4069:
case 1127:
case 3572:
case 849:
case 2744:
case 3247:
case 2971:
case 313:
case 1949:
case 2743:
case 1305:
case 2488:
case 1452:
case 2334:
case 1675:
case 2653:
case 3622:
case 1494:
case 2928:
case 1559:
case 704:
case 2616:
case 1456:
case 2654:
case 543:
case 1493:
case 3035:
case 3680:
case 3576:
case 26:
case 2825:
case 1950:
case 2235:
case 3479:
case 436:
case 2277:
case 3136:
case 1846:
case 362:
case 3774:
case 2542:
case 3077:
case 2956:
case 618:
case 1719:
case 1008:
case 3748:
case 2993:
case 2914:
case 3773:
case 627:
case 2585:
case 2450:
case 1610:
case 226:
case 2187:
case 1637:
case 357:
case 727:
case 1781:
case 3132:
case 2449:
case 3567:
case 4038:
case 3870:
case 261:
case 145:
case 2088:
case 1325:
case 1052:
case 3606:
case 1223:
case 1340:
case 3288:
case 1833:
case 3143:
case 4072:
case 809:
case 1107:
case 2111:
case 3569:
case 3144:
case 1834:
case 1359:
case 1730:
case 4076:
case 3079:
case 503:
case 2279:
case 3435:
case 3121:
case 1639:
case 883:
case 822:
case 1013:
case 3602:
case 989:
case 1668:
case 2173:
case 1155:
case 1557:
case 3787:
case 2284:
case 2736:
case 916:
case 58:
case 2283:
case 3903:
case 2861:
case 3249:
case 685:
case 105:
case 3538:
case 1071:
case 0:
case 1947:
case 3367:
case 2346:
case 2264:
case 3767:
case 458:
case 3064:
case 927:
case 1412:
case 2138:
case 1688:
case 291:
case 3855:
case 3751:
case 2332:
case 1581:
case 299:
case 3063:
case 377:
case 2693:
case 518:
case 1454:
case 4087:
case 1910:
case 2881:
case 2785:
case 3641:
case 3829:
case 2694:
case 2613:
case 3387:
case 2475:
case 1416:
case 2656:
case 2039:
case 1990:
case 1878:
case 2954:
case 3134:
case 2996:
case 2437:
case 2068:
case 2521:
case 2410:
case 2953:
case 3589:
case 3486:
case 3922:
case 1317:
case 1843:
case 3133:
case 2490:
case 2671:
case 3591:
case 1649:
case 3926:
case 3482:
case 141:
case 3000:
case 3511:
case 3445:
case 1725:
case 2992:
case 504:
case 233:
case 2169:
case 1231:
case 3772:
case 2081:
case 2312:
case 2198:
case 3326:
case 3669:
case 3281:
case 293:
case 1465:
case 3171:
case 818:
case 3029:
case 3760:
case 4026:
case 3409:
case 2396:
case 2708:
case 3864:
case 1997:
case 1248:
case 3863:
case 1917:
case 1930:
case 2099:
case 2634:
case 1375:
case 1184:
case 545:
case 4080:
case 3299:
case 3055:
case 641:
case 2936:
case 3194:
case 1661:
case 720:
case 402:
case 804:
case 2430:
case 1568:
case 649:
case 1657:
case 3114:
case 3800:
case 466:
case 332:
case 2141:
case 1211:
case 231:
case 3704:
case 984:
case 3007:
case 429:
case 1747:
case 2124:
case 1043:
case 2932:
case 2965:
case 143:
case 741:
case 3951:
case 901:
case 3205:
case 583:
case 1893:
case 4004:
case 2425:
case 397:
case 3879:
case 3524:
case 1100:
case 909:
case 1347:
case 3758:
case 3967:
case 1813:
case 2946:
case 468:
case 2552:
case 803:
case 4003:
case 2594:
case 2942:
case 3495:
case 210:
case 1790:
case 3648:
case 2459:
case 1619:
case 3673:
case 2593:
case 3415:
case 501:
case 1034:
case 889:
case 1699:
case 2985:
case 3541:
case 1775:
case 2716:
case 2102:
case 3470:
case 3780:
case 2754:
case 487:
case 3976:
case 27:
case 2308:
case 2621:
case 3360:
case 1940:
case 2678:
case 1163:
case 88:
case 3884:
case 2644:
case 2792:
case 1446:
case 3726:
case 705:
case 1549:
case 2106:
case 255:
case 1828:
case 2643:
case 1672:
case 560:
case 2364:
case 38:
case 3640:
case 1798:
case 546:
case 258:
case 1991:
case 2265:
case 2232:
case 3853:
case 1526:
case 4039:
case 2783:
case 3036:
case 946:
case 3575:
case 608:
case 188:
case 2236:
case 3287:
case 3339:
case 1676:
case 3892:
case 2784:
case 2087:
case 1302:
case 2473:
case 2615:
case 1455:
case 381:
case 2586:
case 1974:
case 714:
case 2489:
case 872:
case 1741:
case 3421:
case 3162:
case 3537:
case 3001:
case 1973:
case 1820:
case 1217:
case 2201:
case 3981:
case 2147:
case 1724:
case 433:
case 2545:
case 897:
case 3166:
case 2411:
case 3478:
case 2520:
case 3788:
case 465:
case 303:
case 282:
case 2582:
case 2300:
case 2491:
case 1886:
case 223:
case 1225:
case 3145:
case 2566:
case 3272:
case 1504:
case 3120:
case 2072:
case 3388:
case 1938:
case 1503:
case 473:
case 4088:
case 850:
case 2190:
case 3433:
case 3186:
case 224:
case 1341:
case 1015:
case 434:
case 832:
case 3434:
case 2137:
case 3957:
case 3768:
case 1702:
case 2175:
case 1153:
case 2577:
case 3739:
case 1196:
case 256:
case 3617:
case 657:
case 1154:
case 3630:
case 3085:
case 4050:
case 186:
case 1192:
case 1969:
case 2763:
case 3905:
case 1560:
case 2438:
case 815:
case 318:
case 2246:
case 3305:
case 2423:
case 2003:
case 711:
case 1918:
case 113:
case 384:
case 3949:
case 1369:
case 670:
case 1626:
case 1791:
case 1572:
case 550:
case 719:
case 479:
case 3525:
case 2876:
case 2004:
case 2707:
case 1066:
case 3540:
case 1711:
case 1998:
case 2984:
case 1576:
case 2441:
case 2872:
case 3950:
case 2117:
case 1062:
case 3414:
case 3493:
case 1035:
case 3456:
case 3675:
case 2197:
case 1622:
case 1789:
case 71:
case 47:
case 3610:
case 3361:
case 4057:
case 106:
case 1077:
case 2570:
case 3357:
case 1748:
case 4061:
case 2686:
case 3846:
case 2867:
case 162:
case 1870:
case 3109:
case 455:
case 3988:
case 1923:
case 1132:
case 848:
case 1658:
case 3471:
case 2418:
case 786:
case 877:
case 915:
case 3781:
case 3885:
case 1551:
case 2620:
case 2498:
case 1338:
case 2509:
case 2212:
case 108:
case 688:
case 1464:
case 2329:
case 1604:
case 3092:
case 2080:
case 1587:
case 2662:
case 3280:
case 3757:
case 2254:
case 2216:
case 1373:
case 2355:
case 1809:
case 3053:
case 860:
case 3016:
case 3865:
case 3761:
case 4019:
case 43:
case 266:
case 1210:
case 3517:
case 730:
case 3530:
case 597:
case 1902:
case 2159:
case 1290:
case 1086:
case 240:
case 322:
case 114:
case 1660:
case 2058:
case 2307:
case 997:
case 1082:
case 3258:
case 439:
case 630:
case 767:
case 2431:
case 1020:
case 1045:
case 572:
case 431:
case 3705:
case 309:
case 2525:
case 1692:
case 1266:
case 3707:
case 2540:
case 1778:
case 2452:
case 865:
case 1612:
case 1743:
case 2305:
case 1488:
case 2203:
case 368:
case 931:
case 2456:
case 1928:
case 3197:
case 531:
case 472:
case 2413:
case 2675:
case 1334:
case 1696:
case 1721:
case 3441:
case 1825:
case 3130:
case 3515:
case 1840:
case 3117:
case 1654:
case 1333:
case 2414:
case 2690:
case 1956:
case 2719:
case 2008:
case 3867:
case 3686:
case 1187:
case 2361:
case 2799:
case 2637:
case 3979:
case 1450:
case 126:
case 635:
case 2610:
case 1914:
case 3755:
case 1993:
case 899:
case 2781:
case 993:
case 161:
case 2988:
case 2260:
case 1546:
case 2471:
case 763:
case 3729:
case 1449:
case 3900:
case 955:
case 3666:
case 3292:
case 117:
case 3887:
case 2092:
case 65:
case 1151:
case 415:
case 3406:
case 57:
case 3026:
case 1565:
case 2226:
case 1532:
case 2012:
case 3402:
case 97:
case 2832:
case 675:
case 2865:
case 2761:
case 3296:
case 2054:
case 555:
case 3080:
case 75:
case 3254:
case 2319:
case 994:
case 2280:
case 579:
case 302:
case 3159:
case 3677:
case 2597:
case 283:
case 1286:
case 222:
case 571:
case 834:
case 1468:
case 2115:
case 1010:
case 659:
case 971:
case 3125:
case 1245:
case 2801:
case 3963:
case 1817:
case 3307:
case 751:
case 321:
case 3058:
case 3964:
case 873:
case 855:
case 1943:
case 3363:
case 1209:
case 1512:
case 2065:
case 2816:
case 3232:
case 1875:
case 1771:
case 728:
case 358:
case 2749:
case 4063:
case 2625:
case 3364:
case 1592:
case 1978:
case 2854:
case 3907:
case 3880:
case 1921:
case 2892:
case 216:
case 1499:
case 3784:
case 2287:
case 15:
case 87:
case 3473:
case 3615:
case 3087:
case 1554:
case 3783:
case 1516:
case 2036:
case 2659:
case 2812:
case 1419:
case 894:
case 2575:
case 3695:
case 1553:
case 2162:
case 2537:
case 1685:
case 1030:
case 2135:
case 2510:
case 2421:
case 1793:
case 3201:
case 3955:
case 1714:
case 810:
case 1756:
case 1097:
case 281:
case 1794:
case 3489:
case 3586:
case 1752:
case 534:
case 2443:
case 2788:
case 3300:
case 3491:
case 323:
case 1810:
case 3545:
case 1227:
case 1837:
case 2444:
case 879:
case 1104:
case 795:
case 3609:
case 1158:
case 1665:
case 2272:
case 2547:
case 3700:
case 3072:
case 2388:
case 66:
case 1025:
case 574:
case 831:
case 2434:
case 1313:
case 1847:
case 3137:
case 1394:
case 3535:
case 3804:
case 3076:
case 1215:
case 1314:
case 204:
case 1295:
case 2961:
case 3379:
case 3285:
case 446:
case 1934:
case 3383:
case 4084:
case 1457:
case 1328:
case 1933:
case 2697:
case 661:
case 2350:
case 3577:
case 2739:
case 1122:
case 83:
case 3175:
case 3242:
case 3384:
case 761:
case 893:
case 2267:
case 218:
case 3246:
case 3764:
case 227:
case 3051:
case 2349:
case 1371:
case 991:
case 769:
case 2251:
case 307:
case 135:
case 4012:
case 1149:
case 2171:
case 2760:
case 2029:
case 3312:
case 807:
case 2326:
case 2281:
case 1927:
case 3099:
case 1073:
case 2299:
case 2322:
case 1487:
case 856:
case 3353:
case 176:
case 33:
case 3396:
case 1777:
case 3708:
case 2864:
case 2502:
case 2219:
case 3633:
case 3417:
case 2114:
case 3430:
case 2987:
case 3141:
case 1386:
case 1221:
case 422:
case 3936:
case 483:
case 742:
case 2194:
case 250:
case 2156:
case 1345:
case 3932:
case 1188:
case 180:
case 1909:
case 642:
case 331:
case 968:
case 2704:
case 3868:
case 1:
case 2358:
case 2427:
case 3124:
case 2531:
case 2007:
case 1382:
case 1766:
case 484:
case 1366:
case 2967:
case 3552:
case 929:
case 3440:
case 1720:
case 379:
case 2879:
case 921:
case 1472:
case 2524:
case 540:
case 3425:
case 1745:
case 2303:
case 502:
case 3514:
case 2415:
case 1234:
case 1476:
case 2541:
case 796:
case 1824:
case 940:
case 1579:
case 3513:
case 1786:
case 2674:
case 1970:
case 3459:
case 529:
case 1233:
case 310:
case 3888:
case 966:
case 1898:
case 2780:
case 1377:
case 3057:
case 394:
case 625:
case 3753:
case 1139:
case 2261:
case 3849:
case 1995:
case 2689:
case 4008:
case 3061:
case 92:
case 3528:
case 1467:
case 1038:
case 2726:
case 2691:
case 2518:
case 725:
case 3712:
case 1607:
case 1451:
case 3678:
case 2611:
case 2598:
case 2360:
case 2884:
case 3644:
case 3792:
case 3850:
case 1404:
case 2178:
case 1024:
case 2569:
case 3447:
case 2466:
case 829:
case 1664:
case 1403:
case 1023:
case 3088:
case 3191:
case 821:
case 2606:
case 2960:
case 1294:
case 1977:
case 3189:
case 1256:
case 404:
case 2602:
case 840:
case 1293:
case 523:
case 2079:
case 582:
case 1041:
case 196:
case 334:
case 3279:
case 2435:
case 1395:
case 866:
case 2083:
case 736:
case 2477:
case 3174:
case 4042:
case 1119:
case 260:
case 1838:
case 647:
case 558:
case 4085:
case 2250:
case 82:
case 3857:
case 1966:
case 747:
case 2631:
case 1181:
case 2367:
case 418:
case 237:
case 3765:
case 3861:
case 2249:
case 1460:
case 636:
case 1709:
case 1018:
case 2351:
case 3049:
case 2855:
case 2751:
case 1920:
case 676:
case 1309:
case 48:
case 399:
case 738:
case 2063:
case 1874:
case 2958:
case 2767:
case 1529:
case 3138:
case 2623:
case 4065:
case 391:
case 2064:
case 4032:
case 3613:
case 2829:
case 1986:
case 1157:
case 3614:
case 3693:
case 2573:
case 1480:
case 1555:
case 3336:
case 2486:
case 100:
case 680:
case 3916:
case 1683:
case 3301:
case 3628:
case 3490:
case 924:
case 2776:
case 3068:
case 3521:
case 3410:
case 4001:
case 2134:
case 6:
case 489:
case 1684:
case 39:
case 3437:
case 1507:
case 2511:
case 3578:
case 7:
case 524:
case 3544:
case 3992:
case 3200:
case 333:
case 1889:
case 2926:
case 1458:
case 198:
case 2591:
case 780:
case 3543:
case 403:
case 365:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747767601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,];
var gg_b = "1747767601/";

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
