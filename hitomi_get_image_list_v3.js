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
case 986:
case 3522:
case 2461:
case 2846:
case 471:
case 1987:
case 3376:
case 1586:
case 3066:
case 2944:
case 1437:
case 468:
case 694:
case 2943:
case 3988:
case 2186:
case 1366:
case 4008:
case 2965:
case 3472:
case 1076:
case 2930:
case 3417:
case 3276:
case 3115:
case 2594:
case 1508:
case 2593:
case 3804:
case 3849:
case 1928:
case 1750:
case 2379:
case 1554:
case 1181:
case 1553:
case 3858:
case 1135:
case 1194:
case 1262:
case 1466:
case 2649:
case 1193:
case 1038:
case 2581:
case 167:
case 3238:
case 3526:
case 286:
case 2261:
case 2535:
case 2279:
case 2280:
case 676:
case 2153:
case 519:
case 1346:
case 3706:
case 4055:
case 347:
case 918:
case 2964:
case 3727:
case 2963:
case 3666:
case 2620:
case 146:
case 3046:
case 390:
case 1950:
case 2866:
case 2441:
case 3820:
case 2540:
case 2709:
case 3398:
case 2744:
case 2743:
case 882:
case 674:
case 422:
case 2605:
case 3097:
case 2818:
case 2765:
case 126:
case 1242:
case 653:
case 3788:
case 2534:
case 2669:
case 1880:
case 2730:
case 1861:
case 1446:
case 2671:
case 337:
case 2341:
case 364:
case 2595:
case 1140:
case 3298:
case 1098:
case 3805:
case 0:
case 3618:
case 3113:
case 2837:
case 1555:
case 718:
case 491:
case 1342:
case 3869:
case 2058:
case 218:
case 3871:
case 1134:
case 1013:
case 1882:
case 3198:
case 3711:
case 902:
case 2732:
case 2597:
case 1395:
case 3214:
case 1240:
case 3694:
case 3034:
case 2835:
case 1956:
case 228:
case 1785:
case 1557:
case 2355:
case 1233:
case 549:
case 1731:
case 1670:
case 728:
case 779:
case 1197:
case 2141:
case 3504:
case 3314:
case 993:
case 3313:
case 738:
case 3635:
case 1853:
case 2157:
case 3558:
case 49:
case 3:
case 175:
case 1334:
case 238:
case 3739:
case 3681:
case 3660:
case 1146:
case 539:
case 2455:
case 866:
case 870:
case 1984:
case 578:
case 1621:
case 793:
case 2829:
case 1495:
case 1434:
case 2947:
case 248:
case 1991:
case 2546:
case 748:
case 529:
case 1433:
case 4041:
case 804:
case 702:
case 1886:
case 3414:
case 2992:
case 3093:
case 1791:
case 1118:
case 1613:
case 962:
case 3640:
case 2382:
case 1162:
case 2208:
case 3094:
case 1381:
case 3925:
case 2179:
case 2180:
case 3289:
case 1335:
case 2254:
case 3270:
case 2936:
case 1089:
case 852:
case 2282:
case 2308:
case 3799:
case 1394:
case 3215:
case 2840:
case 3421:
case 2007:
case 1015:
case 598:
case 1579:
case 188:
case 1580:
case 1784:
case 3389:
case 1260:
case 635:
case 1783:
case 773:
case 1137:
case 1281:
case 3060:
case 683:
case 2026:
case 4079:
case 1919:
case 2022:
case 799:
case 4061:
case 1481:
case 806:
case 1460:
case 382:
case 2967:
case 2286:
case 1021:
case 3723:
case 533:
case 3939:
case 585:
case 195:
case 2796:
case 3470:
case 487:
case 2454:
case 3321:
case 864:
case 1931:
case 762:
case 2408:
case 1494:
case 3029:
case 2632:
case 3456:
case 250:
case 3793:
case 3794:
case 2348:
case 1399:
case 71:
case 750:
case 1685:
case 1573:
case 3867:
case 3383:
case 3878:
case 792:
case 894:
case 6:
case 3384:
case 2359:
case 2092:
case 2839:
case 721:
case 2248:
case 2811:
case 769:
case 941:
case 221:
case 2707:
case 3545:
case 1423:
case 3391:
case 3284:
case 617:
case 2259:
case 2678:
case 3735:
case 1877:
case 2726:
case 1083:
case 1812:
case 3564:
case 1816:
case 3484:
case 2722:
case 876:
case 3995:
case 1499:
case 568:
case 3024:
case 2448:
case 860:
case 741:
case 969:
case 3023:
case 1721:
case 2096:
case 992:
case 413:
case 3940:
case 3934:
case 950:
case 3491:
case 3256:
case 1323:
case 91:
case 3729:
case 1324:
case 859:
case 2636:
case 2899:
case 1211:
case 3543:
case 1691:
case 1713:
case 1714:
case 1652:
case 181:
case 3740:
case 1510:
case 3530:
case 1859:
case 2277:
case 1085:
case 1339:
case 2175:
case 1031:
case 2588:
case 2692:
case 3231:
case 3187:
case 3699:
case 1200:
case 2922:
case 709:
case 3000:
case 2110:
case 1311:
case 263:
case 2312:
case 763:
case 325:
case 3385:
case 1239:
case 1575:
case 3892:
case 3039:
case 105:
case 1188:
case 2368:
case 963:
case 2316:
case 455:
case 1439:
case 345:
case 4075:
case 1915:
case 508:
case 2527:
case 4001:
case 2926:
case 3128:
case 2696:
case 853:
case 2477:
case 1106:
case 2412:
case 3994:
case 1656:
case 2824:
case 3025:
case 1411:
case 1225:
case 682:
case 1127:
case 874:
case 1989:
case 557:
case 2823:
case 394:
case 3487:
case 2475:
case 2116:
case 429:
case 1938:
case 889:
case 3328:
case 1488:
case 4012:
case 1972:
case 3746:
case 1917:
case 478:
case 1028:
case 2410:
case 3228:
case 2525:
case 2971:
case 3428:
case 3532:
case 3797:
case 2301:
case 360:
case 2043:
case 376:
case 1302:
case 1650:
case 3863:
case 3387:
case 2030:
case 4016:
case 2375:
case 2645:
case 670:
case 449:
case 3890:
case 780:
case 2704:
case 1111:
case 2749:
case 280:
case 2500:
case 2112:
case 177:
case 1087:
case 2275:
case 1406:
case 3131:
case 1874:
case 2664:
case 2539:
case 1202:
case 1388:
case 2168:
case 3966:
case 2177:
case 3185:
case 3578:
case 2903:
case 4059:
case 883:
case 2904:
case 423:
case 3627:
case 74:
case 2958:
case 3766:
case 825:
case 3450:
case 57:
case 3997:
case 3942:
case 1628:
case 396:
case 911:
case 211:
case 2090:
case 23:
case 1801:
case 2705:
case 711:
case 2148:
case 2274:
case 3688:
case 3250:
case 3737:
case 2665:
case 845:
case 2802:
case 3551:
case 3152:
case 2045:
case 3809:
case 3844:
case 130:
case 2599:
case 94:
case 3843:
case 1738:
case 3830:
case 606:
case 353:
case 3409:
case 3444:
case 3443:
case 1971:
case 4011:
case 98:
case 3465:
case 823:
case 1905:
case 3430:
case 483:
case 2306:
case 2516:
case 2227:
case 506:
case 4000:
case 537:
case 1475:
case 977:
case 4039:
case 833:
case 1539:
case 3075:
case 1664:
case 2874:
case 1275:
case 3365:
case 552:
case 1758:
case 777:
case 1663:
case 687:
case 2388:
case 1168:
case 1703:
case 3001:
case 1645:
case 1500:
case 3132:
case 1310:
case 590:
case 1749:
case 2111:
case 3309:
case 2798:
case 1704:
case 3344:
case 3519:
case 2302:
case 3674:
case 2512:
case 3531:
case 2577:
case 3673:
case 2976:
case 3178:
case 1030:
case 3585:
case 3167:
case 78:
case 3244:
case 1690:
case 3209:
case 3010:
case 1043:
case 1511:
case 1301:
case 4025:
case 2100:
case 3243:
case 861:
case 489:
case 2628:
case 1827:
case 612:
case 240:
case 920:
case 2124:
case 2776:
case 3957:
case 3556:
case 504:
case 3941:
case 297:
case 566:
case 3828:
case 930:
case 14:
case 839:
case 1903:
case 1904:
case 2998:
case 1949:
case 878:
case 3196:
case 3463:
case 3583:
case 3675:
case 1064:
case 1373:
case 3780:
case 1374:
case 3263:
case 3779:
case 1063:
case 3761:
case 3601:
case 230:
case 2810:
case 3390:
case 2875:
case 1274:
case 313:
case 1273:
case 1769:
case 3364:
case 1159:
case 849:
case 13:
case 1090:
case 3552:
case 3290:
case 1644:
case 1609:
case 1148:
case 1643:
case 2717:
case 1705:
case 220:
case 3392:
case 323:
case 2868:
case 2084:
case 3885:
case 265:
case 1174:
case 3782:
case 25:
case 3048:
case 210:
case 2619:
case 75:
case 642:
case 301:
case 169:
case 3190:
case 2715:
case 3753:
case 3677:
case 3163:
case 3668:
case 1051:
case 582:
case 2573:
case 192:
case 657:
case 1092:
case 3550:
case 1839:
case 2574:
case 2789:
case 333:
case 3292:
case 2631:
case 1800:
case 2091:
case 3819:
case 2052:
case 400:
case 632:
case 86:
case 1636:
case 3451:
case 691:
case 855:
case 1448:
case 2499:
case 2721:
case 453:
case 343:
case 3396:
case 965:
case 1067:
case 1502:
case 705:
case 1078:
case 163:
case 2684:
case 3267:
case 3659:
case 1368:
case 2188:
case 2683:
case 3986:
case 1377:
case 4006:
case 2239:
case 3587:
case 3165:
case 494:
case 2921:
case 3891:
case 109:
case 3109:
case 3852:
case 1110:
case 1651:
case 378:
case 3077:
case 1277:
case 1268:
case 2859:
case 3378:
case 1692:
case 2031:
case 2713:
case 781:
case 2425:
case 2211:
case 2510:
case 3436:
case 281:
case 2714:
case 5:
case 172:
case 460:
case 3432:
case 2127:
case 2989:
case 1823:
case 2970:
case 1468:
case 1412:
case 476:
case 4088:
case 349:
case 517:
case 3467:
case 3478:
case 905:
case 2853:
case 1157:
case 1778:
case 1767:
case 2854:
case 357:
case 1255:
case 3682:
case 2808:
case 179:
case 1355:
case 2234:
case 128:
case 3777:
case 3768:
case 2731:
case 623:
case 2233:
case 3712:
case 1597:
case 1732:
case 3149:
case 342:
case 3104:
case 2882:
case 452:
case 2541:
case 3103:
case 545:
case 2240:
case 322:
case 1992:
case 3821:
case 525:
case 1736:
case 437:
case 148:
case 1947:
case 2433:
case 643:
case 535:
case 3959:
case 193:
case 1829:
case 2983:
case 3686:
case 2146:
case 3948:
case 975:
case 1455:
case 887:
case 916:
case 1354:
case 2784:
case 3759:
case 2580:
case 3422:
case 1834:
case 288:
case 2579:
case 2281:
case 3655:
case 788:
case 2783:
case 1353:
case 2394:
case 3748:
case 1282:
case 1308:
case 3082:
case 3105:
case 4066:
case 1562:
case 3814:
case 3207:
case 154:
case 371:
case 2360:
case 89:
case 1253:
case 3326:
case 368:
case 2381:
case 1161:
case 2089:
case 1936:
case 2855:
case 3517:
case 714:
case 3307:
case 2613:
case 2791:
case 3572:
case 1895:
case 2614:
case 2162:
case 2294:
case 2752:
case 1386:
case 470:
case 2493:
case 3576:
case 2494:
case 1408:
case 1932:
case 4037:
case 3322:
case 2329:
case 1967:
case 4018:
case 1566:
case 295:
case 3086:
case 4062:
case 404:
case 1286:
case 3222:
case 3426:
case 199:
case 2460:
case 2481:
case 4094:
case 1529:
case 1965:
case 3320:
case 934:
case 4093:
case 553:
case 3910:
case 857:
case 2437:
case 1944:
case 1943:
case 3122:
case 3975:
case 2586:
case 2266:
case 4060:
case 3901:
case 4081:
case 1461:
case 808:
case 186:
case 1560:
case 1764:
case 2038:
case 3369:
case 1154:
case 2857:
case 1280:
case 767:
case 1658:
case 1535:
case 1261:
case 224:
case 3305:
case 1108:
case 1603:
case 1897:
case 2698:
case 822:
case 619:
case 2218:
case 2841:
case 3420:
case 2466:
case 891:
case 387:
case 1379:
case 3126:
case 2160:
case 3774:
case 3773:
case 2135:
case 1071:
case 2553:
case 3271:
case 655:
case 4029:
case 2072:
case 2318:
case 1594:
case 3107:
case 1790:
case 66:
case 1005:
case 3898:
case 2017:
case 2362:
case 234:
case 2728:
case 1441:
case 1866:
case 4033:
case 559:
case 746:
case 1457:
case 576:
case 3449:
case 312:
case 1620:
case 2346:
case 1945:
case 4:
case 560:
case 868:
case 2787:
case 613:
case 2133:
case 3775:
case 236:
case 3258:
case 3680:
case 1595:
case 2397:
case 3701:
case 1341:
case 1003:
case 1004:
case 1049:
case 3249:
case 1533:
case 3057:
case 2446:
case 2880:
case 1669:
case 1534:
case 726:
case 1862:
case 1709:
case 594:
case 3710:
case 1540:
case 2617:
case 3513:
case 1430:
case 4085:
case 1465:
case 4031:
case 1443:
case 536:
case 3971:
case 2228:
case 2536:
case 1409:
case 821:
case 794:
case 892:
case 405:
case 2962:
case 294:
case 81:
case 3401:
case 2027:
case 1132:
case 759:
case 380:
case 1309:
case 546:
case 2890:
case 3703:
case 1343:
case 1001:
case 3645:
case 2002:
case 2567:
case 1365:
case 2185:
case 3758:
case 3663:
case 3664:
case 1330:
case 3112:
case 3275:
case 3511:
case 3301:
case 260:
case 2532:
case 841:
case 760:
case 1010:
case 2845:
case 119:
case 3375:
case 1230:
case 3030:
case 715:
case 1178:
case 1757:
case 1167:
case 2864:
case 2742:
case 3065:
case 1674:
case 1531:
case 2997:
case 863:
case 3473:
case 3474:
case 524:
case 3806:
case 1957:
case 4091:
case 567:
case 809:
case 1490:
case 296:
case 3827:
case 1196:
case 953:
case 534:
case 1463:
case 1464:
case 3958:
case 45:
case 2627:
case 1828:
case 1445:
case 10:
case 872:
case 774:
case 2718:
case 32:
case 3599:
case 274:
case 3045:
case 1780:
case 2350:
case 2602:
case 1151:
case 3063:
case 2830:
case 1584:
case 1583:
case 3064:
case 3888:
case 1264:
case 3373:
case 1192:
case 753:
case 1591:
case 2946:
case 3643:
case 3148:
case 4056:
case 2547:
case 3705:
case 3090:
case 1290:
case 996:
case 3644:
case 3609:
case 3769:
case 113:
case 3159:
case 3802:
case 2184:
case 3771:
case 1074:
case 3665:
case 1363:
case 2183:
case 544:
case 101:
case 497:
case 369:
case 3707:
case 1347:
case 2545:
case 321:
case 3811:
case 2600:
case 2352:
case 2099:
case 1048:
case 2564:
case 2781:
case 2150:
case 2283:
case 3174:
case 2735:
case 3173:
case 2284:
case 3667:
case 303:
case 1885:
case 2563:
case 3348:
case 1708:
case 2252:
case 789:
case 3800:
case 350:
case 1247:
case 2291:
case 3092:
case 1550:
case 595:
case 2384:
case 1292:
case 2878:
case 638:
case 1753:
case 1677:
case 3051:
case 2383:
case 1163:
case 2867:
case 1251:
case 4050:
case 3096:
case 2452:
case 880:
case 198:
case 588:
case 2934:
case 648:
case 2483:
case 1396:
case 430:
case 341:
case 1955:
case 451:
case 1852:
case 1109:
case 1891:
case 2000:
case 3922:
case 1143:
case 2699:
case 1648:
case 3368:
case 2039:
case 1587:
case 2385:
case 945:
case 2851:
case 3312:
case 1130:
case 3502:
case 1278:
case 725:
case 1267:
case 1659:
case 3101:
case 2319:
case 4028:
case 2509:
case 84:
case 139:
case 2011:
case 1883:
case 1012:
case 3175:
case 3212:
case 2733:
case 2734:
case 2285:
case 283:
case 3277:
case 1884:
case 3412:
case 3468:
case 699:
case 1016:
case 2993:
case 935:
case 1954:
case 3036:
case 516:
case 2025:
case 1953:
case 1432:
case 925:
case 3907:
case 1982:
case 2896:
case 3926:
case 2128:
case 2960:
case 83:
case 662:
case 811:
case 1336:
case 2419:
case 1856:
case 2624:
case 2095:
case 61:
case 2503:
case 379:
case 1598:
case 2549:
case 2314:
case 3141:
case 2700:
case 1682:
case 1055:
case 1870:
case 692:
case 2660:
case 7:
case 2923:
case 2681:
case 2558:
case 2924:
case 3767:
case 2807:
case 2694:
case 1815:
case 3597:
case 621:
case 2198:
case 2711:
case 142:
case 2693:
case 669:
case 1104:
case 356:
case 2033:
case 446:
case 603:
case 1712:
case 217:
case 3355:
case 328:
case 3835:
case 717:
case 1777:
case 2034:
case 917:
case 886:
case 426:
case 1716:
case 458:
case 2822:
case 1821:
case 122:
case 2725:
case 641:
case 302:
case 407:
case 436:
case 2999:
case 3622:
case 9:
case 3829:
case 132:
case 3562:
case 3486:
case 3007:
case 354:
case 1207:
case 444:
case 3840:
case 2215:
case 1748:
case 2117:
case 1813:
case 1105:
case 2060:
case 1538:
case 2081:
case 2389:
case 3354:
case 1759:
case 2370:
case 1171:
case 2035:
case 1008:
case 3382:
case 2640:
case 2505:
case 4076:
case 1916:
case 2093:
case 663:
case 2270:
case 3254:
case 3253:
case 2569:
case 2925:
case 1322:
case 3796:
case 818:
case 2911:
case 3453:
case 3932:
case 2029:
case 1120:
case 1977:
case 1576:
case 1426:
case 1222:
case 3022:
case 424:
case 2723:
case 884:
case 782:
case 3286:
case 672:
case 3967:
case 2176:
case 2724:
case 3566:
case 3943:
case 1471:
case 1122:
case 1469:
case 530:
case 4070:
case 1910:
case 3909:
case 838:
case 970:
case 1405:
case 3930:
case 414:
case 3965:
case 3529:
case 1320:
case 3186:
case 3461:
case 520:
case 3479:
case 488:
case 3480:
case 1901:
case 2438:
case 1220:
case 904:
case 1521:
case 3649:
case 2372:
case 2018:
case 704:
case 17:
case 1420:
case 1305:
case 2507:
case 3745:
case 2317:
case 1515:
case 2906:
case 4021:
case 204:
case 3658:
case 3763:
case 1079:
case 3535:
case 1080:
case 3560:
case 2526:
case 1371:
case 3764:
case 3581:
case 1369:
case 2189:
case 2927:
case 2804:
case 2217:
case 2476:
case 1641:
case 3790:
case 680:
case 2272:
case 2858:
case 1773:
case 1657:
case 766:
case 1271:
case 1589:
case 2642:
case 2037:
case 1774:
case 3380:
case 1126:
case 2046:
case 3990:
case 906:
case 3866:
case 3441:
case 4014:
case 1974:
case 64:
case 927:
case 2706:
case 3945:
case 1404:
case 112:
case 3963:
case 3620:
case 2727:
case 1403:
case 3004:
case 2113:
case 1817:
case 63:
case 1204:
case 764:
case 2662:
case 1203:
case 3341:
case 1701:
case 264:
case 3003:
case 2114:
case 2871:
case 3058:
case 318:
case 2869:
case 1680:
case 727:
case 1258:
case 3357:
case 947:
case 227:
case 3837:
case 3818:
case 3241:
case 3605:
case 1513:
case 3743:
case 3744:
case 1349:
case 1514:
case 3709:
case 62:
case 2398:
case 1710:
case 384:
case 706:
case 237:
case 1057:
case 3669:
case 3257:
case 990:
case 899:
case 206:
case 3533:
case 3765:
case 2042:
case 97:
case 3987:
case 344:
case 1376:
case 2521:
case 454:
case 3586:
case 3462:
case 2975:
case 4026:
case 3076:
case 1276:
case 2405:
case 3366:
case 1988:
case 2320:
case 1121:
case 1472:
case 2469:
case 2122:
case 816:
case 987:
case 2910:
case 2271:
case 1338:
case 2269:
case 2657:
case 2126:
case 3160:
case 1037:
case 1642:
case 2589:
case 3554:
case 3181:
case 2570:
case 462:
case 2205:
case 1476:
case 1217:
case 1804:
case 1115:
case 1803:
case 3318:
case 3508:
case 3072:
case 2080:
case 4022:
case 2079:
case 3337:
case 3857:
case 1927:
case 1170:
case 3038:
case 1238:
case 367:
case 27:
case 3466:
case 3193:
case 1372:
case 3698:
case 104:
case 68:
case 77:
case 2515:
case 1317:
case 2305:
case 324:
case 1507:
case 212:
case 1498:
case 2404:
case 2403:
case 712:
case 814:
case 1727:
case 2458:
case 29:
case 1706:
case 147:
case 152:
case 2973:
case 1820:
case 697:
case 3497:
case 3950:
case 2974:
case 1046:
case 580:
case 190:
case 3442:
case 456:
case 3861:
case 137:
case 2358:
case 2303:
case 651:
case 2041:
case 402:
case 2513:
case 1097:
case 3617:
case 3195:
case 2710:
case 1398:
case 2349:
case 2514:
case 2304:
case 1702:
case 2680:
case 2258:
case 336:
case 2661:
case 1871:
case 2775:
case 3555:
case 3787:
case 2204:
case 912:
case 1298:
case 1113:
case 1618:
case 2701:
case 164:
case 620:
case 1662:
case 708:
case 3731:
case 2654:
case 3670:
case 665:
case 2777:
case 3956:
case 2158:
case 3785:
case 742:
case 844:
case 65:
case 3240:
case 610:
case 2608:
case 1807:
case 3013:
case 2104:
case 1198:
case 922:
case 3395:
case 991:
case 375:
case 1681:
case 1739:
case 1923:
case 2889:
case 1660:
case 3854:
case 3853:
case 1:
case 757:
case 3333:
case 1558:
case 3295:
case 932:
case 3615:
case 3808:
case 1095:
case 3197:
case 1700:
case 1504:
case 3719:
case 2598:
case 4003:
case 3621:
case 3983:
case 732:
case 3984:
case 4049:
case 3146:
case 1999:
case 2948:
case 791:
case 2821:
case 824:
case 1414:
case 563:
case 1725:
case 222:
case 3434:
case 908:
case 3991:
case 2716:
case 3070:
case 3089:
case 2054:
case 268:
case 2053:
case 3381:
case 1634:
case 3360:
case 2326:
case 1640:
case 3752:
case 3162:
case 2008:
case 3614:
case 2572:
case 3429:
case 3791:
case 2307:
case 2517:
case 3293:
case 1081:
case 2226:
case 846:
case 1060:
case 388:
case 3579:
case 3235:
case 1389:
case 1421:
case 1215:
case 271:
case 1172:
case 2207:
case 1695:
case 2814:
case 681:
case 1117:
case 2813:
case 3394:
case 3021:
case 1723:
case 1939:
case 2407:
case 395:
case 971:
case 592:
case 1176:
case 3481:
case 826:
case 2426:
case 3460:
case 3919:
case 531:
case 1029:
case 2912:
case 3494:
case 3985:
case 503:
case 3756:
case 2968:
case 2120:
case 4005:
case 3166:
case 2322:
case 4069:
case 836:
case 3789:
case 2164:
case 3770:
case 285:
case 2612:
case 3685:
case 3573:
case 733:
case 2496:
case 2163:
case 675:
case 2668:
case 616:
case 2753:
case 2677:
case 1878:
case 189:
case 2145:
case 3052:
case 1590:
case 1291:
case 1793:
case 2351:
case 3812:
case 3083:
case 1781:
case 2885:
case 562:
case 2059:
case 3877:
case 223:
case 943:
case 1735:
case 2347:
case 1545:
case 2190:
case 3423:
case 201:
case 3424:
case 3299:
case 701:
case 1352:
case 4045:
case 1356:
case 2955:
case 3721:
case 3224:
case 1995:
case 1484:
case 411:
case 798:
case 1933:
case 43:
case 1934:
case 1625:
case 2447:
case 3056:
case 3323:
case 1256:
case 1491:
case 877:
case 554:
case 985:
case 933:
case 2492:
case 3913:
case 688:
case 778:
case 2883:
case 1929:
case 1565:
case 1187:
case 2884:
case 3102:
case 183:
case 3339:
case 2077:
case 135:
case 1734:
case 1740:
case 2436:
case 3211:
case 1543:
case 3713:
case 125:
case 3921:
case 2755:
case 1385:
case 2165:
case 3575:
case 305:
case 2986:
case 3683:
case 2267:
case 1331:
case 1851:
case 949:
case 1795:
case 3311:
case 2852:
case 261:
case 2144:
case 2648:
case 2143:
case 1699:
case 1847:
case 614:
case 3200:
case 1219:
case 1000:
case 2891:
case 761:
case 840:
case 1981:
case 3325:
case 556:
case 1935:
case 3439:
case 3915:
case 145:
case 1896:
case 2982:
case 2467:
case 4044:
case 3127:
case 939:
case 3656:
case 3411:
case 1431:
case 3106:
case 1994:
case 1993:
case 1485:
case 2016:
case 2980:
case 2979:
case 3125:
case 2961:
case 2136:
case 409:
case 1918:
case 4078:
case 194:
case 1006:
case 3206:
case 85:
case 2443:
case 3028:
case 2409:
case 1536:
case 3516:
case 3306:
case 3488:
case 2585:
case 2167:
case 3976:
case 2757:
case 2230:
case 3568:
case 2531:
case 115:
case 176:
case 2674:
case 1742:
case 3650:
case 3302:
case 1864:
case 2243:
case 3100:
case 624:
case 1797:
case 719:
case 1532:
case 472:
case 38:
case 160:
case 1119:
case 2244:
case 1966:
case 3202:
case 3873:
case 1567:
case 2365:
case 1002:
case 2330:
case 3406:
case 3874:
case 255:
case 1287:
case 2075:
case 2344:
case 2309:
case 3111:
case 634:
case 2001:
case 1890:
case 2445:
case 421:
case 2828:
case 1627:
case 2196:
case 2464:
case 2556:
case 3124:
case 2957:
case 431:
case 586:
case 2490:
case 913:
case 1997:
case 4051:
case 1450:
case 805:
case 4092:
case 2073:
case 607:
case 1184:
case 213:
case 2363:
case 713:
case 2074:
case 2345:
case 1547:
case 3199:
case 2591:
case 3772:
case 2290:
case 3801:
case 3559:
case 2761:
case 1350:
case 2779:
case 2263:
case 626:
case 2192:
case 3687:
case 658:
case 2675:
case 3738:
case 2583:
case 1191:
case 2390:
case 20:
case 1152:
case 351:
case 174:
case 3810:
case 330:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760472001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,];
var gg_b = "1760472001/";

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
