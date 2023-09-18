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
case 2174:
case 58:
case 2378:
case 4023:
case 459:
case 344:
case 673:
case 3369:
case 2296:
case 3007:
case 1059:
case 2686:
case 4009:
case 64:
case 254:
case 3358:
case 2954:
case 2002:
case 2791:
case 1911:
case 298:
case 1484:
case 1152:
case 337:
case 1525:
case 915:
case 1827:
case 3654:
case 323:
case 1560:
case 3942:
case 679:
case 1817:
case 2946:
case 347:
case 1699:
case 995:
case 3778:
case 2548:
case 87:
case 2321:
case 1912:
case 763:
case 341:
case 300:
case 567:
case 2266:
case 3291:
case 1650:
case 420:
case 3619:
case 1408:
case 2623:
case 396:
case 3372:
case 201:
case 2763:
case 2007:
case 1673:
case 2025:
case 2800:
case 1702:
case 2347:
case 2736:
case 2442:
case 2591:
case 2184:
case 239:
case 2475:
case 2312:
case 2270:
case 2931:
case 1660:
case 3253:
case 2032:
case 3789:
case 1885:
case 204:
case 3720:
case 2797:
case 717:
case 255:
case 2936:
case 630:
case 703:
case 1125:
case 1373:
case 1865:
case 3035:
case 2352:
case 1703:
case 3113:
case 2038:
case 3197:
case 2707:
case 855:
case 36:
case 2024:
case 1038:
case 2933:
case 3865:
case 3134:
case 2153:
case 2482:
case 489:
case 2404:
case 2215:
case 3675:
case 707:
case 1240:
case 1803:
case 796:
case 1896:
case 2065:
case 3604:
case 2650:
case 301:
case 4094:
case 1104:
case 3215:
case 278:
case 38:
case 3160:
case 2119:
case 2839:
case 116:
case 1428:
case 1334:
case 1904:
case 2525:
case 3772:
case 3986:
case 2046:
case 157:
case 1332:
case 69:
case 3926:
case 2468:
case 2069:
case 797:
case 2232:
case 42:
case 2852:
case 2138:
case 3773:
case 30:
case 1371:
case 565:
case 3521:
case 1060:
case 556:
case 687:
case 662:
case 1157:
case 3410:
case 1230:
case 654:
case 3480:
case 1176:
case 3477:
case 3622:
case 3564:
case 1789:
case 412:
case 3648:
case 120:
case 2485:
case 1399:
case 2075:
case 3702:
case 1759:
case 2175:
case 3063:
case 1578:
case 501:
case 2152:
case 474:
case 114:
case 2421:
case 2173:
case 1404:
case 463:
case 3039:
case 768:
case 3318:
case 4053:
case 1438:
case 731:
case 2016:
case 1844:
case 1177:
case 2569:
case 2727:
case 2654:
case 4012:
case 647:
case 718:
case 3879:
case 3510:
case 653:
case 2254:
case 143:
case 1796:
case 2658:
case 3115:
case 3626:
case 1498:
case 2458:
case 2829:
case 377:
case 1368:
case 1206:
case 3754:
case 881:
case 2360:
case 3764:
case 808:
case 1647:
case 2923:
case 837:
case 600:
case 442:
case 3454:
case 3497:
case 2394:
case 2769:
case 638:
case 1076:
case 3679:
case 3569:
case 1838:
case 2478:
case 2919:
case 3617:
case 593:
case 545:
case 2542:
case 3267:
case 37:
case 370:
case 655:
case 3973:
case 2193:
case 2947:
case 3010:
case 168:
case 3939:
case 1950:
case 3190:
case 2353:
case 3520:
case 3920:
case 633:
case 554:
case 2728:
case 1041:
case 477:
case 2042:
case 2466:
case 1797:
case 2740:
case 127:
case 1101:
case 2147:
case 2454:
case 1250:
case 2793:
case 171:
case 1052:
case 660:
case 4084:
case 2855:
case 3877:
case 3288:
case 2646:
case 61:
case 784:
case 2453:
case 197:
case 2907:
case 2583:
case 2547:
case 3689:
case 3891:
case 2749:
case 585:
case 1870:
case 1184:
case 2558:
case 2165:
case 353:
case 2304:
case 1648:
case 674:
case 3556:
case 2738:
case 187:
case 80:
case 1762:
case 947:
case 1646:
case 2761:
case 15:
case 3979:
case 2265:
case 573:
case 3467:
case 3992:
case 762:
case 3761:
case 2445:
case 3553:
case 2735:
case 1737:
case 3913:
case 2432:
case 499:
case 571:
case 2527:
case 1908:
case 1016:
case 2354:
case 1046:
case 1314:
case 238:
case 807:
case 217:
case 863:
case 2690:
case 3836:
case 952:
case 3377:
case 3203:
case 488:
case 1757:
case 1164:
case 3799:
case 2314:
case 404:
case 2357:
case 1132:
case 860:
case 1898:
case 649:
case 2549:
case 2199:
case 3938:
case 1310:
case 2003:
case 949:
case 3167:
case 650:
case 1209:
case 3900:
case 2795:
case 757:
case 3642:
case 1752:
case 2337:
case 3100:
case 2860:
case 324:
case 2114:
case 306:
case 2834:
case 2880:
case 1550:
case 327:
case 1451:
case 2766:
case 2940:
case 2871:
case 3716:
case 293:
case 3829:
case 2986:
case 484:
case 2294:
case 898:
case 46:
case 1005:
case 81:
case 1092:
case 2053:
case 3922:
case 3402:
case 1158:
case 2149:
case 648:
case 3231:
case 326:
case 1193:
case 1520:
case 1914:
case 2866:
case 4001:
case 803:
case 1302:
case 1521:
case 1035:
case 3130:
case 1094:
case 3266:
case 3983:
case 2225:
case 3444:
case 1629:
case 2303:
case 2464:
case 3657:
case 3195:
case 3077:
case 1640:
case 1456:
case 1701:
case 1086:
case 1506:
case 2926:
case 3751:
case 1502:
case 385:
case 747:
case 4058:
case 1486:
case 2902:
case 3928:
case 589:
case 2124:
case 1499:
case 1522:
case 2167:
case 3766:
case 2068:
case 1344:
case 1390:
case 1677:
case 3244:
case 696:
case 546:
case 1102:
case 577:
case 2488:
case 3058:
case 1452:
case 925:
case 2872:
case 3224:
case 3099:
case 2234:
case 3315:
case 1654:
case 3835:
case 3628:
case 4075:
case 3579:
case 3158:
case 1220:
case 4050:
case 2780:
case 2594:
case 1402:
case 2142:
case 372:
case 583:
case 971:
case 4025:
case 1265:
case 588:
case 1947:
case 1930:
case 1198:
case 2570:
case 7:
case 2673:
case 3613:
case 1070:
case 1633:
case 2395:
case 723:
case 3834:
case 581:
case 299:
case 3568:
case 1978:
case 2095:
case 496:
case 1840:
case 3385:
case 122:
case 302:
case 3088:
case 1657:
case 225:
case 2584:
case 2856:
case 11:
case 3356:
case 2418:
case 1108:
case 2785:
case 1938:
case 739:
case 1316:
case 3390:
case 3646:
case 990:
case 3068:
case 2516:
case 2613:
case 3220:
case 340:
case 219:
case 900:
case 3193:
case 1725:
case 859:
case 1781:
case 3348:
case 2228:
case 2696:
case 485:
case 1901:
case 3393:
case 1761:
case 374:
case 2335:
case 63:
case 1907:
case 889:
case 2847:
case 3966:
case 3833:
case 840:
case 1828:
case 3128:
case 3062:
case 1271:
case 2044:
case 1057:
case 551:
case 3590:
case 1278:
case 9:
case 1826:
case 799:
case 3289:
case 4077:
case 2420:
case 3691:
case 936:
case 1768:
case 35:
case 2071:
case 3512:
case 1864:
case 3737:
case 230:
case 869:
case 1427:
case 363:
case 815:
case 84:
case 3712:
case 4073:
case 779:
case 3651:
case 3202:
case 2066:
case 3589:
case 966:
case 224:
case 2363:
case 2522:
case 2201:
case 3399:
case 3602:
case 3615:
case 118:
case 3538:
case 1422:
case 2538:
case 3147:
case 667:
case 4052:
case 4067:
case 88:
case 4003:
case 400:
case 3793:
case 2356:
case 2180:
case 375:
case 3618:
case 2080:
case 2313:
case 3771:
case 3634:
case 1788:
case 2518:
case 3658:
case 2348:
case 1524:
case 2342:
case 4017:
case 1435:
case 1096:
case 1146:
case 722:
case 3884:
case 16:
case 2528:
case 190:
case 1023:
case 705:
case 2955:
case 266:
case 1605:
case 786:
case 4063:
case 1663:
case 2329:
case 790:
case 464:
case 1072:
case 3400:
case 13:
case 3388:
case 3599:
case 2596:
case 3448:
case 2600:
case 540:
case 1889:
case 3110:
case 2610:
case 28:
case 1564:
case 1820:
case 2446:
case 706:
case 3787:
case 185:
case 2502:
case 240:
case 3503:
case 2733:
case 1609:
case 511:
case 1510:
case 2484:
case 1687:
case 3978:
case 2131:
case 3726:
case 2276:
case 611:
case 3980:
case 3824:
case 2932:
case 580:
case 2982:
case 2277:
case 1259:
case 2716:
case 3971:
case 652:
case 2090:
case 3306:
case 263:
case 1262:
case 3165:
case 2526:
case 2756:
case 441:
case 1690:
case 3052:
case 3284:
case 1779:
case 3262:
case 1926:
case 2026:
case 2603:
case 1931:
case 3384:
case 964:
case 1363:
case 147:
case 3217:
case 1063:
case 3200:
case 395:
case 2964:
case 2156:
case 1154:
case 3750:
case 1631:
case 3304:
case 23:
case 3090:
case 1234:
case 1337:
case 1824:
case 2901:
case 1462:
case 2711:
case 521:
case 2431:
case 3873:
case 3498:
case 3163:
case 2422:
case 2750:
case 1683:
case 1566:
case 3678:
case 844:
case 3145:
case 3637:
case 2261:
case 678:
case 1396:
case 345:
case 4057:
case 3079:
case 66:
case 3427:
case 1614:
case 430:
case 29:
case 539:
case 108:
case 1839:
case 728:
case 3152:
case 3027:
case 1258:
case 59:
case 606:
case 3871:
case 45:
case 2973:
case 1118:
case 1311:
case 76:
case 142:
case 2327:
case 1998:
case 3420:
case 2997:
case 3955:
case 1200:
case 1416:
case 0:
case 1829:
case 1922:
case 1562:
case 191:
case 2250:
case 3957:
case 2714:
case 2021:
case 222:
case 1730:
case 848:
case 1431:
case 2237:
case 701:
case 3287:
case 1588:
case 3682:
case 1530:
case 1196:
case 1478:
case 1458:
case 651:
case 3004:
case 3734:
case 2259:
case 1189:
case 295:
case 712:
case 3238:
case 2879:
case 692:
case 3032:
case 3428:
case 2693:
case 3660:
case 3235:
case 2513:
case 1426:
case 2691:
case 358:
case 2425:
case 508:
case 2048:
case 3033:
case 773:
case 1378:
case 2390:
case 423:
case 3046:
case 4048:
case 216:
case 1776:
case 1565:
case 3665:
case 1429:
case 1615:
case 1951:
case 1758:
case 1386:
case 2683:
case 3806:
case 1155:
case 40:
case 1047:
case 1592:
case 1594:
case 587:
case 1850:
case 316:
case 970:
case 2609:
case 1619:
case 3242:
case 2745:
case 3111:
case 1465:
case 2837:
case 2760:
case 911:
case 155:
case 3091:
case 3319:
case 3450:
case 531:
case 1939:
case 3122:
case 2530:
case 2218:
case 3211:
case 1218:
case 1199:
case 878:
case 2094:
case 2273:
case 2812:
case 3451:
case 3565:
case 958:
case 1397:
case 1555:
case 3108:
case 3616:
case 1413:
case 461:
case 1000:
case 2695:
case 1441:
case 2590:
case 1700:
case 3389:
case 3112:
case 795:
case 2417:
case 470:
case 392:
case 3698:
case 2924:
case 2447:
case 1595:
case 1183:
case 3838:
case 3127:
case 609:
case 1382:
case 3762:
case 2214:
case 3313:
case 699:
case 2461:
case 1693:
case 4024:
case 1571:
case 173:
case 2922:
case 2399:
case 908:
case 113:
case 1790:
case 614:
case 710:
case 3422:
case 2093:
case 1799:
case 720:
case 4022:
case 1137:
case 592:
case 203:
case 1940:
case 2640:
case 629:
case 981:
case 1342:
case 2803:
case 3303:
case 814:
case 3272:
case 52:
case 3082:
case 1459:
case 1256:
case 798:
case 777:
case 2677:
case 1037:
case 769:
case 2006:
case 3961:
case 317:
case 2302:
case 2035:
case 3776:
case 3117:
case 544:
case 1626:
case 1632:
case 1567:
case 47:
case 1330:
case 1875:
case 3502:
case 290:
case 1283:
case 2963:
case 1662:
case 348:
case 2892:
case 1446:
case 1398:
case 832:
case 2995:
case 2511:
case 2751:
case 1942:
case 436:
case 1068:
case 103:
case 3180:
case 594:
case 1514:
case 3507:
case 3976:
case 802:
case 2941:
case 2533:
case 3598:
case 783:
case 564:
case 1872:
case 1077:
case 2501:
case 357:
case 4089:
case 1589:
case 2031:
case 1376:
case 1523:
case 1508:
case 3430:
case 1574:
case 2881:
case 1879:
case 1570:
case 1354:
case 1190:
case 4087:
case 3020:
case 3156:
case 3924:
case 1116:
case 1671:
case 3921:
case 3258:
case 3355:
case 1357:
case 2652:
case 2559:
case 2241:
case 1962:
case 4079:
case 1841:
case 2676:
case 1045:
case 457:
case 1810:
case 2317:
case 1443:
case 4090:
case 3684:
case 3623:
case 2813:
case 382:
case 2950:
case 1895:
case 1921:
case 1421:
case 1929:
case 610:
case 801:
case 1030:
case 973:
case 1340:
case 2346:
case 2028:
case 2742:
case 864:
case 1689:
case 1036:
case 1557:
case 1846:
case 1794:
case 1329:
case 1658:
case 1833:
case 2996:
case 1111:
case 3524:
case 3576:
case 2168:
case 3474:
case 3216:
case 391:
case 1906:
case 2718:
case 2323:
case 3000:
case 2456:
case 924:
case 1269:
case 256:
case 3354:
case 843:
case 320:
case 1937:
case 968:
case 294:
case 1721:
case 2743:
case 2628:
case 111:
case 3916:
case 775:
case 2771:
case 3221:
case 2977:
case 819:
case 3540:
case 379:
case 371:
case 1088:
case 491:
case 2777:
case 33:
case 3081:
case 2897:
case 1742:
case 2033:
case 975:
case 541:
case 3436:
case 887:
case 3705:
case 1613:
case 360:
case 2076:
case 2463:
case 1124:
case 3731:
case 3970:
case 1597:
case 3349:
case 2998:
case 3066:
case 2369:
case 804:
case 1600:
case 4068:
case 1666:
case 3028:
case 3839:
case 161:
case 399:
case 2410:
case 3441:
case 3435:
case 3247:
case 2565:
case 566:
case 3470:
case 1979:
case 1686:
case 752:
case 1370:
case 711:
case 3825:
case 215:
case 2798:
case 519:
case 1352:
case 992:
case 422:
case 4043:
case 1392:
case 1291:
case 2657:
case 1599:
case 2052:
case 2598:
case 836:
case 1457:
case 3743:
case 1305:
case 1925:
case 2637:
case 3424:
case 680:
case 3968:
case 3985:
case 3198:
case 2888:
case 532:
case 928:
case 3963:
case 2244:
case 3818:
case 3846:
case 2361:
case 1103:
case 3250:
case 3792:
case 1963:
case 2284:
case 2013:
case 2776:
case 3832:
case 2722:
case 4013:
case 2944:
case 3805:
case 1420:
case 2796:
case 3981:
case 533:
case 873:
case 492:
case 3820:
case 2917:
case 2231:
case 959:
case 2297:
case 2345:
case 2319:
case 3700:
case 1636:
case 2178:
case 3888:
case 2966:
case 1021:
case 270:
case 3975:
case 2575:
case 1039:
case 2098:
case 403:
case 980:
case 107:
case 2524:
case 3650:
case 102:
case 3563:
case 2257:
case 1113:
case 3155:
case 3105:
case 1192:
case 858:
case 1050:
case 754:
case 884:
case 3175:
case 520:
case 698:
case 2595:
case 2283:
case 2058:
case 1013:
case 2368:
case 3821:
case 945:
case 3492:
case 210:
case 3092:
case 2263:
case 2717:
case 2710:
case 1126:
case 3230:
case 3391:
case 480:
case 2017:
case 3863:
case 1133:
case 2086:
case 700:
case 3797:
case 743:
case 1782:
case 4:
case 393:
case 3151:
case 1503:
case 3769:
case 2047:
case 1497:
case 1732:
case 1463:
case 1756:
case 100:
case 664:
case 2712:
case 1704:
case 2130:
case 2983:
case 2036:
case 1733:
case 792:
case 2343:
case 1267:
case 1504:
case 2123:
case 1954:
case 3974:
case 3277:
case 2318:
case 3415:
case 1857:
case 2651:
case 86:
case 2903:
case 2020:
case 2267:
case 3157:
case 3738:
case 735:
case 1593:
case 1270:
case 842:
case 1295:
case 3532:
case 1549:
case 2767:
case 2210:
case 2195:
case 1414:
case 1107:
case 1819:
case 2757:
case 2070:
case 1713:
case 3500:
case 3587:
case 3866:
case 2374:
case 3037:
case 245:
case 2474:
case 3760:
case 697:
case 3383:
case 3526:
case 3518:
case 2416:
case 1350:
case 2001:
case 1033:
case 3073:
case 2477:
case 3816:
case 3209:
case 483:
case 2192:
case 3611:
case 2704:
case 3150:
case 2578:
case 75:
case 2679:
case 2332:
case 2377:
case 3489:
case 914:
case 2965:
case 2669:
case 3607:
case 296:
case 3744:
case 3411:
case 3438:
case 1916:
case 4004:
case 1056:
case 2721:
case 1936:
case 4007:
case 1468:
case 101:
case 2380:
case 2187:
case 2938:
case 1393:
case 3864:
case 3903:
case 1418:
case 849:
case 453:
case 1869:
case 2126:
case 3511:
case 794:
case 12:
case 2169:
case 1952:
case 3594:
case 2971:
case 1331:
case 2703:
case 2599:
case 4044:
case 2635:
case 2493:
case 3681:
case 2188:
case 311:
case 2782:
case 1959:
case 1665:
case 1018:
case 186:
case 2672:
case 2802:
case 1455:
case 2956:
case 811:
case 2648:
case 1471:
case 17:
case 1867:
case 3459:
case 3578:
case 2118:
case 109:
case 774:
case 823:
case 2163:
case 3719:
case 3781:
case 3305:
case 2639:
case 1691:
case 3185:
case 3902:
case 3003:
case 2029:
case 3673:
case 2994:
case 169:
case 3706:
case 3054:
case 386:
case 189:
case 3259:
case 3606:
case 3552:
case 4062:
case 4088:
case 1403:
case 3692:
case 2040:
case 3124:
case 60:
case 2034:
case 3286:
case 3867:
case 2295:
case 1415:
case 3633:
case 3107:
case 1186:
case 2054:
case 847:
case 3881:
case 159:
case 3006:
case 2886:
case 1201:
case 913:
case 1121:
case 3998:
case 2687:
case 2275:
case 3813:
case 2556:
case 748:
case 304:
case 3796:
case 1575:
case 2146:
case 870:
case 3929:
case 212:
case 199:
case 3848:
case 2670:
case 78:
case 2720:
case 1336:
case 781:
case 504:
case 3583:
case 3704:
case 733:
case 3464:
case 1722:
case 89:
case 2574:
case 2392:
case 211:
case 4014:
case 3759:
case 1999:
case 3333:
case 3176:
case 2287:
case 97:
case 3232:
case 2681:
case 3406:
case 2495:
case 2005:
case 3559:
case 2155:
case 3240:
case 2967:
case 1849:
case 174:
case 2765:
case 3294:
case 3132:
case 2030:
case 578:
case 1634:
case 2685:
case 1042:
case 2402:
case 3053:
case 170:
case 3714:
case 1185:
case 2499:
case 2371:
case 2684:
case 1222:
case 2330:
case 20:
case 3901:
case 3610:
case 2351:
case 3223:
case 820:
case 3967:
case 2137:
case 3011:
case 829:
case 4060:
case 616:
case 2255:
case 381:
case 976:
case 1863:
case 810:
case 4035:
case 1134:
case 1298:
case 1411:
case 2074:
case 637:
case 2859:
case 2724:
case 1204:
case 2037:
case 850:
case 24:
case 2391:
case 3932:
case 513:
case 3625:
case 3002:
case 181:
case 1280:
case 716:
case 1139:
case 1971:
case 233:
case 2050:
case 1641:
case 2102:
case 1720:
case 3809:
case 421:
case 1181:
case 1541:
case 1480:
case 3302:
case 3627:
case 137:
case 2692:
case 2900:
case 1740:
case 2992:
case 2262:
case 2088:
case 2913:
case 2737:
case 1795:
case 3636:
case 1051:
case 961:
case 2970:
case 2216:
case 1168:
case 2665:
case 315:
case 3229:
case 18:
case 1825:
case 865:
case 2331:
case 2827:
case 3074:
case 2604:
case 3429:
case 623:
case 669:
case 1948:
case 3346:
case 1487:
case 2987:
case 2557:
case 3089:
case 601:
case 3718:
case 2406:
case 867:
case 1540:
case 1909:
case 2144:
case 2612:
case 3927:
case 152:
case 1643:
case 2656:
case 2753:
case 2865:
case 2629:
case 364:
case 2338:
case 675:
case 715:
case 3935:
case 1529:
case 3647:
case 4039:
case 1618:
case 3141:
case 3139:
case 1496:
case 1444:
case 861:
case 467:
case 2571:
case 1356:
case 1739:
case 1815:
case 1025:
case 3274:
case 4031:
case 527:
case 586:
case 2510:
case 3324:
case 309:
case 3887:
case 1509:
case 1212:
case 1249:
case 1135:
case 2959:
case 2781:
case 413:
case 3069:
case 537:
case 482:
case 3135:
case 1100:
case 1884:
case 1585:
case 3940:
case 3257:
case 3423:
case 1622:
case 761:
case 643:
case 3359:
case 1705:
case 3550:
case 626:
case 1309:
case 2870:
case 1644:
case 1453:
case 3043:
case 2868:
case 2115:
case 1359:
case 2019:
case 1079:
case 3395:
case 2135:
case 2883:
case 2382:
case 3605:
case 195:
case 235:
case 3791:
case 2586:
case 3473:
case 1814:
case 3770:
case 1556:
case 328:
case 54:
case 3322:
case 192:
case 2177:
case 1680:
case 3937:
case 3880:
case 2196:
case 3038:
case 2096:
case 3374:
case 950:
case 1753:
case 1576:
case 2226:
case 130:
case 3910:
case 3192:
case 4047:
case 141:
case 2918:
case 1282:
case 3005:
case 3555:
case 3539:
case 2675:
case 2056:
case 2774:
case 2887:
case 2619:
case 1749:
case 2340:
case 3950:
case 3138:
case 745:
case 2256:
case 3711:
case 1447:
case 3876:
case 1775:
case 509:
case 1365:
case 3506:
case 2709:
case 3458:
case 3334:
case 3595:
case 2545:
case 2875:
case 163:
case 3882:
case 4095:
case 435:
case 3732:
case 3080:
case 2770:
case 3114:
case 568:
case 1228:
case 3297:
case 3248:
case 525:
case 3327:
case 3050:
case 2968:
case 2801:
case 880:
case 1668:
case 319:
case 558:
case 1982:
case 3316:
case 1341:
case 2576:
case 809:
case 1919:
case 2060:
case 1933:
case 1830:
case 3228:
case 812:
case 2660:
case 2809:
case 1432:
case 2861:
case 3639:
case 1216:
case 3245:
case 8:
case 1333:
case 2601:
case 2062:
case 1388:
case 1515:
case 2540:
case 1482:
case 3065:
case 2385:
case 31:
case 941:
case 506:
case 942:
case 599:
case 3897:
case 3780:
case 1233:
case 4076:
case 2914:
case 3431:
case 3997:
case 645:
case 2145:
case 3298:
case 800:
case 1892:
case 2588:
case 62:
case 2384:
case 2564:
case 1470:
case 434:
case 2814:
case 2820:
case 260:
case 343:
case 3609:
case 3811:
case 2398:
case 2077:
case 387:
case 1964:
case 227:
case 1236:
case 2091:
case 3995:
case 82:
case 2182:
case 397:
case 3989:
case 604:
case 888:
case 3800:
case 3476:
case 3699:
case 117:
case 1012:
case 1289:
case 1750:
case 1211:
case 1381:
case 625:
case 283:
case 1811:
case 1032:
case 3206:
case 2498:
case 3118:
case 1512:
case 2350:
case 1203:
case 1754:
case 1606:
case 65:
case 3629:
case 2157:
case 3853:
case 1587:
case 468:
case 1191:
case 1977:
case 2867:
case 2984:
case 1639:
case 1300:
case 1225:
case 3808:
case 3798:
case 1871:
case 3904:
case 3790:
case 1591:
case 401:
case 1544:
case 2921:
case 1731:
case 1755:
case 1178:
case 1120:
case 1698:
case 570:
case 3621:
case 3674:
case 1162:
case 3591:
case 3456:
case 3852:
case 1114:
case 2500:
case 2848:
case 265:
case 939:
case 1160:
case 2092:
case 3742:
case 2010:
case 388:
case 3226:
case 3859:
case 2236:
case 1714:
case 220:
case 641:
case 689:
case 806:
case 3620:
case 2764:
case 955:
case 133:
case 307:
case 2636:
case 456:
case 827:
case 1787:
case 2911:
case 3162:
case 410:
case 2930:
case 3753:
case 2116:
case 4061:
case 2308:
case 1883:
case 1535:
case 1688:
case 3575:
case 2405:
case 2439:
case 3479:
case 274:
case 1678:
case 817:
case 919:
case 3984:
case 3804:
case 3814:
case 646:
case 3166:
case 3086:
case 3944:
case 2:
case 3765:
case 90:
case 516:
case 251:
case 1252:
case 3849:
case 1958:
case 1248:
case 1492:
case 3779:
case 3858:
case 3724:
case 2211:
case 1738:
case 2198:
case 2358:
case 512:
case 1301:
case 3886:
case 3931:
case 2621:
case 3009:
case 92:
case 788:
case 2523:
case 2181:
case 1071:
case 21:
case 128:
case 1232:
case 4051:
case 2755:
case 1019:
case 2642:
case 2715:
case 74:
case 154:
case 139:
case 2732:
case 1469:
case 2148:
case 3159:
case 2644:
case 3549:
case 1676:
case 1173:
case 4081:
case 55:
case 198:
case 2725:
case 280:
case 3515:
case 166:
case 507:
case 2778:
case 1264:
case 1022:
case 2213:
case 1910:
case 3172:
case 2580:
case 411:
case 2251:
case 3408:
case 2554:
case 3396:
case 3522:
case 2373:
case 2057:
case 1406:
case 2494:
case 1897:
case 912:
case 3561:
case 3677:
case 1466:
case 644:
case 550:
case 3803:
case 3996:
case 85:
case 79:
case 3999:
case 3517:
case 2437:
case 1537:
case 2674:
case 2953:
case 3671:
case 2238:
case 3767:
case 3917:
case 3368:
case 3036:
case 2536:
case 490:
case 2543:
case 659:
case 1970:
case 3341:
case 1367:
case 927:
case 2974:
case 3685:
case 346:
case 3405:
case 676:
case 494:
case 2910:
case 2943:
case 3109:
case 1625:
case 1485:
case 2435:
case 3868:
case 3076:
case 1672:
case 778:
case 3525:
case 3204:
case 3962:
case 2300:
case 740:
case 2624:
case 2203:
case 3331:
case 1764:
case 2906:
case 1774:
case 3822:
case 3869:
case 851:
case 1710:
case 1320:
case 1194:
case 193:
case 3363:
case 2616:
case 2972:
case 523:
case 417:
case 136:
case 2190:
case 2741:
case 4027:
case 1848:
case 3017:
case 2734:
case 2389:
case 2221:
case 3328:
case 1325:
case 2487:
case 3468:
case 2107:
case 1090:
case 991:
case 3965:
case 517:
case 1927:
case 1384:
case 2627:
case 1836:
case 3097:
case 140:
case 2833:
case 242:
case 2486:
case 3530:
case 1255:
case 1083:
case 3870:
case 1151:
case 53:
case 1279:
case 1304:
case 1461:
case 3728:
case 1095:
case 3707:
case 3186:
case 1652:
case 2896:
case 1085:
case 1924:
case 3972:
case 124:
case 929:
case 2339:
case 1546:
case 620:
case 4093:
case 3596:
case 3233:
case 1881:
case 200:
case 1837:
case 3414:
case 4010:
case 3442:
case 2122:
case 2344:
case 2562:
case 1494:
case 19:
case 618:
case 2134:
case 502:
case 1141:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1694995202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,];
var gg_b = "1694995202/";

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
