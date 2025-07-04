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
case 296:
case 1856:
case 4060:
case 2462:
case 2236:
case 3222:
case 1:
case 502:
case 2329:
case 2039:
case 1407:
case 533:
case 1208:
case 1185:
case 2323:
case 1974:
case 2033:
case 4014:
case 1993:
case 1741:
case 2796:
case 774:
case 570:
case 555:
case 3363:
case 1975:
case 2711:
case 313:
case 772:
case 3442:
case 2948:
case 1319:
case 1638:
case 981:
case 1207:
case 4077:
case 1398:
case 2928:
case 3422:
case 3967:
case 777:
case 2395:
case 3801:
case 2914:
case 1925:
case 1945:
case 538:
case 2089:
case 3459:
case 2204:
case 1135:
case 2960:
case 406:
case 2187:
case 397:
case 4027:
case 3453:
case 2083:
case 3526:
case 4048:
case 507:
case 3151:
case 2188:
case 2977:
case 624:
case 3253:
case 1688:
case 2404:
case 1771:
case 2394:
case 3130:
case 3056:
case 2373:
case 1924:
case 3568:
case 2527:
case 1518:
case 2803:
case 3104:
case 4032:
case 2430:
case 3186:
case 2600:
case 2547:
case 1593:
case 841:
case 2982:
case 3488:
case 2809:
case 305:
case 248:
case 3487:
case 2172:
case 228:
case 2790:
case 1831:
case 890:
case 595:
case 4066:
case 354:
case 3976:
case 2230:
case 2548:
case 1653:
case 1517:
case 352:
case 1525:
case 110:
case 3136:
case 1545:
case 2480:
case 2122:
case 3321:
case 357:
case 3031:
case 3946:
case 2560:
case 3438:
case 2932:
case 3608:
case 3341:
case 185:
case 1055:
case 223:
case 1881:
case 2361:
case 2577:
case 3719:
case 1769:
case 1112:
case 3162:
case 2280:
case 3798:
case 3463:
case 2223:
case 2243:
case 4081:
case 2121:
case 859:
case 19:
case 2026:
case 3032:
case 2931:
case 2046:
case 1091:
case 523:
case 1308:
case 2696:
case 2229:
case 3342:
case 1419:
case 3583:
case 1307:
case 543:
case 3269:
case 2362:
case 2611:
case 3066:
case 454:
case 1497:
case 1738:
case 2443:
case 2556:
case 3161:
case 608:
case 1111:
case 1213:
case 3263:
case 2423:
case 1787:
case 2735:
case 457:
case 2473:
case 1866:
case 295:
case 4050:
case 3816:
case 3958:
case 2494:
case 957:
case 2295:
case 528:
case 2981:
case 3533:
case 2171:
case 2305:
case 3891:
case 1832:
case 2252:
case 2294:
case 1788:
case 632:
case 2279:
case 81:
case 556:
case 3372:
case 2550:
case 1064:
case 3014:
case 1828:
case 2817:
case 66:
case 207:
case 2531:
case 3060:
case 1010:
case 2330:
case 1759:
case 2893:
case 2020:
case 3152:
case 3194:
case 3271:
case 494:
case 1509:
case 413:
case 2956:
case 381:
case 1065:
case 1190:
case 238:
case 994:
case 1827:
case 2818:
case 1847:
case 3179:
case 2899:
case 3697:
case 2070:
case 3027:
case 1815:
case 3337:
case 306:
case 997:
case 3558:
case 1722:
case 255:
case 3129:
case 1877:
case 3149:
case 1860:
case 3810:
case 119:
case 680:
case 918:
case 2169:
case 233:
case 3028:
case 1669:
case 3864:
case 1814:
case 3338:
case 202:
case 2163:
case 1002:
case 596:
case 510:
case 2213:
case 1423:
case 1706:
case 714:
case 1556:
case 2903:
case 2738:
case 3955:
case 2497:
case 1362:
case 329:
case 3661:
case 1429:
case 2219:
case 330:
case 1229:
case 1931:
case 1046:
case 2091:
case 2308:
case 1026:
case 2297:
case 349:
case 2621:
case 1249:
case 761:
case 1121:
case 1785:
case 1243:
case 1223:
case 951:
case 3751:
case 2671:
case 3290:
case 1252:
case 1294:
case 1495:
case 3826:
case 2832:
case 1273:
case 86:
case 3730:
case 3846:
case 1305:
case 90:
case 1304:
case 1452:
case 1295:
case 1473:
case 3300:
case 1735:
case 631:
case 40:
case 1899:
case 2753:
case 2772:
case 2847:
case 1351:
case 3870:
case 3868:
case 3334:
case 1956:
case 2503:
case 138:
case 463:
case 1690:
case 440:
case 2509:
case 753:
case 1020:
case 1874:
case 491:
case 1875:
case 25:
case 3786:
case 1817:
case 2828:
case 920:
case 3025:
case 61:
case 384:
case 3045:
case 1550:
case 991:
case 735:
case 169:
case 746:
case 3211:
case 1845:
case 104:
case 2814:
case 1825:
case 3113:
case 968:
case 3017:
case 1067:
case 3762:
case 1712:
case 468:
case 1169:
case 3119:
case 2663:
case 3075:
case 3198:
case 2878:
case 1380:
case 3643:
case 3074:
case 3820:
case 2877:
case 3093:
case 2722:
case 3840:
case 155:
case 3623:
case 3385:
case 3296:
case 1068:
case 808:
case 3649:
case 1844:
case 3099:
case 1606:
case 1436:
case 1262:
case 889:
case 2001:
case 2398:
case 2638:
case 3902:
case 2408:
case 3889:
case 340:
case 1711:
case 3883:
case 1138:
case 2313:
case 2975:
case 2106:
case 4044:
case 484:
case 4045:
case 1796:
case 1033:
case 2721:
case 2185:
case 1323:
case 2974:
case 2637:
case 1039:
case 1685:
case 2407:
case 2999:
case 1947:
case 2397:
case 1486:
case 1915:
case 3965:
case 1373:
case 2771:
case 1352:
case 3651:
case 1205:
case 3839:
case 368:
case 2134:
case 1188:
case 816:
case 55:
case 641:
case 3630:
case 3400:
case 87:
case 3200:
case 4018:
case 1960:
case 3591:
case 1187:
case 586:
case 2687:
case 1204:
case 2945:
case 3964:
case 1914:
case 4093:
case 2925:
case 3794:
case 3752:
case 2672:
case 3773:
case 2517:
case 2653:
case 429:
case 1548:
case 3502:
case 844:
case 2575:
case 929:
case 1153:
case 128:
case 3779:
case 842:
case 1172:
case 1057:
case 3605:
case 148:
case 3235:
case 1982:
case 822:
case 824:
case 2100:
case 1430:
case 1547:
case 449:
case 156:
case 351:
case 3107:
case 2524:
case 3003:
case 1515:
case 3565:
case 2769:
case 1280:
case 827:
case 978:
case 1577:
case 3206:
case 2881:
case 3662:
case 3858:
case 3485:
case 3396:
case 675:
case 3857:
case 30:
case 3743:
case 2054:
case 3484:
case 2092:
case 1578:
case 3510:
case 3991:
case 3406:
case 3636:
case 2622:
case 650:
case 736:
case 847:
case 2525:
case 210:
case 1514:
case 2448:
case 2247:
case 1626:
case 2331:
case 1299:
case 1908:
case 1646:
case 1096:
case 13:
case 1218:
case 3268:
case 1417:
case 3467:
case 2146:
case 3587:
case 1739:
case 1274:
case 4086:
case 2350:
case 1116:
case 2551:
case 1275:
case 571:
case 1309:
case 322:
case 246:
case 1418:
case 2427:
case 2530:
case 618:
case 1011:
case 2447:
case 3061:
case 1499:
case 324:
case 1783:
case 1861:
case 96:
case 3358:
case 2986:
case 2214:
case 2415:
case 1225:
case 3440:
case 1789:
case 3182:
case 3420:
case 327:
case 4036:
case 694:
case 3953:
case 347:
case 1676:
case 3538:
case 692:
case 2071:
case 3357:
case 2176:
case 80:
case 2414:
case 1445:
case 2905:
case 3959:
case 3476:
case 2813:
case 3383:
case 167:
case 3522:
case 2536:
case 1758:
case 2610:
case 389:
case 3987:
case 3160:
case 217:
case 839:
case 863:
case 3625:
case 2819:
case 3389:
case 932:
case 3624:
case 525:
case 903:
case 1829:
case 2140:
case 2951:
case 891:
case 3094:
case 1757:
case 1620:
case 434:
case 1640:
case 1507:
case 403:
case 1090:
case 3115:
case 2504:
case 111:
case 3023:
case 316:
case 3333:
case 3127:
case 2170:
case 37:
case 605:
case 2792:
case 2754:
case 937:
case 3043:
case 3674:
case 3937:
case 2466:
case 1894:
case 437:
case 3049:
case 1668:
case 3029:
case 3339:
case 3246:
case 261:
case 536:
case 2069:
case 162:
case 908:
case 3938:
case 2432:
case 164:
case 293:
case 4030:
case 214:
case 3675:
case 1102:
case 2505:
case 3559:
case 2167:
case 408:
case 2980:
case 3128:
case 2943:
case 1726:
case 1633:
case 1403:
case 1393:
case 2250:
case 2791:
case 1830:
case 1746:
case 710:
case 1374:
case 1851:
case 2347:
case 12:
case 2133:
case 2327:
case 3834:
case 1639:
case 2037:
case 188:
case 236:
case 303:
case 1317:
case 2328:
case 3835:
case 3367:
case 2038:
case 1209:
case 1998:
case 2601:
case 334:
case 1006:
case 785:
case 3969:
case 3963:
case 4052:
case 1913:
case 4094:
case 2189:
case 4029:
case 337:
case 887:
case 97:
case 2378:
case 598:
case 3806:
case 4043:
case 47:
case 2183:
case 2314:
case 225:
case 1325:
case 1035:
case 2087:
case 1689:
case 416:
case 4023:
case 2315:
case 1324:
case 245:
case 2973:
case 308:
case 2952:
case 2088:
case 517:
case 2481:
case 3051:
case 3320:
case 3340:
case 2456:
case 3086:
case 944:
case 1862:
case 2382:
case 2543:
case 1658:
case 3004:
case 3289:
case 942:
case 3745:
case 3283:
case 2158:
case 606:
case 1597:
case 3725:
case 2764:
case 1000:
case 873:
case 1598:
case 3971:
case 424:
case 3724:
case 3744:
case 3483:
case 422:
case 2157:
case 2072:
case 3563:
case 3489:
case 2059:
case 1513:
case 830:
case 1740:
case 3036:
case 3326:
case 3346:
case 2654:
case 2692:
case 546:
case 1805:
case 36:
case 2042:
case 558:
case 927:
case 2595:
case 878:
case 3800:
case 947:
case 3717:
case 1767:
case 1155:
case 3775:
case 3439:
case 3609:
case 2961:
case 1012:
case 511:
case 2203:
case 3766:
case 1716:
case 779:
case 2913:
case 1450:
case 2006:
case 723:
case 1601:
case 3255:
case 2084:
case 678:
case 2639:
case 1037:
case 288:
case 2085:
case 3254:
case 2409:
case 2997:
case 136:
case 3888:
case 881:
case 1133:
case 562:
case 475:
case 2851:
case 1929:
case 1231:
case 509:
case 2399:
case 1791:
case 1923:
case 2393:
case 1250:
case 1139:
case 2726:
case 629:
case 1979:
case 567:
case 1561:
case 2344:
case 2034:
case 1315:
case 1973:
case 145:
case 673:
case 2324:
case 2035:
case 2689:
case 1995:
case 1183:
case 966:
case 3838:
case 2325:
case 748:
case 2880:
case 1360:
case 1378:
case 3310:
case 756:
case 3596:
case 2683:
case 1189:
case 2836:
case 3822:
case 2720:
case 2657:
case 1157:
case 1072:
case 1053:
case 2519:
case 1765:
case 2598:
case 1764:
case 3714:
case 1158:
case 1529:
case 921:
case 3778:
case 3760:
case 1710:
case 2658:
case 1523:
case 990:
case 1382:
case 1543:
case 3316:
case 2804:
case 3007:
case 1655:
case 1702:
case 3109:
case 2155:
case 2767:
case 1573:
case 682:
case 2768:
case 3650:
case 376:
case 171:
case 1595:
case 3853:
case 2154:
case 3747:
case 684:
case 2805:
case 200:
case 1042:
case 796:
case 1654:
case 3008:
case 3631:
case 1332:
case 3996:
case 1022:
case 1616:
case 1530:
case 702:
case 1447:
case 2011:
case 459:
case 1962:
case 2418:
case 704:
case 1228:
case 500:
case 769:
case 146:
case 1701:
case 2303:
case 2493:
case 668:
case 1551:
case 2275:
case 959:
case 2474:
case 1350:
case 1146:
case 770:
case 852:
case 3871:
case 1936:
case 1041:
case 2417:
case 1691:
case 3392:
case 965:
case 321:
case 126:
case 2626:
case 1331:
case 3632:
case 2908:
case 2733:
case 390:
case 1448:
case 1021:
case 1247:
case 3821:
case 738:
case 1905:
case 2445:
case 2244:
case 857:
case 3265:
case 3464:
case 1215:
case 2224:
case 577:
case 4007:
case 3584:
case 639:
case 663:
case 3506:
case 640:
case 1277:
case 1460:
case 620:
case 2789:
case 1278:
case 91:
case 707:
case 4008:
case 3900:
case 41:
case 1415:
case 1214:
case 3465:
case 2225:
case 476:
case 3682:
case 1381:
case 1930:
case 2823:
case 2165:
case 2090:
case 3124:
case 2640:
case 2507:
case 3677:
case 2843:
case 3512:
case 1897:
case 1356:
case 1120:
case 2829:
case 999:
case 1140:
case 1951:
case 3615:
case 1819:
case 3869:
case 795:
case 1664:
case 3614:
case 3935:
case 892:
case 3660:
case 3145:
case 1536:
case 813:
case 2164:
case 3125:
case 2508:
case 431:
case 897:
case 1167:
case 3117:
case 1980:
case 1063:
case 112:
case 1505:
case 3013:
case 2102:
case 193:
case 2895:
case 3648:
case 1432:
case 3301:
case 3984:
case 3098:
case 1602:
case 262:
case 588:
case 3628:
case 3019:
case 3291:
case 366:
case 161:
case 3750:
case 2668:
case 3500:
case 1792:
case 1754:
case 3199:
case 1586:
case 818:
case 1504:
case 3731:
case 1985:
case 2699:
case 1097:
case 3466:
case 1416:
case 2226:
case 1500:
case 1647:
case 534:
case 2618:
case 2029:
case 166:
case 925:
case 361:
case 749:
case 1291:
case 2246:
case 216:
case 3504:
case 2890:
case 648:
case 27:
case 3586:
case 2674:
case 2043:
case 3754:
case 628:
case 2148:
case 68:
case 2709:
case 4088:
case 312:
case 1013:
case 3505:
case 2553:
case 3069:
case 945:
case 2572:
case 729:
case 1175:
case 1098:
case 1301:
case 3432:
case 1648:
case 2703:
case 393:
case 2095:
case 2160:
case 3282:
case 1935:
case 2645:
case 3664:
case 3819:
case 508:
case 436:
case 4037:
case 150:
case 1125:
case 2542:
case 2114:
case 2476:
case 3813:
case 3536:
case 1145:
case 175:
case 1678:
case 3610:
case 623:
case 2079:
case 537:
case 3930:
case 2624:
case 1615:
case 3665:
case 8:
case 3951:
case 2094:
case 2052:
case 2177:
case 3120:
case 2988:
case 398:
case 2644:
case 679:
case 3897:
case 1900:
case 2537:
case 3260:
case 2182:
case 3477:
case 227:
case 971:
case 471:
case 782:
case 2358:
case 784:
case 885:
case 3214:
case 1465:
case 3986:
case 2896:
case 3215:
case 3580:
case 1821:
case 3478:
case 2972:
case 3460:
case 3277:
case 2220:
case 1506:
case 1584:
case 2587:
case 1535:
case 2132:
case 3126:
case 190:
case 3448:
case 2942:
case 244:
case 326:
case 1354:
case 242:
case 2467:
case 3936:
case 2268:
case 2270:
case 346:
case 141:
case 1355:
case 222:
case 2267:
case 3228:
case 1912:
case 3427:
case 3447:
case 2061:
case 224:
case 3616:
case 3701:
case 11:
case 2233:
case 1747:
case 2799:
case 1853:
case 3595:
case 176:
case 2131:
case 2718:
case 3022:
case 1996:
case 3332:
case 2326:
case 3692:
case 1008:
case 3654:
case 1391:
case 2346:
case 2239:
case 2774:
case 607:
case 3042:
case 522:
case 26:
case 1007:
case 2609:
case 2775:
case 1911:
case 1590:
case 3961:
case 453:
case 544:
case 3579:
case 740:
case 1316:
case 3594:
case 2717:
case 2433:
case 1748:
case 953:
case 215:
case 3529:
case 2745:
case 3158:
case 2181:
case 3549:
case 4021:
case 3764:
case 1714:
case 2725:
case 3456:
case 2086:
case 3543:
case 3382:
case 2004:
case 2289:
case 1778:
case 1760:
case 3710:
case 926:
case 2489:
case 2563:
case 3059:
case 280:
case 458:
case 89:
case 768:
case 602:
case 2971:
case 3765:
case 2744:
case 446:
case 604:
case 958:
case 3281:
case 1838:
case 961:
case 325:
case 1364:
case 3183:
case 3314:
case 2884:
case 3995:
case 2258:
case 461:
case 3189:
case 1596:
case 819:
case 2521:
case 237:
case 3360:
case 3378:
case 914:
case 1990:
case 1511:
case 2156:
case 493:
case 2340:
case 3979:
case 4069:
case 912:
case 345:
case 1837:
case 2885:
case 3994:
case 2257:
case 412:
case 4063:
case 3088:
case 414:
case 1656:
case 70:
case 3231:
case 0:
case 3949:
case 2834:
case 2370:
case 2368:
case 3327:
case 886:
case 336:
case 1455:
case 3943:
case 3139:
case 695:
case 3250:
case 417:
case 3923:
case 3450:
case 2080:
case 1766:
case 516:
case 2367:
case 199:
case 1887:
case 203:
case 2571:
case 1255:
case 232:
case 3038:
case 1302:
case 3601:
case 3431:
case 3348:
case 2109:
case 686:
case 1717:
case 2728:
case 372:
case 1800:
case 713:
case 590:
case 794:
case 895:
case 1062:
case 3012:
case 2103:
case 1439:
case 300:
case 2859:
case 3805:
case 1793:
case 2008:
case 2391:
case 1239:
case 1774:
case 2401:
case 1326:
case 2631:
case 1718:
case 276:
case 3192:
case 3154:
case 1799:
case 2872:
case 1233:
case 2747:
case 3519:
case 1483:
case 1569:
case 1744:
case 1376:
case 2715:
case 1724:
case 3598:
case 2822:
case 3740:
case 619:
case 1489:
case 1005:
case 3657:
case 3720:
case 2777:
case 180:
case 2842:
case 265:
case 377:
case 1289:
case 93:
case 2778:
case 2760:
case 3862:
case 1086:
case 3000:
case 2714:
case 1725:
case 1181:
case 3597:
case 115:
case 1283:
case 1745:
case 3776:
case 964:
case 1458:
case 3034:
case 108:
case 962:
case 2365:
case 855:
case 462:
case 575:
case 1320:
case 2511:
case 1156:
case 2310:
case 3880:
case 137:
case 911:
case 1541:
case 3683:
case 2596:
case 383:
case 1258:
case 2838:
case 3325:
case 2364:
case 833:
case 1884:
case 3345:
case 804:
case 3919:
case 1969:
case 3006:
case 134:
case 2492:
case 3998:
case 2255:
case 3317:
case 1835:
case 1367:
case 103:
case 2766:
case 3375:
case 3101:
case 1080:
case 3374:
case 3830:
case 967:
case 3746:
case 3393:
case 3633:
case 3726:
case 2732:
case 3085:
case 3997:
case 2254:
case 2455:
case 1834:
case 1368:
case 2888:
case 467:
case 3851:
case 3895:
case 1703:
case 2098:
case 2175:
case 2216:
case 1938:
case 1572:
case 2019:
case 1553:
case 3667:
case 531:
case 1128:
case 2013:
case 4034:
case 1709:
case 1674:
case 2199:
case 1043:
case 1693:
case 1147:
case 17:
case 3879:
case 311:
case 483:
case 4035:
case 1890:
case 266:
case 983:
case 1618:
case 2500:
case 1049:
case 2193:
case 3852:
case 2985:
case 1699:
case 1937:
case 1226:
case 1073:
case 1052:
case 896:
case 3849:
case 2934:
case 3090:
case 1115:
case 3823:
case 3640:
case 2677:
case 1079:
case 685:
case 3757:
case 3843:
case 2660:
case 2678:
case 2145:
case 275:
case 250:
case 1114:
case 1476:
case 3508:
case 4085:
case 2781:
case 92:
case 2869:
case 1625:
case 988:
case 610:
case 1987:
case 3110:
case 2935:
case 189:
case 2584:
case 974:
case 147:
case 972:
case 1972:
case 2410:
case 1220:
case 472:
case 860:
case 3224:
case 2464:
case 2841:
case 474:
case 3225:
case 3424:
case 2465:
case 823:
case 900:
case 2682:
case 1811:
case 3783:
case 127:
case 2210:
case 2900:
case 400:
case 879:
case 1588:
case 3493:
case 576:
case 3474:
case 3116:
case 1166:
case 124:
case 2202:
case 3499:
case 3217:
case 1470:
case 2912:
case 2355:
case 3309:
case 1922:
case 1467:
case 3218:
case 1270:
case 1268:
case 33:
case 221:
case 142:
case 88:
case 977:
case 3646:
case 2402:
case 3908:
case 144:
case 3626:
case 706:
case 290:
case 3733:
case 3293:
case 3739:
case 3191:
case 477:
case 1636:
case 2321:
case 1406:
case 2946:
case 2031:
case 1484:
case 1285:
case 2438:
case 3932:
case 2926:
case 2237:
case 360:
case 1857:
case 10:
case 1396:
case 343:
case 1564:
case 3142:
case 1108:
case 2797:
case 3480:
case 3122:
case 495:
case 2136:
case 1729:
case 2162:
case 1003:
case 1565:
case 1107:
case 2798:
case 1284:
case 1009:
case 2607:
case 3966:
case 2238:
case 1858:
case 4076:
case 3361:
case 1662:
case 3612:
case 1206:
case 799:
case 1686:
case 2081:
case 3451:
case 2287:
case 3058:
case 3982:
case 2488:
case 1235:
case 205:
case 348:
case 2855:
case 2104:
case 151:
case 4046:
case 1795:
case 3600:
case 2186:
case 3430:
case 3548:
case 2976:
case 2105:
case 2371:
case 1752:
case 2487:
case 614:
case 3172:
case 1605:
case 38:
case 2288:
case 1779:
case 328:
case 3153:
case 2892:
case 2854:
case 83:
case 3790:
case 3251:
case 3978:
case 1591:
case 955:
case 2546:
case 297:
case 2453:
case 4068:
case 1200:
case 626:
case 2526:
case 3532:
case 765:
case 3395:
case 1964:
case 3286:
case 470:
case 2801:
case 455:
case 3089:
case 3405:
case 3204:
case 581:
case 3635:
case 168:
case 3404:
case 3205:
case 3394:
case 969:
case 3373:
case 658:
case 1965:
case 3486:
case 2130:
case 469:
case 2940:
case 3379:
case 3566:
case 1516:
case 1833:
case 2272:
case 811:
case 2920:
case 3188:
case 3977:
case 402:
case 4067:
case 1390:
case 3323:
case 3137:
case 776:
case 635:
case 3796:
case 3582:
case 3343:
case 396:
case 1412:
case 407:
case 3236:
case 3927:
case 3329:
case 120:
case 3685:
case 3039:
case 2369:
case 140:
case 2442:
case 1889:
case 163:
case 1902:
case 292:
case 4020:
case 3928:
case 2967:
case 1212:
case 3262:
case 653:
case 3606:
case 867:
case 1680:
case 2363:
case 3711:
case 1761:
case 1623:
case 2558:
case 2129:
case 1736:
case 1840:
case 370:
case 1820:
case 1643:
case 2708:
case 2697:
case 1411:
case 721:
case 1649:
case 3461:
case 2221:
case 2241:
case 4083:
case 1018:
case 1296:
case 206:
case 2123:
case 790:
case 3824:
case 2441:
case 2028:
case 333:
case 883:
case 1384:
case 1901:
case 2338:
case 3825:
case 2698:
case 304:
case 3845:
case 3261:
case 741:
case 369:
case 2048:
case 2421:
case 1306:
case 3380:
case 2810:
case 1075:
case 2707:
case 187:
case 2613:
case 1119:
case 1762:
case 3712:
case 2471:
case 4039:
case 496:
case 3531:
case 2989:
case 1695:
case 1045:
case 1025:
case 3700:
case 84:
case 2387:
case 3817:
case 671:
case 1024:
case 2015:
case 3956:
case 2388:
case 1870:
case 888:
case 3818:
case 3351:
case 1652:
case 1673:
case 1044:
case 2173:
case 2194:
case 3020:
case 1679:
case 3893:
case 1705:
case 3040:
case 597:
case 3473:
case 3386:
case 3494:
case 3295:
case 3452:
case 2082:
case 3304:
case 960:
case 943:
case 1490:
case 460:
case 443:
case 552:
case 3735:
case 3279:
case 3734:
case 178:
case 2372:
case 979:
case 1751:
case 3171:
case 479:
case 2891:
case 3273:
case 2957:
case 3294:
case 2322:
case 149:
case 2032:
case 456:
case 3046:
case 2469:
case 3696:
case 448:
case 3950:
case 956:
case 1876:
case 2463:
case 625:
case 3121:
case 3443:
case 3556:
case 3706:
case 3423:
case 4057:
case 48:
case 928:
case 98:
case 1780:
case 3449:
case 1661:
case 3362:
case 129:
case 1312:
case 1955:
case 2066:
case 2119:
case 2762:
case 3663:
case 1557:
case 1613:
case 2198:
case 1707:
case 2211:
case 1048:
case 1421:
case 722:
case 591:
case 3002:
case 1698:
case 1338:
case 724:
case 1028:
case 3669:
case 825:
case 563:
case 3815:
case 1337:
case 1865:
case 1241:
case 744:
case 845:
case 1027:
case 2296:
case 1047:
case 1221:
case 742:
case 539:
case 2197:
case 2643:
case 1708:
case 2093:
case 2820:
case 3877:
case 1129:
case 2736:
case 2840:
case 3722:
case 1558:
case 2623:
case 2555:
case 1194:
case 3759:
case 2044:
case 3847:
case 3772:
case 1388:
case 2334:
case 672:
case 2870:
case 2024:
case 3190:
case 181:
case 2867:
case 2335:
case 2025:
case 1014:
case 2695:
case 1060:
case 1078:
case 3010:
case 4:
case 35:
case 2554:
case 727:
case 2846:
case 985:
case 1891:
case 485:
case 2751:
case 1353:
case 2290:
case 551:
case 278:
case 2501:
case 3788:
case 62:
case 3787:
case 4092:
case 4054:
case 1539:
case 1958:
case 1082:
case 3866:
case 1816:
case 3298:
case 2955:
case 2661:
case 229:
case 2312:
case 3882:
case 3307:
case 3213:
case 273:
case 1161:
case 3738:
case 3737:
case 3641:
case 1583:
case 230:
case 3308:
case 3091:
case 2992:
case 3297:
case 2954:
case 249:
case 549:
case 703:
case 2311:
case 2662:
case 3881:
case 734:
case 835:
case 2858:
case 2485:
case 1540:
case 1238:
case 530:
case 3544:
case 1162:
case 2729:
case 2108:
case 310:
case 3525:
case 853:
case 667:
case 20:
case 2857:
case 2396:
case 1608:
case 3092:
case 2285:
case 1438:
case 2743:
case 2510:
case 1946:
case 3622:
case 1321:
case 3831:
case 1892:
case 2605:
case 1288:
case 2779:
case 1105:
case 3672:
case 664:
case 2752:
case 2794:
case 609:
case 2773:
case 1976:
case 662:
case 154:
case 4016:
case 1186:
case 3599:
case 1104:
case 737:
case 2795:
case 1568:
case 858:
case 105:
case 1855:
case 2604:
case 1287:
case 2434:
case 2235:
case 1081:
case 611:
case 3574:
case 99:
case 3593:
case 3100:
case 118:
case 1253:
case 2833:
case 3134:
case 1151:
case 2400:
case 3924:
case 419:
case 1056:
case 780:
case 584:
case 3771:
case 861:
case 3944:
case 2839:
case 3687:
case 1459:
case 3945:
case 3925:
case 2964:
case 893:
case 1801:
case 2200:
case 63:
case 1453:
case 401:
case 2591:
case 2910:
case 2761:
case 113:
case 3184:
case 1363:
case 3313:
case 2883:
case 3106:
case 3917:
case 1180:
case 817:
case 1967:
case 3001:
case 2902:
case 3408:
case 194:
case 3207:
case 3638:
case 1369:
case 1442:
case 2889:
case 3208:
case 3407:
case 3637:
case 3:
case 45:
case 898:
case 291:
case 3397:
case 76:
case 587:
case 3741:
case 3974:
case 95:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751605201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,];
var gg_b = "1751605201/";

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
