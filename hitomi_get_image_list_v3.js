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
case 1761:
case 4063:
case 2254:
case 4020:
case 3632:
case 4066:
case 1191:
case 1095:
case 3105:
case 40:
case 340:
case 717:
case 971:
case 563:
case 1832:
case 102:
case 2722:
case 2817:
case 3856:
case 3317:
case 2648:
case 2452:
case 1166:
case 4071:
case 995:
case 2674:
case 1685:
case 205:
case 3249:
case 3472:
case 2414:
case 539:
case 2088:
case 2696:
case 2923:
case 3335:
case 3761:
case 3326:
case 3652:
case 397:
case 577:
case 3123:
case 172:
case 3947:
case 1781:
case 2685:
case 1029:
case 3462:
case 3635:
case 1791:
case 3225:
case 621:
case 3839:
case 3146:
case 1721:
case 4080:
case 1850:
case 3631:
case 3480:
case 1421:
case 1146:
case 725:
case 1052:
case 2724:
case 3084:
case 3853:
case 3018:
case 2634:
case 1601:
case 571:
case 1642:
case 2050:
case 2919:
case 2190:
case 2171:
case 2105:
case 1681:
case 3501:
case 1602:
case 3069:
case 2292:
case 3826:
case 439:
case 2310:
case 3582:
case 782:
case 2960:
case 1466:
case 151:
case 2029:
case 606:
case 2991:
case 1444:
case 1714:
case 425:
case 2071:
case 537:
case 2323:
case 980:
case 2644:
case 943:
case 3755:
case 2791:
case 1034:
case 2510:
case 1070:
case 3086:
case 2437:
case 2947:
case 2545:
case 1576:
case 3658:
case 2750:
case 1402:
case 1951:
case 2689:
case 3864:
case 331:
case 1156:
case 2518:
case 2129:
case 2533:
case 2463:
case 2274:
case 812:
case 1047:
case 1122:
case 2746:
case 1337:
case 1040:
case 3979:
case 3083:
case 298:
case 419:
case 3407:
case 3162:
case 966:
case 2532:
case 1133:
case 1532:
case 1290:
case 4078:
case 2981:
case 3624:
case 2019:
case 1900:
case 2480:
case 1736:
case 2286:
case 1778:
case 3181:
case 2998:
case 436:
case 302:
case 2858:
case 4082:
case 3057:
case 2710:
case 4050:
case 1067:
case 3184:
case 32:
case 1184:
case 22:
case 513:
case 3804:
case 2878:
case 3411:
case 474:
case 1630:
case 904:
case 3570:
case 1544:
case 3428:
case 676:
case 2066:
case 1655:
case 694:
case 3060:
case 2851:
case 413:
case 858:
case 3156:
case 3163:
case 3886:
case 601:
case 2881:
case 2988:
case 2631:
case 391:
case 2610:
case 2220:
case 3111:
case 3574:
case 3766:
case 1786:
case 2376:
case 3207:
case 2577:
case 2849:
case 46:
case 1455:
case 2361:
case 2764:
case 579:
case 844:
case 2472:
case 96:
case 3003:
case 3767:
case 906:
case 1334:
case 3362:
case 1730:
case 3903:
case 2022:
case 4044:
case 3768:
case 2462:
case 4061:
case 901:
case 2975:
case 3727:
case 200:
case 442:
case 2492:
case 823:
case 1906:
case 814:
case 921:
case 3668:
case 919:
case 3258:
case 1022:
case 2042:
case 2080:
case 3487:
case 3605:
case 3441:
case 1651:
case 2297:
case 2265:
case 1359:
case 942:
case 1841:
case 1019:
case 3998:
case 1408:
case 2701:
case 393:
case 3683:
case 870:
case 1018:
case 2573:
case 758:
case 3056:
case 2917:
case 3421:
case 988:
case 3234:
case 213:
case 2128:
case 2094:
case 499:
case 2261:
case 2901:
case 483:
case 1103:
case 2667:
case 132:
case 1305:
case 568:
case 2941:
case 2595:
case 3982:
case 3776:
case 1371:
case 257:
case 345:
case 1809:
case 3514:
case 2730:
case 4016:
case 2371:
case 3322:
case 1524:
case 1462:
case 2289:
case 2103:
case 3327:
case 2894:
case 3602:
case 3638:
case 2879:
case 1814:
case 470:
case 3722:
case 1826:
case 1946:
case 1958:
case 1643:
case 125:
case 423:
case 1356:
case 212:
case 2131:
case 3253:
case 3653:
case 3789:
case 3781:
case 1886:
case 2406:
case 3229:
case 3477:
case 703:
case 3928:
case 57:
case 1920:
case 3506:
case 289:
case 2350:
case 3310:
case 426:
case 888:
case 772:
case 2084:
case 3944:
case 1104:
case 2876:
case 847:
case 1101:
case 1038:
case 1962:
case 3313:
case 1895:
case 148:
case 4057:
case 121:
case 742:
case 3740:
case 3093:
case 1538:
case 247:
case 3912:
case 2736:
case 965:
case 3387:
case 753:
case 1224:
case 3865:
case 1173:
case 783:
case 570:
case 2139:
case 245:
case 2562:
case 3954:
case 2476:
case 3109:
case 1663:
case 1851:
case 1763:
case 3575:
case 3445:
case 3265:
case 877:
case 896:
case 2067:
case 900:
case 3771:
case 3924:
case 2952:
case 3716:
case 3661:
case 3625:
case 1463:
case 288:
case 2655:
case 2308:
case 3372:
case 3298:
case 2303:
case 2485:
case 3100:
case 3678:
case 791:
case 952:
case 3693:
case 2707:
case 3791:
case 84:
case 1514:
case 3289:
case 2288:
case 353:
case 1278:
case 1409:
case 2365:
case 268:
case 2266:
case 1412:
case 2494:
case 108:
case 1528:
case 2379:
case 1474:
case 3159:
case 1308:
case 171:
case 3774:
case 3334:
case 2547:
case 3904:
case 709:
case 3750:
case 1302:
case 1784:
case 2856:
case 87:
case 3794:
case 1723:
case 4034:
case 204:
case 3974:
case 396:
case 1936:
case 3177:
case 437:
case 1301:
case 1986:
case 1376:
case 1922:
case 1516:
case 580:
case 3718:
case 970:
case 3296:
case 1148:
case 1567:
case 2950:
case 542:
case 1379:
case 4093:
case 3188:
case 222:
case 1183:
case 124:
case 2091:
case 2625:
case 3279:
case 262:
case 1940:
case 1872:
case 444:
case 4053:
case 647:
case 3475:
case 75:
case 3044:
case 1213:
case 2769:
case 936:
case 3753:
case 597:
case 1288:
case 2774:
case 671:
case 2120:
case 2695:
case 2896:
case 2907:
case 2520:
case 1744:
case 2270:
case 999:
case 1123:
case 1363:
case 779:
case 2619:
case 1848:
case 2188:
case 2404:
case 2579:
case 4074:
case 3526:
case 210:
case 3908:
case 556:
case 165:
case 1418:
case 2822:
case 2932:
case 3800:
case 806:
case 646:
case 275:
case 223:
case 2656:
case 1955:
case 41:
case 20:
case 387:
case 985:
case 3072:
case 2388:
case 673:
case 3562:
case 369:
case 3311:
case 1512:
case 3961:
case 544:
case 508:
case 1454:
case 1901:
case 704:
case 4027:
case 710:
case 1268:
case 3881:
case 2363:
case 2812:
case 3666:
case 229:
case 3674:
case 3724:
case 287:
case 2237:
case 2333:
case 1572:
case 1261:
case 2072:
case 2733:
case 1869:
case 2096:
case 2940:
case 2256:
case 1283:
case 3299:
case 3174:
case 3874:
case 2424:
case 2628:
case 114:
case 466:
case 2985:
case 826:
case 681:
case 3301:
case 3468:
case 93:
case 209:
case 1088:
case 2612:
case 2905:
case 3780:
case 554:
case 104:
case 2824:
case 282:
case 869:
case 1853:
case 2448:
case 3242:
case 3779:
case 2830:
case 3294:
case 3149:
case 291:
case 2895:
case 1554:
case 797:
case 3595:
case 475:
case 2971:
case 1648:
case 1298:
case 3011:
case 2813:
case 3332:
case 1615:
case 224:
case 3494:
case 316:
case 3505:
case 3967:
case 604:
case 2312:
case 326:
case 2165:
case 3721:
case 501:
case 3245:
case 1976:
case 1193:
case 507:
case 3452:
case 1202:
case 1819:
case 928:
case 2159:
case 2248:
case 1596:
case 2126:
case 8:
case 3863:
case 2403:
case 3323:
case 1481:
case 3608:
case 839:
case 2107:
case 2833:
case 452:
case 2796:
case 1483:
case 1176:
case 1002:
case 1020:
case 1307:
case 465:
case 672:
case 2719:
case 2921:
case 1838:
case 3626:
case 3960:
case 3192:
case 1785:
case 2507:
case 52:
case 3754:
case 5:
case 3682:
case 2469:
case 588:
case 123:
case 587:
case 533:
case 3080:
case 493:
case 3671:
case 526:
case 1222:
case 926:
case 1108:
case 1054:
case 3073:
case 627:
case 1118:
case 2201:
case 4017:
case 1902:
case 1119:
case 1511:
case 3877:
case 1683:
case 2488:
case 1628:
case 363:
case 1053:
case 206:
case 718:
case 3291:
case 2325:
case 2718:
case 3601:
case 3081:
case 895:
case 271:
case 1011:
case 280:
case 2358:
case 3706:
case 3860:
case 267:
case 2859:
case 3397:
case 3540:
case 3071:
case 2024:
case 1297:
case 1126:
case 3645:
case 2210:
case 3837:
case 736:
case 846:
case 2031:
case 3193:
case 2332:
case 674:
case 2294:
case 3329:
case 589:
case 3655:
case 3138:
case 608:
case 514:
case 2650:
case 3221:
case 949:
case 3318:
case 3252:
case 1591:
case 2747:
case 3304:
case 2784:
case 2454:
case 789:
case 1049:
case 1196:
case 1894:
case 1143:
case 776:
case 1080:
case 2574:
case 285:
case 1380:
case 1669:
case 1932:
case 3063:
case 428:
case 60:
case 3646:
case 680:
case 3556:
case 3830:
case 2438:
case 1187:
case 3599:
case 1157:
case 3600:
case 3099:
case 3699:
case 848:
case 1891:
case 3798:
case 3529:
case 3482:
case 2218:
case 94:
case 524:
case 2607:
case 51:
case 2352:
case 1536:
case 3451:
case 1491:
case 670:
case 3209:
case 1617:
case 1604:
case 427:
case 2864:
case 1227:
case 2355:
case 564:
case 1623:
case 1698:
case 689:
case 2937:
case 1384:
case 1215:
case 2558:
case 2028:
case 2392:
case 127:
case 42:
case 3250:
case 1125:
case 2282:
case 303:
case 2886:
case 3659:
case 981:
case 3675:
case 1488:
case 3384:
case 3308:
case 347:
case 555:
case 3365:
case 3448:
case 2044:
case 24:
case 2479:
case 3665:
case 1867:
case 3959:
case 3707:
case 3531:
case 1821:
case 1365:
case 3923:
case 2865:
case 306:
case 2009:
case 384:
case 3504:
case 3370:
case 3255:
case 2255:
case 1311:
case 1397:
case 1758:
case 2198:
case 876:
case 235:
case 1253:
case 1672:
case 98:
case 3929:
case 1117:
case 640:
case 2090:
case 3932:
case 3195:
case 1692:
case 669:
case 2868:
case 3036:
case 3607:
case 1271:
case 495:
case 1708:
case 272:
case 2345:
case 3350:
case 3936:
case 850:
case 786:
case 2636:
case 1083:
case 686:
case 1378:
case 3756:
case 1667:
case 1720:
case 2224:
case 1547:
case 2251:
case 2179:
case 1535:
case 1342:
case 471:
case 1767:
case 408:
case 3509:
case 1747:
case 341:
case 1527:
case 1985:
case 3867:
case 748:
case 2848:
case 3729:
case 2269:
case 3155:
case 1024:
case 2194:
case 492:
case 1700:
case 3956:
case 3488:
case 329:
case 1340:
case 518:
case 3135:
case 958:
case 792:
case 976:
case 983:
case 1779:
case 1542:
case 336:
case 1494:
case 3101:
case 1948:
case 2446:
case 1325:
case 2184:
case 1680:
case 1652:
case 1366:
case 1980:
case 1521:
case 530:
case 1102:
case 1768:
case 3623:
case 1374:
case 644:
case 1824:
case 3325:
case 2862:
case 3273:
case 575:
case 1582:
case 2611:
case 2785:
case 295:
case 243:
case 3790:
case 3876:
case 735:
case 1292:
case 1635:
case 3512:
case 1304:
case 808:
case 2602:
case 798:
case 3828:
case 1201:
case 993:
case 2651:
case 3068:
case 661:
case 297:
case 2011:
case 1772:
case 3742:
case 2977:
case 1039:
case 1780:
case 2119:
case 687:
case 1970:
case 2144:
case 3993:
case 1457:
case 2964:
case 2789:
case 4048:
case 1693:
case 862:
case 3842:
case 2304:
case 3019:
case 3897:
case 3709:
case 2169:
case 2955:
case 3284:
case 3151:
case 2003:
case 1973:
case 1008:
case 3966:
case 192:
case 1167:
case 3660:
case 195:
case 506:
case 153:
case 3816:
case 3568:
case 2951:
case 2622:
case 944:
case 3347:
case 3131:
case 1414:
case 435:
case 9:
case 2672:
case 3621:
case 2986:
case 3496:
case 3650:
case 2711:
case 2122:
case 2199:
case 1352:
case 2468:
case 100:
case 1465:
case 3231:
case 2271:
case 3175:
case 3456:
case 4087:
case 834:
case 1160:
case 3538:
case 476:
case 2342:
case 3618:
case 3581:
case 743:
case 3859:
case 1794:
case 3916:
case 2473:
case 1273:
case 2527:
case 2430:
case 155:
case 39:
case 3145:
case 631:
case 3518:
case 2645:
case 1335:
case 458:
case 1636:
case 1959:
case 1543:
case 2641:
case 3542:
case 2343:
case 1525:
case 2152:
case 1490:
case 188:
case 181:
case 2521:
case 2384:
case 1577:
case 3190:
case 2605:
case 3062:
case 502:
case 1276:
case 2025:
case 3027:
case 2387:
case 2418:
case 1162:
case 2585:
case 3805:
case 3510:
case 1517:
case 1427:
case 2037:
case 1056:
case 1141:
case 1675:
case 1469:
case 3215:
case 3943:
case 1216:
case 4029:
case 368:
case 3639:
case 3164:
case 3023:
case 1998:
case 1638:
case 728:
case 1632:
case 2679:
case 185:
case 1085:
case 1338:
case 167:
case 938:
case 3340:
case 3420:
case 164:
case 2464:
case 2478:
case 3307:
case 2243:
case 3169:
case 80:
case 299:
case 1182:
case 2432:
case 2967:
case 99:
case 3490:
case 1941:
case 2004:
case 1679:
case 3573:
case 2760:
case 2082:
case 2046:
case 4086:
case 1717:
case 937:
case 1756:
case 1849:
case 3404:
case 2821:
case 3185:
case 1881:
case 2844:
case 1158:
case 1017:
case 1606:
case 3408:
case 1320:
case 852:
case 3316:
case 1217:
case 110:
case 1448:
case 607:
case 2329:
case 1812:
case 1094:
case 788:
case 585:
case 43:
case 1559:
case 1966:
case 3589:
case 795:
case 226:
case 2741:
case 3267:
case 1614:
case 4088:
case 889:
case 2840:
case 3465:
case 1392:
case 2259:
case 3815:
case 1678:
case 2535:
case 2731:
case 2508:
case 3067:
case 2677:
case 619:
case 2752:
case 1783:
case 3546:
case 2258:
case 1046:
case 3065:
case 911:
case 2357:
case 3413:
case 2309:
case 793:
case 899:
case 2247:
case 1289:
case 3855:
case 2979:
case 2728:
case 841:
case 2683:
case 2386:
case 2552:
case 1533:
case 2163:
case 2559:
case 3978:
case 1840:
case 3560:
case 18:
case 1181:
case 1909:
case 1764:
case 358:
case 883:
case 2253:
case 2439:
case 1974:
case 586:
case 3834:
case 828:
case 1935:
case 504:
case 553:
case 2347:
case 1250:
case 1237:
case 3263:
case 1351:
case 4062:
case 260:
case 691:
case 4069:
case 2305:
case 1318:
case 321:
case 1728:
case 1885:
case 1194:
case 549:
case 3078:
case 3098:
case 3854:
case 785:
case 332:
case 3085:
case 2075:
case 3697:
case 1109:
case 2737:
case 1569:
case 2118:
case 511:
case 3166:
case 3572:
case 3075:
case 1066:
case 1197:
case 903:
case 3300:
case 3846:
case 3887:
case 1594:
case 1943:
case 3241:
case 3981:
case 745:
case 918:
case 2639:
case 1130:
case 2652:
case 1267:
case 4085:
case 3212:
case 2880:
case 3179:
case 2226:
case 3914:
case 3495:
case 3939:
case 141:
case 2166:
case 1989:
case 1971:
case 3269:
case 1200:
case 861:
case 755:
case 1945:
case 754:
case 3355:
case 1074:
case 2214:
case 768:
case 873:
case 2943:
case 3516:
case 3656:
case 3203:
case 431:
case 3802:
case 3989:
case 1944:
case 738:
case 968:
case 2560:
case 1883:
case 269:
case 3354:
case 1336:
case 2721:
case 1802:
case 2087:
case 2819:
case 2337:
case 1131:
case 796:
case 925:
case 1804:
case 4064:
case 3571:
case 1274:
case 2125:
case 2481:
case 1760:
case 239:
case 3869:
case 3935:
case 1874:
case 3171:
case 1393:
case 2221:
case 1925:
case 2074:
case 286:
case 3091:
case 95:
case 2565:
case 3714:
case 2136:
case 3611:
case 950:
case 1829:
case 2263:
case 799:
case 2904:
case 1256:
case 2714:
case 2777:
case 581:
case 3010:
case 3227:
case 1837:
case 3902:
case 411:
case 2800:
case 2987:
case 3228:
case 2377:
case 3489:
case 2121:
case 2041:
case 739:
case 1134:
case 2336:
case 68:
case 731:
case 1472:
case 3237:
case 1420:
case 2235:
case 2596:
case 2925:
case 2177:
case 1369:
case 1770:
case 3324:
case 3374:
case 1942:
case 3182:
case 3922:
case 3708:
case 2373:
case 480:
case 946:
case 1719:
case 2970:
case 2174:
case 562:
case 2230:
case 352:
case 853:
case 3823:
case 1671:
case 3715:
case 2980:
case 2307:
case 2314:
case 1627:
case 1175:
case 914:
case 3137:
case 2593:
case 3090:
case 3824:
case 2499:
case 3097:
case 2244:
case 3148:
case 174:
case 820:
case 770:
case 2007:
case 1492:
case 2909:
case 1742:
case 722:
case 90:
case 547:
case 1865:
case 3440:
case 1813:
case 448:
case 1272:
case 3663:
case 2506:
case 1493:
case 964:
case 2765:
case 3807:
case 3534:
case 1132:
case 2735:
case 3376:
case 639:
case 3882:
case 757:
case 3585:
case 4004:
case 3275:
case 503:
case 1911:
case 1724:
case 2208:
case 277:
case 1059:
case 4023:
case 1025:
case 1877:
case 1864:
case 2893:
case 1106:
case 1063:
case 1984:
case 1808:
case 2762:
case 2847:
case 1515:
case 4009:
case 1400:
case 2291:
case 357:
case 3723:
case 536:
case 3523:
case 106:
case 756:
case 473:
case 3884:
case 935:
case 990:
case 2104:
case 2946:
case 2621:
case 1631:
case 218:
case 3002:
case 2835:
case 230:
case 3344:
case 955:
case 1735:
case 630:
case 2572:
case 1733:
case 2456:
case 1508:
case 1097:
case 2913:
case 2133:
case 1845:
case 2793:
case 3458:
case 1961:
case 716:
case 885:
case 3933:
case 4065:
case 654:
case 3536:
case 2300:
case 2429:
case 565:
case 2496:
case 2963:
case 1:
case 142:
case 1801:
case 923:
case 4058:
case 3548:
case 1015:
case 2902:
case 1587:
case 13:
case 1057:
case 3691:
case 984:
case 4070:
case 2531:
case 266:
case 2397:
case 1247:
case 3717:
case 729:
case 1045:
case 4095:
case 2637:
case 2284:
case 3248:
case 2036:
case 2772:
case 1581:
case 70:
case 1395:
case 771:
case 310:
case 1519:
case 1898:
case 1978:
case 969:
case 1229:
case 424:
case 3941:
case 2189:
case 3173:
case 2497:
case 2060:
case 633:
case 3788:
case 2646:
case 740:
case 2906:
case 3587:
case 489:
case 2553:
case 2920:
case 2026:
case 3319:
case 837:
case 2601:
case 2826:
case 1880:
case 312:
case 1835:
case 3321:
case 3787:
case 1129:
case 3026:
case 12:
case 1999:
case 1738:
case 3434:
case 1482:
case 3594:
case 1416:
case 2335:
case 135:
case 599:
case 1407:
case 38:
case 1893:
case 2814:
case 307:
case 2015:
case 1178:
case 3970:
case 1135:
case 4045:
case 2659:
case 1243:
case 420:
case 614:
case 1775:
case 2001:
case 1005:
case 2794:
case 1957:
case 4060:
case 1432:
case 241:
case 720:
case 1797:
case 1661:
case 2340:
case 824:
case 2398:
case 3640:
case 4094:
case 3949:
case 250:
case 2732:
case 1470:
case 2887:
case 2934:
case 2618:
case 1782:
case 523:
case 407:
case 2770:
case 83:
case 2758:
case 487:
case 1899:
case 1430:
case 2517:
case 2212:
case 2915:
case 2870:
case 3569:
case 2069:
case 1660:
case 456:
case 338:
case 2933:
case 3297:
case 67:
case 578:
case 1619:
case 1580:
case 1111:
case 2818:
case 3850:
case 1523:
case 191:
case 3696:
case 701:
case 1873:
case 438:
case 1310:
case 1621:
case 1471:
case 1349:
case 374:
case 3461:
case 2643:
case 1240:
case 567:
case 313:
case 3274:
case 1190:
case 334:
case 1153:
case 3614:
case 455:
case 1847:
case 3256:
case 1058:
case 622:
case 3515:
case 190:
case 59:
case 3835:
case 1422:
case 356:
case 2594:
case 1610:
case 2277:
case 2193:
case 4079:
case 1892:
case 2205:
case 2725:
case 3985:
case 813:
case 339:
case 3239:
case 842:
case 231:
case 727:
case 1915:
case 3481:
case 3202:
case 2836:
case 3627:
case 1321:
case 2524:
case 3832:
case 3115:
case 574:
case 1347:
case 1910:
case 908:
case 1477:
case 561:
case 3616:
case 541:
case 1001:
case 3986:
case 305:
case 3851:
case 3106:
case 2241:
case 2908:
case 1684:
case 1077:
case 3808:
case 874:
case 3330:
case 1484:
case 2400:
case 2759:
case 794:
case 3513:
case 3427:
case 348:
case 3264:
case 3303:
case 1186:
case 882:
case 832:
case 3122:
case 3906:
case 2930:
case 3617:
case 1866:
case 1322:
case 1086:
case 3066:
case 635:
case 2997:
case 3055:
case 656:
case 643:
case 2141:
case 784:
case 472:
case 2383:
case 1502:
case 2375:
case 3276:
case 3455:
case 2215:
case 3843:
case 1913:
case 2:
case 1440:
case 920:
case 986:
case 385:
case 1405:
case 2148:
case 2712:
case 1434:
case 430:
case 532:
case 1933:
case 1972:
case 3038:
case 445:
case 2522:
case 3419:
case 2525:
case 29:
case 3438:
case 620:
case 1878:
case 2489:
case 4083:
case 4018:
case 2020:
case 1251:
case 3415:
case 1423:
case 1811:
case 610:
case 103:
case 498:
case 881:
case 860:
case 4015:
case 2006:
case 317:
case 365:
case 2354:
case 2740:
case 3266:
case 987:
case 1147:
case 1975:
case 2958:
case 3690:
case 777:
case 2032:
case 866:
case 1241:
case 2264:
case 1282:
case 4090:
case 2101:
case 2315:
case 2085:
case 602:
case 2564:
case 2092:
case 803:
case 3907:
case 3112:
case 2200:
case 2806:
case 2035:
case 2742:
case 2534:
case 1589:
case 1963:
case 642:
case 311:
case 1319:
case 2694:
case 366:
case 1438:
case 1072:
case 909:
case 2278:
case 2810:
case 3403:
case 886:
case 3551:
case 1831:
case 2149:
case 1150:
case 3641:
case 2219:
case 2885:
case 3402:
case 790:
case 1082:
case 1453:
case 1220:
case 220:
case 3160:
case 3965:
case 3759:
case 2211:
case 3394:
case 930:
case 4013:
case 2757:
case 3669:
case 3736:
case 2311:
case 1030:
case 3031:
case 1327:
case 304:
case 415:
case 3681:
case 1233:
case 552:
case 1226:
case 1330:
case 1429:
case 1743:
case 2668:
case 2349:
case 2252:
case 2841:
case 3005:
case 2470:
case 2366:
case 2223:
case 2935:
case 4091:
case 1287:
case 3240:
case 3847:
case 2155:
case 2693:
case 1754:
case 4000:
case 719:
case 118:
case 522:
case 1078:
case 27:
case 1016:
case 3822:
case 169:
case 3004:
case 469:
case 2053:
case 320:
case 1701:
case 2051:
case 2805:
case 3009:
case 712:
case 652:
case 3035:
case 1600:
case 1657:
case 2475:
case 572:
case 380:
case 1979:
case 3710:
case 354:
case 3041:
case 1575:
case 683:
case 1114:
case 609:
case 598:
case 107:
case 279:
case 467:
case 2000:
case 232:
case 69:
case 2916:
case 1795:
case 3392:
case 1221:
case 2108:
case 804:
case 3849:
case 1205:
case 2164:
case 2186:
case 1339:
case 178:
case 2658:
case 1790:
case 2892:
case 3029:
case 3545:
case 4084:
case 3820:
case 3672:
case 1000:
case 1390:
case 4021:
case 2778:
case 859:
case 527:
case 3552:
case 1460:
case 2926:
case 864:
case 2538:
case 1262:
case 2498:
case 335:
case 2635:
case 3381:
case 273:
case 902:
case 2924:
case 1314:
case 1859:
case 2281:
case 2293:
case 3257:
case 2872:
case 3260:
case 1437:
case 2390:
case 2516:
case 2792:
case 2687:
case 2766:
case 3701:
case 668:
case 2134:
case 3872:
case 1522:
case 629:
case 1048:
case 3236:
case 1263:
case 92:
case 3829:
case 496:
case 1014:
case 3028:
case 4019:
case 894:
case 36:
case 1050:
case 177:
case 2334:
case 3609:
case 1726:
case 1107:
case 2422:
case 2829:
case 833:
case 1013:
case 893:
case 3232:
case 1876:
case 3014:
case 802:
case 1006:
case 1579:
case 956:
case 333:
case 3339:
case 583:
case 3492:
case 1355:
case 2883:
case 2953:
case 2617:
case 2749:
case 2554:
case 3593:
case 2512:
case 2043:
case 3764:
case 1377:
case 2936:
case 1611:
case 3532:
case 3720:
case 3165:
case 2225:
case 3783:
case 246:
case 1597:
case 3314:
case 3747:
case 2713:
case 111:
case 4077:
case 314:
case 929:
case 3454:
case 1061:
case 3528:
case 698:
case 665:
case 3673:
case 576:
case 807:
case 1599:
case 1433:
case 747:
case 2948:
case 697:
case 478:
case 1503:
case 484:
case 3254:
case 816:
case 2884:
case 1750:
case 2192:
case 2232:
case 2591:
case 145:
case 767:
case 2005:
case 2706:
case 3268:
case 3348:
case 2268:
case 1616:
case 2272:
case 184:
case 3433:
case 3150:
case 1753:
case 390:
case 3158:
case 1607:
case 382:
case 1995:
case 1551:
case 519:
case 3946:
case 79:
case 294:
case 2855:
case 1394:
case 1822:
case 3393:
case 2324:
case 3584:
case 189:
case 1550:
case 2040:
case 1452:
case 152:
case 4005:
case 2726:
case 3424:
case 2459:
case 1500:
case 4043:
case 1954:
case 1820:
case 101:
case 835:
case 3483:
case 1806:
case 112:
case 3634:
case 76:
case 2660:
case 3410:
case 2306:
case 3406:
case 3396:
case 3414:
case 948:
case 309:
case 3389:
case 4011:
case 3360:
case 3351:
case 2994:
case 4006:
case 975:
case 2903:
case 3247:
case 752:
case 1328:
case 2682:
case 3467:
case 2976:
case 3453:
case 3198:
case 3043:
case 3628:
case 1931:
case 3051:
case 3704:
case 3888:
case 1411:
case 3563:
case 1705:
case 1506:
case 3219:
case 2882:
case 4025:
case 1375:
case 1677:
case 1207:
case 3598:
case 2781:
case 2566:
case 1673:
case 418:
case 2661:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1689267602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,];
var gg_b = "1689267602/";

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
