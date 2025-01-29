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
case 4048:
case 699:
case 2063:
case 3345:
case 3439:
case 2254:
case 3443:
case 2691:
case 3177:
case 3190:
case 2966:
case 3108:
case 3971:
case 3896:
case 2855:
case 1358:
case 3498:
case 3237:
case 3942:
case 2723:
case 2749:
case 2733:
case 3400:
case 3580:
case 832:
case 3802:
case 3008:
case 4079:
case 4044:
case 1786:
case 723:
case 3613:
case 3240:
case 897:
case 3392:
case 1452:
case 43:
case 3104:
case 1697:
case 1166:
case 3547:
case 3077:
case 1811:
case 634:
case 3494:
case 2707:
case 399:
case 1518:
case 717:
case 2053:
case 3203:
case 596:
case 2493:
case 1496:
case 280:
case 3356:
case 2395:
case 2140:
case 1591:
case 239:
case 668:
case 3054:
case 1829:
case 451:
case 3263:
case 1271:
case 3635:
case 3559:
case 1843:
case 28:
case 362:
case 3738:
case 1582:
case 1145:
case 3862:
case 2992:
case 1242:
case 1377:
case 3450:
case 2103:
case 1131:
case 3672:
case 2027:
case 1308:
case 3164:
case 1121:
case 1092:
case 914:
case 2037:
case 1181:
case 3411:
case 1710:
case 2277:
case 1940:
case 3516:
case 2087:
case 2570:
case 1532:
case 3724:
case 2208:
case 3852:
case 3319:
case 3058:
case 864:
case 3734:
case 1987:
case 3460:
case 2040:
case 1761:
case 1402:
case 2003:
case 1006:
case 2444:
case 368:
case 2479:
case 3064:
case 1295:
case 129:
case 2715:
case 1021:
case 3685:
case 3569:
case 2137:
case 1304:
case 3168:
case 157:
case 2906:
case 662:
case 2757:
case 3366:
case 2931:
case 929:
case 2224:
case 441:
case 3605:
case 2234:
case 537:
case 851:
case 593:
case 2593:
case 3646:
case 36:
case 282:
case 1983:
case 3777:
case 3351:
case 283:
case 2007:
case 1328:
case 1338:
case 1101:
case 2149:
case 1136:
case 1482:
case 2548:
case 1907:
case 1820:
case 2078:
case 1830:
case 3550:
case 2497:
case 1766:
case 835:
case 3704:
case 2228:
case 3560:
case 464:
case 1502:
case 3511:
case 1388:
case 2652:
case 3416:
case 1923:
case 660:
case 1324:
case 3818:
case 1974:
case 3361:
case 2936:
case 1933:
case 1475:
case 1334:
case 288:
case 3310:
case 2544:
case 2023:
case 777:
case 3469:
case 598:
case 2049:
case 66:
case 1001:
case 2074:
case 3891:
case 1010:
case 3128:
case 666:
case 3326:
case 3976:
case 3336:
case 687:
case 2910:
case 1859:
case 365:
case 3283:
case 3409:
case 2740:
case 3073:
case 3034:
case 438:
case 3764:
case 991:
case 1957:
case 974:
case 3420:
case 1562:
case 3088:
case 3882:
case 1721:
case 2057:
case 191:
case 1915:
case 1414:
case 174:
case 1816:
case 2067:
case 83:
case 1161:
case 3028:
case 3480:
case 433:
case 1967:
case 830:
case 3822:
case 720:
case 3754:
case 497:
case 889:
case 1869:
case 2157:
case 3223:
case 4070:
case 3768:
case 3589:
case 761:
case 3249:
case 3084:
case 1644:
case 3875:
case 569:
case 1679:
case 211:
case 665:
case 2727:
case 3594:
case 2212:
case 2951:
case 2737:
case 1418:
case 3386:
case 3236:
case 643:
case 3999:
case 2051:
case 3226:
case 2869:
case 911:
case 2418:
case 2792:
case 3485:
case 1115:
case 1727:
case 348:
case 2679:
case 1212:
case 1602:
case 454:
case 3378:
case 844:
case 2816:
case 1813:
case 407:
case 428:
case 2552:
case 57:
case 3307:
case 82:
case 581:
case 2957:
case 3650:
case 422:
case 789:
case 4091:
case 2151:
case 3988:
case 2414:
case 820:
case 2648:
case 291:
case 423:
case 342:
case 3973:
case 1787:
case 3333:
case 1961:
case 861:
case 3349:
case 350:
case 3435:
case 3374:
case 2010:
case 343:
case 3323:
case 3425:
case 648:
case 3286:
case 2859:
case 3546:
case 2693:
case 1910:
case 1178:
case 356:
case 508:
case 2933:
case 2974:
case 1299:
case 2475:
case 2923:
case 1926:
case 3689:
case 3565:
case 1284:
case 1107:
case 655:
case 3694:
case 1544:
case 559:
case 513:
case 2422:
case 1238:
case 2880:
case 2766:
case 512:
case 3357:
case 1228:
case 2847:
case 2388:
case 1183:
case 679:
case 575:
case 3600:
case 2338:
case 2978:
case 1133:
case 1149:
case 2328:
case 735:
case 2126:
case 379:
case 518:
case 2830:
case 1288:
case 1548:
case 3698:
case 3367:
case 3795:
case 1753:
case 2756:
case 2907:
case 1273:
case 2276:
case 2399:
case 1234:
case 1083:
case 2086:
case 656:
case 1224:
case 2809:
case 1841:
case 503:
case 1986:
case 877:
case 4014:
case 2384:
case 2491:
case 3555:
case 1835:
case 1593:
case 182:
case 229:
case 1715:
case 1137:
case 194:
case 2031:
case 171:
case 2295:
case 1444:
case 3256:
case 1479:
case 204:
case 994:
case 1921:
case 741:
case 2575:
case 1371:
case 257:
case 3964:
case 1931:
case 2903:
case 1906:
case 1757:
case 1277:
case 1290:
case 2940:
case 3958:
case 3680:
case 3776:
case 1040:
case 2761:
case 2402:
case 3647:
case 1570:
case 2532:
case 1208:
case 510:
case 2937:
case 1992:
case 214:
case 1614:
case 2390:
case 2377:
case 2242:
case 2582:
case 2927:
case 2145:
case 425:
case 2092:
case 3620:
case 3219:
case 1103:
case 2106:
case 3968:
case 2308:
case 98:
case 1805:
case 345:
case 3455:
case 180:
case 3353:
case 500:
case 3954:
case 477:
case 1981:
case 50:
case 1846:
case 2843:
case 3266:
case 0:
case 2829:
case 646:
case 64:
case 3669:
case 324:
case 2354:
case 3245:
case 358:
case 1707:
case 3879:
case 653:
case 309:
case 2056:
case 1053:
case 3095:
case 640:
case 3231:
case 2119:
case 3977:
case 3616:
case 3990:
case 1783:
case 2452:
case 3337:
case 1258:
case 619:
case 738:
case 828:
case 2368:
case 3908:
case 2166:
case 1163:
case 1632:
case 2697:
case 3292:
case 420:
case 823:
case 3195:
case 1153:
case 1682:
case 2358:
case 732:
case 3042:
case 1733:
case 3387:
case 3572:
case 817:
case 3541:
case 1817:
case 34:
case 985:
case 1254:
case 2066:
case 624:
case 3281:
case 352:
case 3659:
case 3893:
case 2963:
case 3405:
case 185:
case 461:
case 505:
case 3904:
case 2364:
case 609:
case 1270:
case 1508:
case 2947:
case 213:
case 1428:
case 1080:
case 2135:
case 1438:
case 2980:
case 1047:
case 846:
case 1382:
case 762:
case 1590:
case 3640:
case 3213:
case 1109:
case 2141:
case 998:
case 431:
case 1130:
case 2085:
case 1499:
case 547:
case 3359:
case 3018:
case 1120:
case 198:
case 2833:
case 1801:
case 1484:
case 2823:
case 1750:
case 1147:
case 193:
case 1504:
case 192:
case 2476:
case 1375:
case 1760:
case 937:
case 203:
case 3410:
case 2909:
case 2035:
case 3369:
case 2291:
case 992:
case 2668:
case 3519:
case 2930:
case 2397:
case 2765:
case 3014:
case 2807:
case 2920:
case 2072:
case 1030:
case 3627:
case 218:
case 2185:
case 3637:
case 1020:
case 3118:
case 734:
case 448:
case 3330:
case 1016:
case 2013:
case 1159:
case 270:
case 27:
case 2746:
case 3032:
case 3022:
case 1913:
case 2916:
case 2690:
case 1729:
case 622:
case 3884:
case 3531:
case 1851:
case 3506:
case 3436:
case 1069:
case 969:
case 3521:
case 3545:
case 3653:
case 328:
case 307:
case 1798:
case 3075:
case 2218:
case 3285:
case 3309:
case 2969:
case 3132:
case 322:
case 3091:
case 3235:
case 3834:
case 3581:
case 2113:
case 628:
case 3486:
case 1318:
case 3752:
case 3272:
case 1568:
case 1789:
case 3082:
case 4076:
case 84:
case 840:
case 1642:
case 1169:
case 2857:
case 853:
case 2214:
case 2911:
case 3398:
case 1458:
case 2155:
case 3667:
case 1709:
case 409:
case 661:
case 215:
case 765:
case 273:
case 3890:
case 2117:
case 2960:
case 2735:
case 3339:
case 3944:
case 1512:
case 1150:
case 2684:
case 996:
case 3714:
case 2772:
case 1730:
case 620:
case 3431:
case 3406:
case 2699:
case 1856:
case 3421:
case 1780:
case 1955:
case 32:
case 1111:
case 644:
case 2017:
case 3096:
case 205:
case 3102:
case 995:
case 1917:
case 2634:
case 1160:
case 361:
case 453:
case 766:
case 1352:
case 440:
case 2785:
case 452:
case 2950:
case 1819:
case 2165:
case 3657:
case 1050:
case 2146:
case 856:
case 21:
case 2887:
case 3350:
case 1477:
case 1129:
case 446:
case 3791:
case 1408:
case 2105:
case 1528:
case 1759:
case 677:
case 1538:
case 3858:
case 3782:
case 2994:
case 2612:
case 1198:
case 984:
case 3456:
case 1244:
case 1279:
case 529:
case 1396:
case 1806:
case 249:
case 3551:
case 3265:
case 504:
case 1100:
case 831:
case 3674:
case 1845:
case 721:
case 2379:
case 19:
case 2344:
case 2943:
case 3510:
case 3152:
case 990:
case 1716:
case 3683:
case 3466:
case 1905:
case 1524:
case 2471:
case 1404:
case 99:
case 1029:
case 3854:
case 3722:
case 3217:
case 1248:
case 514:
case 1194:
case 3311:
case 3062:
case 1769:
case 2442:
case 1588:
case 1098:
case 1189:
case 3419:
case 1302:
case 445:
case 2827:
case 2900:
case 3360:
case 3775:
case 2000:
case 3515:
case 462:
case 2248:
case 463:
case 4054:
case 1998:
case 351:
case 86:
case 3962:
case 1827:
case 1900:
case 2098:
case 2189:
case 3557:
case 1837:
case 100:
case 1929:
case 1379:
case 90:
case 1344:
case 1005:
case 1943:
case 2946:
case 290:
case 900:
case 2043:
case 58:
case 3797:
case 2039:
case 2905:
case 4068:
case 1471:
case 335:
case 2584:
case 2198:
case 1612:
case 594:
case 1994:
case 3453:
case 1393:
case 3355:
case 1495:
case 2100:
case 2845:
case 3601:
case 284:
case 2094:
case 636:
case 3952:
case 3211:
case 2143:
case 1146:
case 3567:
case 1887:
case 1348:
case 110:
case 2759:
case 2538:
case 2408:
case 4064:
case 755:
case 2528:
case 916:
case 2819:
case 1785:
case 3144:
case 178:
case 3507:
case 3298:
case 1262:
case 748:
case 3578:
case 116:
case 3048:
case 865:
case 3583:
case 3871:
case 1863:
case 2866:
case 2955:
case 3243:
case 2454:
case 3661:
case 689:
case 2676:
case 2150:
case 106:
case 1684:
case 3346:
case 3294:
case 2512:
case 3148:
case 3549:
case 2720:
case 296:
case 1699:
case 3895:
case 3533:
case 2730:
case 1772:
case 3523:
case 3403:
case 389:
case 3305:
case 115:
case 743:
case 2709:
case 1741:
case 2060:
case 1252:
case 742:
case 2458:
case 1911:
case 866:
case 1155:
case 1960:
case 1638:
case 172:
case 1117:
case 3902:
case 173:
case 1628:
case 3220:
case 181:
case 758:
case 465:
case 501:
case 3478:
case 3230:
case 3619:
case 1815:
case 2789:
case 2169:
case 2642:
case 3537:
case 1214:
case 981:
case 2794:
case 1959:
case 633:
case 3170:
case 3197:
case 3666:
case 3483:
case 1113:
case 3209:
case 3991:
case 4088:
case 2861:
case 2554:
case 3335:
case 2069:
case 4038:
case 2700:
case 332:
case 3325:
case 397:
case 2851:
case 3341:
case 638:
case 3656:
case 2695:
case 2798:
case 2412:
case 3587:
case 487:
case 2159:
case 1867:
case 1705:
case 3372:
case 1608:
case 899:
case 3247:
case 97:
case 2314:
case 753:
case 4084:
case 2729:
case 3540:
case 17:
case 2558:
case 3280:
case 2739:
case 3097:
case 1746:
case 1807:
case 176:
case 2322:
case 46:
case 918:
case 1397:
case 2332:
case 1370:
case 3415:
case 863:
case 2020:
case 1878:
case 862:
case 3744:
case 118:
case 2030:
case 1072:
case 2760:
case 292:
case 1476:
case 2473:
case 1041:
case 2009:
case 2424:
case 3563:
case 293:
case 2886:
case 2925:
case 2504:
case 1571:
case 1909:
case 2941:
case 582:
case 1035:
case 102:
case 664:
case 3681:
case 1025:
case 2180:
case 1085:
case 959:
case 588:
case 127:
case 3631:
case 1664:
case 159:
case 2391:
case 364:
case 3918:
case 3269:
case 1823:
case 2750:
case 908:
case 298:
case 927:
case 3645:
case 2801:
case 1874:
case 1595:
case 868:
case 1135:
case 975:
case 1717:
case 1232:
case 2270:
case 2080:
case 2428:
case 113:
case 912:
case 2590:
case 3216:
case 3793:
case 2047:
case 1980:
case 1755:
case 3467:
case 1658:
case 2382:
case 2351:
case 383:
case 3986:
case 3825:
case 1629:
case 2790:
case 2777:
case 1210:
case 3593:
case 1643:
case 2646:
case 1517:
case 1261:
case 3083:
case 3234:
case 3273:
case 955:
case 3841:
case 688:
case 3224:
case 2708:
case 3872:
case 492:
case 2215:
case 179:
case 541:
case 221:
case 890:
case 437:
case 3662:
case 3149:
case 3174:
case 3133:
case 979:
case 2257:
case 3183:
case 2416:
case 884:
case 3652:
case 2267:
case 2511:
case 2560:
case 498:
case 931:
case 3228:
case 2704:
case 3470:
case 3763:
case 1742:
case 3033:
case 3074:
case 3284:
case 3579:
case 3023:
case 564:
case 4080:
case 3107:
case 388:
case 3901:
case 3936:
case 156:
case 3178:
case 1565:
case 4047:
case 2818:
case 3926:
case 942:
case 2529:
case 3740:
case 538:
case 265:
case 1441:
case 2409:
case 2655:
case 1546:
case 3167:
case 2758:
case 15:
case 1349:
case 150:
case 1934:
case 3787:
case 1973:
case 2976:
case 2617:
case 2138:
case 1323:
case 2128:
case 143:
case 1988:
case 2184:
case 1650:
case 2207:
case 2598:
case 2500:
case 2882:
case 2278:
case 4059:
case 2420:
case 2088:
case 706:
case 895:
case 2764:
case 2430:
case 1870:
case 2822:
case 896:
case 2754:
case 1660:
case 2173:
case 1938:
case 469:
case 601:
case 4:
case 3067:
case 2447:
case 3813:
case 4016:
case 287:
case 1485:
case 2188:
case 3737:
case 3212:
case 148:
case 2875:
case 3727:
case 311:
case 266:
case 597:
case 778:
case 533:
case 2233:
case 948:
case 2665:
case 3157:
case 2223:
case 1226:
case 532:
case 667:
case 2896:
case 1893:
case 1535:
case 3855:
case 1659:
case 2321:
case 152:
case 77:
case 2971:
case 94:
case 2306:
case 1303:
case 385:
case 4050:
case 2429:
case 2190:
case 2177:
case 1541:
case 940:
case 2509:
case 234:
case 1281:
case 953:
case 2443:
case 3254:
case 1446:
case 770:
case 1071:
case 14:
case 1848:
case 3774:
case 495:
case 3733:
case 919:
case 1042:
case 3268:
case 3723:
case 2942:
case 119:
case 1292:
case 2237:
case 2712:
case 3153:
case 1195:
case 3622:
case 2077:
case 2547:
case 1908:
case 1171:
case 2104:
case 2240:
case 2392:
case 496:
case 3783:
case 1616:
case 1327:
case 3258:
case 2580:
case 109:
case 1221:
case 924:
case 1844:
case 3675:
case 530:
case 2489:
case 1231:
case 1095:
case 3053:
case 1585:
case 53:
case 909:
case 1142:
case 3956:
case 4011:
case 781:
case 3187:
case 4000:
case 2738:
case 3846:
case 2559:
case 263:
case 2728:
case 2263:
case 1266:
case 536:
case 713:
case 1609:
case 694:
case 2158:
case 1954:
case 1353:
case 380:
case 3395:
case 2799:
case 2164:
case 3027:
case 2672:
case 49:
case 1630:
case 1219:
case 3103:
case 759:
case 2450:
case 893:
case 490:
case 837:
case 4043:
case 892:
case 4039:
case 2068:
case 3448:
case 898:
case 2734:
case 1776:
case 4089:
case 702:
case 3597:
case 3570:
case 1647:
case 1513:
case 484:
case 1680:
case 4094:
case 2154:
case 2411:
case 3921:
case 3906:
case 2366:
case 1964:
case 2168:
case 3371:
case 946:
case 2788:
case 2569:
case 3618:
case 394:
case 3137:
case 2685:
case 2253:
case 1256:
case 639:
case 2064:
case 776:
case 526:
case 2363:
case 357:
case 968:
case 3304:
case 41:
case 3894:
case 3575:
case 304:
case 1253:
case 812:
case 410:
case 1788:
case 3889:
case 1685:
case 813:
case 3021:
case 1058:
case 1319:
case 1852:
case 2647:
case 1724:
case 3402:
case 1773:
case 1460:
case 1734:
case 3710:
case 1154:
case 2958:
case 614:
case 3940:
case 2968:
case 2630:
case 4005:
case 3106:
case 2219:
case 1799:
case 3121:
case 3145:
case 4046:
case 3927:
case 3800:
case 40:
case 1450:
case 3390:
case 1784:
case 1728:
case 3271:
case 3081:
case 604:
case 1054:
case 162:
case 1738:
case 3843:
case 3839:
case 818:
case 876:
case 2954:
case 1158:
case 2455:
case 1356:
case 3496:
case 963:
case 1641:
case 2609:
case 962:
case 1203:
case 2095:
case 87:
case 415:
case 2879:
case 3953:
case 3354:
case 258:
case 2245:
case 1381:
case 224:
case 2585:
case 472:
case 199:
case 2669:
case 2142:
case 3166:
case 4065:
case 3697:
case 3670:
case 2171:
case 3368:
case 1077:
case 406:
case 2327:
case 1580:
case 3452:
case 2337:
case 2990:
case 1613:
case 2977:
case 769:
case 3850:
case 2572:
case 1400:
case 2848:
case 2387:
case 4017:
case 2042:
case 1520:
case 1712:
case 3156:
case 405:
case 3514:
case 1942:
case 1237:
case 1971:
case 2904:
case 1108:
case 2525:
case 3364:
case 2405:
case 1331:
case 1306:
case 520:
case 934:
case 240:
case 252:
case 881:
case 2281:
case 2071:
case 1190:
case 1177:
case 1429:
case 416:
case 1594:
case 248:
case 3644:
case 1875:
case 187:
case 873:
case 4013:
case 1386:
case 528:
case 2383:
case 966:
case 1188:
case 47:
case 1665:
case 3051:
case 166:
case 1233:
case 1249:
case 1754:
case 2611:
case 674:
case 3781:
case 2307:
case 691:
case 1038:
case 1447:
case 3816:
case 1173:
case 2378:
case 391:
case 1207:
case 1184:
case 2988:
case 2650:
case 3731:
case 3957:
case 2472:
case 1278:
case 1088:
case 1199:
case 1420:
case 2546:
case 1655:
case 1024:
case 3859:
case 1539:
case 816:
case 1758:
case 481:
case 2076:
case 1283:
case 165:
case 522:
case 1326:
case 243:
case 2924:
case 2333:
case 1336:
case 523:
case 2374:
case 1301:
case 2435:
case 878:
case 1138:
case 242:
case 2912:
case 413:
case 3001:
case 3036:
case 2742:
case 1469:
case 412:
case 1818:
case 3324:
case 347:
case 2689:
case 1012:
case 3719:
case 3334:
case 3933:
case 81:
case 427:
case 790:
case 1511:
case 408:
case 1416:
case 4085:
case 2315:
case 3847:
case 3388:
case 1704:
case 849:
case 3766:
case 3880:
case 459:
case 79:
case 121:
case 3820:
case 3907:
case 3756:
case 1112:
case 1550:
case 3830:
case 80:
case 784:
case 800:
case 1257:
case 3328:
case 1814:
case 921:
case 403:
case 3136:
case 4035:
case 3101:
case 3338:
case 2555:
case 960:
case 255:
case 2629:
case 1605:
case 96:
case 4072:
case 1708:
case 2517:
case 2261:
case 3276:
case 1459:
case 160:
case 1902:
case 3735:
case 3638:
case 2300:
case 372:
case 3960:
case 1487:
case 2877:
case 616:
case 2808:
case 1440:
case 3155:
case 4056:
case 2398:
case 2421:
case 1895:
case 1533:
case 1549:
case 2501:
case 1574:
case 1289:
case 1305:
case 1403:
case 189:
case 93:
case 1523:
case 509:
case 605:
case 3772:
case 930:
case 3684:
case 2714:
case 306:
case 1651:
case 558:
case 13:
case 2979:
case 2944:
case 1294:
case 3065:
case 2343:
case 2339:
case 553:
case 891:
case 305:
case 1661:
case 1093:
case 3055:
case 2205:
case 4019:
case 874:
case 540:
case 3863:
case 1229:
case 2804:
case 1583:
case 606:
case 2246:
case 1243:
case 2394:
case 1239:
case 1610:
case 1996:
case 2993:
case 22:
case 3262:
case 1048:
case 2657:
case 672:
case 3950:
case 2718:
case 2492:
case 1437:
case 3688:
case 1507:
case 261:
case 615:
case 1179:
case 3202:
case 2858:
case 4021:
case 782:
case 429:
case 783:
case 3840:
case 1952:
case 847:
case 404:
case 2791:
case 457:
case 31:
case 3887:
case 4045:
case 935:
case 2649:
case 2162:
case 2674:
case 1601:
case 226:
case 546:
case 1626:
case 2265:
case 2864:
case 349:
case 3495:
case 1453:
case 2456:
case 2782:
case 600:
case 3612:
case 136:
case 2217:
case 2561:
case 2854:
case 3576:
case 2722:
case 3471:
case 30:
case 2466:
case 1797:
case 2732:
case 1770:
case 1365:
case 2683:
case 3929:
case 225:
case 2152:
case 936:
case 3939:
case 3005:
case 2255:
case 545:
case 3379:
case 2775:
case 610:
case 2062:
case 61:
case 2868:
case 788:
case 3141:
case 531:
case 447:
case 804:
case 3658:
case 3755:
case 1467:
case 3980:
case 1793:
case 312:
case 4001:
case 3135:
case 739:
case 3947:
case 4026:
case 3232:
case 3823:
case 1918:
case 2451:
case 359:
case 3833:
case 602:
case 3595:
case 3849:
case 2556:
case 1645:
case 2359:
case 964:
case 3275:
case 2812:
case 3085:
case 556:
case 308:
case 3664:
case 327:
case 1631:
case 3909:
case 1681:
case 2461:
case 1259:
case 814:
case 3883:
case 1692:
case 2637:
case 3542:
case 2316:
case 4086:
case 2627:
case 3072:
case 141:
case 675:
case 1779:
case 579:
case 318:
case 3282:
case 613:
case 2014:
case 376:
case 3807:
case 1457:
case 794:
case 3930:
case 2022:
case 3677:
case 1540:
case 4051:
case 785:
case 2032:
case 3746:
case 1097:
case 2838:
case 37:
case 3867:
case 370:
case 1247:
case 1372:
case 3608:
case 3705:
case 2970:
case 681:
case 1341:
case 2285:
case 3969:
case 3218:
case 228:
case 933:
case 1656:
case 2545:
case 132:
case 2521:
case 1975:
case 2436:
case 1335:
case 1449:
case 2401:
case 1503:
case 197:
case 2426:
case 1423:
case 1325:
case 2824:
case 55:
case 1991:
case 3113:
case 1483:
case 1876:
case 2581:
case 2834:
case 543:
case 474:
case 3959:
case 222:
case 542:
case 1197:
case 2132:
case 491:
case 550:
case 3214:
case 4010:
case 1407:
case 1982:
case 1478:
case 786:
case 1220:
case 2175:
case 670:
case 1619:
case 2347:
case 2888:
case 1230:
case 2407:
case 1380:
case 917:
case 3794:
case 2982:
case 885:
case 2619:
case 117:
case 1888:
case 2230:
case 1347:
case 2478:
case 1175:
case 1834:
case 238:
case 1873:
case 669:
case 922:
case 2991:
case 3318:
case 1486:
case 2483:
case 6:
case 2209:
case 4015:
case 1132:
case 4057:
case 1122:
case 1091:
case 122:
case 107:
case 1182:
case 3:
case 4067:
case 1653:
case 3695:
case 587:
case 369:
case 1309:
case 2341:
case 2503:
case 1506:
case 1531:
case 233:
case 297:
case 2423:
case 2975:
case 232:
case 3700:
case 2449:
case 1762:
case 1401:
case 954:
case 3069:
case 1436:
case 2433:
case 3739:
case 2097:
case 2280:
case 1838:
case 3729:
case 3913:
case 1022:
case 3314:
case 1330:
case 2372:
case 411:
case 1997:
case 3159:
case 2779:
case 704:
case 2692:
case 2415:
case 757:
case 2313:
case 521:
case 4083:
case 3332:
case 2457:
case 839:
case 1519:
case 482:
case 880:
case 483:
case 1014:
case 4007:
case 2681:
case 3711:
case 56:
case 1369:
case 698:
case 3941:
case 3925:
case 3504:
case 1566:
case 3009:
case 3935:
case 1702:
case 1461:
case 3760:
case 3473:
case 2259:
case 2269:
case 3750:
case 3826:
case 3985:
case 1114:
case 3391:
case 1451:
case 3130:
case 714:
case 692:
case 3120:
case 637:
case 1018:
case 3499:
case 693:
case 2621:
case 3382:
case 1796:
case 1213:
case 2216:
case 3109:
case 3590:
case 3577:
case 3080:
case 3508:
case 3297:
case 894:
case 4033:
case 871:
case 4049:
case 480:
case 3892:
case 1419:
case 3189:
case 3098:
case 1775:
case 1360:
case 439:
case 882:
case 977:
case 1311:
case 251:
case 1607:
case 3248:
case 3769:
case 3588:
case 2250:
case 48:
case 1868:
case 3524:
case 2365:
case 1732:
case 562:
case 1217:
case 3881:
case 684:
case 3534:
case 563:
case 3946:
case 3293:
case 1683:
case 125:
case 4037:
case 1152:
case 1265:
case 3094:
case 690:
case 1623:
case 384:
case 1674:
case 3845:
case 2601:
case 2636:
case 3599:
case 126:
case 3279:
case 3396:
case 1456:
case 2355:
case 3198:
case 3089:
case 1782:
case 3821:
case 926:
case 3806:
case 3831:
case 3528:
case 471:
case 1858:
case 3538:
case 1052:
case 3759:
case 3139:
case 888:
case 2567:
case 1791:
case 2952:
case 3490:
case 961:
case 2048:
case 3468:
case 4063:
case 1657:
case 2200:
case 2578:
case 3050:
case 2298:
case 2507:
case 485:
case 2144:
case 1948:
case 161:
case 3819:
case 3352:
case 92:
case 2093:
case 696:
case 1205:
case 3160:
case 120:
case 3676:
case 1246:
case 534:
case 3454:
case 3111:
case 2610:
case 3955:
case 2229:
case 1804:
case 774:
case 1406:
case 2289:
case 2305:
case 3464:
case 2044:
case 2523:
case 1526:
case 1421:
case 2549:
case 3720:
case 3856:
case 1501:
case 2533:
case 2895:
case 396:
case 3512:
case 1979:
case 23:
case 1944:
case 2148:
case 695:
case 1339:
case 2294:
case 1343:
case 1329:
case 486:
case 3362:
case 2902:
case 2487:
case 1196:
case 4053:
case 1667:
case 3458:
case 2440:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1738112402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,];
var gg_b = "1738112402/";

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
    if (rr["hasavif"] == 1) rr["haswebp"] = 1;
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
