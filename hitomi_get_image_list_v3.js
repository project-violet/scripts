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
case 2434:
case 3014:
case 1612:
case 3777:
case 20:
case 2516:
case 1787:
case 1567:
case 3666:
case 3428:
case 475:
case 1771:
case 2295:
case 1180:
case 3884:
case 2066:
case 2575:
case 963:
case 3662:
case 4064:
case 1628:
case 2309:
case 2941:
case 2662:
case 2021:
case 822:
case 3302:
case 1208:
case 813:
case 3421:
case 3325:
case 3489:
case 3689:
case 3657:
case 567:
case 2589:
case 2491:
case 466:
case 253:
case 2256:
case 3291:
case 396:
case 297:
case 2683:
case 2567:
case 2120:
case 3598:
case 929:
case 1220:
case 2363:
case 3101:
case 3578:
case 3372:
case 3558:
case 1820:
case 3810:
case 1187:
case 451:
case 58:
case 2337:
case 1282:
case 1531:
case 1834:
case 3062:
case 1222:
case 2421:
case 3803:
case 2190:
case 1539:
case 53:
case 3750:
case 405:
case 2992:
case 2752:
case 2968:
case 124:
case 807:
case 3152:
case 738:
case 2355:
case 1983:
case 1817:
case 1585:
case 2167:
case 3915:
case 3712:
case 1354:
case 287:
case 2540:
case 3207:
case 450:
case 2582:
case 1898:
case 414:
case 1386:
case 1066:
case 1978:
case 2147:
case 735:
case 3885:
case 2029:
case 3198:
case 2918:
case 2314:
case 133:
case 803:
case 1346:
case 3538:
case 3969:
case 3448:
case 2503:
case 3838:
case 4075:
case 4041:
case 3493:
case 91:
case 912:
case 2698:
case 1847:
case 3618:
case 1124:
case 3648:
case 3225:
case 3183:
case 3580:
case 4017:
case 2936:
case 4062:
case 1322:
case 305:
case 563:
case 1111:
case 2846:
case 1254:
case 349:
case 1634:
case 2062:
case 1809:
case 3201:
case 3024:
case 41:
case 3379:
case 2232:
case 2458:
case 1058:
case 1125:
case 634:
case 1336:
case 189:
case 3514:
case 2431:
case 3639:
case 3723:
case 1958:
case 3319:
case 157:
case 38:
case 2088:
case 1913:
case 3977:
case 2531:
case 1100:
case 3593:
case 2300:
case 2878:
case 2235:
case 33:
case 3995:
case 2551:
case 2793:
case 940:
case 1105:
case 2030:
case 2125:
case 1263:
case 3401:
case 2010:
case 1842:
case 3215:
case 717:
case 2437:
case 2261:
case 564:
case 1067:
case 964:
case 2995:
case 2003:
case 89:
case 1744:
case 2922:
case 1588:
case 2293:
case 3824:
case 2110:
case 1801:
case 3994:
case 2826:
case 3502:
case 620:
case 975:
case 381:
case 962:
case 951:
case 186:
case 3728:
case 3356:
case 2392:
case 1156:
case 2335:
case 232:
case 2696:
case 3290:
case 3889:
case 1246:
case 2566:
case 119:
case 174:
case 939:
case 2687:
case 1693:
case 1424:
case 2485:
case 981:
case 1083:
case 2080:
case 1044:
case 3110:
case 1157:
case 885:
case 3968:
case 3114:
case 1647:
case 1959:
case 1414:
case 729:
case 3261:
case 182:
case 1949:
case 2199:
case 3193:
case 769:
case 3298:
case 4040:
case 1828:
case 3819:
case 1089:
case 2248:
case 3335:
case 19:
case 3787:
case 2898:
case 442:
case 871:
case 682:
case 1449:
case 895:
case 3156:
case 802:
case 95:
case 2919:
case 2333:
case 830:
case 2034:
case 3909:
case 2412:
case 467:
case 485:
case 1060:
case 2059:
case 3845:
case 1769:
case 2328:
case 3361:
case 43:
case 2691:
case 842:
case 2638:
case 1301:
case 1533:
case 3982:
case 2090:
case 1689:
case 2626:
case 2316:
case 761:
case 347:
case 3446:
case 2842:
case 3798:
case 3661:
case 2184:
case 337:
case 2703:
case 1968:
case 28:
case 3830:
case 2860:
case 4057:
case 1940:
case 3877:
case 1829:
case 838:
case 2002:
case 3997:
case 2521:
case 724:
case 639:
case 4079:
case 4019:
case 3090:
case 128:
case 711:
case 1780:
case 746:
case 675:
case 3148:
case 978:
case 1275:
case 2136:
case 642:
case 619:
case 2453:
case 2122:
case 2327:
case 3559:
case 731:
case 1676:
case 3402:
case 2684:
case 2409:
case 407:
case 3583:
case 3048:
case 1164:
case 3740:
case 2271:
case 1241:
case 3784:
case 3020:
case 275:
case 458:
case 3292:
case 914:
case 1288:
case 1849:
case 3430:
case 1562:
case 2777:
case 1662:
case 2424:
case 70:
case 3637:
case 2632:
case 3424:
case 2987:
case 1811:
case 1453:
case 13:
case 87:
case 1129:
case 3042:
case 2810:
case 3142:
case 301:
case 2909:
case 995:
case 2241:
case 2103:
case 584:
case 2350:
case 3171:
case 897:
case 1973:
case 2294:
case 3913:
case 1366:
case 16:
case 728:
case 324:
case 2185:
case 377:
case 2729:
case 1667:
case 3938:
case 545:
case 2494:
case 2786:
case 1551:
case 4016:
case 958:
case 1483:
case 408:
case 706:
case 74:
case 535:
case 2093:
case 63:
case 3311:
case 1574:
case 1193:
case 1450:
case 1714:
case 3106:
case 527:
case 1563:
case 1630:
case 2838:
case 982:
case 3169:
case 1407:
case 120:
case 4007:
case 2877:
case 855:
case 1773:
case 2543:
case 1248:
case 2023:
case 1091:
case 2068:
case 411:
case 3055:
case 2465:
case 1885:
case 3023:
case 2098:
case 3985:
case 3682:
case 3273:
case 3651:
case 2399:
case 2836:
case 3399:
case 1837:
case 3615:
case 121:
case 886:
case 1584:
case 2472:
case 3459:
case 980:
case 1046:
case 350:
case 1962:
case 2225:
case 594:
case 1997:
case 3975:
case 589:
case 2131:
case 2975:
case 3979:
case 3333:
case 1799:
case 1381:
case 2078:
case 2636:
case 3643:
case 1710:
case 2254:
case 3060:
case 1823:
case 2405:
case 3898:
case 3609:
case 1980:
case 3569:
case 583:
case 558:
case 2471:
case 3770:
case 4012:
case 2843:
case 4066:
case 1126:
case 1970:
case 3560:
case 1478:
case 1279:
case 817:
case 1259:
case 3752:
case 969:
case 1615:
case 965:
case 103:
case 1590:
case 1743:
case 932:
case 1140:
case 3614:
case 3678:
case 876:
case 1511:
case 3216:
case 1979:
case 3890:
case 3012:
case 2981:
case 618:
case 2112:
case 847:
case 202:
case 4042:
case 818:
case 3307:
case 611:
case 3016:
case 3246:
case 1604:
case 2901:
case 1440:
case 2977:
case 3504:
case 1233:
case 3176:
case 2182:
case 1573:
case 1291:
case 2351:
case 2400:
case 2617:
case 1168:
case 3996:
case 156:
case 3551:
case 1118:
case 858:
case 2461:
case 3926:
case 3989:
case 3434:
case 983:
case 1810:
case 1357:
case 597:
case 3269:
case 649:
case 3706:
case 2832:
case 3589:
case 2858:
case 2268:
case 3695:
case 345:
case 2644:
case 3496:
case 3228:
case 2504:
case 2642:
case 3897:
case 3900:
case 1802:
case 1516:
case 2341:
case 1385:
case 3374:
case 2275:
case 247:
case 3179:
case 718:
case 2044:
case 2722:
case 3935:
case 819:
case 136:
case 2036:
case 566:
case 245:
case 3522:
case 1235:
case 2733:
case 3518:
case 1417:
case 1881:
case 2779:
case 1844:
case 3987:
case 716:
case 498:
case 123:
case 1931:
case 140:
case 1866:
case 2324:
case 2542:
case 2095:
case 2069:
case 319:
case 487:
case 637:
case 3952:
case 148:
case 1094:
case 3118:
case 3709:
case 3759:
case 2812:
case 3484:
case 3310:
case 821:
case 1387:
case 329:
case 2583:
case 1451:
case 2370:
case 638:
case 1549:
case 1281:
case 4028:
case 3617:
case 3129:
case 3327:
case 3395:
case 2758:
case 1504:
case 3227:
case 54:
case 1760:
case 3045:
case 1374:
case 2403:
case 664:
case 1037:
case 860:
case 1660:
case 2244:
case 3635:
case 52:
case 3217:
case 3359:
case 2048:
case 2202:
case 3984:
case 1981:
case 382:
case 3978:
case 4085:
case 2277:
case 1395:
case 3304:
case 3905:
case 1320:
case 3329:
case 1347:
case 1767:
case 1303:
case 3613:
case 3527:
case 413:
case 522:
case 3590:
case 3555:
case 437:
case 1034:
case 1327:
case 1236:
case 2570:
case 3720:
case 314:
case 786:
case 3853:
case 1503:
case 306:
case 927:
case 605:
case 4045:
case 216:
case 2868:
case 2925:
case 2930:
case 2336:
case 3047:
case 2206:
case 1891:
case 3460:
case 3554:
case 591:
case 2508:
case 1183:
case 1240:
case 435:
case 2794:
case 3115:
case 1565:
case 4080:
case 2652:
case 3626:
case 192:
case 1192:
case 1896:
case 3628:
case 772:
case 839:
case 76:
case 2608:
case 3497:
case 2358:
case 4089:
case 2546:
case 3223:
case 2233:
case 2245:
case 1136:
case 1023:
case 3294:
case 3616:
case 3345:
case 3435:
case 2776:
case 3282:
case 3761:
case 2180:
case 1652:
case 267:
case 126:
case 3686:
case 1368:
case 552:
case 763:
case 1204:
case 2976:
case 3594:
case 127:
case 1826:
case 4077:
case 870:
case 2413:
case 1230:
case 2769:
case 219:
case 2839:
case 3904:
case 2741:
case 2266:
case 3958:
case 3093:
case 2027:
case 214:
case 1401:
case 688:
case 843:
case 4008:
case 3943:
case 662:
case 1756:
case 2982:
case 1013:
case 2114:
case 568:
case 3961:
case 4094:
case 2395:
case 511:
case 1163:
case 1569:
case 3199:
case 627:
case 3865:
case 2774:
case 3955:
case 4031:
case 3659:
case 2100:
case 1614:
case 1079:
case 2463:
case 945:
case 2641:
case 1293:
case 257:
case 2740:
case 866:
case 3588:
case 1746:
case 2625:
case 2344:
case 176:
case 2475:
case 1205:
case 217:
case 919:
case 2329:
case 2063:
case 2849:
case 621:
case 3476:
case 2417:
case 239:
case 2468:
case 1942:
case 3187:
case 793:
case 2015:
case 1622:
case 1120:
case 2227:
case 797:
case 2980:
case 2007:
case 2745:
case 1827:
case 911:
case 2890:
case 1738:
case 3068:
case 2273:
case 1344:
case 2624:
case 317:
case 2770:
case 1936:
case 3629:
case 181:
case 1443:
case 3054:
case 3032:
case 3463:
case 426:
case 4074:
case 2214:
case 434:
case 923:
case 427:
case 3864:
case 3078:
case 94:
case 36:
case 178:
case 3161:
case 2236:
case 4078:
case 3331:
case 2859:
case 560:
case 955:
case 56:
case 3867:
case 3672:
case 3826:
case 935:
case 661:
case 1065:
case 2905:
case 833:
case 2910:
case 1933:
case 73:
case 1794:
case 2087:
case 1284:
case 2915:
case 1579:
case 2768:
case 3320:
case 1774:
case 1141:
case 2082:
case 2669:
case 1526:
case 3465:
case 1965:
case 1258:
case 1960:
case 631:
case 1352:
case 2592:
case 2032:
case 493:
case 2304:
case 3239:
case 2339:
case 3375:
case 3202:
case 3281:
case 1598:
case 3872:
case 4065:
case 1646:
case 1963:
case 2145:
case 1601:
case 1045:
case 3531:
case 3454:
case 1553:
case 1668:
case 1090:
case 1706:
case 195:
case 3394:
case 1945:
case 1602:
case 749:
case 3608:
case 3108:
case 1375:
case 3229:
case 118:
case 679:
case 3797:
case 2189:
case 3125:
case 3271:
case 3779:
case 2913:
case 348:
case 2960:
case 806:
case 2164:
case 1165:
case 1499:
case 944:
case 1766:
case 579:
case 2807:
case 3746:
case 780:
case 2979:
case 1096:
case 1245:
case 357:
case 470:
case 2956:
case 1819:
case 2288:
case 586:
case 1550:
case 223:
case 2755:
case 4034:
case 3691:
case 600:
case 443:
case 3669:
case 950:
case 2749:
case 1875:
case 479:
case 2081:
case 2827:
case 1788:
case 3954:
case 388:
case 2253:
case 3133:
case 3866:
case 2296:
case 2074:
case 2387:
case 392:
case 2454:
case 2161:
case 3015:
case 2390:
case 1666:
case 2759:
case 3850:
case 943:
case 2661:
case 465:
case 4011:
case 3180:
case 2422:
case 2806:
case 315:
case 2495:
case 1765:
case 829:
case 3064:
case 1719:
case 193:
case 1221:
case 2997:
case 2613:
case 1880:
case 134:
case 21:
case 2502:
case 1927:
case 1535:
case 3028:
case 2513:
case 1305:
case 3241:
case 1312:
case 606:
case 3791:
case 1518:
case 1862:
case 4082:
case 1824:
case 2532:
case 2380:
case 1367:
case 561:
case 1073:
case 1806:
case 2457:
case 468:
case 101:
case 1173:
case 1858:
case 2706:
case 1798:
case 2585:
case 26:
case 2957:
case 2449:
case 1117:
case 1198:
case 922:
case 730:
case 1648:
case 942:
case 469:
case 550:
case 683:
case 2312:
case 2944:
case 888:
case 705:
case 1755:
case 1903:
case 462:
case 261:
case 421:
case 1087:
case 2234:
case 3019:
case 1465:
case 2519:
case 441:
case 3772:
case 972:
case 2376:
case 2673:
case 1154:
case 3373:
case 494:
case 1267:
case 2809:
case 506:
case 3724:
case 3510:
case 2885:
case 3485:
case 457:
case 1122:
case 503:
case 2347:
case 2071:
case 3718:
case 1764:
case 2229:
case 210:
case 1469:
case 1273:
case 1479:
case 1923:
case 1380:
case 2928:
case 1217:
case 4088:
case 424:
case 2712:
case 3468:
case 303:
case 3738:
case 549:
case 2764:
case 3274:
case 2318:
case 3477:
case 2425:
case 501:
case 3251:
case 2647:
case 3520:
case 1043:
case 3951:
case 2640:
case 531:
case 50:
case 979:
case 3586:
case 440:
case 3451:
case 1616:
case 934:
case 2046:
case 3149:
case 3230:
case 3490:
case 204:
case 1986:
case 1967:
case 1969:
case 2246:
case 1653:
case 920:
case 3466:
case 593:
case 551:
case 3254:
case 1462:
case 97:
case 715:
case 3854:
case 2830:
case 3358:
case 795:
case 1149:
case 2686:
case 3283:
case 2386:
case 2264:
case 3364:
case 321:
case 3005:
case 582:
case 4026:
case 3841:
case 1022:
case 2282:
case 2680:
case 3256:
case 1397:
case 528:
case 30:
case 2724:
case 2597:
case 3623:
case 613:
case 2050:
case 3655:
case 525:
case 1879:
case 3190:
case 1782:
case 4032:
case 3222:
case 2674:
case 15:
case 2678:
case 3413:
case 3265:
case 3167:
case 3182:
case 3050:
case 1268:
case 805:
case 3863:
case 1001:
case 3140:
case 367:
case 3445:
case 3591:
case 760:
case 1946:
case 1378:
case 882:
case 2378:
case 1700:
case 2047:
case 1080:
case 2899:
case 3191:
case 988:
case 3147:
case 657:
case 2497:
case 680:
case 2568:
case 3322:
case 281:
case 2743:
case 2438:
case 370:
case 375:
case 2499:
case 42:
case 2139:
case 2489:
case 1654:
case 734:
case 930:
case 3429:
case 2959:
case 322:
case 1671:
case 1505:
case 1629:
case 721:
case 3545:
case 2242:
case 425:
case 3725:
case 869:
case 845:
case 2211:
case 3681:
case 3226:
case 150:
case 2746:
case 2171:
case 2224:
case 3771:
case 35:
case 1856:
case 3704:
case 1651:
case 610:
case 2252:
case 1990:
case 2571:
case 3610:
case 3991:
case 1762:
case 3967:
case 132:
case 2272:
case 2168:
case 1546:
case 1372:
case 3928:
case 3057:
case 282:
case 2699:
case 3932:
case 244:
case 3561:
case 791:
case 269:
case 3208:
case 2739:
case 18:
case 1054:
case 1571:
case 890:
case 694:
case 1758:
case 302:
case 2428:
case 2158:
case 3536:
case 295:
case 4036:
case 3008:
case 1639:
case 106:
case 599:
case 3340:
case 3857:
case 1694:
case 1568:
case 1359:
case 2609:
case 203:
case 844:
case 2789:
case 1326:
case 3371:
case 2303:
case 1735:
case 1627:
case 2788:
case 1976:
case 1715:
case 1599:
case 1681:
case 3998:
case 2634:
case 2924:
case 1593:
case 1813:
case 2620:
case 3287:
case 60:
case 2467:
case 926:
case 2496:
case 1055:
case 907:
case 1867:
case 1685:
case 2562:
case 848:
case 546:
case 1020:
case 2257:
case 2655:
case 137:
case 2932:
case 3221:
case 3354:
case 1763:
case 3232:
case 3901:
case 2143:
case 1018:
case 1870:
case 1890:
case 3000:
case 1882:
case 2111:
case 984:
case 1112:
case 4090:
case 3081:
case 1343:
case 3393:
case 2055:
case 725:
case 401:
case 2772:
case 2716:
case 1337:
case 555:
case 1260:
case 3676:
case 2614:
case 1376:
case 2483:
case 3443:
case 2821:
case 154:
case 1145:
case 3275:
case 3914:
case 2912:
case 419:
case 1463:
case 1109:
case 369:
case 1355:
case 2200:
case 3670:
case 615:
case 3071:
case 2058:
case 1370:
case 2595:
case 2065:
case 1704:
case 4047:
case 1265:
case 1884:
case 1971:
case 1317:
case 1845:
case 1313:
case 1864:
case 346:
case 1770:
case 1784:
case 227:
case 2279:
case 447:
case 949:
case 812:
case 218:
case 2630:
case 3137:
case 1649:
case 2124:
case 2766:
case 1901:
case 2230:
case 1691:
case 1939:
case 2524:
case 2493:
case 1548:
case 2517:
case 873:
case 2708:
case 1161:
case 3299:
case 1021:
case 1266:
case 1803:
case 2322:
case 1218:
case 215:
case 389:
case 3362:
case 557:
case 3365:
case 3903:
case 1838:
case 1000:
case 3668:
case 2045:
case 2998:
case 1907:
case 2738:
case 2888:
case 2895:
case 3112:
case 722:
case 1749:
case 1212:
case 1921:
case 3715:
case 513:
case 2104:
case 759:
case 356:
case 1737:
case 371:
case 3407:
case 3636:
case 854:
case 4083:
case 3102:
case 208:
case 1005:
case 2528:
case 1074:
case 2176:
case 379:
case 1031:
case 2026:
case 3731:
case 539:
case 2169:
case 2742:
case 2603:
case 517:
case 924:
case 1643:
case 221:
case 1051:
case 2537:
case 1116:
case 913:
case 2654:
case 2690:
case 1538:
case 335:
case 1121:
case 2247:
case 1426:
case 327:
case 3524:
case 1734:
case 3600:
case 820:
case 3151:
case 1351:
case 3860:
case 2439:
case 2500:
case 868:
case 3499:
case 1348:
case 276:
case 2883:
case 2879:
case 330:
case 1032:
case 1147:
case 1623:
case 3918:
case 2553:
case 2283:
case 3059:
case 2837:
case 3962:
case 172:
case 4000:
case 1064:
case 1242:
case 3946:
case 3625:
case 2985:
case 3547:
case 3096:
case 2851:
case 2086:
case 1640:
case 2488:
case 3981:
case 3562:
case 2581:
case 1672:
case 1017:
case 2373:
case 2631:
case 3508:
case 3806:
case 1732:
case 272:
case 3665:
case 145:
case 814:
case 1807:
case 1796:
case 3084:
case 115:
case 1853:
case 3350:
case 484:
case 224:
case 2834:
case 1711:
case 3757:
case 3200:
case 776:
case 3501:
case 1726:
case 453:
case 96:
case 2440:
case 2688:
case 3959:
case 1162:
case 464:
case 3376:
case 3620:
case 1513:
case 1219:
case 4014:
case 428:
case 2515:
case 2902:
case 294:
case 2490:
case 831:
case 85:
case 2106:
case 640:
case 1537:
case 359:
case 2040:
case 110:
case 1688:
case 2817:
case 3262:
case 782:
case 507:
case 3917:
case 3309:
case 2744:
case 3525:
case 2667:
case 1339:
case 3338:
case 51:
case 3808:
case 3077:
case 164:
case 3177:
case 3758:
case 3906:
case 2723:
case 384:
case 753:
case 1207:
case 2219:
case 3214:
case 1085:
case 2529:
case 1441:
case 2616:
case 519:
case 3017:
case 4073:
case 533:
case 3124:
case 2526:
case 446:
case 1429:
case 4043:
case 1093:
case 1468:
case 3722:
case 3279:
case 3546:
case 2426:
case 1053:
case 3879:
case 1190:
case 2394:
case 1722:
case 762:
case 3099:
case 2025:
case 185:
case 211:
case 2385:
case 1307:
case 3893:
case 86:
case 1730:
case 585:
case 1334:
case 2410:
case 1591:
case 4076:
case 3887:
case 2315:
case 2415:
case 787:
case 222:
case 1152:
case 3495:
case 235:
case 2623:
case 917:
case 701:
case 3641:
case 165:
case 3773:
case 149:
case 719:
case 4069:
case 4023:
case 2615:
case 412:
case 2452:
case 2028:
case 2345:
case 1027:
case 237:
case 2892:
case 93:
case 2115:
case 3305:
case 3582:
case 954:
case 293:
case 2041:
case 881:
case 1286:
case 796:
case 2781:
case 2871:
case 274:
case 3097:
case 1777:
case 889:
case 2194:
case 1253:
case 3511:
case 608:
case 264:
case 3783:
case 2367:
case 3030:
case 423:
case 3566:
case 1814:
case 1049:
case 491:
case 2728:
case 3488:
case 3121:
case 2057:
case 2622:
case 3094:
case 736:
case 770:
case 32:
case 2802:
case 1272:
case 1852:
case 3224:
case 3389:
case 1135:
case 2650:
case 1391:
case 3642:
case 1331:
case 3098:
case 2675:
case 3974:
case 3748:
case 1512:
case 3308:
case 702:
case 3567:
case 602:
case 2407:
case 2231:
case 2548:
case 3086:
case 1972:
case 3370:
case 1464:
case 2209:
case 78:
case 948:
case 3346:
case 3705:
case 266:
case 4046:
case 2212:
case 2800:
case 10:
case 2587:
case 1399:
case 2545:
case 3316:
case 1169:
case 415:
case 341:
case 4030:
case 2991:
case 1609:
case 2284:
case 3483:
case 1723:
case 1006:
case 3839:
case 339:
case 3321:
case 66:
case 1201:
case 1992:
case 3929:
case 3719:
case 1329:
case 800:
case 1930:
case 3258:
case 147:
case 3070:
case 1607:
case 1224:
case 906:
case 2263:
case 3534:
case 3233:
case 3751:
case 2099:
case 1728:
case 283:
case 2544:
case 3326:
case 3694:
case 3844:
case 251:
case 2000:
case 3852:
case 1132:
case 2815:
case 2702:
case 68:
case 1276:
case 2196:
case 1285:
case 3741:
case 3212:
case 3785:
case 697:
case 1637:
case 811:
case 537:
case 3436:
case 3347:
case 1211:
case 952:
case 496:
case 810:
case 3003:
case 3544:
case 3056:
case 1024:
case 3947:
case 2818:
case 967:
case 1016:
case 2805:
case 3160:
case 2763:
case 3154:
case 500:
case 3667:
case 3895:
case 1999:
case 2920:
case 3334:
case 2646:
case 947:
case 3526:
case 1611:
case 977:
case 1341:
case 918:
case 2916:
case 3916:
case 409:
case 779:
case 3007:
case 835:
case 3876:
case 1779:
case 1961:
case 1492:
case 2651:
case 209:
case 827:
case 2726:
case 3471:
case 3341:
case 108:
case 3467:
case 2598:
case 2481:
case 1467:
case 554:
case 515:
case 3631:
case 574:
case 973:
case 1501:
case 2240:
case 2563:
case 674:
case 1495:
case 3022:
case 2962:
case 3795:
case 2382:
case 373:
case 3821:
case 1808:
case 1966:
case 254:
case 65:
case 2862:
case 2435:
case 3034:
case 387:
case 3297:
case 2945:
case 1264:
case 225:
case 3369:
case 2618:
case 540:
case 3113:
case 2709:
case 669:
case 2423:
case 2520:
case 2803:
case 395:
case 1003:
case 1425:
case 576:
case 2451:
case 2705:
case 1519:
case 3397:
case 3417:
case 1400:
case 875:
case 3646:
case 1485:
case 902:
case 2869:
case 3312:
case 460:
case 824:
case 2668:
case 2753:
case 1170:
case 1210:
case 851:
case 1084:
case 17:
case 3744:
case 2014:
case 2665:
case 1068:
case 757:
case 418:
case 799:
case 4055:
case 1292:
case 2534:
case 2971:
case 2604:
case 3912:
case 2024:
case 2748:
case 3136:
case 402:
case 3711:
case 2671:
case 3790:
case 3234:
case 2889:
case 3289:
case 3937:
case 2360:
case 625:
case 2019:
case 1403:
case 3268:
case 2072:
case 2939:
case 1177:
case 1486:
case 2470:
case 391:
case 291:
case 3552:
case 2725:
case 604:
case 2369:
case 3039:
case 3205:
case 2967:
case 1665:
case 2226:
case 3663:
case 3807:
case 3966:
case 1128:
case 3698:
case 1377:
case 3236:
case 3999:
case 3577:
case 233:
case 3038:
case 1731:
case 2346:
case 3132:
case 840:
case 61:
case 3411:
case 1203:
case 3473:
case 2287:
case 2554:
case 1057:
case 3708:
case 3505:
case 2659:
case 1920:
case 1069:
case 3521:
case 1830:
case 116:
case 404:
case 541:
case 526:
case 2935:
case 2872:
case 2152:
case 3131:
case 2629:
case 2073:
case 3579:
case 1476:
case 1309:
case 2173:
case 1580:
case 1720:
case 941:
case 4091:
case 1815:
case 3324:
case 4056:
case 801:
case 3410:
case 841:
case 374:
case 3949:
case 2298:
case 2371:
case 3802:
case 3930:
case 385:
case 3231:
case 1431:
case 1582:
case 2216:
case 2181:
case 3245:
case 1948:
case 2816:
case 1342:
case 3405:
case 1488:
case 1428:
case 171:
case 562:
case 3091:
case 2128:
case 2290:
case 1557:
case 2949:
case 937:
case 2133:
case 2004:
case 3774:
case 1360:
case 3063:
case 3602:
case 3612:
case 304:
case 612:
case 3650:
case 3206:
case 2765:
case 3634:
case 1575:
case 617:
case 3069:
case 3033:
case 2822:
case 3862:
case 445:
case 1621:
case 2056:
case 3516:
case 236:
case 1232:
case 3248:
case 1430:
case 644:
case 2276:
case 2775:
case 773:
case 14:
case 449:
case 3882:
case 3368:
case 2541:
case 2411:
case 1871:
case 1790:
case 410:
case 3899:
case 953:
case 1404:
case 3858:
case 130:
case 1872:
case 2306:
case 3599:
case 1506:
case 2711:
case 3700:
case 2441:
case 1848:
case 2473:
case 3685:
case 2466:
case 2906:
case 3993:
case 1893:
case 3684:
case 2929:
case 3209:
case 1750:
case 2693:
case 1412:
case 1894:
case 226:
case 1019:
case 603:
case 508:
case 3796:
case 1227:
case 3654:
case 2989:
case 3107:
case 1299:
case 3317:
case 3812:
case 2921:
case 3213:
case 3337:
case 1686:
case 570:
case 1182:
case 2178:
case 1595:
case 365:
case 2953:
case 2223:
case 3972:
case 2391:
case 3762:
case 2512:
case 1642:
case 1561:
case 2269:
case 1938:
case 2446:
case 481:
case 3437:
case 798:
case 2963:
case 2477:
case 2153:
case 2165:
case 390:
case 2022:
case 2332:
case 2797:
case 3357:
case 191:
case 3729:
case 2101:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1667293201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,];
var gg_b = "1667293201/";

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
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
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
