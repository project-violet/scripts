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
case 714:
case 4066:
case 1871:
case 1059:
case 23:
case 1227:
case 88:
case 2040:
case 2992:
case 739:
case 1876:
case 3697:
case 1391:
case 3264:
case 3959:
case 1379:
case 661:
case 2315:
case 4019:
case 3973:
case 1764:
case 1650:
case 3262:
case 1255:
case 42:
case 902:
case 288:
case 2865:
case 564:
case 3477:
case 1899:
case 3727:
case 918:
case 2897:
case 3415:
case 2231:
case 216:
case 3196:
case 161:
case 1618:
case 1647:
case 3341:
case 1568:
case 156:
case 2236:
case 35:
case 1760:
case 2042:
case 931:
case 2990:
case 1654:
case 1485:
case 1468:
case 293:
case 34:
case 368:
case 465:
case 2044:
case 2706:
case 3688:
case 3665:
case 1652:
case 892:
case 2057:
case 2229:
case 2964:
case 2259:
case 1794:
case 2027:
case 1532:
case 1319:
case 895:
case 3881:
case 4079:
case 2375:
case 667:
case 3913:
case 1013:
case 2132:
case 2895:
case 1240:
case 462:
case 3886:
case 3517:
case 781:
case 354:
case 2134:
case 3740:
case 2055:
case 673:
case 649:
case 1811:
case 1487:
case 4053:
case 3083:
case 1534:
case 4091:
case 443:
case 479:
case 3402:
case 1432:
case 2273:
case 3001:
case 149:
case 173:
case 3290:
case 548:
case 3936:
case 3119:
case 3500:
case 905:
case 2681:
case 3006:
case 1036:
case 1242:
case 1620:
case 424:
case 3931:
case 167:
case 3929:
case 2304:
case 2198:
case 219:
case 1323:
case 2867:
case 1189:
case 3725:
case 1244:
case 817:
case 71:
case 1598:
case 3161:
case 1257:
case 3803:
case 120:
case 3400:
case 1208:
case 1029:
case 3238:
case 2286:
case 3690:
case 1971:
case 797:
case 2047:
case 52:
case 1625:
case 2892:
case 3570:
case 2281:
case 1976:
case 806:
case 342:
case 3428:
case 1220:
case 3071:
case 377:
case 3859:
case 2054:
case 3470:
case 1278:
case 3720:
case 2894:
case 3099:
case 352:
case 3143:
case 3528:
case 930:
case 298:
case 1795:
case 1435:
case 576:
case 2965:
case 3405:
case 2769:
case 3638:
case 1608:
case 1999:
case 160:
case 1657:
case 363:
case 3393:
case 2370:
case 2997:
case 2659:
case 3692:
case 2456:
case 627:
case 2305:
case 660:
case 1245:
case 3572:
case 2733:
case 2493:
case 2838:
case 3745:
case 283:
case 833:
case 2593:
case 2551:
case 3267:
case 1193:
case 2673:
case 2328:
case 3694:
case 235:
case 2307:
case 1247:
case 1218:
case 3410:
case 3813:
case 2180:
case 1788:
case 2995:
case 579:
case 2636:
case 1765:
case 3752:
case 1081:
case 178:
case 3363:
case 1580:
case 1969:
case 1254:
case 2799:
case 2439:
case 2020:
case 791:
case 904:
case 2312:
case 2421:
case 3660:
case 3754:
case 3265:
case 1911:
case 328:
case 2539:
case 809:
case 3718:
case 2776:
case 2862:
case 562:
case 3011:
case 1139:
case 2629:
case 3109:
case 1916:
case 3412:
case 2182:
case 1806:
case 3836:
case 1582:
case 1537:
case 780:
case 1484:
case 355:
case 2022:
case 3664:
case 2045:
case 3750:
case 3297:
case 3458:
case 1482:
case 1437:
case 1797:
case 3033:
case 621:
case 1584:
case 3407:
case 2967:
case 3662:
case 1655:
case 3414:
case 2463:
case 3903:
case 894:
case 2860:
case 3339:
case 678:
case 1309:
case 524:
case 3877:
case 85:
case 3709:
case 2846:
case 1070:
case 26:
case 3118:
case 1571:
case 3147:
case 1696:
case 4024:
case 311:
case 1005:
case 3226:
case 769:
case 3035:
case 2841:
case 1691:
case 2171:
case 1679:
case 3928:
case 2199:
case 1726:
case 1188:
case 3152:
case 1165:
case 519:
case 2043:
case 2210:
case 747:
case 686:
case 1209:
case 1471:
case 4022:
case 1028:
case 3239:
case 2565:
case 2588:
case 2258:
case 618:
case 407:
case 2784:
case 131:
case 1318:
case 1072:
case 4078:
case 1347:
case 3972:
case 2214:
case 3449:
case 1868:
case 961:
case 2677:
case 1354:
case 1885:
case 3263:
case 3150:
case 1763:
case 3549:
case 338:
case 435:
case 2956:
case 1074:
case 2497:
case 2737:
case 2169:
case 1416:
case 2270:
case 1887:
case 637:
case 516:
case 4050:
case 2926:
case 1195:
case 3802:
case 1411:
case 689:
case 2205:
case 1322:
case 870:
case 3743:
case 432:
case 2595:
case 2600:
case 3120:
case 2116:
case 1324:
case 1469:
case 317:
case 593:
case 751:
case 2735:
case 1666:
case 2495:
case 3817:
case 823:
case 1010:
case 3910:
case 1516:
case 766:
case 1834:
case 2009:
case 2963:
case 844:
case 1793:
case 1830:
case 4052:
case 3082:
case 3395:
case 53:
case 949:
case 2381:
case 2602:
case 3145:
case 3958:
case 395:
case 2467:
case 959:
case 2133:
case 1378:
case 1012:
case 4054:
case 3084:
case 264:
case 3912:
case 1167:
case 588:
case 3390:
case 2946:
case 3805:
case 1835:
case 2202:
case 3559:
case 2941:
case 2592:
case 3473:
case 382:
case 2204:
case 3828:
case 2492:
case 60:
case 1344:
case 2732:
case 3573:
case 960:
case 224:
case 2217:
case 927:
case 2248:
case 1194:
case 1308:
case 3651:
case 130:
case 2670:
case 4055:
case 3085:
case 3392:
case 77:
case 877:
case 535:
case 2275:
case 1789:
case 1340:
case 630:
case 1968:
case 2200:
case 3142:
case 2438:
case 243:
case 2091:
case 39:
case 2053:
case 2851:
case 3874:
case 2079:
case 1643:
case 507:
case 1266:
case 3144:
case 253:
case 2856:
case 726:
case 3719:
case 1261:
case 3157:
case 262:
case 113:
case 1138:
case 3108:
case 3394:
case 2658:
case 2607:
case 3127:
case 3241:
case 493:
case 1987:
case 2564:
case 1932:
case 2826:
case 3902:
case 2462:
case 699:
case 4008:
case 1002:
case 4057:
case 400:
case 1483:
case 3663:
case 2821:
case 1164:
case 3246:
case 2277:
case 1746:
case 1583:
case 1004:
case 583:
case 3917:
case 416:
case 3810:
case 104:
case 1048:
case 532:
case 3413:
case 1017:
case 774:
case 1934:
case 4025:
case 3904:
case 2101:
case 1327:
case 3621:
case 22:
case 1506:
case 1930:
case 2019:
case 3814:
case 1075:
case 3975:
case 2313:
case 3531:
case 1501:
case 3364:
case 3429:
case 1882:
case 3030:
case 385:
case 3807:
case 1253:
case 1291:
case 871:
case 3098:
case 3791:
case 3753:
case 1401:
case 740:
case 3436:
case 2989:
case 1406:
case 2560:
case 3812:
case 2061:
case 3639:
case 2768:
case 1609:
case 4040:
case 471:
case 544:
case 1371:
case 3677:
case 2646:
case 28:
case 2263:
case 2972:
case 83:
case 1896:
case 2449:
case 3784:
case 789:
case 641:
case 325:
case 3258:
case 1450:
case 1707:
case 3497:
case 1093:
case 1149:
case 651:
case 1550:
case 990:
case 1714:
case 238:
case 554:
case 1056:
case 2388:
case 4069:
case 2365:
case 2150:
case 1399:
case 3951:
case 2974:
case 888:
case 2397:
case 151:
case 1547:
case 2154:
case 675:
case 2035:
case 936:
case 3841:
case 1554:
case 348:
case 445:
case 2118:
case 3176:
case 2147:
case 3465:
case 1452:
case 570:
case 1280:
case 211:
case 1668:
case 2877:
case 2709:
case 3846:
case 36:
case 1454:
case 455:
case 893:
case 3349:
case 3780:
case 141:
case 1447:
case 3210:
case 292:
case 3615:
case 2928:
case 657:
case 1819:
case 463:
case 3381:
case 2122:
case 2395:
case 669:
case 1545:
case 3272:
case 3963:
case 1774:
case 2037:
case 1369:
case 2912:
case 2251:
case 4071:
case 2503:
case 477:
case 1422:
case 2084:
case 3617:
case 1772:
case 1524:
case 1634:
case 4076:
case 3133:
case 1861:
case 1630:
case 718:
case 3600:
case 2120:
case 1235:
case 1026:
case 2586:
case 3675:
case 2080:
case 147:
case 3169:
case 172:
case 3228:
case 2804:
case 322:
case 2367:
case 819:
case 2481:
case 1578:
case 2848:
case 54:
case 284:
case 169:
case 914:
case 834:
case 2486:
case 568:
case 217:
case 1909:
case 1408:
case 3200:
case 379:
case 29:
case 3053:
case 2872:
case 2125:
case 2766:
case 1635:
case 3096:
case 1542:
case 3670:
case 1953:
case 1525:
case 2068:
case 3359:
case 210:
case 2157:
case 362:
case 1979:
case 571:
case 444:
case 2394:
case 1442:
case 1425:
case 2719:
case 980:
case 1775:
case 1508:
case 3538:
case 2144:
case 353:
case 2289:
case 1557:
case 1298:
case 3490:
case 3851:
case 3079:
case 2874:
case 898:
case 129:
case 3893:
case 3592:
case 2723:
case 3734:
case 1704:
case 1046:
case 2473:
case 3202:
case 1232:
case 2559:
case 3941:
case 174:
case 1041:
case 1748:
case 1717:
case 629:
case 2390:
case 1540:
case 1173:
case 908:
case 2693:
case 324:
case 883:
case 3248:
case 640:
case 3492:
case 545:
case 3732:
case 3594:
case 2573:
case 470:
case 282:
case 2030:
case 2429:
case 2807:
case 2779:
case 285:
case 835:
case 1919:
case 577:
case 3313:
case 2531:
case 1136:
case 713:
case 2814:
case 3019:
case 2621:
case 2536:
case 1131:
case 17:
case 376:
case 3785:
case 2796:
case 807:
case 3560:
case 2529:
case 3610:
case 2362:
case 3066:
case 209:
case 2431:
case 2791:
case 2753:
case 2663:
case 3277:
case 67:
case 1527:
case 3336:
case 3614:
case 2241:
case 44:
case 3826:
case 730:
case 2902:
case 2513:
case 45:
case 3329:
case 2904:
case 3183:
case 2810:
case 1684:
case 2948:
case 2155:
case 294:
case 3612:
case 1427:
case 2360:
case 2034:
case 3377:
case 3990:
case 848:
case 1596:
case 1206:
case 720:
case 3231:
case 494:
case 11:
case 316:
case 1942:
case 1090:
case 4087:
case 300:
case 1453:
case 3701:
case 103:
case 1731:
case 3229:
case 1038:
case 1850:
case 4032:
case 1944:
case 773:
case 2515:
case 1579:
case 517:
case 268:
case 975:
case 1496:
case 2665:
case 1908:
case 1957:
case 2179:
case 393:
case 1115:
case 2697:
case 3541:
case 1177:
case 3040:
case 603:
case 3213:
case 3783:
case 409:
case 1940:
case 1092:
case 136:
case 2477:
case 485:
case 388:
case 3649:
case 3865:
case 1852:
case 1713:
case 3315:
case 3994:
case 1100:
case 1519:
case 2931:
case 3681:
case 2006:
case 1332:
case 2695:
case 1466:
case 2936:
case 2119:
case 2500:
case 1175:
case 482:
case 270:
case 2757:
case 2290:
case 1845:
case 1566:
case 761:
case 223:
case 1824:
case 2238:
case 3348:
case 3317:
case 334:
case 2475:
case 822:
case 1561:
case 2166:
case 1060:
case 3867:
case 1330:
case 1064:
case 2886:
case 3300:
case 3132:
case 2417:
case 3895:
case 1102:
case 947:
case 3187:
case 972:
case 3027:
case 2294:
case 187:
case 2667:
case 2083:
case 969:
case 49:
case 1148:
case 1955:
case 1523:
case 1117:
case 2740:
case 3055:
case 406:
case 1633:
case 2123:
case 957:
case 254:
case 3134:
case 3890:
case 1097:
case 3733:
case 3493:
case 3451:
case 1703:
case 612:
case 3305:
case 1825:
case 417:
case 3456:
case 940:
case 3370:
case 1842:
case 2267:
case 1174:
case 332:
case 691:
case 950:
case 1950:
case 3328:
case 2694:
case 1844:
case 2472:
case 3593:
case 2574:
case 2722:
case 3551:
case 594:
case 3838:
case 3050:
case 1857:
case 383:
case 3716:
case 2071:
case 4084:
case 2859:
case 277:
case 191:
case 2570:
case 585:
case 3281:
case 843:
case 879:
case 2076:
case 1443:
case 3047:
case 680:
case 1840:
case 3711:
case 2295:
case 301:
case 3286:
case 2690:
case 1954:
case 1170:
case 3769:
case 853:
case 1786:
case 2351:
case 112:
case 2393:
case 398:
case 3965:
case 1088:
case 1065:
case 3052:
case 4082:
case 509:
case 4037:
case 2143:
case 862:
case 2470:
case 2720:
case 2099:
case 3894:
case 2831:
case 2297:
case 926:
case 697:
case 3613:
case 2326:
case 2507:
case 3022:
case 255:
case 1749:
case 2836:
case 492:
case 2321:
case 2514:
case 3463:
case 2903:
case 3860:
case 2339:
case 1924:
case 3184:
case 3249:
case 1683:
case 2662:
case 582:
case 411:
case 2458:
case 3024:
case 2033:
case 2407:
case 245:
case 3967:
case 1827:
case 1409:
case 2986:
case 3799:
case 3439:
case 3995:
case 2752:
case 727:
case 1276:
case 2813:
case 3358:
case 1920:
case 438:
case 1601:
case 3526:
case 197:
case 3629:
case 2510:
case 2109:
case 2718:
case 3776:
case 1384:
case 1855:
case 3426:
case 615:
case 2288:
case 1110:
case 228:
case 876:
case 1299:
case 2754:
case 2933:
case 3067:
case 1463:
case 1860:
case 2309:
case 1184:
case 530:
case 1249:
case 3683:
case 1310:
case 2655:
case 2250:
case 3112:
case 2437:
case 1967:
case 3114:
case 92:
case 402:
case 2537:
case 4028:
case 2484:
case 3749:
case 2627:
case 315:
case 418:
case 3158:
case 397:
case 3978:
case 2916:
case 486:
case 1776:
case 513:
case 3384:
case 3855:
case 2252:
case 2911:
case 2480:
case 777:
case 3110:
case 87:
case 1421:
case 3299:
case 752:
case 2580:
case 2969:
case 1799:
case 2126:
case 1995:
case 596:
case 2788:
case 2765:
case 826:
case 4074:
case 3276:
case 2218:
case 221:
case 763:
case 1180:
case 50:
case 3920:
case 1358:
case 2086:
case 1307:
case 135:
case 1526:
case 1631:
case 132:
case 2151:
case 2193:
case 1556:
case 953:
case 3950:
case 3844:
case 2049:
case 2343:
case 962:
case 1551:
case 3808:
case 755:
case 1203:
case 183:
case 3233:
case 601:
case 2245:
case 1890:
case 1493:
case 1733:
case 3097:
case 3703:
case 2222:
case 3335:
case 3172:
case 979:
case 1370:
case 1997:
case 3842:
case 3543:
case 850:
case 3128:
case 1374:
case 260:
case 2657:
case 4014:
case 829:
case 198:
case 3211:
case 599:
case 1965:
case 4058:
case 3065:
case 3781:
case 308:
case 4007:
case 3216:
case 2278:
case 1716:
case 728:
case 3105:
case 391:
case 1281:
case 3918:
case 489:
case 4012:
case 1047:
case 3443:
case 840:
case 3840:
case 683:
case 1711:
case 1286:
case 3269:
case 3170:
case 771:
case 2257:
case 1960:
case 2208:
case 2790:
case 1317:
case 259:
case 502:
case 2598:
case 3561:
case 3334:
case 3060:
case 267:
case 2678:
case 119:
case 2323:
case 2620:
case 2242:
case 3461:
case 2901:
case 430:
case 1681:
case 74:
case 847:
case 1302:
case 2036:
case 3466:
case 2906:
case 3822:
case 1489:
case 3175:
case 2031:
case 3845:
case 1273:
case 387:
case 3878:
case 2361:
case 2487:
case 1962:
case 3523:
case 3148:
case 2792:
case 2432:
case 1055:
case 2366:
case 2811:
case 922:
case 40:
case 3633:
case 1603:
case 3398:
case 3104:
case 2624:
case 2869:
case 3330:
case 1895:
case 2240:
case 4015:
case 1375:
case 619:
case 2434:
case 3820:
case 2794:
case 531:
case 1701:
case 100:
case 3491:
case 1229:
case 3038:
case 3944:
case 770:
case 1044:
case 63:
case 3736:
case 2652:
case 2485:
case 1938:
case 3908:
case 246:
case 3957:
case 3115:
case 4017:
case 688:
case 4048:
case 3671:
case 1377:
case 404:
case 3596:
case 2585:
case 2568:
case 866:
case 1236:
case 256:
case 4004:
case 3925:
case 723:
case 261:
case 3591:
case 851:
case 2618:
case 2647:
case 31:
case 1897:
case 116:
case 3942:
case 1185:
case 3729:
case 2073:
case 1446:
case 3094:
case 188:
case 3283:
case 1888:
case 589:
case 1865:
case 3713:
case 958:
case 616:
case 1441:
case 2764:
case 2650:
case 2391:
case 1541:
case 2146:
case 600:
case 2762:
case 381:
case 1213:
case 1992:
case 96:
case 3847:
case 2876:
case 754:
case 2141:
case 3092:
case 3368:
case 3854:
case 3385:
case 2059:
case 2871:
case 13:
case 336:
case 299:
case 37:
case 1768:
case 2609:
case 2998:
case 3129:
case 1989:
case 706:
case 3966:
case 2406:
case 3383:
case 1610:
case 527:
case 4059:
case 665:
case 1066:
case 897:
case 2160:
case 1215:
case 3715:
case 1106:
case 1313:
case 2501:
case 3136:
case 2296:
case 1019:
case 2327:
case 1863:
case 2506:
case 12:
case 3285:
case 3268:
case 1460:
case 1464:
case 1562:
case 3923:
case 3555:
case 2741:
case 2017:
case 2162:
case 1612:
case 3427:
case 1023:
case 461:
case 2004:
case 1821:
case 1277:
case 2164:
case 2880:
case 3113:
case 676:
case 1614:
case 935:
case 1564:
case 2987:
case 2932:
case 3301:
case 3637:
case 162:
case 3544:
case 213:
case 3442:
case 4013:
case 1628:
case 983:
case 812:
case 2643:
case 932:
case 350:
case 1490:
case 3298:
case 1079:
case 329:
case 1893:
case 2015:
case 2968:
case 179:
case 340:
case 1590:
case 1605:
case 1096:
case 3542:
case 20:
case 3991:
case 1670:
case 891:
case 4036:
case 2357:
case 880:
case 124:
case 643:
case 1217:
case 1492:
case 3702:
case 473:
case 1787:
case 2223:
case 1204:
case 1592:
case 459:
case 1494:
case 3046:
case 3704:
case 1202:
case 662:
case 2325:
case 4029:
case 3232:
case 420:
case 3287:
case 1941:
case 1672:
case 3041:
case 2835:
case 3717:
case 1946:
case 3159:
case 289:
case 2167:
case 3445:
case 2898:
case 1889:
case 3422:
case 1648:
case 1617:
case 839:
case 164:
case 919:
case 1567:
case 887:
case 3634:
case 237:
case 2012:
case 1133:
case 3103:
case 814:
case 3861:
case 2623:
case 738:
case 2982:
case 2320:
case 9:
case 1381:
case 460:
case 3687:
case 1602:
case 3545:
case 2751:
case 3774:
case 3522:
case 2793:
case 2830:
case 3369:
case 2058:
case 1386:
case 1228:
case 3420:
case 1009:
case 3770:
case 2661:
case 2516:
case 3578:
case 1495:
case 2666:
case 546:
case 2010:
case 1921:
case 1595:
case 3630:
case 1600:
case 2345:
case 2411:
case 3235:
case 2887:
case 1926:
case 2195:
case 3728:
case 3186:
case 561:
case 372:
case 1270:
case 3879:
case 3051:
case 3093:
case 1497:
case 1782:
case 1956:
case 3149:
case 3284:
case 3550:
case 993:
case 3714:
case 66:
case 795:
case 648:
case 421:
case 1951:
case 1212:
case 2354:
case 1677:
case 3371:
case 3712:
case 2197:
case 286:
case 916:
case 658:
case 1214:
case 3896:
case 2072:
case 3237:
case 1207:
case 1258:
case 3282:
case 3454:
case 2209:
case 559:
case 1588:
case 2599:
case 2188:
case 2726:
case 625:
case 567:
case 1043:
case 2476:
case 218:
case 1210:
case 988:
case 1615:
case 784:
case 3547:
case 3710:
case 717:
case 93:
case 2571:
case 4003:
case 3554:
case 549:
case 3452:
case 573:
case 2935:
case 1488:
case 3280:
case 2739:
case 3685:
case 16:
case 2070:
case 2777:
case 3583:
case 3746:
case 3162:
case 1917:
case 41:
case 1810:
case 304:
case 3741:
case 3048:
case 3017:
case 1413:
case 1904:
case 928:
case 2923:
case 2555:
case 2682:
case 1513:
case 3987:
case 609:
case 2306:
case 3002:
case 2527:
case 403:
case 1087:
case 1663:
case 3160:
case 508:
case 1098:
case 1791:
case 109:
case 3401:
case 1529:
case 3355:
case 2089:
case 779:
case 743:
case 2966:
case 512:
case 945:
case 27:
case 3998:
case 3609:
case 2129:
case 1621:
case 3327:
case 1536:
case 3506:
case 878:
case 2131:
case 955:
case 3930:
case 2285:
case 694:
case 1900:
case 762:
case 1814:
case 1975:
case 1626:
case 1531:
case 4094:
case 2136:
case 1030:
case 3882:
case 1429:
case 3000:
case 2715:
case 3291:
case 753:
case 3837:
case 3223:
case 182:
case 1459:
case 1828:
case 3344:
case 1656:
case 2702:
case 606:
case 1573:
case 2843:
case 2440:
case 2173:
case 952:
case 1651:
case 1977:
case 942:
case 2041:
case 977:
case 2748:
case 515:
case 4060:
case 2717:
case 2287:
case 1559:
case 1723:
case 3342:
case 2046:
case 3077:
case 2704:
case 2298:
case 2700:
case 1874:
case 229:
case 2508:
case 1144:
case 2557:
case 827:
case 72:
case 110:
case 1915:
case 313:
case 1394:
case 30:
case 2525:
case 2953:
case 106:
case 1761:
case 776:
case 682:
case 2444:
case 1872:
case 2996:
case 3789:
case 633:
case 1766:
case 2408:
case 1142:
case 3968:
case 414:
case 19:
case 396:
case 1486:
case 2909:
case 117:
case 3469:
case 2705:
case 1817:
case 590:
case 820:
case 3243:
case 184:
case 257:
case 1481:
case 503:
case 695:
case 954:
case 3834:
case 2420:
case 2039:
case 748:
case 1367:
case 1581:
case 247:
case 2728:
case 3416:
case 272:
case 2478:
case 758:
case 480:
case 3195:
case 3832:
case 51:
case 3411:
case 2026:
case 2235:
case 3322:
case 1743:
case 1586:
case 1120:
case 337:
case 3012:
case 3378:
case 2103:
case 2316:
case 3623:
case 3984:
case 725:
case 2422:
case 1084:
case 1503:
case 2311:
case 3533:
case 2524:
case 1912:
case 1293:
case 491:
case 3751:
case 408:
case 3007:
case 3433:
case 1037:
case 2369:
case 3058:
case 684:
case 536:
case 2545:
case 1914:
case 617:
case 2819:
case 3014:
case 412:
case 970:
case 1875:
case 2687:
case 1145:
case 195:
case 3350:
case 241:
case 3726:
case 415:
case 846:
case 3599:
case 2943:
case 68:
case 1239:
case 3028:
case 2552:
case 302:
case 3721:
case 3499:
case 2668:
case 638:
case 1709:
case 1877:
case 1221:
case 1118:
case 1905:
case 3696:
case 2280:
case 111:
case 3935:
case 1035:
case 2710:
case 1397:
case 251:
case 3576:
case 2518:
case 4095:
case 1150:
case 3763:
case 611:
case 2714:
case 1388:
case 2056:
case 2284:
case 94:
case 587:
case 3074:
case 2051:
case 968:
case 2093:
case 1815:
case 514:
case 2853:
case 764:
case 2450:
case 2282:
case 692:
case 1641:
case 497:
case 2896:
case 1449:
case 3868:
case 2371:
case 2712:
case 386:
case 1263:
case 550:
case 1660:
case 1754:
case 3911:
case 2110:
case 3883:
case 1718:
case 1747:
case 171:
case 1510:
case 994:
case 3916:
case 4056:
case 3086:
case 2601:
case 3218:
case 1813:
case 321:
case 645:
case 540:
case 3126:
case 3788:
case 1752:
case 4093:
case 475:
case 3081:
case 3580:
case 2271:
case 3254:
case 3969:
case 2112:
case 3797:
case 3437:
case 804:
case 145:
case 466:
case 1662:
case 1512:
case 1414:
case 1903:
case 2067:
case 1339:
case 3309:
case 3627:
case 1321:
case 215:
case 628:
case 1514:
case 2945:
case 2749:
case 732:
case 1836:
case 985:
case 1558:
case 1326:
case 783:
case 1507:
case 155:
case 1750:
case 1297:
case 671:
case 3278:
case 1470:
case 327:
case 1873:
case 1720:
case 2088:
case 1356:
case 152:
case 2065:
case 1528:
case 1143:
case 2781:
case 4063:
case 1405:
case 1638:
case 3999:
case 2786:
case 3608:
case 2543:
case 2128:
case 212:
case 1351:
case 3657:
case 360:
case 163:
case 2954:
case 1690:
case 2170:
case 1505:
case 896:
case 1076:
case 1295:
case 2105:
case 3625:
case 1570:
case 291:
case 80:
case 707:
case 2918:
case 177:
case 1071:
case 2857:
case 280:
case 2233:
case 830:
case 4021:
case 910:
case 3156:
case 1949:
case 447:
case 1722:
case 2844:
case 677:
case 1267:
case 4026:
case 1694:
case 652:
case 2825:
case 1692:
case 2172:
case 906:
case 3640:
case 4039:
case 2335:
case 3245:
case 1724:
case 2097:
case 2703:
case 239:
case 1517:
case 1548:
case 1123:
case 154:
case 3624:
case 2062:
case 670:
case 3811:
case 3366:
case 1083:
case 1504:
case 440:
case 3487:
case 3534:
case 2523:
case 2148:
case 917:
case 3792:
case 2117:
case 837:
case 287:
case 2878:
case 3816:
case 1667:
case 3361:
case 1404:
case 450:
case 788:
case 3434:
case 3794:
case 3532:
case 1292:
case 1913:
case 1417:
case 3013:
case 3622:
case 1448:
case 2102:
case 3869:
case 2064:
case 3645:
case 1742:
case 367:
case 1929:
case 2616:
case 3323:
case 3189:
case 1166:
case 716:
case 2611:
case 123:
case 3257:
case 1803:
case 1400:
case 3790:
case 2824:
case 3430:
case 3029:
case 170:
case 1001:
case 373:
case 3498:
case 1290:
case 3738:
case 2845:
case 1708:
case 2466:
case 3906:
case 700:
case 654:
case 1119:
case 2175:
case 3530:
case 995:
case 2387:
case 551:
case 3225:
case 1575:
case 2519:
case 2100:
case 3242:
case 1931:
case 3379:
case 1973:
case 1262:
case 992:
case 3073:
case 3059:
case 4089:
case 2854:
case 3227:
case 1577:
case 2940:
case 3396:
case 64:
case 3762:
case 281:
case 2818:
case 3876:
case 3391:
case 1697:
case 3353:
case 911:
case 1959:
case 831:
case 1264:
case 2177:
case 3485:
case 1260:
case 2957:
case 14:
case 168:
case 1688:
case 2736:
case 569:
case 1515:
case 2944:
case 2579:
case 2453:
case 2731:
case 203:
case 7:
case 2850:
case 557:
case 2201:
case 2942:
case 2729:
case 2090:
case 2553:
case 2925:
case 2591:
case 3618:
case 3585:
case 356:
case 2206:
case 3654:
case 2671:
case 2596:
case 1153:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758466801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,];
var gg_b = "1758466801/";

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
