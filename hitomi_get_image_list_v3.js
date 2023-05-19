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
case 2538:
case 1327:
case 3522:
case 3153:
case 2971:
case 3910:
case 1749:
case 3018:
case 2566:
case 2995:
case 2950:
case 3094:
case 1921:
case 4009:
case 1305:
case 2851:
case 2875:
case 97:
case 1568:
case 3360:
case 3124:
case 1559:
case 2199:
case 1745:
case 743:
case 924:
case 2492:
case 82:
case 2861:
case 4036:
case 3138:
case 1528:
case 1430:
case 2965:
case 1397:
case 311:
case 1757:
case 3957:
case 848:
case 128:
case 3741:
case 2490:
case 898:
case 3647:
case 3709:
case 3878:
case 391:
case 2258:
case 3342:
case 873:
case 651:
case 1762:
case 3161:
case 211:
case 3199:
case 1710:
case 2700:
case 3730:
case 1627:
case 2138:
case 1292:
case 3430:
case 867:
case 705:
case 1966:
case 1967:
case 1049:
case 550:
case 2528:
case 1143:
case 830:
case 738:
case 1824:
case 1791:
case 2293:
case 188:
case 842:
case 1135:
case 3582:
case 3697:
case 1307:
case 657:
case 2608:
case 1184:
case 1576:
case 2501:
case 3494:
case 2278:
case 2961:
case 2229:
case 2669:
case 3191:
case 227:
case 417:
case 3664:
case 2010:
case 1775:
case 3963:
case 3838:
case 1812:
case 3478:
case 3765:
case 1260:
case 15:
case 481:
case 3643:
case 3143:
case 2620:
case 1257:
case 3085:
case 3172:
case 1938:
case 3253:
case 3305:
case 1458:
case 3051:
case 3992:
case 581:
case 200:
case 133:
case 1689:
case 2471:
case 3091:
case 1644:
case 3134:
case 838:
case 3126:
case 1702:
case 1444:
case 1237:
case 3666:
case 2904:
case 10:
case 1483:
case 2829:
case 3038:
case 112:
case 2887:
case 2337:
case 483:
case 3520:
case 2016:
case 3797:
case 1189:
case 141:
case 3749:
case 4052:
case 3746:
case 3408:
case 3879:
case 3837:
case 2243:
case 191:
case 501:
case 2210:
case 2978:
case 3839:
case 130:
case 3240:
case 344:
case 3754:
case 1164:
case 1310:
case 3015:
case 1146:
case 1032:
case 2169:
case 3424:
case 2583:
case 368:
case 3395:
case 4075:
case 1297:
case 2101:
case 732:
case 3621:
case 869:
case 2054:
case 1111:
case 1923:
case 1561:
case 3368:
case 1089:
case 3037:
case 3485:
case 3611:
case 3985:
case 215:
case 430:
case 927:
case 426:
case 635:
case 2208:
case 841:
case 1701:
case 4048:
case 4069:
case 1549:
case 3630:
case 2383:
case 3475:
case 3780:
case 3696:
case 4078:
case 889:
case 2422:
case 1232:
case 2486:
case 650:
case 1205:
case 1282:
case 1516:
case 2204:
case 996:
case 2446:
case 2249:
case 2859:
case 1451:
case 3536:
case 659:
case 3324:
case 3708:
case 2301:
case 604:
case 2257:
case 4066:
case 2195:
case 4040:
case 2358:
case 3909:
case 1308:
case 933:
case 707:
case 1502:
case 295:
case 2724:
case 3460:
case 3122:
case 3065:
case 2907:
case 178:
case 697:
case 1659:
case 3739:
case 2317:
case 1795:
case 3267:
case 2933:
case 435:
case 110:
case 1477:
case 3236:
case 3935:
case 2536:
case 3775:
case 2175:
case 3960:
case 3150:
case 1902:
case 3930:
case 3562:
case 2042:
case 469:
case 1030:
case 3010:
case 1836:
case 490:
case 2516:
case 1223:
case 3450:
case 2789:
case 1234:
case 693:
case 2943:
case 1674:
case 1469:
case 70:
case 4012:
case 2718:
case 3481:
case 1662:
case 2658:
case 4011:
case 3534:
case 1492:
case 3984:
case 1023:
case 3312:
case 3474:
case 448:
case 2502:
case 2773:
case 1634:
case 2306:
case 533:
case 3304:
case 866:
case 2543:
case 1756:
case 995:
case 3073:
case 1647:
case 2488:
case 1368:
case 3079:
case 621:
case 3402:
case 2026:
case 83:
case 557:
case 2571:
case 2160:
case 629:
case 864:
case 3420:
case 957:
case 2012:
case 1086:
case 1910:
case 3583:
case 3763:
case 3421:
case 3565:
case 2873:
case 2186:
case 1918:
case 305:
case 1370:
case 2976:
case 523:
case 688:
case 571:
case 982:
case 1912:
case 3732:
case 972:
case 1181:
case 1283:
case 1262:
case 853:
case 1939:
case 3782:
case 3428:
case 846:
case 3473:
case 4031:
case 1520:
case 3539:
case 824:
case 265:
case 1360:
case 3047:
case 3006:
case 2022:
case 3026:
case 1521:
case 2500:
case 219:
case 2809:
case 2111:
case 2820:
case 3353:
case 68:
case 13:
case 4021:
case 2336:
case 3127:
case 1849:
case 3012:
case 79:
case 2087:
case 740:
case 2507:
case 1381:
case 1024:
case 1952:
case 28:
case 3724:
case 776:
case 1721:
case 3691:
case 2598:
case 691:
case 1117:
case 2707:
case 2885:
case 3998:
case 1355:
case 614:
case 1375:
case 3516:
case 2694:
case 844:
case 467:
case 185:
case 459:
case 3367:
case 1362:
case 956:
case 1959:
case 746:
case 4045:
case 1880:
case 645:
case 2307:
case 1665:
case 1725:
case 1235:
case 2424:
case 1263:
case 2329:
case 1582:
case 1220:
case 349:
case 736:
case 2582:
case 761:
case 1101:
case 3182:
case 3385:
case 2251:
case 1514:
case 3523:
case 410:
case 546:
case 84:
case 1206:
case 1272:
case 3227:
case 1158:
case 1083:
case 3736:
case 2248:
case 4059:
case 1008:
case 1773:
case 2526:
case 2421:
case 315:
case 1891:
case 2589:
case 1236:
case 2967:
case 1102:
case 887:
case 3814:
case 1005:
case 731:
case 2966:
case 2750:
case 2322:
case 852:
case 1799:
case 1550:
case 2800:
case 757:
case 1474:
case 591:
case 1645:
case 3417:
case 2776:
case 3616:
case 2905:
case 617:
case 1071:
case 282:
case 949:
case 2403:
case 3358:
case 2844:
case 708:
case 747:
case 1132:
case 2962:
case 146:
case 3278:
case 1782:
case 3099:
case 806:
case 988:
case 2581:
case 1917:
case 159:
case 318:
case 1889:
case 2730:
case 2879:
case 2206:
case 2182:
case 3928:
case 242:
case 234:
case 1943:
case 3748:
case 2990:
case 1515:
case 3166:
case 2417:
case 1478:
case 329:
case 2630:
case 2044:
case 1642:
case 914:
case 2736:
case 3663:
case 86:
case 3443:
case 3501:
case 1907:
case 3027:
case 2474:
case 400:
case 2559:
case 815:
case 2827:
case 3716:
case 3636:
case 973:
case 2784:
case 3552:
case 1429:
case 2673:
case 2590:
case 892:
case 1113:
case 169:
case 1500:
case 1618:
case 2061:
case 148:
case 1741:
case 3537:
case 1507:
case 372:
case 3391:
case 2506:
case 2231:
case 4060:
case 3406:
case 954:
case 2577:
case 2377:
case 511:
case 3964:
case 835:
case 1976:
case 1191:
case 2404:
case 1781:
case 2036:
case 2112:
case 603:
case 1034:
case 3431:
case 1440:
case 2215:
case 3912:
case 1992:
case 2993:
case 3397:
case 3366:
case 2790:
case 2928:
case 893:
case 3658:
case 2495:
case 3917:
case 667:
case 1124:
case 1525:
case 3081:
case 3710:
case 176:
case 306:
case 249:
case 2911:
case 2407:
case 2489:
case 2031:
case 1935:
case 1608:
case 1977:
case 2365:
case 3190:
case 1964:
case 2109:
case 3457:
case 122:
case 2287:
case 1768:
case 3833:
case 970:
case 3123:
case 3344:
case 2924:
case 3642:
case 3272:
case 1299:
case 880:
case 4018:
case 3264:
case 938:
case 1285:
case 1719:
case 279:
case 3136:
case 289:
case 2296:
case 1222:
case 1790:
case 3795:
case 930:
case 680:
case 567:
case 395:
case 1136:
case 1953:
case 353:
case 518:
case 2396:
case 1811:
case 493:
case 1731:
case 3058:
case 1303:
case 1789:
case 1541:
case 652:
case 6:
case 3849:
case 3276:
case 577:
case 2239:
case 358:
case 2897:
case 3306:
case 2705:
case 1357:
case 658:
case 1820:
case 2898:
case 1147:
case 2411:
case 1267:
case 3549:
case 3222:
case 3918:
case 2996:
case 1685:
case 1120:
case 2584:
case 1268:
case 3595:
case 111:
case 2731:
case 1161:
case 2355:
case 3787:
case 2981:
case 2076:
case 1551:
case 3919:
case 2763:
case 2641:
case 3471:
case 735:
case 2420:
case 488:
case 3370:
case 2331:
case 2472:
case 352:
case 1216:
case 978:
case 3002:
case 2828:
case 3461:
case 2216:
case 1494:
case 3623:
case 1392:
case 1707:
case 2174:
case 2052:
case 9:
case 1203:
case 309:
case 2795:
case 2039:
case 3622:
case 2664:
case 1553:
case 3687:
case 979:
case 921:
case 3387:
case 2451:
case 2047:
case 881:
case 1016:
case 138:
case 699:
case 3147:
case 1933:
case 1506:
case 3610:
case 3251:
case 3958:
case 4057:
case 2222:
case 4023:
case 1435:
case 1538:
case 544:
case 3313:
case 1498:
case 2522:
case 3229:
case 2091:
case 3581:
case 3392:
case 2176:
case 2040:
case 42:
case 2991:
case 2586:
case 3995:
case 3328:
case 955:
case 3603:
case 1844:
case 606:
case 2743:
case 616:
case 225:
case 2702:
case 276:
case 1806:
case 1332:
case 92:
case 3675:
case 915:
case 1373:
case 569:
case 2592:
case 50:
case 3685:
case 177:
case 1739:
case 3559:
case 3834:
case 1349:
case 1001:
case 1046:
case 1981:
case 3802:
case 1278:
case 2569:
case 3843:
case 509:
case 1822:
case 1508:
case 3873:
case 801:
case 476:
case 1316:
case 2440:
case 3128:
case 393:
case 2638:
case 3717:
case 3432:
case 789:
case 709:
case 1432:
case 2050:
case 216:
case 2302:
case 209:
case 2587:
case 3969:
case 2863:
case 2368:
case 1827:
case 2373:
case 1942:
case 1624:
case 2147:
case 684:
case 987:
case 1855:
case 2459:
case 1654:
case 986:
case 1269:
case 3293:
case 1611:
case 2968:
case 1640:
case 20:
case 3670:
case 3722:
case 2134:
case 3785:
case 638:
case 1924:
case 1127:
case 1366:
case 214:
case 820:
case 2163:
case 3390:
case 66:
case 1167:
case 1598:
case 3550:
case 1197:
case 3946:
case 1567:
case 1995:
case 1558:
case 2193:
case 1067:
case 2930:
case 3233:
case 2964:
case 967:
case 2095:
case 527:
case 3812:
case 871:
case 4001:
case 2315:
case 3652:
case 2810:
case 2530:
case 161:
case 1446:
case 3800:
case 653:
case 1415:
case 212:
case 2310:
case 2364:
case 3286:
case 2985:
case 3585:
case 619:
case 3242:
case 3137:
case 17:
case 3576:
case 1053:
case 3142:
case 4035:
case 3817:
case 2595:
case 2389:
case 4032:
case 195:
case 1605:
case 1417:
case 1975:
case 1831:
case 3503:
case 196:
case 3591:
case 3439:
case 2082:
case 576:
case 202:
case 808:
case 2970:
case 644:
case 2116:
case 1002:
case 3372:
case 2670:
case 2697:
case 235:
case 1501:
case 3871:
case 1294:
case 1753:
case 3261:
case 1409:
case 179:
case 121:
case 1108:
case 1251:
case 2853:
case 1983:
case 1597:
case 1724:
case 2316:
case 2515:
case 1560:
case 3061:
case 2255:
case 2480:
case 1289:
case 2668:
case 2412:
case 2004:
case 1119:
case 1:
case 723:
case 3924:
case 3504:
case 3733:
case 3464:
case 2779:
case 3168:
case 40:
case 3156:
case 319:
case 2856:
case 2704:
case 3330:
case 105:
case 2870:
case 3735:
case 3362:
case 3241:
case 2102:
case 4006:
case 1987:
case 3092:
case 3827:
case 965:
case 3436:
case 3331:
case 1130:
case 2831:
case 3660:
case 2606:
case 524:
case 1174:
case 879:
case 1587:
case 2352:
case 2778:
case 3334:
case 2568:
case 1554:
case 572:
case 3828:
case 271:
case 897:
case 2643:
case 2245:
case 2553:
case 4065:
case 1195:
case 3563:
case 1833:
case 3146:
case 1885:
case 3987:
case 1863:
case 1619:
case 2032:
case 3162:
case 554:
case 3307:
case 3953:
case 959:
case 2463:
case 277:
case 805:
case 1556:
case 1780:
case 2378:
case 1818:
case 832:
case 1100:
case 3530:
case 541:
case 456:
case 758:
case 3702:
case 3510:
case 3776:
case 123:
case 1534:
case 3634:
case 1443:
case 2532:
case 96:
case 2405:
case 3411:
case 1221:
case 3972:
case 1972:
case 499:
case 2212:
case 433:
case 3661:
case 4042:
case 2510:
case 3971:
case 1690:
case 2551:
case 3232:
case 3966:
case 1391:
case 474:
case 3875:
case 2155:
case 3084:
case 424:
case 3831:
case 1050:
case 3808:
case 3184:
case 198:
case 3740:
case 3818:
case 2754:
case 1182:
case 3078:
case 3533:
case 2520:
case 3745:
case 170:
case 508:
case 3118:
case 3813:
case 3922:
case 71:
case 3726:
case 2218:
case 2594:
case 3671:
case 896:
case 1628:
case 3145:
case 3943:
case 1179:
case 1196:
case 782:
case 3989:
case 53:
case 1334:
case 3215:
case 2648:
case 3009:
case 364:
case 1286:
case 566:
case 3680:
case 478:
case 1051:
case 1571:
case 1637:
case 969:
case 1139:
case 1153:
case 1217:
case 1955:
case 4080:
case 519:
case 438:
case 1439:
case 539:
case 974:
case 2580:
case 1610:
case 1755:
case 1557:
case 2359:
case 1828:
case 452:
case 543:
case 3258:
case 598:
case 1401:
case 2894:
case 1760:
case 207:
case 3977:
case 2696:
case 238:
case 1300:
case 1801:
case 786:
case 3527:
case 2497:
case 3825:
case 1751:
case 1574:
case 3347:
case 168:
case 1215:
case 3039:
case 218:
case 2915:
case 3601:
case 3890:
case 588:
case 1159:
case 3867:
case 2211:
case 1345:
case 1786:
case 3239:
case 3571:
case 3029:
case 2433:
case 3206:
case 4054:
case 2242:
case 2626:
case 3743:
case 504:
case 322:
case 57:
case 531:
case 2072:
case 2236:
case 885:
case 690:
case 920:
case 1922:
case 1513:
case 3959:
case 3973:
case 3848:
case 1680:
case 2067:
case 3308:
case 3535:
case 1590:
case 671:
case 1899:
case 3467:
case 859:
case 1920:
case 2074:
case 3921:
case 672:
case 1765:
case 4082:
case 2105:
case 3188:
case 783:
case 2164:
case 313:
case 3690:
case 1063:
case 3444:
case 325:
case 2252:
case 2179:
case 646:
case 1850:
case 2261:
case 3517:
case 2767:
case 4008:
case 792:
case 3129:
case 32:
case 1033:
case 285:
case 1261:
case 4029:
case 1532:
case 93:
case 1351:
case 1736:
case 2738:
case 479:
case 1621:
case 520:
case 522:
case 1364:
case 2400:
case 839:
case 2505:
case 2442:
case 1676:
case 135:
case 1545:
case 328:
case 1573:
case 2604:
case 3303:
case 626:
case 2513:
case 3513:
case 3265:
case 1194:
case 2896:
case 2203:
case 3300:
case 919:
case 3949:
case 3907:
case 2385:
case 3022:
case 189:
case 3626:
case 2819:
case 2531:
case 336:
case 3212:
case 3793:
case 2855:
case 2342:
case 2636:
case 3880:
case 703:
case 2106:
case 3062:
case 2123:
case 3806:
case 3866:
case 3056:
case 1441:
case 1738:
case 1946:
case 3528:
case 1134:
case 3149:
case 2777:
case 3107:
case 1652:
case 2998:
case 891:
case 2756:
case 2979:
case 1802:
case 3255:
case 2279:
case 1468:
case 2747:
case 3575:
case 2391:
case 3599:
case 3104:
case 3441:
case 1396:
case 2283:
case 0:
case 855:
case 594:
case 2247:
case 2837:
case 158:
case 2053:
case 1641:
case 3588:
case 3379:
case 1865:
case 2634:
case 3021:
case 2280:
case 1052:
case 381:
case 4055:
case 2902:
case 2847:
case 1406:
case 337:
case 3302:
case 3480:
case 61:
case 1344:
case 3488:
case 513:
case 268:
case 54:
case 2713:
case 2151:
case 361:
case 929:
case 3731:
case 3284:
case 1669:
case 2710:
case 3448:
case 2953:
case 229:
case 2618:
case 3937:
case 716:
case 1851:
case 3915:
case 3386:
case 2517:
case 287:
case 172:
case 1208:
case 8:
case 3600:
case 3479:
case 299:
case 994:
case 3211:
case 775:
case 752:
case 3593:
case 1425:
case 1954:
case 2745:
case 2721:
case 2692:
case 2382:
case 828:
case 2849:
case 578:
case 3947:
case 2555:
case 3888:
case 2205:
case 2485:
case 1448:
case 2732:
case 151:
case 2325:
case 2110:
case 1212:
case 109:
case 2085:
case 247:
case 468:
case 1065:
case 675:
case 1450:
case 2542:
case 1593:
case 1037:
case 1145:
case 1271:
case 1418:
case 2077:
case 1473:
case 246:
case 2226:
case 3887:
case 3678:
case 292:
case 5:
case 1670:
case 1301:
case 3556:
case 720:
case 1066:
case 2126:
case 1178:
case 1464:
case 3130:
case 2753:
case 3686:
case 1420:
case 2494:
case 1038:
case 3894:
case 2339:
case 1693:
case 3586:
case 2635:
case 1793:
case 810:
case 3186:
case 3872:
case 4043:
case 741:
case 1141:
case 3518:
case 2232:
case 34:
case 1495:
case 1962:
case 107:
case 3682:
case 1905:
case 431:
case 753:
case 3361:
case 232:
case 3628:
case 1133:
case 1123:
case 1646:
case 895:
case 945:
case 3057:
case 3409:
case 2999:
case 2688:
case 334:
case 4072:
case 439:
case 555:
case 1874:
case 248:
case 1213:
case 2642:
case 3991:
case 2601:
case 715:
case 3483:
case 3692:
case 2207:
case 2735:
case 2579:
case 1562:
case 1657:
case 3052:
case 3865:
case 2256:
case 851:
case 1728:
case 2079:
case 3070:
case 2838:
case 582:
case 2986:
case 2764:
case 3759:
case 744:
case 2388:
case 1062:
case 1533:
case 1759:
case 1276:
case 41:
case 1085:
case 357:
case 2646:
case 3329:
case 2426:
case 2929:
case 3649:
case 607:
case 1613:
case 3453:
case 2127:
case 1280:
case 3905:
case 2534:
case 2320:
case 3148:
case 321:
case 2698:
case 2023:
case 1877:
case 2714:
case 455:
case 1564:
case 941:
case 3742:
case 1258:
case 332:
case 907:
case 406:
case 2121:
case 65:
case 2786:
case 4003:
case 2765:
case 2132:
case 327:
case 2476:
case 171:
case 2775:
case 631:
case 3176:
case 640:
case 451:
case 3121:
case 3076:
case 1422:
case 210:
case 3720:
case 3336:
case 1490:
case 2268:
case 3301:
case 2975:
case 3427:
case 2158:
case 1932:
case 3484:
case 1552:
case 1969:
case 905:
case 3613:
case 2852:
case 1794:
case 730:
case 2467:
case 3799:
case 2785:
case 1589:
case 1868:
case 1453:
case 712:
case 2880:
case 787:
case 2189:
case 2344:
case 1009:
case 2408:
case 3499:
case 1087:
case 3320:
case 403:
case 399:
case 184:
case 3359:
case 1021:
case 1881:
case 1150:
case 3934:
case 2285:
case 3760:
case 1985:
case 1335:
case 1604:
case 2715:
case 2367:
case 865:
case 1636:
case 1848:
case 3620:
case 2722:
case 2811:
case 3412:
case 4074:
case 2006:
case 1770:
case 1715:
case 1338:
case 1878:
case 131:
case 1888:
case 1092:
case 570:
case 3389:
case 2312:
case 1600:
case 167:
case 30:
case 4087:
case 2392:
case 113:
case 952:
case 2025:
case 595:
case 1717:
case 396:
case 3197:
case 3447:
case 2055:
case 3823:
case 2346:
case 153:
case 2737:
case 3459:
case 2250:
case 47:
case 1488:
case 2752:
case 1758:
case 2872:
case 2334:
case 1031:
case 1974:
case 2314:
case 2674:
case 1579:
case 1511:
case 90:
case 512:
case 962:
case 4085:
case 3311:
case 686:
case 1879:
case 2028:
case 2677:
case 515:
case 262:
case 379:
case 2327:
case 3455:
case 3472:
case 3023:
case 713:
case 1547:
case 1650:
case 3803:
case 2918:
case 1078:
case 3525:
case 3778:
case 1821:
case 3587:
case 3425:
case 1099:
case 765:
case 44:
case 3668:
case 3495:
case 2508:
case 1140:
case 1253:
case 2493:
case 2727:
case 661:
case 1436:
case 692:
case 1378:
case 1328:
case 2187:
case 1163:
case 1428:
case 1233:
case 1004:
case 1578:
case 2425:
case 1864:
case 1090:
case 759:
case 796:
case 2888:
case 1224:
case 2037:
case 2889:
case 1467:
case 3577:
case 695:
case 489:
case 3836:
case 1186:
case 4068:
case 4053:
case 3363:
case 666:
case 1658:
case 1317:
case 1384:
case 2149:
case 1122:
case 3266:
case 2264:
case 2478:
case 774:
case 3965:
case 3381:
case 613:
case 1315:
case 2062:
case 3574:
case 2213:
case 4022:
case 465:
case 2223:
case 822:
case 3296:
case 2695:
case 297:
case 2826:
case 3247:
case 1512:
case 928:
case 2983:
case 348:
case 655:
case 125:
case 267:
case 3214:
case 3223:
case 1211:
case 560:
case 2514:
case 3415:
case 1185:
case 1682:
case 3541:
case 3773:
case 2845:
case 1668:
case 259:
case 1686:
case 1325:
case 2466:
case 1424:
case 799:
case 2475:
case 3185:
case 1825:
case 3077:
case 899:
case 1991:
case 1890:
case 1407:
case 2142:
case 2029:
case 470:
case 1463:
case 3388:
case 2783:
case 4034:
case 477:
case 317:
case 2848:
case 1978:
case 3249:
case 2319:
case 2066:
case 1028:
case 3244:
case 2181:
case 623:
case 204:
case 1663:
case 3874:
case 87:
case 1390:
case 160:
case 245:
case 3769:
case 1815:
case 1817:
case 3819:
case 1948:
case 2409:
case 3705:
case 1774:
case 3327:
case 293:
case 3625:
case 648:
case 1372:
case 3554:
case 710:
case 3117:
case 826:
case 1230:
case 1319:
case 847:
case 1845:
case 1915:
case 1522:
case 3546:
case 636:
case 3399:
case 3445:
case 3:
case 525:
case 2129:
case 1416:
case 1837:
case 2259:
case 2667:
case 1872:
case 1169:
case 1376:
case 2345:
case 3558:
case 1054:
case 1936:
case 608:
case 980:
case 4083:
case 1290:
case 1750:
case 1363:
case 3001:
case 573:
case 521:
case 2338:
case 3237:
case 2512:
case 1491:
case 2297:
case 2806:
case 1705:
case 3476:
case 2013:
case 326:
case 1421:
case 1796:
case 3942:
case 3193:
case 251:
case 3177:
case 294:
case 1353:
case 903:
case 1529:
case 3713:
case 575:
case 2956:
case 3454:
case 1895:
case 1126:
case 1330:
case 760:
case 4077:
case 2224:
case 2746:
case 2437:
case 535:
case 1718:
case 1958:
case 51:
case 3744:
case 3547:
case 3003:
case 1792:
case 2114:
case 2807:
case 923:
case 2787:
case 2159:
case 2556:
case 1776:
case 877:
case 2794:
case 3801:
case 39:
case 2262:
case 2097:
case 2289:
case 1094:
case 1296:
case 280:
case 254:
case 1070:
case 2665:
case 1536:
case 2099:
case 685:
case 1684:
case 4025:
case 1084:
case 3856:
case 2190:
case 1082:
case 3337:
case 3101:
case 3060:
case 3209:
case 742:
case 3466:
case 3500:
case 1616:
case 1173:
case 2884:
case 3114:
case 2458:
case 2591:
case 583:
case 3868:
case 312:
case 1804:
case 3340:
case 4000:
case 2708:
case 2518:
case 2197:
case 2628:
case 3515:
case 1047:
case 791:
case 1152:
case 3178:
case 3605:
case 240:
case 834:
case 3030:
case 333:
case 2098:
case 2027:
case 2799:
case 3036:
case 2198:
case 3008:
case 2361:
case 1929:
case 3855:
case 3054:
case 3013:
case 1044:
case 1927:
case 2666:
case 3651:
case 2969:
case 592:
case 392:
case 2427:
case 186:
case 2308:
case 726:
case 1900:
case 1866:
case 3757:
case 1274:
case 3862:
case 1088:
case 173:
case 2448:
case 1673:
case 2075:
case 3064:
case 3970:
case 2125:
case 3095:
case 3451:
case 1586:
case 999:
case 3993:
case 1154:
case 75:
case 2825:
case 3213:
case 2544:
case 256:
case 2614:
case 1903:
case 3567:
case 1805:
case 1287:
case 2941:
case 2435:
case 3167:
case 3491:
case 3210:
case 3174:
case 2001:
case 1336:
case 2386:
case 837:
case 3506:
case 1387:
case 2537:
case 1769:
case 72:
case 3609:
case 664:
case 780:
case 3791:
case 2406:
case 2083:
case 2605:
case 3350:
case 2299:
case 2103:
case 1007:
case 243:
case 2923:
case 1580:
case 1997:
case 3365:
case 725:
case 85:
case 3357:
case 1198:
case 2366:
case 366:
case 2096:
case 2560:
case 1629:
case 649:
case 1584:
case 2398:
case 2380:
case 2298:
case 64:
case 2946:
case 2992:
case 2432:
case 1913:
case 3044:
case 3277:
case 1784:
case 3788:
case 142:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1684501202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,];
var gg_b = "1684501202/";

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
