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
var o = 0;
switch (g) {
case 2670:
case 555:
case 2512:
case 2242:
case 2074:
case 4072:
case 532:
case 2540:
case 1993:
case 3654:
case 601:
case 1752:
case 1623:
case 690:
case 4057:
case 3842:
case 2480:
case 2769:
case 447:
case 879:
case 2032:
case 996:
case 1868:
case 1775:
case 2968:
case 60:
case 588:
case 3869:
case 116:
case 3418:
case 1437:
case 4003:
case 3081:
case 3623:
case 3927:
case 2015:
case 819:
case 2237:
case 2259:
case 324:
case 2166:
case 2803:
case 1288:
case 3265:
case 675:
case 1188:
case 1796:
case 1044:
case 1795:
case 3380:
case 571:
case 552:
case 907:
case 932:
case 1164:
case 952:
case 545:
case 2835:
case 39:
case 1551:
case 1513:
case 2191:
case 428:
case 761:
case 3113:
case 1713:
case 3822:
case 3499:
case 3258:
case 3712:
case 2445:
case 2098:
case 3174:
case 3151:
case 3415:
case 3897:
case 603:
case 2071:
case 1770:
case 3497:
case 2369:
case 1293:
case 2227:
case 2841:
case 1317:
case 3520:
case 355:
case 562:
case 2645:
case 2087:
case 594:
case 1983:
case 3868:
case 1878:
case 282:
case 455:
case 3973:
case 626:
case 1031:
case 436:
case 1411:
case 1789:
case 3372:
case 329:
case 2550:
case 3273:
case 3903:
case 2103:
case 2195:
case 1741:
case 377:
case 2096:
case 1506:
case 3179:
case 1025:
case 480:
case 2628:
case 1145:
case 1684:
case 1097:
case 2629:
case 688:
case 1633:
case 2839:
case 2595:
case 622:
case 647:
case 1787:
case 3755:
case 1860:
case 2368:
case 2495:
case 475:
case 1307:
case 2746:
case 2447:
case 1613:
case 2669:
case 1469:
case 2436:
case 2737:
case 1802:
case 2016:
case 1611:
case 1453:
case 2444:
case 3661:
case 1682:
case 1913:
case 866:
case 2847:
case 2899:
case 2255:
case 2707:
case 2292:
case 1457:
case 397:
case 1688:
case 3597:
case 1643:
case 3833:
case 281:
case 1927:
case 2729:
case 2876:
case 3277:
case 3877:
case 1655:
case 1306:
case 80:
case 3611:
case 3574:
case 1055:
case 786:
case 408:
case 2759:
case 595:
case 672:
case 712:
case 3616:
case 1896:
case 2712:
case 3746:
case 1259:
case 2797:
case 1738:
case 152:
case 1114:
case 1129:
case 654:
case 1443:
case 2716:
case 1066:
case 3198:
case 3565:
case 901:
case 184:
case 3784:
case 660:
case 2475:
case 4016:
case 2263:
case 2002:
case 3359:
case 3398:
case 2243:
case 2007:
case 3908:
case 320:
case 2752:
case 3008:
case 1861:
case 1400:
case 1704:
case 316:
case 3506:
case 1742:
case 3369:
case 3262:
case 2095:
case 2287:
case 2389:
case 196:
case 2122:
case 119:
case 948:
case 2713:
case 88:
case 3002:
case 4077:
case 3302:
case 1664:
case 3858:
case 2277:
case 19:
case 57:
case 65:
case 3072:
case 3891:
case 3735:
case 2832:
case 3762:
case 3719:
case 3601:
case 1855:
case 1772:
case 2208:
case 2983:
case 607:
case 1492:
case 3162:
case 2571:
case 3077:
case 1466:
case 1269:
case 2387:
case 2086:
case 2790:
case 3774:
case 318:
case 539:
case 3631:
case 3852:
case 3942:
case 3871:
case 2077:
case 1450:
case 2457:
case 3847:
case 587:
case 1101:
case 190:
case 2799:
case 3136:
case 891:
case 630:
case 1264:
case 466:
case 1939:
case 831:
case 3540:
case 326:
case 1995:
case 2653:
case 1550:
case 1595:
case 3013:
case 1484:
case 1102:
case 3381:
case 3018:
case 1215:
case 1189:
case 2315:
case 3840:
case 2662:
case 3772:
case 1048:
case 2126:
case 3464:
case 1324:
case 1707:
case 1897:
case 724:
case 3602:
case 854:
case 1534:
case 396:
case 3377:
case 66:
case 3659:
case 2274:
case 1234:
case 2783:
case 2723:
case 2423:
case 2511:
case 2477:
case 3344:
case 1241:
case 2605:
case 1524:
case 2177:
case 3944:
case 4030:
case 1179:
case 1734:
case 2392:
case 2771:
case 886:
case 1585:
case 1906:
case 2433:
case 3607:
case 2162:
case 1416:
case 3834:
case 897:
case 1637:
case 2383:
case 1294:
case 340:
case 773:
case 716:
case 1503:
case 2947:
case 2975:
case 94:
case 1320:
case 3961:
case 1557:
case 1464:
case 1017:
case 2395:
case 3148:
case 3035:
case 2494:
case 2111:
case 2466:
case 1924:
case 223:
case 1549:
case 842:
case 3431:
case 2272:
case 3365:
case 1793:
case 3451:
case 2118:
case 995:
case 230:
case 213:
case 3537:
case 174:
case 1483:
case 1173:
case 1260:
case 3848:
case 554:
case 2414:
case 136:
case 3036:
case 1131:
case 1817:
case 2035:
case 2400:
case 2472:
case 1635:
case 2417:
case 2556:
case 2516:
case 2180:
case 105:
case 1486:
case 3343:
case 3799:
case 635:
case 1448:
case 2343:
case 1604:
case 1717:
case 29:
case 1822:
case 93:
case 3050:
case 565:
case 2748:
case 362:
case 1309:
case 3928:
case 2001:
case 709:
case 1330:
case 3129:
case 631:
case 1500:
case 1468:
case 296:
case 1609:
case 1193:
case 2789:
case 3048:
case 4061:
case 838:
case 1666:
case 71:
case 170:
case 3836:
case 476:
case 3209:
case 1094:
case 845:
case 2135:
case 488:
case 731:
case 1095:
case 4008:
case 146:
case 1341:
case 323:
case 484:
case 1213:
case 902:
case 3379:
case 1530:
case 2838:
case 1837:
case 2381:
case 3387:
case 3001:
case 1180:
case 2743:
case 2739:
case 1407:
case 2083:
case 4019:
case 2911:
case 431:
case 1133:
case 1030:
case 1672:
case 1539:
case 2033:
case 3803:
case 3144:
case 2265:
case 3670:
case 3668:
case 1784:
case 3267:
case 1638:
case 1033:
case 3399:
case 3812:
case 3962:
case 3983:
case 3713:
case 1239:
case 3874:
case 2280:
case 973:
case 3156:
case 3485:
case 2492:
case 778:
case 135:
case 3964:
case 666:
case 1174:
case 3642:
case 183:
case 793:
case 3419:
case 2868:
case 822:
case 3992:
case 997:
case 1792:
case 964:
case 1379:
case 1605:
case 1013:
case 3896:
case 873:
case 728:
case 1382:
case 1403:
case 2464:
case 2362:
case 445:
case 4073:
case 1835:
case 939:
case 857:
case 422:
case 247:
case 140:
case 1850:
case 3482:
case 3314:
case 409:
case 198:
case 3924:
case 1419:
case 906:
case 639:
case 3011:
case 1046:
case 2173:
case 1535:
case 1903:
case 756:
case 721:
case 1520:
case 1268:
case 1788:
case 2879:
case 2758:
case 1088:
case 3405:
case 96:
case 3500:
case 3161:
case 322:
case 3932:
case 3069:
case 3220:
case 3094:
case 2119:
case 3923:
case 2908:
case 1818:
case 698:
case 1779:
case 981:
case 2164:
case 306:
case 1245:
case 1314:
case 3952:
case 2482:
case 748:
case 1644:
case 2503:
case 864:
case 1219:
case 4053:
case 342:
case 2192:
case 2582:
case 2643:
case 2059:
case 2603:
case 3100:
case 1898:
case 1103:
case 1429:
case 3504:
case 3430:
case 3956:
case 2817:
case 1695:
case 1366:
case 2403:
case 2091:
case 1560:
case 915:
case 62:
case 1753:
case 1708:
case 89:
case 2404:
case 1632:
case 1505:
case 2224:
case 956:
case 1447:
case 1187:
case 389:
case 2615:
case 2116:
case 3798:
case 2786:
case 3341:
case 1510:
case 3747:
case 2257:
case 687:
case 644:
case 2337:
case 2169:
case 3145:
case 613:
case 2320:
case 2912:
case 3243:
case 2719:
case 1576:
case 2134:
case 1424:
case 1425:
case 2696:
case 3448:
case 3219:
case 2673:
case 1140:
case 3310:
case 3445:
case 2205:
case 151:
case 2685:
case 892:
case 2148:
case 1299:
case 1597:
case 3355:
case 3694:
case 1973:
case 314:
case 3422:
case 2699:
case 1929:
case 3941:
case 1801:
case 1263:
case 1083:
case 2708:
case 546:
case 2890:
case 2622:
case 1014:
case 115:
case 2878:
case 3318:
case 1827:
case 3368:
case 270:
case 2811:
case 4041:
case 1384:
case 2903:
case 259:
case 772:
case 42:
case 2858:
case 3714:
case 3434:
case 1316:
case 498:
case 3172:
case 3663:
case 1781:
case 2268:
case 1783:
case 1969:
case 2188:
case 1271:
case 388:
case 3348:
case 2132:
case 527:
case 714:
case 3167:
case 1536:
case 2055:
case 3199:
case 1491:
case 3815:
case 1052:
case 1141:
case 3768:
case 1392:
case 1559:
case 2787:
case 604:
case 1952:
case 1192:
case 1009:
case 2238:
case 3779:
case 1904:
case 1084:
case 1290:
case 1824:
case 3965:
case 2880:
case 3012:
case 2203:
case 121:
case 929:
case 3:
case 253:
case 4089:
case 2934:
case 2167:
case 2955:
case 3218:
case 1755:
case 2875:
case 877:
case 3406:
case 1714:
case 1525:
case 1953:
case 1238:
case 789:
case 2341:
case 2715:
case 2379:
case 1509:
case 3336:
case 551:
case 506:
case 3748:
case 262:
case 726:
case 2570:
case 1905:
case 2456:
case 744:
case 3351:
case 2394:
case 1657:
case 16:
case 3232:
case 3837:
case 2339:
case 2128:
case 2531:
case 3329:
case 3726:
case 3241:
case 2765:
case 2365:
case 2599:
case 1935:
case 3288:
case 448:
case 277:
case 415:
case 1137:
case 2429:
case 1959:
case 3775:
case 3564:
case 3921:
case 3995:
case 1615:
case 1636:
case 878:
case 1936:
case 1537:
case 2082:
case 1703:
case 2809:
case 3357:
case 3970:
case 3890:
case 1485:
case 211:
case 1518:
case 3361:
case 2100:
case 3319:
case 1348:
case 1544:
case 51:
case 2558:
case 1909:
case 3196:
case 596:
case 887:
case 3585:
case 1272:
case 1853:
case 3010:
case 3648:
case 986:
case 13:
case 1377:
case 2489:
case 3617:
case 4056:
case 1273:
case 1211:
case 2986:
case 665:
case 364:
case 4046:
case 1786:
case 768:
case 3065:
case 3800:
case 1870:
case 537:
case 374:
case 421:
case 1733:
case 1842:
case 674:
case 1899:
case 1049:
case 1226:
case 1622:
case 3605:
case 1701:
case 2374:
case 3494:
case 2627:
case 3955:
case 3321:
case 3345:
case 2097:
case 59:
case 3994:
case 2526:
case 2036:
case 2633:
case 1426:
case 2254:
case 102:
case 699:
case 817:
case 2721:
case 3511:
case 2182:
case 444:
case 1444:
case 3647:
case 3587:
case 908:
case 749:
case 1727:
case 2821:
case 2855:
case 3887:
case 3287:
case 2005:
case 617:
case 3058:
case 3193:
case 3866:
case 2981:
case 3681:
case 1422:
case 522:
case 3325:
case 2307:
case 2689:
case 1810:
case 661:
case 1331:
case 194:
case 2298:
case 2258:
case 3831:
case 2214:
case 2751:
case 2665:
case 3718:
case 636:
case 3529:
case 390:
case 3374:
case 2656:
case 2380:
case 3186:
case 2728:
case 2869:
case 3141:
case 3986:
case 1598:
case 1248:
case 846:
case 2344:
case 2421:
case 667:
case 2943:
case 1652:
case 3679:
case 1482:
case 910:
case 1859:
case 3053:
case 1558:
case 3888:
case 785:
case 3545:
case 1617:
case 1744:
case 3469:
case 3829:
case 4009:
case 293:
case 3000:
case 3030:
case 1888:
case 189:
case 1578:
case 2030:
case 2149:
case 947:
case 3247:
case 3103:
case 1670:
case 1292:
case 3188:
case 860:
case 2233:
case 1777:
case 2303:
case 456:
case 233:
case 1281:
case 1305:
case 3308:
case 1676:
case 467:
case 416:
case 1606:
case 3547:
case 130:
case 2198:
case 3576:
case 3180:
case 2587:
case 1811:
case 2926:
case 2833:
case 297:
case 704:
case 1086:
case 3028:
case 3898:
case 451:
case 1432:
case 1256:
case 2363:
case 2988:
case 3857:
case 1207:
case 1275:
case 2649:
case 459:
case 2688:
case 3563:
case 3332:
case 482:
case 441:
case 689:
case 3483:
case 2667:
case 2355:
case 2848:
case 207:
case 2412:
case 3102:
case 191:
case 1371:
case 3375:
case 727:
case 2386:
case 3895:
case 210:
case 1782:
case 2354:
case 3280:
case 3320:
case 2948:
case 2506:
case 1528:
case 1347:
case 3875:
case 1136:
case 1921:
case 3573:
case 2888:
case 2308:
case 2957:
case 762:
case 1816:
case 3385:
case 2940:
case 3660:
case 1108:
case 1893:
case 930:
case 2734:
case 2335:
case 4024:
case 954:
case 1262:
case 4093:
case 1431:
case 2352:
case 1683:
case 2632:
case 3292:
case 2998:
case 3313:
case 1702:
case 3688:
case 163:
case 2305:
case 2619:
case 3725:
case 2378:
case 876:
case 1531:
case 563:
case 4043:
case 3315:
case 2170:
case 2121:
case 64:
case 1287:
case 2935:
case 2105:
case 3056:
case 266:
case 4070:
case 2562:
case 1696:
case 1072:
case 308:
case 2223:
case 758:
case 1823:
case 349:
case 2742:
case 138:
case 2084:
case 3953:
case 2683:
case 912:
case 3640:
case 3656:
case 1971:
case 465:
case 3933:
case 584:
case 366:
case 2891:
case 1740:
case 3946:
case 260:
case 3724:
case 3338:
case 531:
case 2261:
case 1543:
case 1412:
case 739:
case 429:
case 1308:
case 3677:
case 1915:
case 1608:
case 3797:
case 1943:
case 3291:
case 1711:
case 1564:
case 368:
case 3097:
case 605:
case 1070:
case 2972:
case 3930:
case 3206:
case 2837:
case 227:
case 3496:
case 2636:
case 1661:
case 1300:
case 1948:
case 2385:
case 3207:
case 567:
case 272:
case 1381:
case 3796:
case 884:
case 615:
case 2351:
case 3282:
case 177:
case 2777:
case 3922:
case 2827:
case 3082:
case 1911:
case 2278:
case 1434:
case 3785:
case 2295:
case 407:
case 640:
case 754:
case 548:
case 3263:
case 1790:
case 3358:
case 3666:
case 2659:
case 425:
case 1115:
case 1910:
case 2190:
case 2029:
case 2813:
case 2997:
case 379:
case 711:
case 3423:
case 1050:
case 1167:
case 1693:
case 972:
case 1274:
case 2020:
case 1949:
case 2235:
case 1712:
case 420:
case 443:
case 1891:
case 2120:
case 3811:
case 2326:
case 1756:
case 1267:
case 4064:
case 3629:
case 815:
case 3715:
case 3639:
case 2244:
case 2551:
case 1059:
case 2611:
case 3027:
case 2246:
case 3937:
case 3189:
case 791:
case 354:
case 1631:
case 1085:
case 3750:
case 1647:
case 3777:
case 890:
case 1926:
case 2521:
case 1720:
case 1261:
case 4036:
case 2703:
case 2976:
case 228:
case 2375:
case 442:
case 1607:
case 187:
case 3212:
case 800:
case 2846:
case 2814:
case 3005:
case 178:
case 2588:
case 3859:
case 4011:
case 2933:
case 1745:
case 2231:
case 31:
case 805:
case 1026:
case 438:
case 3778:
case 3433:
case 2038:
case 2807:
case 1765:
case 2741:
case 3892:
case 383:
case 35:
case 217:
case 3317:
case 1249:
case 2201:
case 351:
case 212:
case 953:
case 2563:
case 3356:
case 450:
case 1925:
case 3703:
case 3512:
case 3134:
case 2640:
case 3791:
case 1345:
case 3328:
case 3740:
case 1675:
case 283:
case 1680:
case 3175:
case 2222:
case 1003:
case 1246:
case 2795:
case 3615:
case 350:
case 2711:
case 2735:
case 2885:
case 1378:
case 182:
case 3023:
case 1490:
case 3493:
case 2290:
case 2973:
case 3949:
case 1610:
case 942:
case 1225:
case 3092:
case 37:
case 1153:
case 3447:
case 4084:
case 2247:
case 8:
case 162:
case 1998:
case 3225:
case 221:
case 3835:
case 3692:
case 10:
case 1586:
case 2137:
case 3552:
case 3037:
case 961:
case 331:
case 1721:
case 3907:
case 1291:
case 95:
case 179:
case 1599:
case 1078:
case 2596:
case 861:
case 804:
case 2067:
case 2818:
case 723:
case 2081:
case 1671:
case 4055:
case 3349:
case 3034:
case 1449:
case 3814:
case 3900:
case 579:
case 802:
case 2618:
case 2969:
case 1319:
case 3331:
case 2560:
case 599:
case 883:
case 1882:
case 413:
case 3089:
case 3664:
case 3745:
case 3935:
case 3110:
case 3870:
case 474:
case 965:
case 1160:
case 2537:
case 559:
case 291:
case 2937:
case 3802:
case 1963:
case 1460:
case 662:
case 261:
case 3070:
case 514:
case 3249:
case 269:
case 271:
case 1091:
case 790:
case 14:
case 570:
case 2113:
case 219:
case 3886:
case 2006:
case 1685:
case 2949:
case 1231:
case 295:
case 4042:
case 3203:
case 3641:
case 811:
case 2043:
case 4050:
case 2872:
case 1504:
case 936:
case 3793:
case 1105:
case 2357:
case 679:
case 2194:
case 3376:
case 3412:
case 1538:
case 3047:
case 3078:
case 336:
case 1532:
case 2313:
case 3039:
case 424:
case 1864:
case 1780:
case 1064:
case 1232:
case 2677:
case 3984:
case 91:
case 3760:
case 1159:
case 2402:
case 434:
case 124:
case 1663:
case 2293:
case 84:
case 547:
case 2958:
case 3185:
case 2750:
case 3721:
case 3367:
case 1581:
case 3700:
case 2011:
case 881:
case 1132:
case 3461:
case 3881:
case 2601:
case 2356:
case 847:
case 2284:
case 3862:
case 3016:
case 2650:
case 4068:
case 3228:
case 125:
case 1398:
case 3513:
case 2487:
case 20:
case 2317:
case 3515:
case 2486:
case 3786:
case 914:
case 1018:
case 3107:
case 3503:
case 2859:
case 4006:
case 677:
case 3920:
case 2532:
case 275:
case 2915:
case 3477:
case 801:
case 3980:
case 655:
case 231:
case 1333:
case 215:
case 2044:
case 208:
case 2088:
case 112:
case 2931:
case 2225:
case 610:
case 987:
case 859:
case 2979:
case 3371:
case 3160:
case 3256:
case 1250:
case 1930:
case 3440:
case 2028:
case 1722:
case 1517:
case 3439:
case 1214:
case 1593:
case 774:
case 304:
case 3821:
case 180:
case 2504:
case 1761:
case 2774:
case 1499:
case 1151:
case 3919:
case 1876:
case 27:
case 305:
case 2843:
case 3613:
case 244:
case 2064:
case 2273:
case 2600:
case 1183:
case 2548:
case 3104:
case 3170:
case 9:
case 645:
case 3015:
case 237:
case 3646:
case 405:
case 3111:
case 2405:
case 133:
case 3007:
case 2049:
case 418:
case 904:
case 2050:
case 1012:
case 3404:
case 2123:
case 980:
case 0:
case 3649:
case 900:
case 2910:
case 1230:
case 2239:
case 310:
case 1147:
case 2637:
case 3098:
case 574:
case 960:
case 1946:
case 2324:
case 2416:
case 536:
case 1313:
case 1265:
case 2316:
case 3807:
case 1203:
case 2245:
case 3539:
case 2041:
case 149:
case 192:
case 3603:
case 3709:
case 2053:
case 392:
case 743:
case 3991:
case 3153:
case 2311:
case 3124:
case 875:
case 1912:
case 1834:
case 2740:
case 4005:
case 874:
case 3337:
case 682:
case 2037:
case 3876:
case 2565:
case 1848:
case 387:
case 2574:
case 807:
case 4025:
case 3806:
case 1968:
case 440:
case 3122:
case 3360:
case 3498:
case 1098:
case 3255:
case 3850:
case 776:
case 1280:
case 2333:
case 1175:
case 4027:
case 1047:
case 3457:
case 3686:
case 1729:
case 3542:
case 4091:
case 4076:
case 76:
case 663:
case 3099:
case 2672:
case 4033:
case 2360:
case 1344:
case 1417:
case 1879:
case 3657:
case 3093:
case 197:
case 2319:
case 3021:
case 2517:
case 3823:
case 2691:
case 2437:
case 1735:
case 54:
case 3739:
case 2666:
case 128:
case 497:
case 446:
case 2102:
case 2725:
case 3435:
case 3108:
case 918:
case 3987:
case 299:
case 2240:
case 1806:
case 2535:
case 2241:
case 3518:
case 2216:
case 3333:
case 2914:
case 2784:
case 3655:
case 992:
case 2301:
case 738:
case 3789:
case 3208:
case 3158:
case 1762:
case 2408:
case 2686:
case 1343:
case 1128:
case 3805:
case 2174:
case 2393:
case 1253:
case 4044:
case 1573:
case 2076:
case 2816:
case 730:
case 2481:
case 2410:
case 1523:
case 3276:
case 3561:
case 2918:
case 1650:
case 3168:
case 3087:
case 780:
case 1699:
case 664:
case 257:
case 1697:
case 1354:
case 2767:
case 710:
case 701:
case 483:
case 28:
case 3238:
case 3501:
case 73:
case 3401:
case 646:
case 2569:
case 2094:
case 2304:
case 1475:
case 3635:
case 3120:
case 2946:
case 1247:
case 540:
case 1515:
case 2896:
case 3816:
case 3340:
case 307:
case 3437:
case 795:
case 285:
case 3059:
case 3936:
case 3969:
case 511:
case 917:
case 3546:
case 2336:
case 513:
case 803:
case 2733:
case 3864:
case 2616:
case 147:
case 2647:
case 2299:
case 3780:
case 2519:
case 541:
case 3460:
case 1533:
case 403:
case 1322:
case 512:
case 2682:
case 258:
case 974:
case 2334:
case 2065:
case 3306:
case 2215:
case 2884:
case 1759:
case 1692:
case 3516:
case 3270:
case 193:
case 3763:
case 650:
case 2695:
case 1442:
case 2443:
case 951:
case 3283:
case 3938:
case 246:
case 3731:
case 1038:
case 975:
case 1387:
case 382:
case 1185:
case 2793:
case 311:
case 1521:
case 1565:
case 3217:
case 457:
case 439:
case 2146:
case 3286:
case 462:
case 1869:
case 365:
case 2264:
case 352:
case 153:
case 1198:
case 1337:
case 2753:
case 2145:
case 3202:
case 3384:
case 1845:
case 569:
case 2310:
case 2470:
case 3589:
case 3459:
case 252:
case 3183:
case 2160:
case 1327:
case 530:
case 2468:
case 2863:
case 3020:
case 1022:
case 575:
case 1820:
case 2054:
case 2213:
case 597:
case 2420:
case 1603:
case 4058:
case 787:
case 3975:
case 3038:
case 1080:
case 3544:
case 1602:
case 3090:
case 2262:
case 143:
case 3698:
case 3889:
case 1863:
case 167:
case 3618:
case 858:
case 2010:
case 347:
case 238:
case 813:
case 1916:
case 849:
case 1577:
case 769:
case 2853:
case 835:
case 3354:
case 3164:
case 427:
case 2510:
case 1045:
case 53:
case 1346:
case 696:
case 2000:
case 56:
case 1641:
case 1011:
case 2651:
case 158:
case 1409:
case 735:
case 17:
case 3558:
case 2854:
case 3894:
case 1368:
case 1441:
case 3052:
case 1975:
case 578:
case 2154:
case 3650:
case 3300:
case 242:
case 2331:
case 2112:
case 2069:
case 3588:
case 3383:
case 3138:
case 3045:
case 1040:
case 2831:
case 893:
case 3690:
case 1489:
case 3769:
case 3931:
case 3096:
case 905:
case 426:
case 1311:
case 1438:
case 386:
case 2014:
case 1302:
case 2780:
case 2727:
case 1063:
case 3909:
case 417:
case 2794:
case 376:
case 1718:
case 2904:
case 106:
case 1356:
case 391:
case 203:
case 922:
case 3025:
case 359:
case 2792:
case 453:
case 2920:
case 1339:
case 3722:
case 2488:
case 2714:
case 1919:
case 1420:
case 3297:
case 201:
case 1961:
case 2798:
case 509:
case 3982:
case 3427:
case 1965:
case 1601:
case 2411:
case 4031:
case 2557:
case 1032:
case 940:
case 370:
case 517:
case 264:
case 2252:
case 2428:
case 2663:
case 3204:
case 4092:
case 99:
case 2281:
case 2584:
case 2534:
case 437:
case 1698:
case 2874:
case 2882:
case 4081:
case 3443:
case 3599:
case 916:
case 3426:
case 458:
case 614:
case 3917:
case 473:
case 3304:
case 419:
case 3913:
case 921:
case 2944:
case 1427:
case 3776:
case 361:
case 1257:
case 3352:
case 1706:
case 2791:
case 148:
case 3394:
case 1807:
case 3126:
case 1642:
case 3076:
case 241:
case 2401:
case 2127:
case 1252:
case 899:
case 3733:
case 1773:
case 1805:
case 2805:
case 2717:
case 58:
case 83:
case 2994:
case 1826:
case 1365:
case 108:
case 1964:
case 736:
case 2999:
case 2427:
case 1766:
case 2078:
case 3759:
case 3710:
case 109:
case 3939:
case 623:
case 1380:
case 463:
case 882:
case 3446:
case 3586:
case 490:
case 1571:
case 319:
case 1758:
case 1997:
case 1988:
case 3294:
case 1201:
case 1495:
case 3402:
case 2142:
case 2322:
case 938:
case 32:
case 1890:
case 1852:
case 1977:
case 775:
case 1552:
case 2283:
case 3730:
case 2536:
case 558:
case 3521:
case 2718:
case 1800:
case 2749:
case 1270:
case 851:
case 3223:
case 4017:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1643835601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,];
var gg_b = "1643835601/";

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
