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
case 2958:
case 3954:
case 417:
case 1079:
case 2291:
case 3836:
case 1998:
case 2690:
case 2214:
case 960:
case 1390:
case 719:
case 2934:
case 2301:
case 3033:
case 3476:
case 3263:
case 903:
case 452:
case 1569:
case 2275:
case 1680:
case 1708:
case 3743:
case 2270:
case 1063:
case 3825:
case 1212:
case 1920:
case 45:
case 233:
case 1126:
case 975:
case 2354:
case 1252:
case 2642:
case 1076:
case 230:
case 1393:
case 104:
case 3341:
case 3222:
case 827:
case 2341:
case 241:
case 1909:
case 6:
case 435:
case 370:
case 1034:
case 3733:
case 2700:
case 3073:
case 315:
case 3477:
case 2555:
case 3249:
case 2384:
case 1891:
case 3272:
case 2813:
case 1057:
case 706:
case 3805:
case 664:
case 753:
case 513:
case 2360:
case 2299:
case 1071:
case 1432:
case 1870:
case 2737:
case 2653:
case 3317:
case 2685:
case 3463:
case 1283:
case 1392:
case 3932:
case 3870:
case 3646:
case 3358:
case 1742:
case 3596:
case 500:
case 3467:
case 2987:
case 2557:
case 3367:
case 2090:
case 4018:
case 1036:
case 1443:
case 226:
case 940:
case 1298:
case 2604:
case 3597:
case 2931:
case 3708:
case 528:
case 3076:
case 278:
case 995:
case 757:
case 471:
case 970:
case 1861:
case 675:
case 2901:
case 2185:
case 1981:
case 3160:
case 2022:
case 294:
case 2231:
case 1520:
case 2493:
case 2068:
case 303:
case 1516:
case 2547:
case 296:
case 2011:
case 3070:
case 3609:
case 3213:
case 2014:
case 1145:
case 2614:
case 3431:
case 319:
case 1752:
case 2728:
case 1560:
case 1566:
case 1597:
case 2542:
case 3670:
case 363:
case 2776:
case 671:
case 2244:
case 3908:
case 976:
case 1952:
case 3171:
case 1227:
case 3626:
case 340:
case 453:
case 865:
case 1851:
case 621:
case 2619:
case 3230:
case 483:
case 1717:
case 3847:
case 3356:
case 3324:
case 2035:
case 1831:
case 3717:
case 1310:
case 2626:
case 2171:
case 3071:
case 2992:
case 3590:
case 3190:
case 923:
case 3969:
case 374:
case 1836:
case 3290:
case 2980:
case 3295:
case 3907:
case 292:
case 1360:
case 788:
case 2611:
case 1068:
case 3436:
case 3664:
case 551:
case 2:
case 147:
case 58:
case 2342:
case 372:
case 1536:
case 3681:
case 2076:
case 3695:
case 1671:
case 741:
case 3183:
case 1962:
case 4031:
case 1665:
case 952:
case 3981:
case 1473:
case 2488:
case 1484:
case 130:
case 3376:
case 1273:
case 965:
case 3967:
case 3570:
case 161:
case 99:
case 949:
case 41:
case 587:
case 173:
case 3482:
case 708:
case 649:
case 1997:
case 2759:
case 971:
case 1339:
case 4060:
case 1548:
case 2092:
case 1319:
case 2030:
case 4078:
case 3103:
case 1947:
case 711:
case 3012:
case 1589:
case 3996:
case 765:
case 477:
case 1958:
case 243:
case 1773:
case 4048:
case 284:
case 3168:
case 2029:
case 3280:
case 2753:
case 2752:
case 2273:
case 1612:
case 2040:
case 1397:
case 1245:
case 1233:
case 148:
case 1131:
case 596:
case 1528:
case 3975:
case 1577:
case 3373:
case 3002:
case 2756:
case 3660:
case 1409:
case 1440:
case 2610:
case 2641:
case 449:
case 1085:
case 3351:
case 773:
case 1624:
case 176:
case 1505:
case 1250:
case 835:
case 1902:
case 1663:
case 659:
case 2187:
case 2552:
case 2101:
case 3688:
case 1584:
case 3187:
case 112:
case 459:
case 4020:
case 527:
case 2691:
case 977:
case 3403:
case 2168:
case 2657:
case 3684:
case 2197:
case 3008:
case 2455:
case 2484:
case 1215:
case 2682:
case 321:
case 2554:
case 617:
case 1341:
case 2108:
case 3874:
case 211:
case 1859:
case 3679:
case 3136:
case 3084:
case 2858:
case 3672:
case 1873:
case 3937:
case 3934:
case 2424:
case 164:
case 166:
case 510:
case 3757:
case 1885:
case 833:
case 1320:
case 3354:
case 908:
case 738:
case 184:
case 3484:
case 816:
case 1275:
case 3132:
case 2412:
case 2971:
case 1355:
case 1101:
case 1779:
case 648:
case 2144:
case 3532:
case 2881:
case 1260:
case 1293:
case 2821:
case 313:
case 3262:
case 345:
case 2272:
case 4043:
case 1419:
case 3634:
case 136:
case 3458:
case 2865:
case 3878:
case 2188:
case 3199:
case 933:
case 1445:
case 1917:
case 518:
case 57:
case 2242:
case 1134:
case 2892:
case 3605:
case 3419:
case 1904:
case 3556:
case 3247:
case 1255:
case 200:
case 2514:
case 2688:
case 3762:
case 820:
case 3023:
case 228:
case 4026:
case 1450:
case 1399:
case 3750:
case 2282:
case 3579:
case 3640:
case 3916:
case 3988:
case 3210:
case 2226:
case 30:
case 747:
case 1530:
case 2317:
case 1818:
case 1458:
case 1595:
case 2140:
case 3110:
case 3042:
case 3357:
case 1790:
case 317:
case 815:
case 1009:
case 2222:
case 2089:
case 2333:
case 1052:
case 2280:
case 2768:
case 2548:
case 3904:
case 3998:
case 2208:
case 1632:
case 1635:
case 1109:
case 1839:
case 2583:
case 2883:
case 1767:
case 3813:
case 795:
case 928:
case 238:
case 330:
case 3712:
case 1729:
case 324:
case 1561:
case 3817:
case 990:
case 2026:
case 2306:
case 2067:
case 2920:
case 1151:
case 2595:
case 651:
case 855:
case 456:
case 2973:
case 642:
case 310:
case 1026:
case 3028:
case 1387:
case 761:
case 1192:
case 1278:
case 2274:
case 2963:
case 1015:
case 2441:
case 2239:
case 1333:
case 388:
case 3985:
case 139:
case 1794:
case 183:
case 1943:
case 2652:
case 2374:
case 2111:
case 3945:
case 3029:
case 897:
case 1976:
case 3493:
case 1241:
case 1621:
case 3891:
case 3900:
case 999:
case 939:
case 3253:
case 3192:
case 1936:
case 1314:
case 1163:
case 74:
case 3133:
case 825:
case 2668:
case 272:
case 1062:
case 2439:
case 3384:
case 2705:
case 1479:
case 870:
case 3277:
case 354:
case 3868:
case 3613:
case 401:
case 3616:
case 3097:
case 3812:
case 3031:
case 1435:
case 924:
case 2820:
case 3612:
case 1559:
case 4064:
case 892:
case 2355:
case 3466:
case 1496:
case 2268:
case 3828:
case 46:
case 2418:
case 2708:
case 1362:
case 2649:
case 1285:
case 1132:
case 1463:
case 3544:
case 3181:
case 2950:
case 1710:
case 3588:
case 3462:
case 1256:
case 2810:
case 2704:
case 4091:
case 643:
case 2129:
case 2069:
case 2506:
case 4042:
case 2238:
case 465:
case 1935:
case 554:
case 222:
case 1676:
case 1321:
case 1583:
case 2671:
case 194:
case 3657:
case 1442:
case 1817:
case 1911:
case 3101:
case 1336:
case 1587:
case 121:
case 1574:
case 2660:
case 1098:
case 346:
case 1296:
case 2271:
case 948:
case 2345:
case 2975:
case 1884:
case 1628:
case 2399:
case 377:
case 1690:
case 758:
case 2033:
case 1775:
case 957:
case 594:
case 2585:
case 362:
case 3857:
case 3489:
case 13:
case 389:
case 1631:
case 2745:
case 2353:
case 2521:
case 7:
case 3077:
case 1506:
case 1424:
case 221:
case 956:
case 701:
case 844:
case 1099:
case 2066:
case 2925:
case 1027:
case 1578:
case 1526:
case 2376:
case 2094:
case 3406:
case 934:
case 140:
case 2976:
case 1135:
case 1150:
case 2180:
case 337:
case 2853:
case 3687:
case 3593:
case 2123:
case 3447:
case 1939:
case 443:
case 1383:
case 3586:
case 2494:
case 4059:
case 696:
case 1400:
case 2409:
case 2767:
case 4014:
case 1720:
case 1877:
case 1908:
case 3742:
case 1697:
case 3771:
case 3114:
case 444:
case 2857:
case 1778:
case 2727:
case 205:
case 3965:
case 2326:
case 3407:
case 3941:
case 3067:
case 3541:
case 116:
case 2866:
case 1229:
case 1385:
case 620:
case 2277:
case 854:
case 1377:
case 1208:
case 2324:
case 2055:
case 3788:
case 1404:
case 768:
case 2481:
case 4034:
case 3668:
case 1039:
case 2567:
case 1979:
case 3759:
case 3039:
case 227:
case 2945:
case 141:
case 1605:
case 2970:
case 1228:
case 1044:
case 522:
case 1758:
case 828:
case 3340:
case 3001:
case 62:
case 676:
case 2747:
case 3819:
case 1448:
case 3393:
case 2156:
case 69:
case 2405:
case 3259:
case 3145:
case 3397:
case 1240:
case 3890:
case 1459:
case 3659:
case 1703:
case 1692:
case 236:
case 344:
case 2363:
case 579:
case 3454:
case 2707:
case 3242:
case 2287:
case 2414:
case 1478:
case 1916:
case 2356:
case 3398:
case 3275:
case 2318:
case 279:
case 2712:
case 97:
case 2371:
case 1643:
case 1895:
case 1724:
case 59:
case 2380:
case 1622:
case 3694:
case 1129:
case 3549:
case 1402:
case 2241:
case 2230:
case 4003:
case 2692:
case 695:
case 487:
case 418:
case 1437:
case 1826:
case 491:
case 1656:
case 2114:
case 3319:
case 2808:
case 3182:
case 307:
case 1968:
case 2638:
case 2194:
case 2372:
case 1381:
case 3761:
case 3571:
case 2582:
case 1842:
case 2722:
case 3175:
case 1294:
case 683:
case 1081:
case 218:
case 2044:
case 1244:
case 1182:
case 1123:
case 3538:
case 3104:
case 1894:
case 3161:
case 979:
case 3865:
case 2350:
case 1412:
case 632:
case 556:
case 1945:
case 290:
case 2008:
case 1784:
case 3973:
case 1438:
case 3496:
case 2001:
case 1194:
case 2650:
case 2063:
case 937:
case 333:
case 3801:
case 295:
case 1709:
case 3191:
case 2173:
case 1197:
case 1007:
case 1195:
case 1974:
case 544:
case 1196:
case 1232:
case 442:
case 3924:
case 1634:
case 1737:
case 3939:
case 3786:
case 2310:
case 3315:
case 1379:
case 242:
case 2560:
case 608:
case 3971:
case 2124:
case 1088:
case 3884:
case 529:
case 216:
case 789:
case 1948:
case 880:
case 3197:
case 1205:
case 2942:
case 2864:
case 3689:
case 941:
case 595:
case 2798:
case 4055:
case 75:
case 196:
case 1166:
case 915:
case 404:
case 1874:
case 1912:
case 1291:
case 1629:
case 775:
case 722:
case 3248:
case 3299:
case 2994:
case 821:
case 419:
case 1110:
case 3504:
case 2042:
case 3887:
case 578:
case 3603:
case 3415:
case 2587:
case 3585:
case 2240:
case 178:
case 3573:
case 560:
case 3178:
case 2558:
case 1011:
case 3165:
case 1502:
case 3675:
case 3099:
case 1370:
case 2893:
case 336:
case 3129:
case 209:
case 89:
case 305:
case 1745:
case 2763:
case 1375:
case 251:
case 1185:
case 2591:
case 1881:
case 3816:
case 2325:
case 129:
case 1050:
case 2365:
case 2448:
case 4086:
case 48:
case 549:
case 656:
case 2221:
case 577:
case 3873:
case 2183:
case 2464:
case 751:
case 1139:
case 1066:
case 3115:
case 2465:
case 2875:
case 301:
case 1615:
case 1686:
case 2136:
case 1416:
case 2445:
case 1467:
case 3173:
case 785:
case 3285:
case 260:
case 2620:
case 1211:
case 2941:
case 3527:
case 3797:
case 87:
case 124:
case 580:
case 1494:
case 411:
case 2312:
case 3736:
case 2804:
case 1639:
case 2846:
case 484:
case 2764:
case 3465:
case 1171:
case 3300:
case 424:
case 3094:
case 1189:
case 876:
case 2571:
case 2696:
case 2735:
case 1430:
case 3443:
case 2470:
case 2261:
case 2083:
case 3284:
case 1971:
case 3735:
case 3548:
case 3235:
case 2656:
case 1230:
case 931:
case 1350:
case 3212:
case 2509:
case 3635:
case 3314:
case 2724:
case 2436:
case 3533:
case 3255:
case 434:
case 2550:
case 3286:
case 145:
case 188:
case 1029:
case 726:
case 3401:
case 2786:
case 1460:
case 2236:
case 1246:
case 1637:
case 3369:
case 2084:
case 1316:
case 1990:
case 2467:
case 3608:
case 1802:
case 922:
case 1262:
case 3630:
case 2005:
case 508:
case 3701:
case 1075:
case 2428:
case 149:
case 52:
case 3452:
case 1060:
case 2676:
case 2314:
case 2217:
case 1465:
case 1033:
case 912:
case 2125:
case 1167:
case 1762:
case 1731:
case 2868:
case 2119:
case 356:
case 3773:
case 115:
case 1601:
case 2631:
case 2019:
case 3862:
case 182:
case 2935:
case 192:
case 153:
case 4011:
case 3254:
case 39:
case 1280:
case 786:
case 26:
case 2730:
case 3622:
case 2721:
case 2760:
case 98:
case 3232:
case 1813:
case 670:
case 1951:
case 498:
case 3468:
case 4017:
case 2658:
case 137:
case 894:
case 421:
case 1474:
case 283:
case 1714:
case 2659:
case 1581:
case 3172:
case 3417:
case 4093:
case 235:
case 2298:
case 1094:
case 1521:
case 2403:
case 3842:
case 1728:
case 1490:
case 3893:
case 212:
case 429:
case 29:
case 3047:
case 461:
case 1903:
case 2061:
case 3424:
case 446:
case 2387:
case 3867:
case 3092:
case 1553:
case 3895:
case 754:
case 3839:
case 368:
case 2957:
case 794:
case 3326:
case 3584:
case 3142:
case 1650:
case 1540:
case 1351:
case 3815:
case 3530:
case 654:
case 15:
case 1476:
case 709:
case 2085:
case 436:
case 4039:
case 3176:
case 3781:
case 2601:
case 2876:
case 3888:
case 2902:
case 309:
case 732:
case 2954:
case 2050:
case 3119:
case 1100:
case 2559:
case 790:
case 1347:
case 1266:
case 3511:
case 3778:
case 409:
case 1017:
case 1871:
case 143:
case 2689:
case 4081:
case 3257:
case 2402:
case 3139:
case 3090:
case 3026:
case 911:
case 3239:
case 3966:
case 2699:
case 2996:
case 1471:
case 1238:
case 606:
case 2543:
case 159:
case 277:
case 1286:
case 1069:
case 107:
case 3388:
case 2487:
case 3283:
case 3734:
case 3914:
case 1652:
case 1388:
case 2262:
case 3098:
case 0:
case 4038:
case 3779:
case 996:
case 3902:
case 127:
case 1067:
case 1983:
case 2176:
case 3886:
case 2043:
case 215:
case 95:
case 1353:
case 919:
case 385:
case 930:
case 3621:
case 626:
case 125:
case 3795:
case 1689:
case 217:
case 1806:
case 21:
case 792:
case 3017:
case 2645:
case 3269:
case 2873:
case 1365:
case 3289:
case 359:
case 3903:
case 3137:
case 1485:
case 2498:
case 2440:
case 3313:
case 2203:
case 3905:
case 1683:
case 3804:
case 347:
case 630:
case 3960:
case 3149:
case 3595:
case 1010:
case 2457:
case 3469:
case 2669:
case 60:
case 1659:
case 131:
case 947:
case 247:
case 737:
case 907:
case 728:
case 3993:
case 2663:
case 1805:
case 3631:
case 1687:
case 868:
case 1700:
case 3252:
case 3899:
case 898:
case 3806:
case 1815:
case 4022:
case 2849:
case 2879:
case 2100:
case 2830:
case 3329:
case 1418:
case 1257:
case 3037:
case 3522:
case 3378:
case 2500:
case 3569:
case 2784:
case 2315:
case 3339:
case 413:
case 734:
case 819:
case 3514:
case 1993:
case 2643:
case 2157:
case 478:
case 2625:
case 3574:
case 311:
case 1750:
case 1833:
case 1415:
case 2115:
case 2598:
case 3035:
case 2882:
case 1838:
case 2422:
case 612:
case 3845:
case 2516:
case 691:
case 2266:
case 3792:
case 152:
case 2953:
case 699:
case 3516:
case 4079:
case 2139:
case 1014:
case 1575:
case 1427:
case 3554:
case 742:
case 2343:
case 3330:
case 3560:
case 128:
case 439:
case 3686:
case 2512:
case 718:
case 3649:
case 2828:
case 1179:
case 3961:
case 2842:
case 1975:
case 1898:
case 3309:
case 3503:
case 3997:
case 2921:
case 1040:
case 641:
case 2483:
case 3772:
case 558:
case 3120:
case 705:
case 1141:
case 2486:
case 1570:
case 1209:
case 2078:
case 559:
case 1508:
case 1504:
case 267:
case 2777:
case 2526:
case 2907:
case 2471:
case 2622:
case 2566:
case 1005:
case 2677:
case 1616:
case 2105:
case 3294:
case 2348:
case 249:
case 3950:
case 694:
case 3412:
case 361:
case 2597:
case 1082:
case 1614:
case 3386:
case 1786:
case 2305:
case 3952:
case 1:
case 4089:
case 492:
case 3034:
case 2366:
case 1222:
case 901:
case 3155:
case 2477:
case 535:
case 2956:
case 2021:
case 2814:
case 2528:
case 2599:
case 663:
case 4058:
case 2524:
case 2829:
case 1340:
case 1329:
case 302:
case 2978:
case 172:
case 3061:
case 2843:
case 3826:
case 4072:
case 1064:
case 2336:
case 1161:
case 108:
case 1444:
case 3308:
case 946:
case 170:
case 1366:
case 3025:
case 2968:
case 1251:
case 514:
case 4075:
case 927:
case 2774:
case 881:
case 144:
case 541:
case 1803:
case 1021:
case 3758:
case 849:
case 2080:
case 3948:
case 2491:
case 1523:
case 3166:
case 2586:
case 850:
case 1862:
case 416:
case 2254:
case 2389:
case 2546:
case 3250:
case 3783:
case 398:
case 2490:
case 3892:
case 231:
case 1647:
case 282:
case 3038:
case 3060:
case 1254:
case 3291:
case 2839:
case 185:
case 4088:
case 3655:
case 573:
case 3208:
case 3425:
case 1816:
case 1279:
case 2651:
case 1966:
case 339:
case 2926:
case 2339:
case 2010:
case 2824:
case 3543:
case 877:
case 3184:
case 3615:
case 807:
case 3587:
case 378:
case 76:
case 3488:
case 2304:
case 1203:
case 829:
case 680:
case 3953:
case 2296:
case 2504:
case 935:
case 1693:
case 1042:
case 2731:
case 142:
case 1924:
case 353:
case 472:
case 2013:
case 3994:
case 1910:
case 1832:
case 3188:
case 2358:
case 3063:
case 2568:
case 1555:
case 715:
case 2450:
case 702:
case 2590:
case 469:
case 1562:
case 50:
case 756:
case 2765:
case 400:
case 3392:
case 601:
case 2077:
case 629:
case 3526:
case 191:
case 299:
case 3883:
case 1754:
case 2841:
case 203:
case 3198:
case 3589:
case 1541:
case 156:
case 2459:
case 1354:
case 3799:
case 1889:
case 3800:
case 1357:
case 3377:
case 730:
case 1905:
case 3389:
case 3882:
case 3620:
case 3858:
case 2082:
case 3525:
case 447:
case 4030:
case 2285:
case 1796:
case 2162:
case 3652:
case 2321:
case 470:
case 1568:
case 2480:
case 3086:
case 2337:
case 3564:
case 1446:
case 4063:
case 37:
case 614:
case 1175:
case 1214:
case 1685:
case 3540:
case 2697:
case 1326:
case 1312:
case 3464:
case 3226:
case 938:
case 1247:
case 1224:
case 1155:
case 1705:
case 2549:
case 3535:
case 2184:
case 3240:
case 1606:
case 3449:
case 2456:
case 2706:
case 1271:
case 2888:
case 3128:
case 2224:
case 3918:
case 2908:
case 2060:
case 3935:
case 383:
case 2648:
case 993:
case 1374:
case 38:
case 1186:
case 2432:
case 1535:
case 1863:
case 1931:
case 2297:
case 3003:
case 2799:
case 135:
case 524:
case 2679:
case 1343:
case 1090:
case 1673:
case 959:
case 2302:
case 70:
case 407:
case 2850:
case 3353:
case 3492:
case 19:
case 3338:
case 3355:
case 3399:
case 2397:
case 974:
case 3580:
case 1608:
case 223:
case 1411:
case 3150:
case 3604:
case 3390:
case 2295:
case 3673:
case 3752:
case 3566:
case 2430:
case 181:
case 1462:
case 3557:
case 2454:
case 4070:
case 3949:
case 3402:
case 2017:
case 2903:
case 1841:
case 1008:
case 3059:
case 4032:
case 2426:
case 268:
case 2128:
case 73:
case 913:
case 2075:
case 1733:
case 3164:
case 748:
case 1972:
case 506:
case 2751:
case 1792:
case 3146:
case 3803:
case 3958:
case 1834:
case 1678:
case 574:
case 812:
case 796:
case 3691:
case 1056:
case 1097:
case 3661:
case 2446:
case 3258:
case 561:
case 3521:
case 4061:
case 830:
case 1395:
case 92:
case 1944:
case 3728:
case 1942:
case 493:
case 2253:
case 3565:
case 1654:
case 133:
case 3562:
case 525:
case 2807:
case 3007:
case 180:
case 4047:
case 352:
case 1053:
case 2233:
case 3485:
case 3153:
case 3483:
case 1372:
case 1287:
case 364:
case 3639:
case 1429:
case 1719:
case 992:
case 2054:
case 1830:
case 2863:
case 2113:
case 2110:
case 2415:
case 1401:
case 860:
case 3045:
case 1930:
case 2475:
case 826:
case 270:
case 519:
case 1043:
case 3578:
case 1978:
case 966:
case 2965:
case 3236:
case 634:
case 1531:
case 1938:
case 2213:
case 2443:
case 1284:
case 479:
case 4004:
case 530:
case 1051:
case 1545:
case 3163:
case 2137:
case 229:
case 350:
case 1497:
case 2074:
case 1764:
case 1156:
case 3411:
case 1174:
case 872:
case 557:
case 2871:
case 1812:
case 3930:
case 660:
case 494:
case 3450:
case 1219:
case 1127:
case 1932:
case 2809:
case 2991:
case 1880:
case 539:
case 1133:
case 690:
case 3014:
case 2851:
case 2744:
case 2322:
case 2451:
case 1534:
case 40:
case 2229:
case 1638:
case 3121:
case 1122:
case 1949:
case 193:
case 744:
case 4033:
case 3558:
case 3563:
case 805:
case 3479:
case 3327:
case 2182:
case 2527:
case 3321:
case 1865:
case 2623:
case 4053:
case 1517:
case 590:
case 4050:
case 1825:
case 4090:
case 1117:
case 3583:
case 604:
case 1313:
case 1994:
case 1513:
case 3810:
case 422:
case 769:
case 1642:
case 460:
case 2734:
case 3194:
case 1747:
case 863:
case 1469:
case 2370:
case 1361:
case 1301:
case 969:
case 2513:
case 32:
case 3767:
case 3726:
case 1875:
case 3256:
case 2819:
case 410:
case 3951:
case 2666:
case 1973:
case 458:
case 3347:
case 837:
case 3405:
case 1495:
case 1492:
case 1204:
case 3507:
case 3080:
case 3910:
case 943:
case 3751:
case 1046:
case 3811:
case 1466:
case 2911:
case 1456:
case 916:
case 2985:
case 3643:
case 2435:
case 3964:
case 3559:
case 2906:
case 605:
case 2961:
case 2367:
case 1787:
case 3312:
case 1699:
case 2041:
case 2836:
case 1136:
case 2202:
case 202:
case 2695:
case 2250:
case 391:
case 1290:
case 1112:
case 3011:
case 3592:
case 569:
case 1967:
case 4036:
case 1475:
case 666:
case 1113:
case 2742:
case 3336:
case 3162:
case 803:
case 3955:
case 2501:
case 3745:
case 4009:
case 2654:
case 190:
case 1987:
case 1814:
case 253:
case 991:
case 2895:
case 1369:
case 1237:
case 1718:
case 3241:
case 343:
case 2592:
case 17:
case 1675:
case 2347:
case 797:
case 3217:
case 2051:
case 2588:
case 997:
case 2681:
case 3064:
case 3850:
case 1414:
case 157:
case 386:
case 1025:
case 2900:
case 71:
case 2142:
case 3126:
case 3784:
case 312:
case 3050:
case 2637:
case 597:
case 12:
case 884:
case 1929:
case 334:
case 65:
case 2757:
case 1846:
case 2818:
case 1732:
case 900:
case 2216:
case 542:
case 2932:
case 1872:
case 2359:
case 707:
case 1837:
case 201:
case 538:
case 1072:
case 3901:
case 3838:
case 2492:
case 1727:
case 308:
case 2563:
case 759:
case 2169:
case 668:
case 3794:
case 1434:
case 2249:
case 2522:
case 3909:
case 1960:
case 1016:
case 869:
case 2228:
case 2703:
case 1191:
case 2070:
case 3791:
case 49:
case 1188:
case 2104:
case 3374:
case 4012:
case 27:
case 1265:
case 2357:
case 1447:
case 963:
case 396:
case 3158:
case 945:
case 3296:
case 810:
case 138:
case 3331:
case 3617:
case 1019:
case 1065:
case 1234:
case 28:
case 674:
case 1585:
case 2191:
case 1992:
case 379:
case 602:
case 3756:
case 3167:
case 2743:
case 287:
case 426:
case 2993:
case 589:
case 3663:
case 2175:
case 1378:
case 582:
case 3628:
case 85:
case 1493:
case 1499:
case 2362:
case 3502:
case 276:
case 1934:
case 1800:
case 2036:
case 2979:
case 1524:
case 2715:
case 3650:
case 3100:
case 3737:
case 2058:
case 1449:
case 2607:
case 1860:
case 2553:
case 689:
case 2166:
case 234:
case 155:
case 2797:
case 906:
case 2352:
case 102:
case 2952:
case 1087:
case 297:
case 3600:
case 1740:
case 2816:
case 801:
case 2530:
case 1363:
case 2243:
case 1969:
case 1083:
case 3478:
case 720:
case 68:
case 787:
case 61:
case 269:
case 3793:
case 1702:
case 1047:
case 2772:
case 3512:
case 1335:
case 375:
case 3568:
case 1190:
case 2179:
case 3551:
case 716:
case 3832:
case 1253:
case 162:
case 3520:
case 3599:
case 4067:
case 681:
case 3016:
case 2936:
case 261:
case 3624:
case 3134:
case 254:
case 3897:
case 3311:
case 1781:
case 1996:
case 843:
case 3536:
case 1342:
case 1751:
case 1986:
case 3581:
case 857:
case 2276:
case 3041:
case 2407:
case 1031:
case 793:
case 512:
case 798:
case 2933:
case 1269:
case 640:
case 2915:
case 667:
case 2644:
case 1272:
case 1162:
case 3982:
case 2667:
case 3747:
case 2929:
case 904:
case 2307:
case 1592:
case 501:
case 3855:
case 2209:
case 1249:
case 3748:
case 3044:
case 94:
case 3928:
case 2323:
case 397:
case 1913:
case 1886:
case 3270:
case 3095:
case 4023:
case 3644:
case 3710:
case 3789:
case 2227:
case 3480:
case 1850:
case 4085:
case 2573:
case 255:
case 1078:
case 2143:
case 3408:
case 1481:
case 951:
case 802:
case 2127:
case 3335:
case 3491:
case 101:
case 1808:
case 3214:
case 623:
case 2482:
case 3957:
case 1074:
case 1322:
case 432:
case 3860:
case 289:
case 1159:
case 1672:
case 3980:
case 64:
case 3696:
case 1371:
case 763:
case 3006:
case 1022:
case 428:
case 2938:
case 1797:
case 1511:
case 1108:
case 2474:
case 592:
case 1821:
case 1483:
case 3766:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1721700001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,];
var gg_b = "1721700001/";

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
