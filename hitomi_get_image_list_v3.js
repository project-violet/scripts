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
case 1197:
case 1512:
case 1810:
case 3910:
case 3489:
case 3522:
case 229:
case 2384:
case 1920:
case 1758:
case 1164:
case 1624:
case 2989:
case 2088:
case 69:
case 3996:
case 2826:
case 3354:
case 2694:
case 566:
case 2809:
case 4071:
case 317:
case 460:
case 3531:
case 512:
case 2990:
case 2667:
case 321:
case 2963:
case 1423:
case 3802:
case 167:
case 326:
case 2617:
case 2966:
case 1781:
case 2242:
case 2823:
case 3070:
case 1755:
case 2733:
case 3452:
case 945:
case 113:
case 698:
case 1770:
case 2076:
case 3148:
case 1114:
case 864:
case 418:
case 2506:
case 3701:
case 1274:
case 875:
case 3664:
case 2493:
case 4053:
case 3124:
case 1580:
case 1882:
case 1562:
case 998:
case 1270:
case 3660:
case 1196:
case 4057:
case 1864:
case 3120:
case 1584:
case 825:
case 451:
case 1303:
case 2464:
case 106:
case 1110:
case 2742:
case 2737:
case 639:
case 582:
case 1427:
case 939:
case 3392:
case 833:
case 197:
case 725:
case 1945:
case 1602:
case 183:
case 2663:
case 2123:
case 2967:
case 3749:
case 2616:
case 3659:
case 1034:
case 243:
case 2690:
case 3386:
case 910:
case 1338:
case 371:
case 2414:
case 1924:
case 550:
case 1160:
case 2356:
case 2380:
case 334:
case 3734:
case 488:
case 1306:
case 1258:
case 1193:
case 302:
case 279:
case 507:
case 3230:
case 96:
case 3610:
case 820:
case 2303:
case 1464:
case 206:
case 2110:
case 1312:
case 1353:
case 2774:
case 904:
case 589:
case 1497:
case 604:
case 2864:
case 932:
case 3322:
case 3285:
case 2270:
case 297:
case 2602:
case 2255:
case 2427:
case 3817:
case 3331:
case 720:
case 3623:
case 1737:
case 3927:
case 1827:
case 3163:
case 3609:
case 424:
case 495:
case 1690:
case 615:
case 1123:
case 3867:
case 1236:
case 1967:
case 1371:
case 3587:
case 3288:
case 3273:
case 448:
case 1208:
case 2557:
case 2258:
case 2193:
case 179:
case 1507:
case 2814:
case 1689:
case 2924:
case 1362:
case 2182:
case 3569:
case 3889:
case 1073:
case 1384:
case 2920:
case 1410:
case 2164:
case 519:
case 431:
case 2648:
case 1496:
case 753:
case 2553:
case 1141:
case 1503:
case 4006:
case 3578:
case 1459:
case 3863:
case 3583:
case 2409:
case 3277:
case 4038:
case 3592:
case 3304:
case 1736:
case 70:
case 2859:
case 2030:
case 1826:
case 3773:
case 465:
case 853:
case 1809:
case 2755:
case 1733:
case 3923:
case 940:
case 685:
case 1823:
case 3776:
case 1085:
case 1617:
case 640:
case 3586:
case 3852:
case 2001:
case 3550:
case 1966:
case 2781:
case 3866:
case 1538:
case 1913:
case 2423:
case 3194:
case 1493:
case 808:
case 870:
case 2860:
case 1529:
case 436:
case 354:
case 2307:
case 3005:
case 2893:
case 1357:
case 3641:
case 3033:
case 2770:
case 1458:
case 1525:
case 4039:
case 1016:
case 2408:
case 79:
case 2214:
case 3026:
case 3009:
case 3908:
case 223:
case 3873:
case 261:
case 3568:
case 3267:
case 1677:
case 852:
case 3936:
case 4044:
case 1142:
case 2340:
case 2649:
case 3716:
case 338:
case 4028:
case 2436:
case 33:
case 898:
case 3766:
case 3177:
case 2561:
case 3752:
case 3876:
case 3637:
case 1723:
case 675:
case 964:
case 3642:
case 212:
case 780:
case 3518:
case 2572:
case 3401:
case 529:
case 2793:
case 2264:
case 1985:
case 3885:
case 1052:
case 2598:
case 1066:
case 3851:
case 2002:
case 1241:
case 2782:
case 2297:
case 2045:
case 1651:
case 1017:
case 579:
case 2764:
case 2293:
case 2158:
case 839:
case 155:
case 1685:
case 2874:
case 633:
case 1741:
case 2797:
case 2260:
case 3027:
case 296:
case 1727:
case 1395:
case 414:
case 3213:
case 925:
case 1676:
case 1540:
case 3266:
case 1311:
case 543:
case 625:
case 2442:
case 3173:
case 2437:
case 3188:
case 868:
case 1209:
case 4:
case 1105:
case 282:
case 2949:
case 2259:
case 2048:
case 3767:
case 1977:
case 3877:
case 2181:
case 3794:
case 1673:
case 2024:
case 142:
case 3449:
case 2630:
case 3608:
case 249:
case 76:
case 1067:
case 2714:
case 3185:
case 2296:
case 3434:
case 2741:
case 732:
case 1282:
case 501:
case 3546:
case 1260:
case 2685:
case 1293:
case 1601:
case 1045:
case 2651:
case 583:
case 1442:
case 1437:
case 3368:
case 377:
case 620:
case 3064:
case 3681:
case 2223:
case 2676:
case 2540:
case 2837:
case 2727:
case 196:
case 358:
case 386:
case 2673:
case 381:
case 35:
case 1024:
case 2688:
case 1328:
case 2105:
case 392:
case 715:
case 2226:
case 3318:
case 1344:
case 1296:
case 303:
case 2067:
case 3748:
case 457:
case 3365:
case 1934:
case 478:
case 3834:
case 815:
case 400:
case 3658:
case 1210:
case 1339:
case 2808:
case 3547:
case 953:
case 3532:
case 1796:
case 1634:
case 859:
case 2090:
case 4072:
case 3720:
case 3958:
case 1174:
case 2016:
case 1408:
case 428:
case 2458:
case 230:
case 1710:
case 3224:
case 2525:
case 316:
case 1595:
case 1340:
case 3488:
case 362:
case 2677:
case 444:
case 123:
case 2709:
case 3096:
case 3521:
case 2089:
case 513:
case 2988:
case 60:
case 327:
case 2544:
case 166:
case 2481:
case 2833:
case 608:
case 522:
case 2976:
case 3093:
case 4095:
case 1433:
case 1561:
case 3981:
case 740:
case 1405:
case 908:
case 2227:
case 4011:
case 1002:
case 2951:
case 1782:
case 2539:
case 3801:
case 1598:
case 1793:
case 3451:
case 1870:
case 1572:
case 4042:
case 1668:
case 29:
case 2621:
case 629:
case 2305:
case 252:
case 3292:
case 1355:
case 735:
case 1144:
case 1679:
case 2757:
case 3625:
case 2172:
case 3443:
case 1707:
case 564:
case 1235:
case 723:
case 3301:
case 2198:
case 2212:
case 1691:
case 2647:
case 1203:
case 2256:
case 2946:
case 2280:
case 712:
case 2262:
case 185:
case 3275:
case 324:
case 1665:
case 3115:
case 3446:
case 3219:
case 3168:
case 2271:
case 812:
case 2336:
case 3940:
case 3250:
case 3286:
case 2299:
case 1840:
case 2195:
case 298:
case 1844:
case 3818:
case 3944:
case 132:
case 2581:
case 2861:
case 3029:
case 707:
case 3786:
case 896:
case 1738:
case 3551:
case 3939:
case 850:
case 1839:
case 3775:
case 2898:
case 3865:
case 2439:
case 1965:
case 365:
case 796:
case 239:
case 3585:
case 807:
case 1508:
case 3769:
case 2257:
case 2932:
case 643:
case 1915:
case 2643:
case 1735:
case 2753:
case 1374:
case 3432:
case 943:
case 1083:
case 849:
case 782:
case 2712:
case 3783:
case 336:
case 891:
case 2811:
case 1140:
case 2342:
case 2337:
case 3035:
case 749:
case 1495:
case 3287:
case 979:
case 3792:
case 4005:
case 3588:
case 1069:
case 873:
case 26:
case 3868:
case 2921:
case 3080:
case 3062:
case 2738:
case 31:
case 3700:
case 3377:
case 1799:
case 1581:
case 1444:
case 2075:
case 204:
case 1771:
case 606:
case 2844:
case 2461:
case 2533:
case 1555:
case 2019:
case 168:
case 1428:
case 1872:
case 2498:
case 4058:
case 997:
case 360:
case 417:
case 3071:
case 139:
case 1284:
case 855:
case 463:
case 2086:
case 3501:
case 2729:
case 3998:
case 1000:
case 2839:
case 3465:
case 1780:
case 2979:
case 3415:
case 2083:
case 2825:
case 110:
case 1753:
case 2092:
case 742:
case 889:
case 3479:
case 1558:
case 972:
case 4070:
case 3832:
case 983:
case 2536:
case 1022:
case 2495:
case 4055:
case 3731:
case 2140:
case 901:
case 3012:
case 789:
case 318:
case 1333:
case 2355:
case 3057:
case 2144:
case 730:
case 3231:
case 3376:
case 2381:
case 2128:
case 351:
case 19:
case 4074:
case 1212:
case 2691:
case 1632:
case 2203:
case 1253:
case 2235:
case 622:
case 3534:
case 1943:
case 476:
case 2707:
case 3385:
case 487:
case 1757:
case 1172:
case 145:
case 3132:
case 493:
case 819:
case 2358:
case 3698:
case 285:
case 471:
case 2206:
case 50:
case 1256:
case 1946:
case 2125:
case 967:
case 3672:
case 390:
case 1262:
case 1195:
case 356:
case 198:
case 2618:
case 2542:
case 2537:
case 3661:
case 1271:
case 3084:
case 1336:
case 1440:
case 402:
case 3121:
case 3388:
case 3487:
case 3100:
case 1295:
case 729:
case 1211:
case 1199:
case 935:
case 2987:
case 1323:
case 1171:
case 2683:
case 923:
case 3957:
case 3247:
case 961:
case 2807:
case 2360:
case 580:
case 1180:
case 2225:
case 3524:
case 2382:
case 1156:
case 2669:
case 3746:
case 1112:
case 170:
case 666:
case 2310:
case 2541:
case 1298:
case 1153:
case 481:
case 275:
case 3984:
case 3122:
case 1272:
case 492:
case 3662:
case 3389:
case 3656:
case 1309:
case 1600:
case 552:
case 3390:
case 403:
case 3131:
case 2650:
case 3454:
case 2228:
case 1261:
case 3671:
case 300:
case 3363:
case 2527:
case 2499:
case 3450:
case 3486:
case 1871:
case 1438:
case 3098:
case 2986:
case 2728:
case 1899:
case 3800:
case 328:
case 3502:
case 950:
case 1900:
case 3962:
case 1582:
case 1862:
case 3980:
case 3246:
case 3956:
case 3684:
case 2975:
case 1798:
case 3061:
case 4010:
case 2829:
case 2107:
case 2456:
case 1593:
case 1429:
case 2018:
case 1772:
case 696:
case 691:
case 743:
case 1435:
case 1596:
case 1021:
case 973:
case 2969:
case 2364:
case 1922:
case 3011:
case 4060:
case 3243:
case 3953:
case 411:
case 4082:
case 682:
case 673:
case 1341:
case 2725:
case 1812:
case 1510:
case 2397:
case 3095:
case 2803:
case 3912:
case 2983:
case 32:
case 1795:
case 2978:
case 949:
case 3492:
case 2687:
case 843:
case 1711:
case 3317:
case 3483:
case 2992:
case 1559:
case 1931:
case 3478:
case 2526:
case 649:
case 2509:
case 1838:
case 1471:
case 3039:
case 2900:
case 3513:
case 2604:
case 2761:
case 1986:
case 2899:
case 1240:
case 4009:
case 2871:
case 1523:
case 655:
case 2438:
case 1499:
case 3718:
case 3044:
case 2157:
case 1919:
case 2772:
case 3348:
case 1456:
case 3929:
case 797:
case 438:
case 125:
case 2798:
case 3875:
case 2880:
case 2582:
case 806:
case 2862:
case 2341:
case 1725:
case 3779:
case 1397:
case 2510:
case 942:
case 2403:
case 1412:
case 2922:
case 642:
case 2435:
case 1453:
case 2596:
case 3869:
case 3589:
case 1969:
case 3791:
case 1068:
case 1526:
case 1091:
case 3768:
case 2032:
case 3154:
case 2047:
case 337:
case 3892:
case 1992:
case 1015:
case 872:
case 2559:
case 532:
case 2931:
case 504:
case 3563:
case 2795:
case 3431:
case 1079:
case 3025:
case 1683:
case 1678:
case 3268:
case 3567:
case 2211:
case 1692:
case 3150:
case 1138:
case 930:
case 2295:
case 3594:
case 2162:
case 1360:
case 1225:
case 722:
case 1382:
case 1669:
case 3279:
case 1129:
case 314:
case 1457:
case 1106:
case 3907:
case 540:
case 3215:
case 3603:
case 3291:
case 2857:
case 446:
case 2272:
case 1396:
case 1675:
case 2564:
case 3606:
case 1135:
case 713:
case 1484:
case 270:
case 2597:
case 1310:
case 1541:
case 3183:
case 1228:
case 2904:
case 919:
case 1686:
case 2309:
case 3854:
case 2821:
case 1588:
case 1868:
case 4076:
case 892:
case 703:
case 1035:
case 2053:
case 2911:
case 1421:
case 85:
case 1783:
case 2995:
case 881:
case 218:
case 1003:
case 2415:
case 1925:
case 792:
case 3979:
case 2146:
case 3825:
case 3735:
case 2491:
case 4051:
case 609:
case 75:
case 781:
case 2722:
case 4085:
case 1891:
case 3991:
case 1719:
case 260:
case 3498:
case 647:
case 786:
case 1585:
case 758:
case 3965:
case 165:
case 3050:
case 2501:
case 1334:
case 174:
case 3086:
case 2099:
case 3472:
case 1939:
case 1038:
case 2465:
case 2056:
case 858:
case 2700:
case 2062:
case 2377:
case 1006:
case 2961:
case 3828:
case 1029:
case 1928:
case 2418:
case 4073:
case 1640:
case 1576:
case 3505:
case 2204:
case 4088:
case 1349:
case 537:
case 3019:
case 1944:
case 3238:
case 4077:
case 811:
case 1286:
case 1940:
case 3537:
case 3840:
case 2704:
case 148:
case 1628:
case 2373:
case 827:
case 1754:
case 2388:
case 1639:
case 3054:
case 2147:
case 1191:
case 1446:
case 711:
case 2698:
case 3358:
case 340:
case 3206:
case 514:
case 124:
case 290:
case 3203:
case 3691:
case 3615:
case 1301:
case 2534:
case 2385:
case 359:
case 3087:
case 1165:
case 716:
case 762:
case 1625:
case 3370:
case 2057:
case 2231:
case 2549:
case 2376:
case 505:
case 862:
case 3128:
case 816:
case 251:
case 1283:
case 1373:
case 1121:
case 3336:
case 1084:
case 2286:
case 2250:
case 2940:
case 3111:
case 188:
case 3195:
case 398:
case 83:
case 156:
case 3280:
case 3946:
case 2179:
case 1672:
case 295:
case 224:
case 2115:
case 73:
case 1698:
case 3004:
case 483:
case 472:
case 1147:
case 3308:
case 2330:
case 621:
case 3172:
case 917:
case 1385:
case 738:
case 1222:
case 1843:
case 3198:
case 869:
case 1534:
case 2301:
case 617:
case 3212:
case 3632:
case 18:
case 151:
case 578:
case 3621:
case 39:
case 3161:
case 2292:
case 3305:
case 2787:
case 1376:
case 1611:
case 557:
case 1695:
case 528:
case 2783:
case 3895:
case 934:
case 1053:
case 2035:
case 1911:
case 841:
case 634:
case 2588:
case 3921:
case 36:
case 2573:
case 1530:
case 3932:
case 993:
case 3031:
case 3425:
case 3643:
case 3753:
case 2432:
case 2447:
case 2925:
case 693:
case 741:
case 310:
case 2879:
case 976:
case 3762:
case 2939:
case 3000:
case 2551:
case 746:
case 687:
case 3898:
case 274:
case 3439:
case 339:
case 3872:
case 3646:
case 160:
case 676:
case 1972:
case 422:
case 2818:
case 368:
case 3428:
case 2254:
case 3555:
case 846:
case 2576:
case 2349:
case 1377:
case 1961:
case 2786:
case 3444:
case 2029:
case 3861:
case 1080:
case 11:
case 231:
case 903:
case 2768:
case 2590:
case 809:
case 1104:
case 3931:
case 3559:
case 4002:
case 3327:
case 12:
case 2878:
case 603:
case 2025:
case 51:
case 2431:
case 981:
case 3812:
case 3341:
case 2903:
case 1912:
case 1953:
case 1243:
case 692:
case 1469:
case 2715:
case 3403:
case 1822:
case 1520:
case 3021:
case 2869:
case 3596:
case 2791:
case 560:
case 2044:
case 686:
case 658:
case 4020:
case 2819:
case 3406:
case 461:
case 423:
case 2929:
case 2028:
case 1061:
case 958:
case 1962:
case 3880:
case 677:
case 3560:
case 1246:
case 986:
case 1980:
case 1502:
case 128:
case 435:
case 3900:
case 2938:
case 2850:
case 1098:
case 2552:
case 847:
case 1971:
case 3438:
case 1367:
case 1072:
case 2718:
case 1450:
case 551:
case 2183:
case 58:
case 178:
case 2178:
case 1363:
case 205:
case 449:
case 1454:
case 3261:
case 1316:
case 3904:
case 2192:
case 1804:
case 2517:
case 754:
case 1545:
case 3309:
case 157:
case 3326:
case 2638:
case 611:
case 1656:
case 2:
case 1680:
case 473:
case 4024:
case 854:
case 2040:
case 308:
case 1746:
case 3597:
case 370:
case 3407:
case 2279:
case 590:
case 2175:
case 214:
case 3622:
case 662:
case 3514:
case 2215:
case 2291:
case 2119:
case 1957:
case 1232:
case 3857:
case 616:
case 353:
case 1221:
case 3323:
case 2567:
case 3171:
case 2887:
case 4045:
case 3199:
case 3211:
case 1366:
case 1352:
case 3631:
case 450:
case 2186:
case 1487:
case 588:
case 1313:
case 556:
case 2594:
case 1100:
case 3954:
case 2545:
case 257:
case 1218:
case 1854:
case 4067:
case 3650:
case 2131:
case 2804:
case 2390:
case 1517:
case 3740:
case 2454:
case 4094:
case 2671:
case 2316:
case 1404:
case 826:
case 1178:
case 2363:
case 3484:
case 3619:
case 3541:
case 93:
case 3135:
case 726:
case 3675:
case 1629:
case 2122:
case 2389:
case 63:
case 1169:
case 2656:
case 1:
case 638:
case 2247:
case 1603:
case 2957:
case 2612:
case 763:
case 1907:
case 2653:
case 1635:
case 3393:
case 2548:
case 717:
case 3129:
case 524:
case 3106:
case 1279:
case 938:
case 3225:
case 2487:
case 2313:
case 863:
case 1594:
case 1302:
case 3138:
case 2100:
case 1150:
case 3692:
case 969:
case 1567:
case 548:
case 2221:
case 817:
case 22:
case 1878:
case 4052:
case 871:
case 702:
case 531:
case 1883:
case 1516:
case 3687:
case 4013:
case 2831:
case 2317:
case 2478:
case 3015:
case 1768:
case 3526:
case 893:
case 2721:
case 3509:
case 3969:
case 1589:
case 2732:
case 2747:
case 2822:
case 2520:
case 941:
case 3364:
case 574:
case 1935:
case 1607:
case 641:
case 2243:
case 2011:
case 3835:
case 1779:
case 1903:
case 1422:
case 2912:
case 3803:
case 2246:
case 3975:
case 3806:
case 1929:
case 2419:
case 1028:
case 184:
case 646:
case 3829:
case 1348:
case 3462:
case 946:
case 776:
case 1765:
case 3919:
case 2475:
case 887:
case 3744:
case 2486:
case 4090:
case 3065:
case 2971:
case 1850:
case 430:
case 2098:
case 1566:
case 3950:
case 4063:
case 2502:
case 2394:
case 4016:
case 1938:
case 3471:
case 1230:
case 1610:
case 3557:
case 1914:
case 3948:
case 3814:
case 1848:
case 134:
case 1375:
case 737:
case 3306:
case 3620:
case 3160:
case 2448:
case 301:
case 3924:
case 1696:
case 2609:
case 586:
case 1659:
case 2166:
case 2777:
case 1386:
case 1350:
case 2152:
case 3034:
case 1494:
case 2867:
case 209:
case 2587:
case 2273:
case 577:
case 1845:
case 3255:
case 960:
case 2554:
case 2276:
case 592:
case 3281:
case 247:
case 2445:
case 176:
case 660:
case 2927:
case 1383:
case 55:
case 3303:
case 91:
case 3110:
case 3897:
case 1693:
case 3774:
case 3335:
case 884:
case 1964:
case 3584:
case 1120:
case 2285:
case 1660:
case 3270:
case 503:
case 3196:
case 1682:
case 1369:
case 3556:
case 3882:
case 1124:
case 2751:
case 956:
case 3562:
case 1081:
case 3274:
case 1701:
case 3114:
case 2785:
case 46:
case 3307:
case 3893:
case 2641:
case 1697:
case 688:
case 8:
case 3770:
case 1055:
case 705:
case 2627:
case 1070:
case 313:
case 2923:
case 1387:
case 2167:
case 2852:
case 805:
case 3599:
case 3781:
case 2194:
case 516:
case 3423:
case 1500:
case 3902:
case 990:
case 126:
case 2813:
case 121:
case 2578:
case 163:
case 1490:
case 2583:
case 3409:
case 2277:
case 1531:
case 1058:
case 1959:
case 2890:
case 2117:
case 322:
case 2592:
case 3859:
case 1463:
case 2773:
case 527:
case 1354:
case 3030:
case 439:
case 1416:
case 1730:
case 651:
case 468:
case 2036:
case 3758:
case 3920:
case 1489:
case 3648:
case 3553:
case 3810:
case 98:
case 951:
case 2420:
case 1910:
case 1641:
case 2697:
case 1519:
case 2055:
case 2993:
case 3076:
case 3460:
case 1005:
case 3506:
case 154:
case 1575:
case 3529:
case 3493:
case 1751:
case 2802:
case 1194:
case 3913:
case 800:
case 415:
case 3538:
case 538:
case 226:
case 3966:
case 1586:
case 3617:
case 1866:
case 4078:
case 3242:
case 924:
case 3952:
case 995:
case 3705:
case 624:
case 2387:
case 3085:
case 1402:
case 857:
case 3733:
case 2466:
case 2070:
case 4092:
case 1909:
case 1788:
case 2416:
case 3809:
case 2058:
case 1304:
case 1890:
case 3990:
case 2463:
case 3916:
case 1277:
case 3127:
case 4086:
case 53:
case 2490:
case 4075:
case 2910:
case 1420:
case 2234:
case 3496:
case 329:
case 3410:
case 1569:
case 432:
case 2730:
case 2996:
case 3073:
case 1889:
case 1448:
case 3414:
case 3380:
case 3356:
case 2734:
case 234:
case 2375:
case 1424:
case 202:
case 379:
case 72:
case 1288:
case 440:
case 293:
case 3663:
case 3236:
case 2494:
case 109:
case 3616:
case 1587:
case 2749:
case 3371:
case 3967:
case 1777:
case 3690:
case 343:
case 3994:
case 1609:
case 1300:
case 485:
case 1894:
case 276:
case 2417:
case 1163:
case 2378:
case 974:
case 1116:
case 147:
case 1445:
case 3917:
case 1190:
case 1331:
case 3652:
case 674:
case 2504:
case 1817:
case 2845:
case 287:
case 4087:
case 3233:
case 1554:
case 631:
case 1189:
case 844:
case 599:
case 728:
case 2693:
case 1251:
case 1941:
case 3312:
case 3841:
case 1434:
case 2365:
case 2101:
case 2834:
case 1151:
case 1794:
case 1263:
case 818:
case 1449:
case 342:
case 3688:
case 3977:
case 3361:
case 1216:
case 547:
case 1877:
case 1636:
case 2014:
case 292:
case 1767:
case 3226:
case 2477:
case 3133:
case 2318:
case 464:
case 2368:
case 1321:
case 277:
case 2064:
case 146:
case 3223:
case 2681:
case 1252:
case 1942:
case 1605:
case 984:
case 1266:
case 3540:
case 1633:
case 2655:
case 1041:
case 2097:
case 286:
case 1213:
case 1027:
case 2546:
case 2670:
case 3685:
case 355:
case 2974:
case 71:
case 3017:
case 2391:
case 860:
case 3651:
case 3108:
case 890:
case 3951:
case 4079:
case 2801:
case 3470:
case 3066:
case 1343:
case 3985:
case 1565:
case 2674:
case 4091:
case 1885:
case 2451:
case 1401:
case 2970:
case 1518:
case 2245:
case 1933:
case 227:
case 3723:
case 1876:
case 1177:
case 3528:
case 1752:
case 2476:
case 2702:
case 3227:
case 211:
case 88:
case 851:
case 216:
case 494:
case 1763:
case 1294:
case 3142:
case 914:
case 2488:
case 262:
case 1716:
case 3677:
case 4018:
case 1790:
case 1936:
case 2521:
case 3709:
case 3973:
case 3726:
case 3089:
case 1591:
case 3808:
case 1908:
case 1009:
case 3090:
case 433:
case 2248:
case 2958:
case 2720:
case 2059:
case 78:
case 1515:
case 3016:
case 1430:
case 554:
case 169:
case 1346:
case 3063:
case 3525:
case 1579:
case 3572:
case 678:
case 600:
case 3264:
case 2565:
case 3793:
case 2885:
case 2023:
case 1801:
case 1134:
case 824:
case 3297:
case 657:
case 3782:
case 1082:
case 1476:
case 111:
case 563:
case 2766:
case 3561:
case 848:
case 1149:
case 795:
case 366:
case 127:
case 1521:
case 2873:
case 2267:
case 3759:
case 2790:
case 2936:
case 3511:
case 420:
case 162:
case 1488:
case 2716:
case 1010:
case 116:
case 3595:
case 74:
case 1224:
case 97:
case 2430:
case 3408:
case 1720:
case 2515:
case 3214:
case 2789:
case 1532:
case 1547:
case 2591:
case 2026:
case 67:
case 1830:
case 2908:
case 3930:
case 2009:
case 3339:
case 1724:
case 92:
case 349:
case 2151:
case 1658:
case 3714:
case 736:
case 103:
case 2289:
case 3170:
case 62:
case 3155:
case 3344:
case 1318:
case 382:
case 2290:
case 1014:
case 2767:
case 192:
case 2176:
case 3259:
case 470:
case 2216:
case 3181:
case 3328:
case 836:
case 2449:
case 391:
case 3024:
case 158:
case 2633:
case 765:
case 2041:
case 831:
case 1097:
case 2213:
case 644:
case 2252:
case 2937:
case 2942:
case 2266:
case 40:
case 1064:
case 246:
case 1368:
case 2321:
case 1745:
case 593:
case 2188:
case 3045:
case 1391:
case 628:
case 1130:
case 2332:
case 2347:
case 502:
case 3601:
case 3293:
case 865:
case 1974:
case 874:
case 3874:
case 1379:
case 350:
case 4043:
case 1670:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753480801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,];
var gg_b = "1753480801/";

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
