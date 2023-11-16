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
var o = 1;
switch (g) {
case 488:
case 190:
case 1823:
case 2291:
case 2938:
case 1116:
case 3679:
case 3759:
case 2958:
case 1862:
case 2337:
case 1426:
case 636:
case 1189:
case 208:
case 930:
case 2970:
case 198:
case 1976:
case 3554:
case 897:
case 3455:
case 2449:
case 1861:
case 3195:
case 3971:
case 2687:
case 1284:
case 2488:
case 2276:
case 1520:
case 4075:
case 1270:
case 3567:
case 2300:
case 5:
case 2974:
case 3329:
case 543:
case 3145:
case 3172:
case 2654:
case 564:
case 3313:
case 3802:
case 3284:
case 41:
case 156:
case 3544:
case 3385:
case 612:
case 2610:
case 1756:
case 651:
case 3242:
case 376:
case 1416:
case 3869:
case 2233:
case 3520:
case 2443:
case 1083:
case 4049:
case 773:
case 3665:
case 2558:
case 1719:
case 871:
case 493:
case 3809:
case 1871:
case 2968:
case 919:
case 742:
case 3548:
case 1996:
case 3719:
case 3105:
case 2615:
case 323:
case 2861:
case 1769:
case 2897:
case 3757:
case 27:
case 950:
case 3602:
case 1141:
case 2522:
case 3749:
case 2004:
case 1931:
case 386:
case 1315:
case 3619:
case 3446:
case 2862:
case 3732:
case 2626:
case 1393:
case 1460:
case 3117:
case 850:
case 3142:
case 1069:
case 1376:
case 832:
case 239:
case 1133:
case 869:
case 1092:
case 1034:
case 1077:
case 4038:
case 3898:
case 3165:
case 1098:
case 391:
case 3525:
case 2700:
case 3235:
case 2059:
case 2117:
case 4016:
case 1378:
case 3524:
case 1868:
case 3592:
case 2830:
case 3523:
case 3115:
case 1912:
case 3364:
case 3239:
case 1299:
case 514:
case 3582:
case 174:
case 2084:
case 3276:
case 2761:
case 2685:
case 2253:
case 966:
case 1893:
case 4002:
case 2864:
case 2577:
case 1055:
case 267:
case 957:
case 2269:
case 1819:
case 330:
case 1441:
case 2642:
case 3360:
case 468:
case 2024:
case 3079:
case 490:
case 1668:
case 641:
case 3888:
case 979:
case 563:
case 3381:
case 1853:
case 2433:
case 1696:
case 943:
case 2620:
case 880:
case 2108:
case 2128:
case 3660:
case 2319:
case 63:
case 1134:
case 1630:
case 2554:
case 780:
case 1388:
case 225:
case 619:
case 710:
case 1514:
case 3782:
case 805:
case 2809:
case 3837:
case 801:
case 1365:
case 988:
case 3050:
case 282:
case 2093:
case 2297:
case 1377:
case 3225:
case 3391:
case 768:
case 3030:
case 1237:
case 1718:
case 3768:
case 2132:
case 1673:
case 3349:
case 238:
case 2467:
case 2167:
case 2042:
case 2839:
case 1942:
case 961:
case 2044:
case 2416:
case 1281:
case 1338:
case 1139:
case 491:
case 3605:
case 3785:
case 3411:
case 2430:
case 3189:
case 3883:
case 3295:
case 1132:
case 534:
case 2653:
case 3518:
case 3521:
case 114:
case 248:
case 2470:
case 4012:
case 119:
case 1785:
case 2331:
case 104:
case 500:
case 704:
case 3564:
case 1470:
case 2669:
case 1000:
case 2203:
case 3029:
case 3252:
case 3830:
case 48:
case 1183:
case 3221:
case 3085:
case 451:
case 609:
case 2933:
case 1825:
case 28:
case 3420:
case 3432:
case 2987:
case 3249:
case 1851:
case 157:
case 1771:
case 423:
case 1529:
case 2480:
case 3593:
case 1123:
case 3960:
case 1724:
case 3139:
case 1326:
case 2393:
case 2732:
case 3258:
case 3634:
case 2580:
case 142:
case 3693:
case 864:
case 2774:
case 951:
case 1060:
case 279:
case 3721:
case 67:
case 2592:
case 1658:
case 2941:
case 353:
case 3926:
case 3113:
case 1675:
case 866:
case 421:
case 1224:
case 2304:
case 1192:
case 3517:
case 3337:
case 3687:
case 1335:
case 3531:
case 2981:
case 395:
case 3104:
case 3995:
case 804:
case 971:
case 1106:
case 992:
case 2135:
case 1803:
case 3143:
case 1334:
case 3352:
case 1473:
case 3132:
case 680:
case 1087:
case 2534:
case 2162:
case 420:
case 254:
case 2090:
case 250:
case 2102:
case 2964:
case 3379:
case 2097:
case 779:
case 10:
case 3642:
case 936:
case 1591:
case 2735:
case 3365:
case 928:
case 450:
case 3356:
case 2263:
case 1637:
case 3513:
case 276:
case 603:
case 3018:
case 1799:
case 542:
case 676:
case 1827:
case 711:
case 321:
case 2141:
case 2072:
case 874:
case 191:
case 1737:
case 3519:
case 2831:
case 3688:
case 1655:
case 84:
case 2649:
case 352:
case 715:
case 1783:
case 3305:
case 1790:
case 210:
case 3251:
case 1165:
case 937:
case 1922:
case 1806:
case 3161:
case 1764:
case 365:
case 1164:
case 1900:
case 2498:
case 1253:
case 3278:
case 3486:
case 1544:
case 1614:
case 4029:
case 726:
case 1704:
case 164:
case 4051:
case 798:
case 3418:
case 2944:
case 2050:
case 1960:
case 3008:
case 3946:
case 2566:
case 697:
case 764:
case 3022:
case 4017:
case 3758:
case 3491:
case 1159:
case 2016:
case 2005:
case 2172:
case 1765:
case 811:
case 2138:
case 3772:
case 2662:
case 1497:
case 1947:
case 3407:
case 3537:
case 3033:
case 3071:
case 2395:
case 1374:
case 3730:
case 2966:
case 214:
case 2068:
case 179:
case 2056:
case 242:
case 204:
case 2587:
case 3107:
case 3217:
case 1289:
case 3765:
case 1302:
case 3454:
case 2239:
case 2317:
case 1217:
case 2471:
case 3963:
case 1626:
case 3015:
case 3019:
case 2676:
case 504:
case 770:
case 2817:
case 3488:
case 991:
case 2357:
case 2619:
case 1397:
case 4044:
case 2695:
case 3031:
case 532:
case 3004:
case 1086:
case 1793:
case 235:
case 3126:
case 1684:
case 1839:
case 3778:
case 2937:
case 1449:
case 4061:
case 1036:
case 3957:
case 3328:
case 1264:
case 93:
case 2782:
case 51:
case 2220:
case 3717:
case 1592:
case 2178:
case 3771:
case 995:
case 1408:
case 3943:
case 2347:
case 3372:
case 2166:
case 1914:
case 1575:
case 3561:
case 1800:
case 3576:
case 42:
case 3645:
case 1991:
case 604:
case 1433:
case 2373:
case 3388:
case 3301:
case 2632:
case 3256:
case 2798:
case 4076:
case 2845:
case 140:
case 3041:
case 2792:
case 2116:
case 1198:
case 1832:
case 289:
case 2951:
case 2505:
case 2757:
case 3054:
case 1945:
case 1634:
case 1050:
case 1953:
case 2994:
case 311:
case 1743:
case 1216:
case 3338:
case 756:
case 3110:
case 3504:
case 1983:
case 1597:
case 2126:
case 29:
case 2003:
case 2292:
case 2434:
case 2323:
case 3920:
case 3881:
case 523:
case 1320:
case 513:
case 843:
case 3294:
case 2880:
case 2113:
case 1741:
case 460:
case 495:
case 1506:
case 2896:
case 3622:
case 2721:
case 1702:
case 3355:
case 817:
case 105:
case 2828:
case 1516:
case 1422:
case 1674:
case 4036:
case 2918:
case 947:
case 2603:
case 894:
case 3086:
case 2733:
case 368:
case 1566:
case 547:
case 2254:
case 1857:
case 1556:
case 684:
case 3283:
case 1262:
case 1196:
case 1384:
case 3669:
case 3925:
case 3751:
case 812:
case 2982:
case 1559:
case 1600:
case 1950:
case 1294:
case 1308:
case 2670:
case 1195:
case 2043:
case 3069:
case 3720:
case 2513:
case 2219:
case 2391:
case 2808:
case 3296:
case 1875:
case 2106:
case 3201:
case 1355:
case 3877:
case 3138:
case 1405:
case 2394:
case 1360:
case 303:
case 1703:
case 160:
case 2546:
case 984:
case 2758:
case 2508:
case 3006:
case 3046:
case 2065:
case 1780:
case 1015:
case 3773:
case 3196:
case 2367:
case 2579:
case 2858:
case 2748:
case 2327:
case 1620:
case 1160:
case 2374:
case 1876:
case 3373:
case 1938:
case 3376:
case 3739:
case 949:
case 2458:
case 1041:
case 1555:
case 3527:
case 2318:
case 732:
case 2992:
case 3831:
case 1274:
case 2694:
case 100:
case 3247:
case 954:
case 3368:
case 1838:
case 1266:
case 3666:
case 3851:
case 1008:
case 3587:
case 3011:
case 626:
case 422:
case 1667:
case 2283:
case 59:
case 2491:
case 2105:
case 870:
case 1530:
case 2486:
case 1963:
case 501:
case 1981:
case 2976:
case 1997:
case 2289:
case 409:
case 2442:
case 622:
case 816:
case 2238:
case 1451:
case 2372:
case 144:
case 912:
case 3197:
case 2060:
case 3366:
case 1157:
case 3762:
case 2902:
case 1351:
case 1768:
case 2819:
case 1053:
case 217:
case 1733:
case 3485:
case 1899:
case 2438:
case 3776:
case 3696:
case 52:
case 1746:
case 3754:
case 2838:
case 1712:
case 2876:
case 230:
case 2389:
case 2225:
case 3484:
case 3097:
case 2875:
case 3629:
case 1070:
case 807:
case 2504:
case 3528:
case 3035:
case 1694:
case 2702:
case 2551:
case 1584:
case 1740:
case 3348:
case 186:
case 3014:
case 2893:
case 592:
case 1225:
case 116:
case 123:
case 618:
case 3917:
case 3164:
case 3547:
case 1691:
case 1381:
case 3156:
case 1605:
case 271:
case 66:
case 2321:
case 2533:
case 861:
case 2977:
case 960:
case 2112:
case 2222:
case 1929:
case 2853:
case 3309:
case 2457:
case 1156:
case 682:
case 719:
case 3724:
case 393:
case 1539:
case 476:
case 2598:
case 154:
case 2851:
case 938:
case 200:
case 3550:
case 3152:
case 3585:
case 2383:
case 14:
case 264:
case 1624:
case 1882:
case 1846:
case 1111:
case 16:
case 2214:
case 1565:
case 2679:
case 550:
case 1108:
case 1113:
case 1816:
case 3580:
case 441:
case 3584:
case 269:
case 2682:
case 2857:
case 20:
case 2624:
case 3130:
case 3638:
case 3310:
case 2085:
case 1986:
case 380:
case 3621:
case 466:
case 1822:
case 2606:
case 718:
case 3748:
case 3940:
case 2371:
case 2807:
case 1681:
case 3444:
case 774:
case 755:
case 2330:
case 1653:
case 3763:
case 2475:
case 3865:
case 3394:
case 2705:
case 739:
case 538:
case 2198:
case 666:
case 31:
case 3363:
case 1265:
case 3690:
case 2852:
case 2307:
case 2188:
case 3320:
case 1677:
case 417:
case 1268:
case 3985:
case 2137:
case 823:
case 765:
case 110:
case 3929:
case 3680:
case 1486:
case 2582:
case 1273:
case 3931:
case 1755:
case 783:
case 2031:
case 986:
case 1178:
case 1411:
case 1079:
case 1731:
case 3241:
case 2136:
case 1831:
case 3636:
case 1431:
case 1229:
case 1650:
case 487:
case 4090:
case 3859:
case 792:
case 881:
case 2082:
case 2468:
case 1349:
case 1657:
case 1239:
case 533:
case 1501:
case 2518:
case 98:
case 2935:
case 30:
case 837:
case 2996:
case 241:
case 977:
case 931:
case 4046:
case 2692:
case 4066:
case 3092:
case 2015:
case 2153:
case 3752:
case 223:
case 1068:
case 1995:
case 3735:
case 1776:
case 3093:
case 1710:
case 571:
case 3437:
case 1717:
case 797:
case 1618:
case 1680:
case 19:
case 1341:
case 2400:
case 2421:
case 926:
case 2250:
case 1585:
case 969:
case 2725:
case 2696:
case 1687:
case 371:
case 2919:
case 3166:
case 1553:
case 2614:
case 2429:
case 3540:
case 545:
case 1858:
case 633:
case 2145:
case 3689:
case 1432:
case 3966:
case 982:
case 1054:
case 350:
case 3545:
case 2648:
case 630:
case 1197:
case 2720:
case 3028:
case 2722:
case 3596:
case 1063:
case 3822:
case 1412:
case 255:
case 1009:
case 2339:
case 158:
case 4019:
case 962:
case 3828:
case 1879:
case 3405:
case 53:
case 557:
case 3061:
case 2988:
case 1058:
case 1721:
case 2:
case 436:
case 363:
case 151:
case 3308:
case 101:
case 2957:
case 3135:
case 664:
case 3162:
case 1880:
case 3639:
case 1818:
case 486:
case 4082:
case 2148:
case 2388:
case 1168:
case 3866:
case 1385:
case 1980:
case 1420:
case 1897:
case 427:
case 559:
case 2478:
case 3023:
case 3825:
case 2625:
case 3464:
case 2881:
case 319:
case 3215:
case 3627:
case 315:
case 901:
case 2854:
case 2824:
case 9:
case 1482:
case 3777:
case 2270:
case 1027:
case 1244:
case 3987:
case 1596:
case 2650:
case 3109:
case 313:
case 1177:
case 1446:
case 256:
case 4011:
case 3623:
case 658:
case 1459:
case 1742:
case 351:
case 1779:
case 2340:
case 3613:
case 1126:
case 649:
case 1348:
case 153:
case 2724:
case 1321:
case 109:
case 3698:
case 203:
case 3526:
case 853:
case 4042:
case 729:
case 3072:
case 1920:
case 2234:
case 404:
case 815:
case 531:
case 3382:
case 2156:
case 2773:
case 3083:
case 1898:
case 136:
case 1303:
case 1725:
case 2736:
case 2229:
case 3321:
case 4057:
case 3945:
case 541:
case 1370:
case 3838:
case 1720:
case 686:
case 1476:
case 68:
case 1096:
case 2998:
case 43:
case 556:
case 1679:
case 2440:
case 2723:
case 2801:
case 3539:
case 2776:
case 1242:
case 3714:
case 3794:
case 1775:
case 740:
case 3663:
case 3590:
case 3439:
case 1932:
case 1115:
case 2435:
case 3460:
case 1065:
case 3456:
case 370:
case 1328:
case 933:
case 581:
case 707:
case 1830:
case 1864:
case 2409:
case 3326:
case 3836:
case 2460:
case 1946:
case 1227:
case 2959:
case 4018:
case 1:
case 1802:
case 974:
case 355:
case 2249:
case 2081:
case 2691:
case 1813:
case 3855:
case 1240:
case 1124:
case 333:
case 2303:
case 1685:
case 341:
case 3102:
case 3919:
case 2413:
case 2096:
case 965:
case 2737:
case 1892:
case 4068:
case 535:
case 2729:
case 2590:
case 458:
case 3793:
case 1537:
case 3371:
case 4013:
case 555:
case 852:
case 567:
case 2275:
case 286:
case 406:
case 428:
case 17:
case 3993:
case 4045:
case 3873:
case 2978:
case 3692:
case 574:
case 985:
case 1750:
case 2529:
case 1812:
case 1059:
case 733:
case 3787:
case 1022:
case 831:
case 3764:
case 741:
case 2140:
case 3798:
case 2375:
case 1649:
case 1663:
case 1472:
case 1418:
case 3559:
case 521:
case 1844:
case 694:
case 2570:
case 1307:
case 2426:
case 2986:
case 1153:
case 1263:
case 3961:
case 2179:
case 3849:
case 927:
case 18:
case 1357:
case 3265:
case 2641:
case 2507:
case 2121:
case 2553:
case 885:
case 3991:
case 3229:
case 364:
case 3549:
case 1670:
case 659:
case 803:
case 143:
case 2548:
case 184:
case 2765:
case 1005:
case 2860:
case 3656:
case 2118:
case 1644:
case 452:
case 2418:
case 3890:
case 3042:
case 2867:
case 1660:
case 1580:
case 3952:
case 3052:
case 91:
case 253:
case 3036:
case 2555:
case 3010:
case 1346:
case 3045:
case 3227:
case 2716:
case 259:
case 3270:
case 309:
case 2288:
case 415:
case 582:
case 907:
case 35:
case 3673:
case 3133:
case 896:
case 465:
case 1099:
case 3082:
case 2840:
case 3522:
case 270:
case 3827:
case 1967:
case 3731:
case 2242:
case 561:
case 162:
case 176:
case 3049:
case 884:
case 1434:
case 1978:
case 2058:
case 3494:
case 2545:
case 2569:
case 1110:
case 3674:
case 573:
case 1824:
case 2751:
case 511:
case 2816:
case 540:
case 298:
case 1859:
case 526:
case 1342:
case 2764:
case 3901:
case 597:
case 1190:
case 1688:
case 851:
case 1117:
case 3977:
case 2243:
case 2180:
case 3477:
case 2581:
case 2940:
case 263:
case 1728:
case 1410:
case 3532:
case 2794:
case 498:
case 1057:
case 3885:
case 475:
case 1404:
case 438:
case 520:
case 3910:
case 3756:
case 484:
case 862:
case 1521:
case 2760:
case 675:
case 1017:
case 1795:
case 3502:
case 2656:
case 3354:
case 1181:
case 1435:
case 2427:
case 249:
case 760:
case 2583:
case 4003:
case 1854:
case 240:
case 2176:
case 60:
case 505:
case 1155:
case 717:
case 2352:
case 2690:
case 3581:
case 687:
case 1429:
case 1322:
case 3047:
case 3386:
case 3495:
case 2451:
case 875:
case 909:
case 663:
case 3187:
case 1933:
case 21:
case 166:
case 3:
case 605:
case 1390:
case 77:
case 2709:
case 3440:
case 2168:
case 2866:
case 339:
case 2689:
case 314:
case 1140:
case 1782:
case 1280:
case 2872:
case 2381:
case 3891:
case 3508:
case 3452:
case 3854:
case 2285:
case 1023:
case 3449:
case 2350:
case 2311:
case 3571:
case 2036:
case 1814:
case 1025:
case 2066:
case 3154:
case 188:
case 2576:
case 1481:
case 868:
case 2485:
case 3186:
case 3336:
case 3120:
case 2123:
case 76:
case 3064:
case 2873:
case 1483:
case 3800:
case 3254:
case 2934:
case 1350:
case 343:
case 431:
case 3492:
case 1781:
case 3997:
case 3954:
case 3779:
case 2414:
case 1191:
case 3362:
case 1535:
case 1987:
case 2790:
case 1579:
case 654:
case 3032:
case 835:
case 1495:
case 2235:
case 2428:
case 447:
case 3401:
case 37:
case 825:
case 1581:
case 1810:
case 2382:
case 3712:
case 3370:
case 3410:
case 2822:
case 701:
case 1730:
case 3246:
case 2208:
case 716:
case 2645:
case 1138:
case 2342:
case 1076:
case 2524:
case 1172:
case 2990:
case 3393:
case 3476:
case 3463:
case 3436:
case 2476:
case 1353:
case 4071:
case 818:
case 221:
case 2699:
case 1860:
case 334:
case 1519:
case 3151:
case 1547:
case 3647:
case 1791:
case 83:
case 3981:
case 6:
case 2740:
case 791:
case 3857:
case 3956:
case 247:
case 2780:
case 1715:
case 2562:
case 397:
case 1998:
case 2884:
case 4086:
case 3967:
case 1678:
case 3568:
case 3087:
case 2032:
case 416:
case 236:
case 2267:
case 219:
case 1016:
case 566:
case 3973:
case 2842:
case 3709:
case 1666:
case 2079:
case 1840:
case 3795:
case 275:
case 4095:
case 3027:
case 1940:
case 122:
case 2204:
case 2063:
case 1714:
case 3700:
case 3377:
case 1994:
case 3140:
case 1171:
case 1808:
case 2452:
case 1184:
case 1552:
case 3615:
case 3618:
case 916:
case 2348:
case 1835:
case 1199:
case 819:
case 3106:
case 3212:
case 1492:
case 3695:
case 1988:
case 492:
case 419:
case 44:
case 1202:
case 2077:
case 222:
case 464:
case 3268:
case 2366:
case 172:
case 1526:
case 528:
case 754:
case 1279:
case 1161:
case 2499:
case 2595:
case 2836:
case 3408:
case 2295:
case 2604:
case 1887:
case 2359:
case 3697:
case 2437:
case 3867:
case 1248:
case 1003:
case 34:
case 595:
case 3075:
case 646:
case 3529:
case 3792:
case 3681:
case 2316:
case 3641:
case 749:
case 1474:
case 359:
case 3020:
case 3805:
case 1166:
case 2127:
case 1707:
case 246:
case 2271:
case 3516:
case 2950:
case 3633:
case 1261:
case 983:
case 1457:
case 4088:
case 776:
case 1339:
case 3863:
case 1977:
case 1163:
case 1452:
case 1817:
case 3012:
case 3134:
case 381:
case 477:
case 999:
case 2712:
case 942:
case 3916:
case 2967:
case 929:
case 3409:
case 118:
case 3911:
case 3067:
case 2268:
case 2706:
case 3222:
case 2364:
case 3845:
case 2155:
case 1372:
case 1672:
case 2599:
case 3872:
case 4052:
case 1387:
case 1389:
case 1283:
case 1331:
case 2907:
case 2928:
case 2945:
case 3722:
case 1948:
case 317:
case 1504:
case 3007:
case 4007:
case 344:
case 3976:
case 2826:
case 3775:
case 2972:
case 1187:
case 2549:
case 627:
case 3788:
case 1295:
case 2900:
case 2177:
case 3311:
case 3335:
case 2436:
case 594:
case 4094:
case 1792:
case 1211:
case 2278:
case 1267:
case 857:
case 3406:
case 2197:
case 2883:
case 842:
case 2075:
case 2310:
case 2098:
case 1399:
case 1026:
case 2829:
case 2541:
case 497:
case 958:
case 758:
case 1543:
case 1442:
case 3498:
case 634:
case 4063:
case 3789:
case 3817:
case 692:
case 1259:
case 3124:
case 2240:
case 1286:
case 2062:
case 2379:
case 3510:
case 2399:
case 2825:
case 373:
case 3205:
case 64:
case 2012:
case 796:
case 274:
case 3589:
case 1767:
case 1052:
case 3723:
case 49:
case 163:
case 2071:
case 2956:
case 3016:
case 761:
case 26:
case 3928:
case 3341:
case 3169:
case 2144:
case 2210:
case 1928:
case 1572:
case 3238:
case 1367:
case 3199:
case 3906:
case 2265:
case 3307:
case 2820:
case 165:
case 2663:
case 2633:
case 794:
case 226:
case 1233:
case 1089:
case 4062:
case 1693:
case 95:
case 2917:
case 1247:
case 3378:
case 771:
case 706:
case 1508:
case 1469:
case 3895:
case 1656:
case 1031:
case 3478:
case 1671:
case 3703:
case 2775:
case 3147:
case 3314:
case 2739:
case 3694:
case 1807:
case 1964:
case 3565:
case 3733:
case 192:
case 2727:
case 3453:
case 925:
case 996:
case 90:
case 3512:
case 180:
case 3899:
case 1330:
case 245:
case 1894:
case 1761:
case 2754:
case 15:
case 4022:
case 2252:
case 1836:
case 2453:
case 3505:
case 3847:
case 2298:
case 1193:
case 3988:
case 2655:
case 2080:
case 1877:
case 24:
case 227:
case 2448:
case 3630:
case 1498:
case 503:
case 1845:
case 1627:
case 1200:
case 994:
case 3332:
case 1032:
case 1923:
case 2718:
case 568:
case 2882:
case 146:
case 1886:
case 665:
case 2665:
case 429:
case 3625:
case 3323:
case 826:
case 347:
case 3569:
case 92:
case 1340:
case 3428:
case 2921:
case 3159:
case 1834:
case 2494:
case 858:
case 2617:
case 2818:
case 2575:
case 600:
case 1990:
case 1219:
case 3560:
case 2749:
case 1770:
case 2647:
case 3652:
case 1528:
case 1039:
case 74:
case 485:
case 2086:
case 1778:
case 638:
case 3808:
case 4028:
case 3705:
case 292:
case 399:
case 882:
case 1325:
case 2710:
case 3482:
case 2523:
case 1833:
case 2877:
case 660:
case 1952:
case 2463:
case 1881:
case 2684:
case 3511:
case 3594:
case 1014:
case 3608:
case 377:
case 2704:
case 1462:
case 1588:
case 3119:
case 3551:
case 2033:
case 889:
case 1603:
case 3230:
case 1260:
case 3853:
case 266:
case 956:
case 374:
case 2078:
case 1925:
case 11:
case 1502:
case 1047:
case 243:
case 2092:
case 1040:
case 4089:
case 1665:
case 2646:
case 1484:
case 4081:
case 1975:
case 3726:
case 2417:
case 3431:
case 2054:
case 2479:
case 628:
case 2849:
case 2049:
case 1577:
case 3220:
case 3383:
case 3861:
case 2787:
case 2262:
case 1383:
case 3291:
case 2251:
case 411:
case 2230:
case 525:
case 1398:
case 2115:
case 3651:
case 3263:
case 1518:
case 1786:
case 3727:
case 2753:
case 1409:
case 252:
case 1271:
case 1463:
case 1037:
case 1366:
case 424:
case 1269:
case 2643:
case 677:
case 3402:
case 2441:
case 2309:
case 3122:
case 1587:
case 2915:
case 1907:
case 3755:
case 3832:
case 3445:
case 4014:
case 2329:
case 1510:
case 3333:
case 1439:
case 2038:
case 2920:
case 3219:
case 1509:
case 2601:
case 4083:
case 4079:
case 1669:
case 1369:
case 2496:
case 2591:
case 1610:
case 337:
case 281:
case 1865:
case 3204:
case 3273:
case 3829:
case 3893:
case 1314:
case 696:
case 751:
case 953:
case 1921:
case 1450:
case 1044:
case 2502:
case 257:
case 2630:
case 2215:
case 2392:
case 4026:
case 2261:
case 2139:
case 3821:
case 1149:
case 723:
case 989:
case 1288:
case 3979:
case 844:
case 3667:
case 3065:
case 2850:
case 3286:
case 4065:
case 2362:
case 2931:
case 3833:
case 863:
case 216:
case 3277:
case 2217:
case 3209:
case 2299:
case 1306:
case 3226:
case 1891:
case 1316:
case 763:
case 3939:
case 3343:
case 3266:
case 2336:
case 1254:
case 507:
case 3879:
case 3443:
case 640:
case 3002:
case 669:
case 1804:
case 635:
case 2119:
case 456:
case 3116:
case 2325:
case 287:
case 1018:
case 3191:
case 918:
case 2568:
case 1941:
case 2833:
case 2573:
case 307:
case 3188:
case 2195:
case 1629:
case 4005:
case 483:
case 1122:
case 3467:
case 2618:
case 3398:
case 459:
case 2114:
case 2465:
case 736:
case 2812:
case 1421:
case 1698:
case 1419:
case 2237:
case 3358:
case 1415:
case 3324:
case 554:
case 1091:
case 2791:
case 2738:
case 3999:
case 4064:
case 2363:
case 3509:
case 3392:
case 653:
case 1345:
case 3790:
case 549:
case 338:
case 2664:
case 71:
case 183:
case 2061:
case 1167:
case 3546:
case 2099:
case 2924:
case 2030:
case 3005:
case 3862:
case 2201:
case 814:
case 3099:
case 2073:
case 2022:
case 2008:
case 2266:
case 3267:
case 4055:
case 2007:
case 2070:
case 3558:
case 2165:
case 2487:
case 1625:
case 3612:
case 3171:
case 2258:
case 3902:
case 2431:
case 839:
case 2989:
case 228:
case 2813:
case 614:
case 2009:
case 433:
case 69:
case 2953:
case 293:
case 3704:
case 1609:
case 2525:
case 1456:
case 1466:
case 3150:
case 145:
case 1478:
case 3076:
case 1949:
case 3716:
case 1878:
case 639:
case 3317:
case 2445:
case 2680:
case 1642:
case 2926:
case 1324:
case 288:
case 1533:
case 2207:
case 1955:
case 647:
case 2949:
case 3876:
case 2584:
case 845:
case 3399:
case 672:
case 2484:
case 410:
case 1801:
case 129:
case 3344:
case 2142:
case 1511:
case 2477:
case 970:
case 3654:
case 3701:
case 1104:
case 2396:
case 671:
case 2909:
case 3347:
case 1323:
case 2734:
case 515:
case 1287:
case 56:
case 234:
case 3905:
case 2282:
case 2358:
case 45:
case 362:
case 2874:
case 3646:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1700107202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,];
var gg_b = "1700107202/";

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
