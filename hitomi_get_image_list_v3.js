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
case 3976:
case 587:
case 94:
case 926:
case 3991:
case 1441:
case 144:
case 1202:
case 190:
case 2630:
case 3110:
case 2568:
case 4007:
case 1839:
case 1059:
case 3355:
case 2429:
case 4081:
case 3463:
case 3611:
case 1020:
case 2131:
case 213:
case 3270:
case 1602:
case 3306:
case 3171:
case 737:
case 2245:
case 317:
case 3567:
case 1396:
case 2868:
case 3692:
case 1928:
case 137:
case 2474:
case 1036:
case 2269:
case 613:
case 3686:
case 1584:
case 1382:
case 3980:
case 3964:
case 3434:
case 200:
case 2318:
case 2842:
case 1556:
case 3654:
case 1677:
case 2087:
case 3286:
case 2028:
case 2669:
case 3317:
case 2344:
case 3794:
case 827:
case 4090:
case 1117:
case 1884:
case 2920:
case 3364:
case 412:
case 3380:
case 3551:
case 355:
case 3697:
case 728:
case 1164:
case 1003:
case 1281:
case 3757:
case 820:
case 2010:
case 2359:
case 4002:
case 484:
case 1419:
case 1575:
case 2320:
case 989:
case 3917:
case 3862:
case 2944:
case 1207:
case 1681:
case 3249:
case 2127:
case 4038:
case 2336:
case 550:
case 1910:
case 2188:
case 3312:
case 838:
case 3848:
case 1616:
case 607:
case 1176:
case 1018:
case 119:
case 3101:
case 310:
case 3376:
case 274:
case 2443:
case 2741:
case 1672:
case 339:
case 719:
case 1996:
case 1328:
case 197:
case 1971:
case 2899:
case 3600:
case 578:
case 1387:
case 3128:
case 797:
case 3906:
case 3333:
case 1216:
case 4077:
case 3665:
case 470:
case 488:
case 37:
case 3953:
case 2151:
case 215:
case 3732:
case 3263:
case 1820:
case 2984:
case 2905:
case 3470:
case 2772:
case 1559:
case 678:
case 680:
case 96:
case 2068:
case 3492:
case 2790:
case 3340:
case 946:
case 993:
case 4019:
case 3924:
case 1942:
case 124:
case 3067:
case 341:
case 3411:
case 2229:
case 2956:
case 1039:
case 2707:
case 3588:
case 1536:
case 3309:
case 2114:
case 2887:
case 3147:
case 3634:
case 3527:
case 2828:
case 3486:
case 1399:
case 1438:
case 962:
case 2501:
case 3721:
case 372:
case 3423:
case 1060:
case 1084:
case 847:
case 3827:
case 5:
case 1798:
case 834:
case 2148:
case 615:
case 2426:
case 1573:
case 1056:
case 1658:
case 3979:
case 3778:
case 909:
case 3593:
case 3051:
case 2896:
case 2871:
case 3497:
case 2738:
case 3449:
case 3168:
case 748:
case 3531:
case 353:
case 3379:
case 1075:
case 2685:
case 1803:
case 2777:
case 2167:
case 2339:
case 2810:
case 3737:
case 2498:
case 513:
case 1769:
case 2571:
case 1472:
case 2305:
case 3353:
case 2384:
case 1730:
case 1153:
case 3822:
case 1844:
case 1518:
case 3465:
case 3048:
case 3324:
case 3646:
case 687:
case 1544:
case 1818:
case 1342:
case 1124:
case 933:
case 3400:
case 2702:
case 2882:
case 104:
case 1782:
case 2530:
case 2718:
case 3570:
case 1459:
case 3267:
case 381:
case 1974:
case 3957:
case 3667:
case 2050:
case 2830:
case 1420:
case 3592:
case 3063:
case 956:
case 1304:
case 1502:
case 511:
case 4075:
case 1639:
case 567:
case 640:
case 2958:
case 694:
case 1385:
case 3870:
case 2826:
case 3488:
case 1966:
case 1436:
case 3586:
case 3755:
case 2074:
case 3427:
case 1605:
case 3143:
case 3854:
case 3034:
case 2941:
case 1877:
case 1343:
case 857:
case 3523:
case 598:
case 2428:
case 2146:
case 1838:
case 1058:
case 3706:
case 1796:
case 2526:
case 931:
case 1473:
case 1161:
case 3915:
case 1260:
case 1152:
case 1656:
case 716:
case 3361:
case 2583:
case 3554:
case 1577:
case 1701:
case 1881:
case 975:
case 234:
case 3493:
case 379:
case 3791:
case 3129:
case 464:
case 3712:
case 2410:
case 969:
case 2898:
case 3651:
case 3597:
case 3262:
case 3150:
case 3431:
case 2163:
case 3251:
case 325:
case 1581:
case 424:
case 2598:
case 1728:
case 991:
case 1807:
case 538:
case 247:
case 1787:
case 1675:
case 4039:
case 3248:
case 3357:
case 1374:
case 2759:
case 3865:
case 3174:
case 3764:
case 3614:
case 2647:
case 3800:
case 2134:
case 1890:
case 4060:
case 3565:
case 3046:
case 520:
case 634:
case 4056:
case 1985:
case 1444:
case 1904:
case 3648:
case 3500:
case 1816:
case 2850:
case 1220:
case 95:
case 332:
case 3978:
case 1541:
case 4003:
case 428:
case 2938:
case 2307:
case 8:
case 3709:
case 2149:
case 3889:
case 3070:
case 2566:
case 1983:
case 1841:
case 184:
case 2550:
case 784:
case 660:
case 547:
case 3092:
case 1969:
case 1108:
case 301:
case 3198:
case 3308:
case 1858:
case 1038:
case 3495:
case 3086:
case 2372:
case 2574:
case 1273:
case 2601:
case 638:
case 1405:
case 1945:
case 2287:
case 3627:
case 807:
case 11:
case 1460:
case 419:
case 2316:
case 3688:
case 71:
case 1636:
case 3332:
case 1236:
case 2069:
case 1456:
case 2026:
case 3313:
case 2390:
case 2902:
case 2201:
case 220:
case 2083:
case 3834:
case 2775:
case 3054:
case 4044:
case 3130:
case 2804:
case 3753:
case 2610:
case 3231:
case 323:
case 444:
case 3525:
case 698:
case 3693:
case 3049:
case 3097:
case 2705:
case 2170:
case 4059:
case 3724:
case 2696:
case 2671:
case 1742:
case 1081:
case 973:
case 2504:
case 3293:
case 2990:
case 2302:
case 708:
case 2098:
case 3825:
case 2111:
case 800:
case 667:
case 2499:
case 3414:
case 2682:
case 3222:
case 392:
case 3378:
case 611:
case 3169:
case 3126:
case 3448:
case 2739:
case 3908:
case 3337:
case 3546:
case 3065:
case 1369:
case 1644:
case 1326:
case 2282:
case 3000:
case 2981:
case 1383:
case 627:
case 175:
case 2627:
case 1762:
case 1116:
case 970:
case 23:
case 988:
case 1557:
case 169:
case 1691:
case 46:
case 1676:
case 2495:
case 1172:
case 3287:
case 3601:
case 885:
case 360:
case 729:
case 3687:
case 3100:
case 2054:
case 3390:
case 3201:
case 958:
case 3442:
case 320:
case 129:
case 446:
case 3628:
case 4017:
case 42:
case 3026:
case 855:
case 1365:
case 3069:
case 2288:
case 1037:
case 3874:
case 2735:
case 3165:
case 191:
case 1633:
case 4055:
case 3197:
case 3468:
case 3307:
case 3045:
case 1349:
case 1714:
case 3529:
case 2863:
case 1923:
case 3030:
case 3850:
case 2321:
case 565:
case 543:
case 596:
case 1748:
case 3829:
case 2467:
case 2937:
case 2589:
case 839:
case 2198:
case 3977:
case 1181:
case 1954:
case 1280:
case 1264:
case 338:
case 2092:
case 1479:
case 422:
case 1515:
case 3123:
case 409:
case 1861:
case 2378:
case 292:
case 10:
case 1323:
case 904:
case 3543:
case 70:
case 1997:
case 1409:
case 3186:
case 4012:
case 1138:
case 861:
case 3447:
case 1386:
case 3499:
case 3338:
case 3907:
case 2000:
case 821:
case 1177:
case 3981:
case 4033:
case 645:
case 2448:
case 2908:
case 899:
case 623:
case 2169:
case 1767:
case 2546:
case 2065:
case 2622:
case 1206:
case 3271:
case 2145:
case 3972:
case 3170:
case 3705:
case 3610:
case 2932:
case 2753:
case 2130:
case 29:
case 102:
case 4080:
case 3585:
case 1008:
case 2913:
case 1255:
case 2631:
case 263:
case 2825:
case 1965:
case 551:
case 1594:
case 367:
case 2724:
case 1102:
case 3696:
case 2293:
case 3302:
case 3990:
case 340:
case 2854:
case 3401:
case 3941:
case 2143:
case 1578:
case 2523:
case 44:
case 1793:
case 149:
case 2488:
case 3869:
case 1412:
case 3074:
case 1057:
case 4009:
case 1653:
case 2823:
case 1731:
case 173:
case 2915:
case 1253:
case 773:
case 236:
case 908:
case 2706:
case 2295:
case 1989:
case 1537:
case 3428:
case 466:
case 2886:
case 3146:
case 471:
case 3526:
case 1346:
case 805:
case 3569:
case 3545:
case 545:
case 3029:
case 523:
case 636:
case 1934:
case 3718:
case 3530:
case 4035:
case 1679:
case 3958:
case 2511:
case 2185:
case 3744:
case 1015:
case 3319:
case 3830:
case 4040:
case 3699:
case 3647:
case 3134:
case 2614:
case 3043:
case 3482:
case 841:
case 2780:
case 954:
case 1532:
case 1334:
case 15:
case 1609:
case 4053:
case 643:
case 625:
case 2174:
case 2865:
case 1052:
case 489:
case 3720:
case 1417:
case 18:
case 106:
case 2648:
case 665:
case 3919:
case 984:
case 4024:
case 2046:
case 87:
case 3299:
case 3358:
case 679:
case 3736:
case 2129:
case 2651:
case 2549:
case 2597:
case 1727:
case 2712:
case 1455:
case 2025:
case 3898:
case 114:
case 1240:
case 334:
case 714:
case 1521:
case 2776:
case 2897:
case 1406:
case 3598:
case 872:
case 1508:
case 1389:
case 3471:
case 1640:
case 1635:
case 4079:
case 182:
case 243:
case 2150:
case 2961:
case 3004:
case 501:
case 782:
case 2315:
case 759:
case 928:
case 350:
case 159:
case 3674:
case 1591:
case 45:
case 2721:
case 272:
case 2199:
case 2147:
case 2588:
case 2309:
case 3114:
case 2486:
case 3828:
case 2095:
case 1749:
case 1512:
case 1891:
case 2979:
case 189:
case 406:
case 4061:
case 3042:
case 3781:
case 2234:
case 789:
case 3274:
case 3528:
case 1348:
case 2827:
case 1437:
case 3148:
case 3426:
case 2888:
case 879:
case 2470:
case 3068:
case 3666:
case 1351:
case 1564:
case 3629:
case 3960:
case 2263:
case 930:
case 452:
case 1215:
case 3250:
case 919:
case 2953:
case 2713:
case 2411:
case 1765:
case 3650:
case 672:
case 3266:
case 2335:
case 3229:
case 503:
case 997:
case 585:
case 3956:
case 3375:
case 3790:
case 2492:
case 1700:
case 1175:
case 1864:
case 3384:
case 851:
case 3582:
case 795:
case 2353:
case 195:
case 1962:
case 1261:
case 2822:
case 449:
case 126:
case 3047:
case 1105:
case 1770:
case 2014:
case 3643:
case 3195:
case 4057:
case 3305:
case 1009:
case 1517:
case 2142:
case 881:
case 3882:
case 3702:
case 3243:
case 2465:
case 1661:
case 937:
case 3356:
case 171:
case 1413:
case 1156:
case 2048:
case 683:
case 771:
case 387:
case 3871:
case 3896:
case 1555:
case 2168:
case 2909:
case 1786:
case 2497:
case 742:
case 2778:
case 142:
case 1421:
case 2051:
case 205:
case 2062:
case 3339:
case 1035:
case 1506:
case 3810:
case 2737:
case 3167:
case 561:
case 3571:
case 1694:
case 357:
case 1408:
case 1367:
case 517:
case 2379:
case 109:
case 1118:
case 1553:
case 1076:
case 2686:
case 617:
case 3842:
case 2980:
case 2964:
case 3001:
case 3283:
case 300:
case 1237:
case 2595:
case 1725:
case 1457:
case 3226:
case 3269:
case 2088:
case 1678:
case 948:
case 3542:
case 1322:
case 3669:
case 1144:
case 845:
case 3087:
case 3683:
case 699:
case 2895:
case 2286:
case 221:
case 3429:
case 505:
case 3466:
case 583:
case 1988:
case 1879:
case 299:
case 2292:
case 4021:
case 1103:
case 1080:
case 1393:
case 1064:
case 2306:
case 4008:
case 3245:
case 892:
case 553:
case 2270:
case 2196:
case 3868:
case 133:
case 1579:
case 3131:
case 276:
case 3230:
case 2611:
case 475:
case 1993:
case 374:
case 3443:
case 801:
case 2391:
case 2101:
case 4078:
case 1213:
case 1632:
case 469:
case 16:
case 2265:
case 3336:
case 3547:
case 572:
case 685:
case 3188:
case 2848:
case 603:
case 1327:
case 2514:
case 964:
case 793:
case 924:
case 72:
case 429:
case 1461:
case 1613:
case 2715:
case 12:
case 3847:
case 3899:
case 2548:
case 655:
case 1173:
case 2446:
case 4037:
case 832:
case 2128:
case 2906:
case 3373:
case 2425:
case 3359:
case 3010:
case 162:
case 1159:
case 2697:
case 2364:
case 2093:
case 2380:
case 307:
case 1535:
case 1006:
case 639:
case 541:
case 722:
case 1494:
case 1540:
case 285:
case 203:
case 2851:
case 2862:
case 3325:
case 2459:
case 616:
case 1066:
case 487:
case 992:
case 3279:
case 2802:
case 3464:
case 204:
case 2782:
case 3480:
case 2041:
case 1958:
case 3679:
case 2304:
case 3119:
case 923:
case 349:
case 740:
case 99:
case 3476:
case 1883:
case 2605:
case 1703:
case 140:
case 1401:
case 1941:
case 2877:
case 194:
case 2684:
case 1074:
case 2929:
case 1869:
case 1826:
case 4047:
case 2966:
case 2436:
case 2656:
case 2260:
case 373:
case 3963:
case 1487:
case 2205:
case 1526:
case 1642:
case 2771:
case 1428:
case 963:
case 604:
case 2058:
case 2366:
case 4068:
case 2507:
case 1736:
case 512:
case 1341:
case 2701:
case 2403:
case 2943:
case 734:
case 2275:
case 2881:
case 3141:
case 288:
case 93:
case 2807:
case 1773:
case 1471:
case 3640:
case 3508:
case 1496:
case 1085:
case 3406:
case 1189:
case 2350:
case 3094:
case 2581:
case 382:
case 1163:
case 2890:
case 2418:
case 3609:
case 3532:
case 3334:
case 450:
case 1043:
case 2516:
case 1134:
case 932:
case 3925:
case 3813:
case 2572:
case 51:
case 2374:
case 480:
case 478:
case 2444:
case 864:
case 2904:
case 3832:
case 3052:
case 3417:
case 1358:
case 2872:
case 2985:
case 1247:
case 3158:
case 670:
case 901:
case 1529:
case 1566:
case 3397:
case 1307:
case 588:
case 570:
case 1197:
case 4010:
case 254:
case 2541:
case 2659:
case 1030:
case 1850:
case 2220:
case 3923:
case 2398:
case 4071:
case 830:
case 1550:
case 138:
case 3280:
case 2983:
case 3264:
case 2841:
case 738:
case 1977:
case 3954:
case 3078:
case 2636:
case 3116:
case 3233:
case 3612:
case 21:
case 868:
case 979:
case 2484:
case 2930:
case 2460:
case 3751:
case 3453:
case 2273:
case 160:
case 3970:
case 3172:
case 2405:
case 1287:
case 760:
case 684:
case 2038:
case 3676:
case 1372:
case 3691:
case 1574:
case 925:
case 720:
case 1628:
case 3992:
case 1775:
case 4:
case 391:
case 3633:
case 828:
case 3212:
case 3037:
case 2113:
case 1874:
case 3365:
case 612:
case 1705:
case 1296:
case 1271:
case 1885:
case 1972:
case 504:
case 3370:
case 727:
case 2345:
case 3206:
case 3795:
case 2330:
case 1916:
case 3894:
case 3021:
case 302:
case 1784:
case 1098:
case 3435:
case 3965:
case 111:
case 3255:
case 331:
case 3311:
case 1585:
case 1504:
case 1990:
case 1302:
case 767:
case 2519:
case 1696:
case 2475:
case 3102:
case 3900:
case 3392:
case 2203:
case 936:
case 167:
case 400:
case 2178:
case 837:
case 2016:
case 386:
case 3217:
case 3861:
case 30:
case 3032:
case 1447:
case 3386:
case 1499:
case 2072:
case 1186:
case 608:
case 3138:
case 981:
case 2768:
case 2618:
case 577:
case 3561:
case 2383:
case 356:
case 2090:
case 3354:
case 3552:
case 1843:
case 3767:
case 2998:
case 844:
case 2326:
case 1739:
case 1466:
case 2059:
case 2310:
case 1429:
case 3927:
case 2441:
case 3080:
case 2202:
case 3393:
case 2901:
case 3103:
case 1645:
case 1868:
case 2371:
case 2602:
case 2539:
case 2987:
case 1230:
case 2020:
case 3579:
case 113:
case 3415:
case 1450:
case 467:
case 333:
case 713:
case 3824:
case 100:
case 1318:
case 3076:
case 3553:
case 983:
case 2638:
case 3118:
case 2382:
case 2036:
case 2505:
case 2856:
case 1269:
case 3678:
case 1959:
case 1226:
case 3457:
case 3012:
case 808:
case 3237:
case 3033:
case 953:
case 2704:
case 1122:
case 3144:
case 2860:
case 3524:
case 1669:
case 1344:
case 1542:
case 498:
case 2238:
case 2458:
case 690:
case 1028:
case 2073:
case 2805:
case 2785:
case 3208:
case 3159:
case 362:
case 1010:
case 2774:
case 2164:
case 3840:
case 2180:
case 228:
case 2875:
case 3734:
case 697:
case 564:
case 1918:
case 972:
case 707:
case 3006:
case 3535:
case 1485:
case 1096:
case 268:
case 3922:
case 1698:
case 3221:
case 1404:
case 438:
case 3494:
case 2419:
case 3608:
case 2672:
case 1741:
case 2176:
case 2018:
case 219:
case 460:
case 3327:
case 3136:
case 2729:
case 1599:
case 1547:
case 1127:
case 3388:
case 36:
case 2112:
case 3509:
case 3632:
case 3017:
case 2750:
case 2133:
case 346:
case 3461:
case 3613:
case 2044:
case 7:
case 3232:
case 4083:
case 420:
case 2216:
case 1:
case 941:
case 1373:
case 2387:
case 3789:
case 2996:
case 3173:
case 2328:
case 812:
case 2272:
case 4026:
case 528:
case 3995:
case 1068:
case 3215:
case 434:
case 2820:
case 1984:
case 939:
case 3564:
case 1629:
case 1666:
case 3351:
case 910:
case 1956:
case 1266:
case 2859:
case 2039:
case 2135:
case 2140:
case 3175:
case 3700:
case 2402:
case 2241:
case 3079:
case 750:
case 3576:
case 955:
case 359:
case 2084:
case 3591:
case 1501:
case 3512:
case 3314:
case 2258:
case 2347:
case 2399:
case 3749:
case 2968:
case 2536:
case 1114:
case 530:
case 1801:
case 2477:
case 178:
case 664:
case 2658:
case 780:
case 903:
case 3876:
case 778:
case 3891:
case 1426:
case 2573:
case 1587:
case 1939:
case 3812:
case 3348:
case 2798:
case 3437:
case 870:
case 3806:
case 544:
case 816:
case 2407:
case 187:
case 2999:
case 1204:
case 3723:
case 342:
case 3421:
case 2503:
case 3367:
case 1596:
case 3139:
case 1167:
case 1604:
case 3035:
case 3506:
case 1339:
case 2481:
case 3040:
case 248:
case 3754:
case 1685:
case 2803:
case 4050:
case 2179:
case 3962:
case 2153:
case 999:
case 326:
case 3817:
case 3252:
case 395:
case 2518:
case 2416:
case 440:
case 1384:
case 494:
case 1582:
case 1360:
case 1305:
case 4074:
case 648:
case 1195:
case 1047:
case 2124:
case 1975:
case 2544:
case 2818:
case 976:
case 3156:
case 1356:
case 366:
case 3711:
case 804:
case 3652:
case 3347:
case 3438:
case 2749:
case 2797:
case 3258:
case 1634:
case 1721:
case 172:
case 2833:
case 2478:
case 52:
case 1888:
case 907:
case 3056:
case 3836:
case 593:
case 2812:
case 3798:
case 2967:
case 1234:
case 2024:
case 2891:
case 1979:
case 3658:
case 2533:
case 1732:
case 1263:
case 479:
case 2215:
case 17:
case 235:
case 2351:
case 562:
case 2564:
case 2362:
case 2580:
case 465:
case 1289:
case 2995:
case 4025:
case 364:
case 88:
case 1470:
case 689:
case 2175:
case 2700:
case 3402:
case 3241:
case 1492:
case 522:
case 85:
case 3039:
case 1663:
case 3135:
case 141:
case 1411:
case 1067:
case 2615:
case 2395:
case 3472:
case 2252:
case 3844:
case 3518:
case 2432:
case 3730:
case 2261:
case 1822:
case 2817:
case 226:
case 1048:
case 436:
case 1400:
case 3544:
case 3490:
case 1324:
case 1646:
case 2517:
case 1522:
case 2723:
case 242:
case 183:
case 105:
case 1062:
case 3503:
case 900:
case 2294:
case 666:
case 1778:
case 3219:
case 2806:
case 1449:
case 481:
case 3407:
case 3947:
case 3999:
case 2914:
case 2754:
case 753:
case 3783:
case 2040:
case 3179:
case 1531:
case 4063:
case 153:
case 3726:
case 849:
case 3769:
case 2948:
case 2035:
case 2506:
case 4089:
case 1737:
case 451:
case 3036:
case 3505:
case 54:
case 2678:
case 1623:
case 1595:
case 2725:
case 1027:
case 1964:
case 209:
case 2091:
case 3382:
case 831:
case 2118:
case 2553:
case 3238:
case 4065:
case 3785:
case 802:
case 3884:
case 2853:
case 3704:
case 4000:
case 1794:
case 566:
case 2278:
case 2524:
case 2103:
case 3441:
case 2080:
case 3743:
case 3901:
case 2879:
case 199:
case 1976:
case 3839:
case 1355:
case 1867:
case 1912:
case 3020:
case 2415:
case 1933:
case 1611:
case 233:
case 776:
case 761:
case 337:
case 717:
case 3928:
case 3371:
case 3396:
case 3539:
case 80:
case 1171:
case 609:
case 1270:
case 3602:
case 1196:
case 3766:
case 622:
case 2327:
case 2136:
case 1514:
case 2632:
case 1955:
case 3112:
case 818:
case 1265:
case 4086:
case 2509:
case 110:
case 3018:
case 4023:
case 3191:
case 330:
case 915:
case 3290:
case 3387:
case 1446:
case 1906:
case 2809:
case 3328:
case 1187:
case 3996:
case 2173:
case 2763:
case 2461:
case 2613:
case 2232:
case 3133:
case 1715:
case 1333:
case 3982:
case 891:
case 328:
case 3875:
case 3164:
case 155:
case 1380:
case 1562:
case 2208:
case 62:
case 693:
case 4070:
case 1757:
case 262:
case 535:
case 1851:
case 103:
case 2120:
case 4092:
case 2221:
case 1862:
case 703:
case 2608:
case 66:
case 980:
case 2494:
case 978:
case 1249:
case 2006:
case 2535:
case 368:
case 3681:
case 2172:
case 3405:
case 3945:
case 822:
case 3273:
case 2557:
case 269:
case 2691:
case 1332:
case 2116:
case 439:
case 1534:
case 410:
case 1688:
case 3636:
case 3132:
case 275:
case 1627:
case 3484:
case 934:
case 3460:
case 2762:
case 1735:
case 291:
case 3558:
case 2212:
case 3456:
case 947:
case 1313:
case 229:
case 3077:
case 1834:
case 1054:
case 1740:
case 3659:
case 132:
case 1321:
case 3220:
case 2923:
case 732:
case 82:
case 2397:
case 552:
case 2349:
case 893:
case 1070:
case 2714:
case 1889:
case 2986:
case 1709:
case 1563:
case 403:
case 485:
case 1092:
case 2515:
case 218:
case 2181:
case 2954:
case 2280:
case 3002:
case 2264:
case 1308:
case 1467:
case 1589:
case 101:
case 1198:
case 582:
case 3926:
case 701:
case 2748:
case 3439:
case 3398:
case 1414:
case 3072:
case 2386:
case 4088:
case 2949:
case 3768:
case 4027:
case 2138:
case 3016:
case 2323:
case 631:
case 2852:
case 286:
case 1222:
case 192:
case 20:
case 3326:
case 1622:
case 1126:
case 1908:
case 2354:
case 256:
case 2177:
case 723:
case 3819:
case 79:
case 2655:
case 123:
case 145:
case 1753:
case 1130:
case 1451:
case 19:
case 202:
case 3603:
case 1145:
case 3007:
case 1049:
case 1097:
case 2206:
case 2370:
case 461:
case 3203:
case 3742:
case 2594:
case 3081:
case 3519:
case 2102:
case 1631:
case 163:
case 2965:
case 2008:
case 809:
case 2311:
case 1755:
case 3684:
case 1427:
case 2837:
case 3538:
case 586:
case 3929:
case 4014:
case 3256:
case 927:
case 1523:
case 1695:
case 3343:
case 249:
case 2793:
case 3877:
case 3605:
case 2224:
case 3771:
case 2346:
case 842:
case 2624:
case 4048:
case 3796:
case 2989:
case 2537:
case 136:
case 3656:
case 1361:
case 3260:
case 736:
case 3950:
case 405:
case 4062:
case 2934:
case 2480:
case 1957:
case 1811:
case 502:
case 3459:
case 781:
case 998:
case 3304:
case 3502:
case 1394:
case 2015:
case 1717:
case 2722:
case 3420:
case 649:
case 84:
case 895:
case 3385:
case 151:
case 1174:
case 2813:
case 682:
case 3572:
case 1248:
case 575:
case 2532:
case 472:
case 3890:
case 25:
case 1800:
case 569:
case 1764:
case 1780:
case 1214:
case 614:
case 2209:
case 835:
case 1500:
case 3816:
case 2832:
case 2417:
case 3444:
case 938:
case 2061:
case 3904:
case 179:
case 1791:
case 214:
case 3881:
case 2141:
case 3701:
case 370:
case 3943:
case 2235:
case 1549:
case 1597:
case 1025:
case 1662:
case 765:
case 68:
case 606:
case 2788:
case 3507:
case 1129:
case 2094:
case 358:
case 2363:
case 743:
case 1952:
case 2635:
case 282:
case 143:
case 1733:
case 196:
case 3115:
case 1431:
case 65:
case 2389:
case 859:
case 3728:
case 1897:
case 441:
case 2946:
case 518:
case 4067:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756702802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,];
var gg_b = "1756702802/";

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
