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
case 2610:
case 817:
case 342:
case 1703:
case 176:
case 3824:
case 2595:
case 1697:
case 3977:
case 3322:
case 941:
case 848:
case 355:
case 3368:
case 2438:
case 205:
case 906:
case 3598:
case 2365:
case 1905:
case 1145:
case 3851:
case 2237:
case 487:
case 1183:
case 3586:
case 3115:
case 2327:
case 913:
case 925:
case 3201:
case 471:
case 1980:
case 2853:
case 202:
case 980:
case 466:
case 298:
case 563:
case 1573:
case 2357:
case 1383:
case 1020:
case 2538:
case 3909:
case 2127:
case 57:
case 3315:
case 4073:
case 933:
case 837:
case 2495:
case 3038:
case 3710:
case 1439:
case 2292:
case 2318:
case 3122:
case 3660:
case 3854:
case 3352:
case 352:
case 960:
case 1687:
case 2088:
case 849:
case 1463:
case 1270:
case 1224:
case 140:
case 530:
case 2116:
case 3723:
case 227:
case 2096:
case 1804:
case 3441:
case 2543:
case 2928:
case 84:
case 2751:
case 3366:
case 1131:
case 3925:
case 3378:
case 393:
case 803:
case 3588:
case 1061:
case 2770:
case 3967:
case 384:
case 1414:
case 836:
case 2810:
case 1331:
case 2917:
case 2041:
case 3000:
case 2536:
case 1990:
case 3670:
case 1897:
case 1801:
case 3624:
case 3444:
case 2500:
case 3036:
case 3753:
case 2443:
case 1942:
case 2958:
case 859:
case 1511:
case 1102:
case 400:
case 150:
case 3651:
case 467:
case 1064:
case 3166:
case 2957:
case 2850:
case 257:
case 68:
case 2172:
case 3309:
case 3:
case 993:
case 2243:
case 689:
case 2482:
case 3839:
case 1023:
case 1380:
case 2714:
case 185:
case 3761:
case 3288:
case 1641:
case 1785:
case 768:
case 1421:
case 3713:
case 1214:
case 1898:
case 3296:
case 2689:
case 3663:
case 1551:
case 3244:
case 360:
case 1743:
case 3377:
case 2156:
case 2236:
case 2326:
case 3968:
case 3789:
case 3873:
case 2763:
case 3082:
case 270:
case 78:
case 218:
case 1696:
case 829:
case 2927:
case 2899:
case 2372:
case 3764:
case 1263:
case 2874:
case 1835:
case 3949:
case 120:
case 1053:
case 1688:
case 1554:
case 1736:
case 2087:
case 2200:
case 182:
case 2965:
case 789:
case 688:
case 313:
case 1159:
case 2295:
case 1390:
case 2861:
case 1329:
case 3532:
case 239:
case 3673:
case 3037:
case 896:
case 1931:
case 3125:
case 1844:
case 3286:
case 1342:
case 2162:
case 2674:
case 2537:
case 955:
case 3750:
case 2503:
case 341:
case 1560:
case 144:
case 4060:
case 1888:
case 2032:
case 1142:
case 2238:
case 3799:
case 1460:
case 3774:
case 2650:
case 2328:
case 154:
case 673:
case 2437:
case 3639:
case 2975:
case 3597:
case 351:
case 514:
case 590:
case 669:
case 333:
case 472:
case 2001:
case 2097:
case 1190:
case 201:
case 1129:
case 3367:
case 1738:
case 1686:
case 219:
case 2773:
case 3155:
case 828:
case 3235:
case 3445:
case 521:
case 3717:
case 3625:
case 1386:
case 4049:
case 2755:
case 1747:
case 2469:
case 3667:
case 2371:
case 2856:
case 1398:
case 656:
case 3954:
case 42:
case 1212:
case 3290:
case 2247:
case 4022:
case 2019:
case 2484:
case 4068:
case 3339:
case 914:
case 1880:
case 2953:
case 2628:
case 1452:
case 2448:
case 2350:
case 552:
case 288:
case 1027:
case 701:
case 2120:
case 3758:
case 3809:
case 3921:
case 2199:
case 2662:
case 1135:
case 2045:
case 542:
case 1267:
case 1552:
case 2923:
case 123:
case 934:
case 3612:
case 1805:
case 2150:
case 2230:
case 1468:
case 73:
case 3069:
case 497:
case 1225:
case 1422:
case 2320:
case 2083:
case 555:
case 1335:
case 2374:
case 1057:
case 2872:
case 2399:
case 1018:
case 2569:
case 3084:
case 646:
case 269:
case 3373:
case 3655:
case 26:
case 756:
case 2767:
case 3048:
case 3877:
case 1198:
case 1476:
case 273:
case 2826:
case 2507:
case 3431:
case 2533:
case 1578:
case 2164:
case 2672:
case 2858:
case 428:
case 2002:
case 1209:
case 1566:
case 3163:
case 804:
case 289:
case 310:
case 3502:
case 2817:
case 747:
case 2189:
case 2910:
case 4066:
case 2626:
case 191:
case 1901:
case 3033:
case 1829:
case 2361:
case 3677:
case 3756:
case 3534:
case 718:
case 28:
case 1141:
case 2479:
case 1890:
case 2031:
case 2546:
case 647:
case 2389:
case 2113:
case 3205:
case 3726:
case 1708:
case 618:
case 383:
case 2161:
case 3867:
case 2656:
case 757:
case 3960:
case 1341:
case 1016:
case 1277:
case 875:
case 3609:
case 2364:
case 1144:
case 3046:
case 1478:
case 496:
case 3079:
case 268:
case 3593:
case 1196:
case 3094:
case 2828:
case 2408:
case 1477:
case 3849:
case 2827:
case 3121:
case 108:
case 2974:
case 192:
case 2323:
case 1278:
case 3775:
case 1819:
case 994:
case 871:
case 3822:
case 1791:
case 3324:
case 3868:
case 3154:
case 3234:
case 1733:
case 866:
case 1631:
case 1266:
case 4009:
case 3202:
case 3973:
case 1693:
case 1409:
case 3008:
case 3124:
case 1026:
case 727:
case 3354:
case 2246:
case 2818:
case 2294:
case 2279:
case 1883:
case 1746:
case 3151:
case 2857:
case 3666:
case 417:
case 983:
case 1779:
case 3293:
case 2508:
case 4077:
case 3716:
case 448:
case 2005:
case 699:
case 930:
case 2353:
case 1634:
case 3939:
case 2675:
case 507:
case 2029:
case 111:
case 10:
case 4012:
case 2090:
case 45:
case 1512:
case 1197:
case 626:
case 798:
case 1941:
case 314:
case 459:
case 1249:
case 2618:
case 390:
case 2989:
case 2110:
case 3727:
case 1802:
case 2749:
case 4055:
case 963:
case 1555:
case 436:
case 3866:
case 2042:
case 1058:
case 3459:
case 2430:
case 3765:
case 1268:
case 3590:
case 2547:
case 1781:
case 774:
case 580:
case 1769:
case 2627:
case 1104:
case 1525:
case 2447:
case 3490:
case 3649:
case 1028:
case 2530:
case 3757:
case 525:
case 513:
case 4025:
case 2284:
case 2248:
case 403:
case 1619:
case 1567:
case 3559:
case 1455:
case 674:
case 2913:
case 2752:
case 726:
case 449:
case 3622:
case 1397:
case 3442:
case 1215:
case 2269:
case 2506:
case 1893:
case 3030:
case 1831:
case 705:
case 602:
case 3283:
case 2310:
case 886:
case 44:
case 178:
case 3344:
case 3842:
case 2992:
case 2066:
case 3578:
case 3075:
case 2136:
case 1431:
case 1812:
case 3605:
case 1314:
case 3829:
case 1033:
case 2940:
case 81:
case 2608:
case 1007:
case 550:
case 992:
case 1502:
case 228:
case 2416:
case 110:
case 4002:
case 1163:
case 3209:
case 3566:
case 1402:
case 3341:
case 2185:
case 1960:
case 1867:
case 3466:
case 83:
case 1726:
case 1205:
case 1434:
case 2475:
case 2830:
case 1825:
case 1311:
case 468:
case 540:
case 130:
case 2272:
case 2806:
case 4093:
case 856:
case 1772:
case 3277:
case 3680:
case 2226:
case 3212:
case 1954:
case 163:
case 4019:
case 2457:
case 3398:
case 1519:
case 943:
case 2729:
case 3415:
case 17:
case 3576:
case 1173:
case 1242:
case 1625:
case 772:
case 675:
case 2630:
case 870:
case 3255:
case 818:
case 3135:
case 2076:
case 1809:
case 90:
case 2606:
case 2217:
case 2049:
case 3522:
case 3880:
case 847:
case 2395:
case 3987:
case 2418:
case 3065:
case 312:
case 909:
case 704:
case 1290:
case 3057:
case 3335:
case 1762:
case 838:
case 857:
case 1069:
case 2015:
case 1951:
case 1728:
case 2518:
case 3805:
case 2195:
case 1139:
case 315:
case 3552:
case 576:
case 473:
case 2759:
case 3476:
case 3198:
case 3449:
case 1924:
case 3629:
case 1970:
case 2427:
case 2647:
case 775:
case 1655:
case 2262:
case 1583:
case 4083:
case 953:
case 1419:
case 2558:
case 2684:
case 912:
case 309:
case 1911:
case 935:
case 236:
case 3249:
case 1963:
case 114:
case 2227:
case 4042:
case 3017:
case 1360:
case 2462:
case 2900:
case 3941:
case 3101:
case 1047:
case 2265:
case 2833:
case 1219:
case 1652:
case 2648:
case 2936:
case 3222:
case 3645:
case 3425:
case 2719:
case 3332:
case 1529:
case 1459:
case 3058:
case 1866:
case 343:
case 1727:
case 3802:
case 771:
case 3455:
case 3988:
case 1559:
case 249:
case 2681:
case 2745:
case 4059:
case 1914:
case 3619:
case 3252:
case 3132:
case 2846:
case 2783:
case 3996:
case 671:
case 1676:
case 1757:
case 1429:
case 2879:
case 1490:
case 2392:
case 1006:
case 2894:
case 3525:
case 3784:
case 2257:
case 923:
case 2943:
case 1030:
case 1718:
case 216:
case 562:
case 544:
case 3215:
case 2985:
case 203:
case 1160:
case 2340:
case 2458:
case 1622:
case 1245:
case 2067:
case 3748:
case 2556:
case 1775:
case 3187:
case 686:
case 392:
case 2679:
case 1121:
case 2694:
case 2702:
case 2009:
case 1876:
case 3693:
case 1973:
case 1202:
case 237:
case 2938:
case 3266:
case 874:
case 3733:
case 2275:
case 1234:
case 3707:
case 2472:
case 2793:
case 585:
case 2731:
case 2572:
case 2884:
case 2382:
case 1480:
case 1852:
case 2848:
case 1678:
case 248:
case 4005:
case 3998:
case 3026:
case 2216:
case 3409:
case 786:
case 3577:
case 1939:
case 805:
case 3387:
case 1293:
case 3779:
case 2456:
case 1231:
case 3072:
case 1366:
case 2179:
case 1441:
case 748:
case 1621:
case 1723:
case 637:
case 3270:
case 3463:
case 2561:
case 3334:
case 2489:
case 717:
case 3411:
case 3013:
case 2223:
case 3514:
case 4088:
case 3061:
case 1588:
case 1085:
case 427:
case 1925:
case 3131:
case 2837:
case 1544:
case 1043:
case 2803:
case 3193:
case 4044:
case 1596:
case 286:
case 377:
case 1444:
case 3897:
case 3929:
case 1624:
case 2191:
case 2107:
case 1670:
case 2947:
case 2133:
case 381:
case 2564:
case 2063:
case 3782:
case 982:
case 184:
case 1651:
case 2346:
case 350:
case 2892:
case 3102:
case 2589:
case 49:
case 737:
case 3254:
case 3134:
case 1541:
case 2787:
case 405:
case 659:
case 2148:
case 1152:
case 155:
case 2474:
case 1322:
case 2640:
case 3697:
case 3601:
case 3703:
case 164:
case 1204:
case 962:
case 2184:
case 65:
case 3737:
case 426:
case 4086:
case 2692:
case 2704:
case 3183:
case 1376:
case 703:
case 3319:
case 3473:
case 2039:
case 1095:
case 1149:
case 2471:
case 603:
case 3792:
case 1821:
case 2210:
case 3020:
case 474:
case 1498:
case 3573:
case 1176:
case 2181:
case 3887:
case 3345:
case 3980:
case 736:
case 1486:
case 1297:
case 2450:
case 1854:
case 1660:
case 1122:
case 2797:
case 2701:
case 759:
case 4035:
case 512:
case 2603:
case 3439:
case 1710:
case 2882:
case 2384:
case 2574:
case 145:
case 1003:
case 2130:
case 3993:
case 2843:
case 2638:
case 629:
case 1771:
case 1532:
case 1167:
case 2347:
case 3390:
case 2885:
case 3159:
case 3239:
case 125:
case 2271:
case 3888:
case 362:
case 344:
case 1814:
case 2410:
case 1312:
case 3560:
case 141:
case 439:
case 2946:
case 3635:
case 2979:
case 1497:
case 1286:
case 3844:
case 2836:
case 697:
case 151:
case 509:
case 401:
case 50:
case 354:
case 511:
case 2306:
case 1774:
case 3460:
case 3902:
case 204:
case 1432:
case 889:
case 1863:
case 180:
case 3738:
case 2220:
case 3010:
case 1367:
case 3129:
case 2907:
case 122:
case 1404:
case 2933:
case 3359:
case 729:
case 88:
case 446:
case 1978:
case 133:
case 3698:
case 628:
case 3524:
case 3105:
case 796:
case 3023:
case 2213:
case 3380:
case 2744:
case 1309:
case 1915:
case 3454:
case 3983:
case 3743:
case 1244:
case 438:
case 3886:
case 3551:
case 2984:
case 869:
case 1296:
case 940:
case 1487:
case 86:
case 3898:
case 2948:
case 3785:
case 873:
case 1177:
case 418:
case 2838:
case 1873:
case 1789:
case 2308:
case 1968:
case 4087:
case 1587:
case 1922:
case 2981:
case 3919:
case 1614:
case 3305:
case 382:
case 3736:
case 320:
case 3644:
case 1949:
case 888:
case 3263:
case 3835:
case 1109:
case 3470:
case 2289:
case 470:
case 1891:
case 1807:
case 881:
case 1462:
case 1900:
case 2219:
case 3029:
case 1265:
case 2878:
case 3090:
case 3281:
case 3406:
case 1055:
case 3989:
case 2542:
case 721:
case 1303:
case 290:
case 546:
case 2459:
case 159:
case 501:
case 3964:
case 2615:
case 1669:
case 752:
case 850:
case 411:
case 1012:
case 664:
case 2529:
case 3430:
case 1719:
case 2765:
case 2590:
case 15:
case 3547:
case 652:
case 2676:
case 755:
case 1846:
case 3447:
case 1392:
case 1879:
case 3715:
case 3627:
case 1218:
case 3530:
case 2429:
case 2649:
case 2559:
case 3816:
case 149:
case 431:
case 840:
case 2914:
case 3665:
case 969:
case 1681:
case 1745:
case 764:
case 742:
case 645:
case 1417:
case 1458:
case 3059:
case 3961:
case 2622:
case 1985:
case 1067:
case 453:
case 2245:
case 2668:
case 4028:
case 621:
case 3269:
case 234:
case 1943:
case 4062:
case 3920:
case 2849:
case 1679:
case 3827:
case 1646:
case 1426:
case 98:
case 693:
case 2876:
case 1881:
case 989:
case 1556:
case 1734:
case 4056:
case 3323:
case 3207:
case 3616:
case 3778:
case 518:
case 2234:
case 1275:
case 492:
case 1472:
case 2580:
case 2202:
case 408:
case 538:
case 148:
case 557:
case 2354:
case 1077:
case 1848:
case 2170:
case 2008:
case 861:
case 1607:
case 4072:
case 3279:
case 3294:
case 1382:
case 1456:
case 1869:
case 3950:
case 2666:
case 1995:
case 3353:
case 3508:
case 3034:
case 599:
case 1256:
case 660:
case 865:
case 1780:
case 2812:
case 2314:
case 2431:
case 3002:
case 278:
case 854:
case 3672:
case 1066:
case 3709:
case 3858:
case 2502:
case 2111:
case 3189:
case 294:
case 2163:
case 1343:
case 2756:
case 3361:
case 6:
case 1940:
case 3494:
case 1385:
case 1847:
case 3479:
case 2280:
case 3313:
case 2007:
case 3446:
case 1937:
case 1475:
case 1830:
case 1903:
case 1143:
case 230:
case 3161:
case 527:
case 1185:
case 1516:
case 2726:
case 760:
case 862:
case 2094:
case 2593:
case 3828:
case 3433:
case 3364:
case 2531:
case 2772:
case 2609:
case 3407:
case 2046:
case 279:
case 3755:
case 2717:
case 751:
case 1527:
case 2625:
case 2445:
case 502:
case 641:
case 4065:
case 263:
case 598:
case 1022:
case 2483:
case 2954:
case 1068:
case 3469:
case 1790:
case 27:
case 3581:
case 1729:
case 3371:
case 1565:
case 882:
case 3712:
case 2339:
case 3953:
case 3484:
case 2081:
case 12:
case 3247:
case 1418:
case 3199:
case 2921:
case 733:
case 3350:
case 1049:
case 722:
case 613:
case 3045:
case 885:
case 680:
case 3923:
case 3083:
case 3320:
case 622:
case 713:
case 4018:
case 3374:
case 2951:
case 369:
case 2583:
case 1338:
case 197:
case 2373:
case 2655:
case 505:
case 1465:
case 1808:
case 432:
case 2970:
case 741:
case 2545:
case 1647:
case 36:
case 526:
case 2877:
case 3767:
case 1347:
case 2771:
case 3295:
case 444:
case 1130:
case 206:
case 1250:
case 2504:
case 2125:
case 2003:
case 339:
case 1638:
case 2037:
case 2673:
case 2355:
case 1946:
case 356:
case 1106:
case 3503:
case 3440:
case 2401:
case 2286:
case 1979:
case 3674:
case 3162:
case 67:
case 3916:
case 175:
case 2312:
case 3739:
case 1410:
case 3328:
case 2092:
case 1306:
case 77:
case 3238:
case 763:
case 3864:
case 251:
case 2597:
case 1695:
case 974:
case 3540:
case 2404:
case 301:
case 31:
case 1147:
case 3671:
case 998:
case 233:
case 3097:
case 1330:
case 3889:
case 3592:
case 2811:
case 454:
case 280:
case 1274:
case 2235:
case 3773:
case 783:
case 2915:
case 1969:
case 3243:
case 1744:
case 357:
case 3714:
case 730:
case 2839:
case 610:
case 1636:
case 1261:
case 694:
case 823:
case 815:
case 2952:
case 1948:
case 1070:
case 927:
case 1108:
case 2288:
case 3356:
case 485:
case 4023:
case 1600:
case 2663:
case 3918:
case 2611:
case 2487:
case 207:
case 1308:
case 4053:
case 2968:
case 3156:
case 1054:
case 3236:
case 3661:
case 778:
case 3763:
case 1838:
case 1423:
case 2789:
case 3899:
case 2109:
case 3927:
case 3372:
case 3820:
case 2614:
case 794:
case 1981:
case 999:
case 812:
case 630:
case 3200:
case 3087:
case 2241:
case 1014:
case 853:
case 3585:
case 4013:
case 3375:
case 3088:
case 1146:
case 3543:
case 477:
case 1906:
case 3751:
case 327:
case 2441:
case 3400:
case 3096:
case 2544:
case 186:
case 3436:
case 1803:
case 2596:
case 957:
case 3770:
case 2860:
case 938:
case 2085:
case 2378:
case 2588:
case 2654:
case 3810:
case 100:
case 947:
case 809:
case 167:
case 4064:
case 284:
case 1011:
case 1947:
case 918:
case 1840:
case 1191:
case 2178:
case 1133:
case 3536:
case 481:
case 970:
case 1787:
case 2912:
case 2036:
case 1413:
case 1346:
case 2651:
case 1461:
case 1394:
case 1379:
case 2204:
case 1550:
case 3926:
case 2368:
case 3595:
case 2824:
case 1499:
case 2870:
case 255:
case 956:
case 1571:
case 3365:
case 939:
case 3438:
case 461:
case 3823:
case 2095:
case 2598:
case 3972:
case 1692:
case 1704:
case 56:
case 2115:
case 2349:
case 2376:
case 2851:
case 476:
case 3853:
case 1181:
case 919:
case 221:
case 892:
case 2201:
case 634:
case 1369:
case 2315:
case 2821:
case 2909:
case 2149:
case 3035:
case 808:
case 1210:
case 374:
case 4074:
case 3318:
case 946:
case 1637:
case 1574:
case 1882:
case 2710:
case 1520:
case 424:
case 1384:
case 3495:
case 1348:
case 2352:
case 252:
case 3956:
case 1701:
case 2122:
case 3261:
case 3788:
case 3636:
case 2945:
case 285:
case 986:
case 2380:
case 3213:
case 1482:
case 3895:
case 2105:
case 2983:
case 1850:
case 157:
case 2454:
case 138:
case 3796:
case 3744:
case 3969:
case 3051:
case 3984:
case 2886:
case 2641:
case 3600:
case 2421:
case 1356:
case 3070:
case 3523:
case 3024:
case 2521:
case 3838:
case 170:
case 1763:
case 2700:
case 1661:
case 1236:
case 1156:
case 3054:
case 1200:
case 1087:
case 558:
case 282:
case 2736:
case 537:
case 967:
case 3981:
case 2180:
case 1965:
case 3289:
case 4082:
case 2696:
case 3021:
case 2211:
case 2644:
case 2424:
case 1372:
case 1899:
case 2263:
case 723:
case 2993:
case 549:
case 3843:
case 1317:
case 2931:
case 635:
case 3250:
case 830:
case 2159:
case 2239:
case 1861:
case 2329:
case 883:
case 3347:
case 54:
case 2390:
case 987:
case 375:
case 1916:
case 425:
case 516:
case 3271:
case 2888:
case 1032:
case 503:
case 3994:
case 1162:
case 2635:
case 2844:
case 4003:
case 1004:
case 4037:
case 1975:
case 422:
case 1540:
case 1437:
case 536:
case 146:
case 4040:
case 372:
case 2273:
case 1864:
case 1362:
case 3735:
case 878:
case 1238:
case 1158:
case 480:
case 1650:
case 735:
case 632:
case 2010:
case 3220:
case 2686:
case 2738:
case 4092:
case 304:
case 615:
case 623:
case 559:
case 1097:
case 1001:
case 3933:
case 2359:
case 3907:
case 2841:
case 11:
case 3147:
case 1760:
case 3640:
case 2697:
case 2601:
case 261:
case 4095:
case 1086:
case 1610:
case 2737:
case 753:
case 2703:
case 2183:
case 464:
case 1237:
case 2050:
case 3169:
case 3692:
case 1203:
case 731:
case 2473:
case 3039:
case 1438:
case 3732:
case 1365:
case 609:
case 455:
case 2020:
case 2383:
case 198:
case 2074:
case 1357:
case 2099:
case 3471:
case 2792:
case 224:
case 904:
case 2345:
case 2887:
case 1853:
case 2119:
case 743:
case 2740:
case 3797:
case 529:
case 3450:
case 1495:
case 972:
case 3520:
case 3599:
case 366:
case 52:
case 1292:
case 3179:
case 4043:
case 2302:
case 127:
case 3906:
case 1928:
case 1543:
case 1044:
case 1088:
case 2334:
case 3561:
case 2411:
case 1116:
case 2224:
case 493:
case 3513:
case 2270:
case 2514:
case 3391:
case 3307:
case 1770:
case 3464:
case 2193:
case 3803:
case 277:
case 1436:
case 386:
case 834:
case 3930:
case 0:
case 1041:
case 3107:
case 2929:
case 2801:
case 2990:
case 3011:
case 199:
case 3063:
case 814:
case 3564:
case 2331:
case 2414:
case 300:
case 890:
case 1810:
case 2782:
case 1721:
case 3892:
case 3379:
case 2942:
case 3589:
case 3461:
case 484:
case 3346:
case 3413:
case 1175:
case 2134:
case 528:
case 3787:
case 1500:
case 1443:
case 4000:
case 1316:
case 1623:
case 928:
case 1323:
case 677:
case 1080:
case 1616:
case 821:
case 3734:
case 1233:
case 3881:
case 3009:
case 3646:
case 781:
case 1999:
case 3702:
case 2935:
case 2477:
case 2631:
case 358:
case 845:
case 640:
case 3938:
case 337:
case 2791:
case 3275:
case 2056:
case 2733:
case 1778:
case 3731:
case 842:
case 3382:
case 740:
case 1246:
case 1279:
case 2986:
case 317:
case 3607:
case 650:
case 3633:
case 1005:
case 3526:
case 1675:
case 1353:
case 4008:
case 3995:
case 2845:
case 295:
case 2072:
case 1857:
case 2883:
case 2794:
case 3456:
case 336:
case 2249:
case 2017:
case 3227:
case 92:
case 1110:
case 1989:
case 3558:
case 3684:
case 2276:
case 3055:
case 1406:
case 1090:
case 1281:
case 929:
case 3648:
case 3833:
case 3265:
case 3900:
case 3462:
case 3891:
case 3807:
case 2101:
case 2197:
case 3140:
case 504:
case 2425:
case 2645:
case 1547:
case 1875:
case 2834:
case 2332:
case 676:
case 1749:
case 2467:
case 3517:
case 1964:
case 2304:
case 2683:
case 2058:
case 661:
case 490:
case 3681:
case 3745:
case 1248:
case 2132:
case 2567:
case 1665:
case 776:
case 1816:
case 349:
case 1530:
case 3218:
case 761:
case 1715:
case 2769:
case 3392:
case 34:
case 434:
case 4030:
case 2996:
case 2062:
case 3943:
case 1506:
case 3025:
case 2215:
case 2412:
case 1310:
case 4006:
case 2831:
case 3562:
case 2748:
case 893:
case 3985:
case 303:
case 1961:
case 3458:
case 2301:
case 1371:
case 3565:
case 1581:
case 3790:
case 1469:
case 3457:
case 3630:
case 3982:
case 765:
case 662:
case 3138:
case 95:
case 571:
case 2027:
case 1350:
case 3049:
case 1448:
case 1199:
case 1174:
case 2135:
case 3742:
case 3418:
case 1019:
case 32:
case 1247:
case 2568:
case 1484:
case 1953:
case 2522:
case 1712:
case 2880:
case 3015:
case 2468:
case 2706:
case 903:
case 3518:
case 8:
case 1374:
case 2335:
case 1872:
case 1658:
case 1320:
case 2267:
case 2805:
case 215:
case 2449:
case 1171:
case 2690:
case 3427:
case 654:
case 762:
case 2515:
case 2018:
case 3465:
case 3557:
case 4069:
case 1858:
case 3992:
case 1709:
case 1002:
case 4033:
case 500:
case 958:
case 2605:
case 1507:
case 1591:
case 2578:
case 4007:
case 2388:
case 1533:
case 3256:
case 3136:
case 3608:
case 1313:
case 2141:
case 3078:
case 1494:
case 3385:
case 2901:
case 1361:
case 478:
case 2209:
case 1910:
case 328:
case 2708:
case 1113:
case 3185:
case 3300:
case 1777:
case 4094:
case 3143:
case 806:
case 396:
case 682:
case 1389:
case 3937:
case 1579:
case 1407:
case 948:
case 2904:
case 1862:
case 1364:
case 1828:
case 2680:
case 3226:
case 586:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758031202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,];
var gg_b = "1758031202/";

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
