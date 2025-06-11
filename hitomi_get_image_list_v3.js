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
case 977:
case 2738:
case 3155:
case 2247:
case 3869:
case 223:
case 3701:
case 3131:
case 1263:
case 2539:
case 2133:
case 2934:
case 3004:
case 2062:
case 2703:
case 549:
case 801:
case 3700:
case 3117:
case 3751:
case 2459:
case 3369:
case 1194:
case 1911:
case 97:
case 949:
case 2158:
case 791:
case 3750:
case 2383:
case 2672:
case 3054:
case 3736:
case 3380:
case 1910:
case 1693:
case 182:
case 1354:
case 608:
case 2816:
case 1784:
case 1440:
case 2520:
case 644:
case 1611:
case 3428:
case 2815:
case 3896:
case 2357:
case 744:
case 1069:
case 2787:
case 1610:
case 2521:
case 1441:
case 1988:
case 958:
case 3318:
case 2425:
case 1545:
case 164:
case 132:
case 1637:
case 3395:
case 1854:
case 2316:
case 1452:
case 2634:
case 403:
case 2315:
case 1546:
case 2857:
case 3396:
case 2307:
case 3818:
case 2670:
case 279:
case 2298:
case 3966:
case 3752:
case 1875:
case 1254:
case 371:
case 3218:
case 3145:
case 1876:
case 2743:
case 1204:
case 449:
case 3044:
case 3063:
case 3132:
case 1375:
case 2060:
case 2215:
case 3699:
case 2449:
case 1529:
case 3741:
case 3296:
case 745:
case 4007:
case 1451:
case 2919:
case 2514:
case 2347:
case 1435:
case 4015:
case 233:
case 2668:
case 1505:
case 160:
case 3999:
case 1363:
case 1624:
case 3594:
case 1517:
case 653:
case 3281:
case 1530:
case 4057:
case 1401:
case 740:
case 218:
case 1556:
case 283:
case 3174:
case 3973:
case 1531:
case 1442:
case 2971:
case 753:
case 2078:
case 1863:
case 1082:
case 640:
case 1555:
case 2283:
case 770:
case 2015:
case 788:
case 713:
case 2122:
case 3096:
case 1131:
case 1701:
case 1881:
case 2007:
case 1869:
case 3937:
case 2686:
case 2289:
case 1155:
case 1880:
case 1130:
case 2016:
case 670:
case 688:
case 258:
case 3574:
case 1156:
case 3263:
case 483:
case 2990:
case 1735:
case 418:
case 2057:
case 3911:
case 3194:
case 1117:
case 775:
case 1380:
case 638:
case 1054:
case 2991:
case 1106:
case 4078:
case 1750:
case 2083:
case 2862:
case 3784:
case 3804:
case 1129:
case 3402:
case 3354:
case 3693:
case 479:
case 1895:
case 3080:
case 2443:
case 2749:
case 3532:
case 1318:
case 3081:
case 2613:
case 4060:
case 447:
case 2986:
case 1395:
case 3637:
case 364:
case 523:
case 3276:
case 1396:
case 341:
case 3254:
case 1673:
case 1752:
case 1966:
case 3912:
case 395:
case 3876:
case 1145:
case 583:
case 518:
case 1218:
case 171:
case 821:
case 674:
case 3375:
case 322:
case 1484:
case 1295:
case 1740:
case 2121:
case 983:
case 2262:
case 3204:
case 3376:
case 1699:
case 2487:
case 3123:
case 533:
case 3767:
case 390:
case 3435:
case 94:
case 3451:
case 2759:
case 1076:
case 3344:
case 1594:
case 3363:
case 1999:
case 3505:
case 360:
case 1075:
case 2360:
case 1269:
case 1174:
case 1973:
case 3556:
case 2533:
case 1666:
case 3401:
case 2709:
case 728:
case 2438:
case 947:
case 3612:
case 2177:
case 365:
case 579:
case 156:
case 54:
case 1665:
case 2508:
case 3863:
case 3082:
case 2403:
case 3442:
case 762:
case 2510:
case 1341:
case 3776:
case 3418:
case 496:
case 181:
case 2826:
case 573:
case 3119:
case 2457:
case 22:
case 1852:
case 2498:
case 634:
case 3328:
case 2825:
case 1454:
case 2407:
case 1841:
case 131:
case 2415:
case 1534:
case 2974:
case 2173:
case 2249:
case 2326:
case 2579:
case 3496:
case 1404:
case 1840:
case 1352:
case 3171:
case 3828:
case 2537:
case 227:
case 2325:
case 1977:
case 254:
case 3284:
case 973:
case 1782:
case 2778:
case 1802:
case 539:
case 1250:
case 2946:
case 1639:
case 368:
case 3585:
case 802:
case 3586:
case 2165:
case 1677:
case 2945:
case 2859:
case 589:
case 1572:
case 3002:
case 1921:
case 2588:
case 2932:
case 466:
case 3763:
case 3744:
case 792:
case 1028:
case 3127:
case 2483:
case 3040:
case 3481:
case 3948:
case 692:
case 2809:
case 1920:
case 3168:
case 720:
case 3469:
case 2359:
case 680:
case 2929:
case 2617:
case 1800:
case 1444:
case 1842:
case 1350:
case 529:
case 914:
case 1568:
case 250:
case 3658:
case 4026:
case 1801:
case 780:
case 1335:
case 1527:
case 778:
case 3697:
case 243:
case 735:
case 2209:
case 1769:
case 1351:
case 2655:
case 3608:
case 1850:
case 1342:
case 3592:
case 2631:
case 685:
case 473:
case 1185:
case 410:
case 2259:
case 785:
case 514:
case 929:
case 2512:
case 2630:
case 596:
case 4059:
case 2849:
case 2955:
case 907:
case 757:
case 1796:
case 2931:
case 3001:
case 1922:
case 1571:
case 2003:
case 3884:
case 3042:
case 1202:
case 3000:
case 489:
case 23:
case 566:
case 1240:
case 3482:
case 624:
case 50:
case 121:
case 2226:
case 2349:
case 1190:
case 90:
case 237:
case 1914:
case 1113:
case 3384:
case 507:
case 1519:
case 439:
case 1252:
case 2906:
case 3754:
case 1367:
case 4:
case 381:
case 3621:
case 1418:
case 3341:
case 1776:
case 2059:
case 759:
case 2364:
case 2343:
case 71:
case 289:
case 43:
case 2623:
case 1328:
case 3852:
case 3620:
case 1775:
case 864:
case 832:
case 198:
case 331:
case 617:
case 841:
case 4053:
case 2864:
case 509:
case 2843:
case 1495:
case 1284:
case 48:
case 239:
case 1828:
case 717:
case 2462:
case 3404:
case 437:
case 1585:
case 3639:
case 3236:
case 2025:
case 554:
case 527:
case 3250:
case 2112:
case 3677:
case 215:
case 3251:
case 101:
case 2026:
case 3200:
case 3028:
case 52:
case 604:
case 1480:
case 2203:
case 3572:
case 1002:
case 455:
case 704:
case 3201:
case 3920:
case 3067:
case 927:
case 1948:
case 2783:
case 2803:
case 3842:
case 537:
case 3350:
case 3444:
case 409:
case 9:
case 3336:
case 3351:
case 2049:
case 860:
case 3614:
case 1697:
case 3527:
case 3781:
case 3801:
case 2489:
case 2303:
case 3850:
case 3342:
case 4043:
case 20:
case 3300:
case 2565:
case 266:
case 1608:
case 2853:
case 3185:
case 2566:
case 3301:
case 98:
case 3922:
case 3241:
case 700:
case 950:
case 1908:
case 600:
case 1228:
case 2716:
case 2478:
case 3795:
case 1000:
case 172:
case 1884:
case 42:
case 895:
case 1134:
case 2111:
case 955:
case 1958:
case 1035:
case 2599:
case 3476:
case 822:
case 2193:
case 1051:
case 1754:
case 2798:
case 1050:
case 550:
case 605:
case 3113:
case 229:
case 3024:
case 2723:
case 2167:
case 1675:
case 157:
case 3873:
case 2871:
case 1164:
case 1963:
case 1279:
case 3399:
case 1549:
case 2429:
case 2234:
case 3587:
case 1944:
case 3682:
case 15:
case 546:
case 2370:
case 2819:
case 1293:
case 2371:
case 3538:
case 3982:
case 2827:
case 2501:
case 178:
case 2272:
case 2542:
case 2431:
case 3365:
case 2455:
case 3408:
case 2551:
case 911:
case 3497:
case 1414:
case 130:
case 2368:
case 3458:
case 1324:
case 2417:
case 1663:
case 2536:
case 3553:
case 185:
case 1559:
case 1153:
case 1954:
case 870:
case 3681:
case 2998:
case 1758:
case 2683:
case 2090:
case 3011:
case 3265:
case 2794:
case 3680:
case 4070:
case 3918:
case 1388:
case 446:
case 2916:
case 838:
case 1103:
case 1904:
case 1733:
case 3079:
case 1224:
case 2915:
case 3722:
case 1439:
case 304:
case 2907:
case 2268:
case 3037:
case 2872:
case 134:
case 359:
case 1893:
case 1604:
case 2552:
case 781:
case 3299:
case 1379:
case 1526:
case 2334:
case 31:
case 2607:
case 3149:
case 1654:
case 2502:
case 3088:
case 3564:
case 1187:
case 3543:
case 1837:
case 3273:
case 3969:
case 3448:
case 1311:
case 642:
case 2540:
case 1879:
case 2657:
case 317:
case 2184:
case 2983:
case 631:
case 2541:
case 1310:
case 1873:
case 2068:
case 4085:
case 1720:
case 3237:
case 324:
case 3748:
case 2961:
case 1024:
case 772:
case 3676:
case 4086:
case 3549:
case 3164:
case 3279:
case 451:
case 2027:
case 2140:
case 2960:
case 3293:
case 1373:
case 211:
case 35:
case 2745:
case 963:
case 1682:
case 2678:
case 3065:
case 3211:
case 1012:
case 3210:
case 3066:
case 2291:
case 4013:
case 845:
case 1366:
case 2978:
case 1982:
case 3312:
case 335:
case 1365:
case 2070:
case 1109:
case 3422:
case 3288:
case 1739:
case 4090:
case 380:
case 3073:
case 2286:
case 2689:
case 3414:
case 3975:
case 1497:
case 1866:
case 3099:
case 840:
case 3976:
case 385:
case 853:
case 1865:
case 476:
case 3644:
case 2285:
case 3324:
case 593:
case 2660:
case 2019:
case 2150:
case 3212:
case 768:
case 3954:
case 1669:
case 1010:
case 3559:
case 3388:
case 668:
case 1918:
case 1093:
case 2151:
case 1011:
case 2705:
case 551:
case 1079:
case 463:
case 3103:
case 392:
case 2730:
case 1995:
case 3477:
case 3708:
case 3888:
case 1037:
case 320:
case 3439:
case 2890:
case 3604:
case 3337:
case 3893:
case 159:
case 334:
case 861:
case 3810:
case 11:
case 808:
case 2891:
case 2813:
case 1696:
case 3526:
case 3379:
case 2390:
case 1448:
case 2528:
case 1969:
case 3393:
case 3187:
case 1564:
case 2072:
case 1088:
case 1149:
case 1980:
case 698:
case 117:
case 3879:
case 2567:
case 1600:
case 3465:
case 2805:
case 426:
case 760:
case 3897:
case 3333:
case 1601:
case 2330:
case 29:
case 2806:
case 4032:
case 328:
case 1424:
case 2274:
case 2949:
case 2855:
case 2563:
case 3808:
case 2305:
case 140:
case 665:
case 3358:
case 2181:
case 2831:
case 2856:
case 297:
case 3397:
case 3183:
case 3984:
case 1547:
case 499:
case 2830:
case 1651:
case 2180:
case 765:
case 2306:
case 1936:
case 2649:
case 3499:
case 800:
case 2576:
case 2791:
case 3710:
case 3198:
case 2713:
case 695:
case 3014:
case 3157:
case 3711:
case 2575:
case 267:
case 2790:
case 2245:
case 3684:
case 4074:
case 1058:
case 795:
case 2118:
case 3793:
case 469:
case 586:
case 690:
case 3116:
case 2829:
case 1900:
case 2195:
case 2471:
case 722:
case 986:
case 1033:
case 2196:
case 790:
case 3115:
case 3248:
case 3107:
case 2470:
case 374:
case 536:
case 4006:
case 1178:
case 599:
case 1821:
case 2832:
case 3077:
case 1507:
case 926:
case 2626:
case 859:
case 1479:
case 2229:
case 161:
case 1515:
case 3039:
case 1773:
case 4005:
case 108:
case 1652:
case 2332:
case 732:
case 764:
case 1557:
case 2846:
case 3628:
case 741:
case 4055:
case 2554:
case 1602:
case 2845:
case 2023:
case 1161:
case 716:
case 1488:
case 1941:
case 436:
case 1222:
case 1583:
case 3147:
case 388:
case 1048:
case 3967:
case 3208:
case 1839:
case 2230:
case 1160:
case 969:
case 3928:
case 1877:
case 1902:
case 3021:
case 2205:
case 3258:
case 1765:
case 486:
case 191:
case 1339:
case 2792:
case 1766:
case 2206:
case 2609:
case 1214:
case 3322:
case 1308:
case 236:
case 345:
case 1465:
case 56:
case 506:
case 4023:
case 1897:
case 1466:
case 3822:
case 1560:
case 3650:
case 3239:
case 286:
case 2772:
case 1808:
case 2653:
case 2987:
case 3651:
case 96:
case 3547:
case 353:
case 3277:
case 1397:
case 1833:
case 1014:
case 3097:
case 1198:
case 671:
case 824:
case 2154:
case 2953:
case 3951:
case 2017:
case 452:
case 1793:
case 1684:
case 3935:
case 2005:
case 99:
case 1711:
case 1157:
case 2734:
case 2056:
case 3033:
case 2104:
case 2903:
case 1779:
case 3221:
case 3942:
case 212:
case 1116:
case 59:
case 1107:
case 3220:
case 2582:
case 2938:
case 997:
case 1248:
case 1473:
case 819:
case 2031:
case 3901:
case 361:
case 3479:
case 862:
case 3507:
case 3821:
case 3178:
case 2770:
case 2823:
case 269:
case 3516:
case 3652:
case 1562:
case 1848:
case 2413:
case 2175:
case 1667:
case 3410:
case 2518:
case 3641:
case 3493:
case 2176:
case 3602:
case 2664:
case 2490:
case 3598:
case 226:
case 602:
case 1967:
case 3048:
case 2768:
case 188:
case 1020:
case 170:
case 3941:
case 3488:
case 1021:
case 3877:
case 702:
case 3160:
case 3940:
case 892:
case 2294:
case 2485:
case 3765:
case 552:
case 175:
case 2045:
case 1258:
case 1712:
case 1297:
case 3377:
case 820:
case 3952:
case 3766:
case 497:
case 3059:
case 877:
case 1632:
case 968:
case 2621:
case 651:
case 1593:
case 389:
case 472:
case 3364:
case 2302:
case 901:
case 12:
case 2620:
case 2340:
case 4035:
case 231:
case 1173:
case 2534:
case 87:
case 1249:
case 1646:
case 2939:
case 1579:
case 1407:
case 2841:
case 339:
case 1325:
case 3843:
case 242:
case 154:
case 3864:
case 1416:
case 2802:
case 1778:
case 2352:
case 568:
case 4050:
case 2236:
case 3253:
case 1166:
case 2250:
case 3112:
case 109:
case 3025:
case 1165:
case 858:
case 2677:
case 2235:
case 1945:
case 3026:
case 598:
case 1309:
case 2251:
case 1483:
case 2242:
case 1932:
case 2921:
case 2572:
case 3203:
case 1761:
case 3923:
case 1359:
case 2067:
case 1809:
case 3238:
case 2920:
case 310:
case 3747:
case 2350:
case 2842:
case 3783:
case 150:
case 307:
case 3803:
case 2084:
case 2336:
case 2463:
case 2800:
case 1617:
case 2780:
case 3694:
case 2444:
case 3188:
case 1606:
case 1087:
case 972:
case 2801:
case 1447:
case 3303:
case 763:
case 4040:
case 155:
case 3853:
case 3565:
case 4002:
case 2300:
case 4041:
case 3338:
case 1512:
case 663:
case 2851:
case 2301:
case 2835:
case 1656:
case 2185:
case 3566:
case 2241:
case 2796:
case 2571:
case 1:
case 3707:
case 3887:
case 3137:
case 1955:
case 1849:
case 1930:
case 13:
case 2240:
case 3716:
case 1003:
case 3573:
case 1956:
case 187:
case 3179:
case 2202:
case 498:
case 1905:
case 3757:
case 1629:
case 2718:
case 2476:
case 3110:
case 1053:
case 2191:
case 1225:
case 2475:
case 2519:
case 3798:
case 3632:
case 2591:
case 2418:
case 1059:
case 3510:
case 2367:
case 3457:
case 3826:
case 2119:
case 2513:
case 2328:
case 3498:
case 2648:
case 2590:
case 2775:
case 1364:
case 1343:
case 1623:
case 3825:
case 3407:
case 3646:
case 3249:
case 3415:
case 3173:
case 3974:
case 1287:
case 298:
case 2828:
case 2171:
case 1462:
case 3778:
case 3416:
case 1864:
case 2284:
case 3645:
case 1843:
case 327:
case 3537:
case 981:
case 542:
case 4084:
case 2585:
case 268:
case 3946:
case 823:
case 1253:
case 201:
case 2586:
case 3165:
case 3043:
case 2480:
case 1203:
case 2002:
case 3932:
case 3064:
case 2127:
case 2040:
case 3760:
case 110:
case 173:
case 1238:
case 3789:
case 942:
case 3359:
case 1923:
case 3761:
case 3617:
case 3929:
case 833:
case 646:
case 1783:
case 350:
case 107:
case 3605:
case 1460:
case 343:
case 3447:
case 2697:
case 1489:
case 3087:
case 521:
case 1188:
case 3606:
case 1049:
case 10:
case 166:
case 1565:
case 883:
case 355:
case 3655:
case 1303:
case 2592:
case 921:
case 3259:
case 2633:
case 4067:
case 1338:
case 2267:
case 2908:
case 3955:
case 1137:
case 1887:
case 3931:
case 3:
case 84:
case 1264:
case 2042:
case 1243:
case 2704:
case 2134:
case 2933:
case 387:
case 3956:
case 1573:
case 2228:
case 1478:
case 2000:
case 3930:
case 847:
case 3226:
case 3349:
case 2051:
case 1994:
case 1757:
case 2958:
case 3905:
case 1798:
case 2050:
case 129:
case 337:
case 2754:
case 611:
case 2036:
case 442:
case 1110:
case 3122:
case 3015:
case 1738:
case 3289:
case 216:
case 4076:
case 1108:
case 3007:
case 1577:
case 2095:
case 1539:
case 2979:
case 2574:
case 1133:
case 1062:
case 1158:
case 2993:
case 456:
case 2910:
case 1383:
case 3114:
case 3083:
case 2440:
case 3278:
case 2611:
case 2693:
case 2080:
case 3464:
case 2354:
case 1816:
case 1787:
case 752:
case 1807:
case 2441:
case 2988:
case 1972:
case 3749:
case 471:
case 2081:
case 1357:
case 889:
case 2304:
case 3362:
case 349:
case 4063:
case 1316:
case 1634:
case 3985:
case 2679:
case 839:
case 1857:
case 814:
case 14:
case 1670:
case 3725:
case 1298:
case 2912:
case 2876:
case 1671:
case 606:
case 222:
case 2375:
case 1927:
case 2728:
case 1060:
case 2204:
case 3262:
case 3878:
case 1764:
case 2123:
case 1061:
case 76:
case 706:
case 2529:
case 1449:
case 829:
case 2376:
case 3047:
case 956:
case 1207:
case 303:
case 2767:
case 1148:
case 1919:
case 1347:
case 2506:
case 3759:
case 2451:
case 3361:
case 2363:
case 2436:
case 971:
case 2624:
case 79:
case 4004:
case 3558:
case 1668:
case 3709:
case 2401:
case 571:
case 2556:
case 2612:
case 3438:
case 2530:
case 1970:
case 4054:
case 1078:
case 265:
case 3177:
case 2844:
case 1283:
case 1522:
case 2442:
case 2531:
case 3692:
case 3403:
case 323:
case 1007:
case 3108:
case 3738:
case 1261:
case 1015:
case 2131:
case 1122:
case 541:
case 3062:
case 3133:
case 3934:
case 2156:
case 3539:
case 202:
case 2130:
case 1016:
case 532:
case 1260:
case 3459:
case 2117:
case 1990:
case 3158:
case 964:
case 1057:
case 932:
case 699:
case 1114:
case 3197:
case 1098:
case 2380:
case 799:
case 465:
case 2736:
case 3753:
case 4082:
case 2106:
case 1991:
case 3816:
case 2523:
case 994:
case 1548:
case 3398:
case 1690:
case 2467:
case 3815:
case 82:
case 495:
case 3972:
case 3521:
case 2318:
case 3807:
case 769:
case 3787:
case 17:
case 3425:
case 3898:
case 422:
case 2396:
case 3857:
case 3426:
case 3315:
case 490:
case 1985:
case 3634:
case 516:
case 3307:
case 1378:
case 4080:
case 3670:
case 379:
case 34:
case 8:
case 2673:
case 2752:
case 2218:
case 887:
case 2965:
case 960:
case 4069:
case 2132:
case 2882:
case 2063:
case 3743:
case 560:
case 3216:
case 3060:
case 2295:
case 347:
case 3089:
case 3148:
case 3968:
case 1047:
case 1120:
case 965:
case 2741:
case 3215:
case 1487:
case 1361:
case 1759:
case 0:
case 3627:
case 3514:
case 590:
case 1389:
case 3919:
case 636:
case 1558:
case 995:
case 522:
case 1360:
case 4095:
case 2594:
case 2999:
case 843:
case 595:
case 1438:
case 922:
case 4018:
case 3847:
case 2280:
case 1403:
case 1692:
case 3971:
case 1508:
case 990:
case 4020:
case 3492:
case 2642:
case 2600:
case 19:
case 1806:
case 846:
case 1356:
case 783:
case 1305:
case 1468:
case 240:
case 1544:
case 1317:
case 2424:
case 1169:
case 1274:
case 3394:
case 1855:
case 1949:
case 3772:
case 2239:
case 1830:
case 1180:
case 1306:
case 3029:
case 683:
case 2635:
case 197:
case 2547:
case 974:
case 2950:
case 1713:
case 3006:
case 3154:
case 3953:
case 1246:
case 1329:
case 779:
case 4077:
case 528:
case 3017:
case 1419:
case 679:
case 4039:
case 2935:
case 1790:
case 167:
case 1471:
case 2221:
case 3056:
case 3903:
case 3734:
case 747:
case 1829:
case 3030:
case 312:
case 3055:
case 647:
case 3582:
case 2008:
case 3938:
case 16:
case 1470:
case 1196:
case 3223:
case 2479:
case 3596:
case 3771:
case 2515:
case 4014:
case 1182:
case 1832:
case 970:
case 2821:
case 2516:
case 3770:
case 152:
case 575:
case 244:
case 3595:
case 3823:
case 2437:
case 538:
case 1909:
case 208:
case 2773:
case 3074:
case 2557:
case 975:
case 3491:
case 2321:
case 2799:
case 1332:
case 938:
case 1554:
case 1959:
case 2493:
case 1845:
case 570:
case 4022:
case 2640:
case 3768:
case 2583:
case 2839:
case 326:
case 3580:
case 2161:
case 2488:
case 2941:
case 1231:
case 2877:
case 1256:
case 3943:
case 1659:
case 3964:
case 2902:
case 3032:
case 2940:
case 1374:
case 3485:
case 1792:
case 2339:
case 1205:
case 3045:
case 2765:
case 1925:
case 2766:
case 1206:
case 1609:
case 3046:
case 136:
case 2465:
case 3355:
case 1894:
case 3331:
case 4048:
case 1492:
case 1603:
case 3805:
case 3356:
case 2333:
case 2897:
case 1638:
case 3806:
case 3786:
case 3330:
case 39:
case 3949:
case 1394:
case 3274:
case 3317:
case 228:
case 3831:
case 2560:
case 3181:
case 2358:
case 3305:
case 491:
case 3427:
case 2397:
case 3856:
case 1029:
case 3180:
case 2561:
case 3830:
case 2710:
case 3329:
case 3791:
case 1154:
case 1953:
case 1006:
case 3576:
case 2014:
case 2198:
case 2684:
case 3245:
case 408:
case 3575:
case 367:
case 3419:
case 3094:
case 2793:
case 1017:
case 444:
case 3195:
case 1030:
case 3829:
case 1734:
case 1104:
case 1056:
case 2779:
case 2473:
case 2115:
case 2022:
case 1031:
case 545:
case 274:
case 3470:
case 36:
case 2737:
case 306:
case 953:
case 1055:
case 2077:
case 777:
case 3346:
case 3229:
case 3626:
case 3504:
case 4058:
case 3909:
case 591:
case 1823:
case 1770:
case 851:
case 749:
case 3332:
case 1491:
case 1413:
case 4033:
case 1490:
case 649:
case 3845:
case 3959:
case 3554:
case 1176:
case 1664:
case 658:
case 445:
case 961:
case 3472:
case 2724:
case 2967:
case 288:
case 1768:
case 2928:
case 944:
case 3230:
case 1032:
case 2021:
case 1163:
case 1943:
case 1144:
case 3256:
case 1569:
case 544:
case 2258:
case 3205:
case 508:
case 1294:
case 238:
case 3217:
case 1046:
case 3609:
case 3206:
case 453:
case 2712:
case 199:
case 2297:
case 3925:
case 3989:
case 1947:
case 224:
case 3584:
case 193:
case 2675:
case 3141:
case 687:
case 3961:
case 1870:
case 459:
case 3732:
case 2279:
case 2963:
case 2676:
case 3102:
case 1429:
case 6:
case 1128:
case 3027:
case 787:
case 68:
case 311:
case 2293:
case 3678:
case 2211:
case 637:
case 3745:
case 219:
case 3213:
case 3291:
case 3746:
case 1371:
case 2066:
case 3152:
case 2210:
case 1430:
case 4010:
case 3978:
case 900:
case 2312:
case 1500:
case 3070:
case 4093:
case 346:
case 743:
case 3774:
case 2073:
case 1868:
case 3392:
case 4011:
case 2288:
case 1431:
case 1542:
case 1647:
case 886:
case 2414:
case 2975:
case 4079:
case 3286:
case 2812:
case 1406:
case 755:
case 2324:
case 1417:
case 404:
case 2644:
case 4037:
case 1536:
case 448:
case 230:
case 3892:
case 500:
case 1013:
case 3150:
case 2954:
case 2153:
case 3136:
case 3706:
case 3886:
case 1794:
case 3717:
case 3151:
case 2388:
case 3292:
case 3135:
case 2758:
case 1683:
case 1957:
case 2103:
case 2904:
case 3756:
case 3962:
case 2733:
case 2509:
case 3142:
case 3100:
case 2477:
case 220:
case 2888:
case 1872:
case 176:
case 559:
case 917:
case 2138:
case 3731:
case 899:
case 3101:
case 2439:
case 548:
case 1552:
case 3662:
case 1085:
case 400:
case 234:
case 4024:
case 2525:
case 2810:
case 1446:
case 151:
case 2311:
case 3528:
case 1540:
case 3390:
case 1502:
case 405:
case 2837:
case 1271:
case 4012:
case 3729:
case 3391:
case 2421:
case 1432:
case 948:
case 727:
case 2879:
case 1184:
case 585:
case 3870:
case 3723:
case 462:
case 714:
case 2024:
case 796:
case 2720:
case 393:
case 3947:
case 3167:
case 696:
case 1140:
case 1027:
case 614:
case 3234:
case 867:
case 1732:
case 980:
case 2399:
case 1290:
case 3370:
case 535:
case 2682:
case 111:
case 729:
case 806:
case 3371:
case 1213:
case 924:
case 957:
case 519:
case 1978:
case 2777:
case 2433:
case 3456:
case 89:
case 3542:
case 3431:
case 2109:
case 1392:
case 2503:
case 3868:
case 1774:
case 55:
case 3455:
case 766:
case 3406:
case 492:
case 3551:
case 95:
case 3535:
case 363:
case 3327:
case 2866:
case 2497:
case 3647:
case 1892:
case 524:
case 1660:
case 666:
case 2458:
case 3368:
case 3536:
case 897:
case 2865:
case 1494:
case 1285:
case 2159:
case 3417:
case 1706:
case 1136:
case 2669:
case 2681:
case 3998:
case 3957:
case 2265:
case 3683:
case 1885:
case 480:
case 1135:
case 435:
case 2918:
case 715:
case 3372:
case 2093:
case 2680:
case 1717:
case 3794:
case 610:
case 673:
case 2995:
case 2079:
case 1756:
case 1101:
case 2722:
case 1731:
case 773:
case 710:
case 562:
case 1755:
case 376:
case 3268:
case 204:
case 2695:
case 259:
case 520:
case 3616:
case 3219:
case 3085:
case 457:
case 1890:
case 1813:
case 3615:
case 852:
case 3446:
case 2696:
case 3607:
case 592:
case 3086:
case 1891:
case 2273:
case 2543:
case 1423:
case 2564:
case 1072:
case 525:
case 1390:
case 3540:
case 1528:
case 2448:
case 3184:
case 3983:
case 3834:
case 217:
case 4066:
case 3657:
case 1567:
case 920:
case 419:
case 3541:
case 1729:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749661201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,];
var gg_b = "1749661201/";

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
