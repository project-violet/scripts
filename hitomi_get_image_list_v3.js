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
case 1463:
case 556:
case 3023:
case 1713:
case 2187:
case 3321:
case 982:
case 2147:
case 1957:
case 3813:
case 3108:
case 975:
case 2469:
case 2204:
case 2284:
case 339:
case 3111:
case 3456:
case 2544:
case 2512:
case 1807:
case 1858:
case 2061:
case 1364:
case 2953:
case 722:
case 2357:
case 3358:
case 1560:
case 3361:
case 1308:
case 3648:
case 1966:
case 579:
case 353:
case 2654:
case 3061:
case 3577:
case 3113:
case 3293:
case 1523:
case 3697:
case 730:
case 2688:
case 608:
case 2784:
case 1389:
case 1912:
case 1210:
case 389:
case 91:
case 940:
case 1037:
case 1195:
case 1363:
case 3366:
case 1992:
case 2986:
case 3860:
case 778:
case 2382:
case 811:
case 1245:
case 335:
case 1595:
case 2237:
case 2058:
case 1820:
case 2067:
case 176:
case 3611:
case 1762:
case 2997:
case 2454:
case 3474:
case 1587:
case 2166:
case 4048:
case 1819:
case 3652:
case 1968:
case 943:
case 2442:
case 439:
case 2625:
case 3073:
case 2360:
case 3250:
case 296:
case 3602:
case 2533:
case 3554:
case 681:
case 595:
case 610:
case 95:
case 933:
case 3364:
case 208:
case 3522:
case 2035:
case 1167:
case 2909:
case 1141:
case 3292:
case 2122:
case 1121:
case 3550:
case 1293:
case 1070:
case 4038:
case 2120:
case 924:
case 581:
case 2721:
case 1969:
case 1411:
case 2153:
case 1626:
case 2873:
case 1975:
case 1978:
case 113:
case 284:
case 3481:
case 3379:
case 2099:
case 66:
case 1832:
case 2054:
case 386:
case 1370:
case 3166:
case 1028:
case 1408:
case 1511:
case 3746:
case 3356:
case 2260:
case 1667:
case 3050:
case 295:
case 4037:
case 2431:
case 1406:
case 1616:
case 1764:
case 2306:
case 2090:
case 3961:
case 3553:
case 484:
case 942:
case 1543:
case 2748:
case 524:
case 1754:
case 2191:
case 3158:
case 3483:
case 819:
case 1474:
case 1211:
case 3731:
case 3494:
case 895:
case 1048:
case 993:
case 504:
case 2261:
case 1418:
case 2052:
case 2752:
case 547:
case 2045:
case 3385:
case 2152:
case 1338:
case 1039:
case 974:
case 309:
case 1340:
case 3690:
case 1609:
case 3834:
case 3008:
case 2183:
case 1724:
case 3457:
case 2346:
case 3925:
case 251:
case 30:
case 768:
case 2738:
case 1792:
case 765:
case 1159:
case 2238:
case 2391:
case 3771:
case 2208:
case 4073:
case 2265:
case 3805:
case 3326:
case 1085:
case 1972:
case 2865:
case 3412:
case 1756:
case 979:
case 700:
case 1249:
case 695:
case 2159:
case 1641:
case 1924:
case 3046:
case 1771:
case 1845:
case 2273:
case 3695:
case 3557:
case 3267:
case 2875:
case 3571:
case 3261:
case 3844:
case 3682:
case 1042:
case 3713:
case 122:
case 2253:
case 511:
case 2627:
case 1230:
case 724:
case 468:
case 2570:
case 481:
case 1565:
case 1926:
case 2452:
case 3098:
case 738:
case 2103:
case 2978:
case 558:
case 86:
case 2291:
case 2509:
case 2623:
case 191:
case 3526:
case 1114:
case 828:
case 3898:
case 3575:
case 1273:
case 2174:
case 3448:
case 1686:
case 952:
case 3306:
case 3211:
case 1977:
case 3468:
case 2304:
case 2197:
case 22:
case 2619:
case 855:
case 1697:
case 2685:
case 3464:
case 321:
case 359:
case 2699:
case 348:
case 1022:
case 2372:
case 357:
case 1846:
case 3957:
case 602:
case 3297:
case 856:
case 2657:
case 3409:
case 1312:
case 1130:
case 4091:
case 3664:
case 430:
case 2566:
case 2661:
case 3966:
case 3533:
case 288:
case 1866:
case 2482:
case 3875:
case 2575:
case 1110:
case 3994:
case 1688:
case 3466:
case 3846:
case 100:
case 2802:
case 1717:
case 1267:
case 779:
case 2638:
case 478:
case 3565:
case 563:
case 2405:
case 2805:
case 614:
case 2745:
case 188:
case 428:
case 3256:
case 3349:
case 2615:
case 769:
case 3324:
case 3161:
case 316:
case 2229:
case 2026:
case 553:
case 1081:
case 3047:
case 139:
case 117:
case 3152:
case 1730:
case 287:
case 108:
case 2386:
case 2185:
case 3588:
case 2969:
case 1356:
case 3281:
case 3910:
case 202:
case 406:
case 120:
case 3491:
case 390:
case 3919:
case 555:
case 3459:
case 2321:
case 383:
case 448:
case 1365:
case 3501:
case 1047:
case 63:
case 1954:
case 445:
case 2078:
case 1375:
case 2077:
case 243:
case 3172:
case 220:
case 1880:
case 1567:
case 3939:
case 3816:
case 4000:
case 3958:
case 396:
case 3568:
case 3032:
case 2047:
case 1780:
case 50:
case 2720:
case 1044:
case 4029:
case 1818:
case 4003:
case 2168:
case 739:
case 2590:
case 2213:
case 2774:
case 408:
case 2057:
case 2125:
case 1909:
case 388:
case 883:
case 3338:
case 2726:
case 2411:
case 2586:
case 2952:
case 3839:
case 984:
case 1554:
case 1304:
case 1526:
case 790:
case 2332:
case 3883:
case 930:
case 2384:
case 3534:
case 221:
case 280:
case 3277:
case 1821:
case 2288:
case 3543:
case 181:
case 2449:
case 1963:
case 2141:
case 3783:
case 1103:
case 880:
case 3167:
case 2996:
case 2663:
case 2966:
case 2951:
case 57:
case 2274:
case 3582:
case 31:
case 2138:
case 2943:
case 2239:
case 1660:
case 2885:
case 1521:
case 2151:
case 3146:
case 1038:
case 3955:
case 2568:
case 896:
case 2020:
case 843:
case 1953:
case 817:
case 3623:
case 1303:
case 2698:
case 2564:
case 3758:
case 916:
case 1843:
case 2710:
case 2588:
case 3624:
case 1482:
case 105:
case 1932:
case 2888:
case 2443:
case 417:
case 725:
case 1349:
case 2939:
case 3882:
case 1224:
case 1921:
case 3716:
case 887:
case 1248:
case 2421:
case 148:
case 3599:
case 810:
case 2198:
case 1508:
case 2211:
case 310:
case 651:
case 474:
case 3921:
case 874:
case 2176:
case 1330:
case 3772:
case 3715:
case 1343:
case 248:
case 2631:
case 1410:
case 3123:
case 1582:
case 964:
case 4066:
case 16:
case 1704:
case 2447:
case 3436:
case 2245:
case 1835:
case 179:
case 2429:
case 4057:
case 3567:
case 2668:
case 1422:
case 3862:
case 4049:
case 3987:
case 27:
case 747:
case 1174:
case 3233:
case 3490:
case 2621:
case 294:
case 2014:
case 2652:
case 301:
case 3685:
case 2417:
case 405:
case 3295:
case 1025:
case 1559:
case 662:
case 2525:
case 2295:
case 111:
case 4011:
case 3316:
case 482:
case 3873:
case 1893:
case 2520:
case 3632:
case 3531:
case 1168:
case 2907:
case 2438:
case 230:
case 3561:
case 1073:
case 333:
case 827:
case 1310:
case 4067:
case 2472:
case 3646:
case 96:
case 3661:
case 848:
case 1400:
case 4050:
case 2892:
case 3655:
case 2011:
case 2792:
case 411:
case 2339:
case 800:
case 2840:
case 2709:
case 1950:
case 3790:
case 1264:
case 1907:
case 1576:
case 1752:
case 4053:
case 2536:
case 3820:
case 442:
case 2957:
case 2785:
case 2999:
case 3325:
case 1699:
case 2630:
case 2001:
case 1971:
case 4025:
case 3377:
case 313:
case 1095:
case 709:
case 1593:
case 3001:
case 3314:
case 2719:
case 2310:
case 3362:
case 2399:
case 2690:
case 2508:
case 689:
case 2115:
case 451:
case 818:
case 264:
case 1351:
case 3744:
case 425:
case 2158:
case 3759:
case 2863:
case 2538:
case 480:
case 1049:
case 3560:
case 4064:
case 1714:
case 3892:
case 1215:
case 2424:
case 1453:
case 1137:
case 2268:
case 1193:
case 1104:
case 222:
case 3989:
case 1020:
case 2277:
case 1446:
case 1666:
case 1678:
case 2280:
case 3512:
case 2788:
case 3818:
case 2495:
case 2918:
case 3891:
case 4030:
case 1233:
case 3503:
case 2884:
case 4042:
case 865:
case 1550:
case 2924:
case 1549:
case 2831:
case 743:
case 1007:
case 1272:
case 3454:
case 13:
case 3607:
case 1162:
case 2143:
case 989:
case 1684:
case 3853:
case 3012:
case 1367:
case 2049:
case 1528:
case 2780:
case 873:
case 73:
case 1259:
case 2236:
case 641:
case 3175:
case 3099:
case 3727:
case 2223:
case 3286:
case 4019:
case 1591:
case 1283:
case 1629:
case 3380:
case 2206:
case 789:
case 147:
case 2962:
case 3722:
case 1266:
case 1876:
case 1862:
case 3102:
case 3273:
case 1149:
case 2641:
case 1123:
case 3671:
case 3615:
case 3777:
case 1538:
case 1865:
case 2496:
case 2886:
case 3104:
case 407:
case 1624:
case 2878:
case 409:
case 2929:
case 688:
case 1311:
case 3761:
case 1917:
case 2455:
case 2150:
case 33:
case 2717:
case 3323:
case 2534:
case 3627:
case 1531:
case 3339:
case 3173:
case 1505:
case 2669:
case 4043:
case 167:
case 3734:
case 1718:
case 1481:
case 891:
case 2921:
case 921:
case 3583:
case 3750:
case 3584:
case 1765:
case 3672:
case 4059:
case 3223:
case 2827:
case 1143:
case 3214:
case 1019:
case 1894:
case 3017:
case 2264:
case 2801:
case 538:
case 1665:
case 3083:
case 3944:
case 49:
case 3243:
case 2359:
case 2450:
case 1873:
case 3254:
case 2005:
case 459:
case 3496:
case 3239:
case 1887:
case 2626:
case 2897:
case 3084:
case 2923:
case 1319:
case 2902:
case 1984:
case 1091:
case 3100:
case 3689:
case 3407:
case 2398:
case 3115:
case 2824:
case 4084:
case 1012:
case 3832:
case 2606:
case 1681:
case 638:
case 2926:
case 2300:
case 82:
case 2111:
case 2463:
case 2351:
case 3329:
case 326:
case 1635:
case 1384:
case 2102:
case 3080:
case 1628:
case 1828:
case 3460:
case 1908:
case 240:
case 234:
case 1857:
case 3519:
case 300:
case 1374:
case 2523:
case 269:
case 344:
case 1436:
case 3635:
case 1339:
case 3347:
case 3625:
case 571:
case 4088:
case 2201:
case 2678:
case 2985:
case 3752:
case 2073:
case 567:
case 2105:
case 2759:
case 1317:
case 367:
case 683:
case 2493:
case 927:
case 3993:
case 995:
case 1574:
case 1645:
case 1355:
case 3514:
case 4074:
case 2311:
case 552:
case 472:
case 2806:
case 177:
case 1589:
case 2836:
case 2633:
case 3095:
case 1009:
case 23:
case 4041:
case 1444:
case 1558:
case 1270:
case 393:
case 1496:
case 1290:
case 1083:
case 373:
case 3936:
case 1413:
case 1331:
case 4047:
case 3591:
case 2498:
case 2241:
case 2479:
case 1154:
case 2380:
case 1898:
case 2441:
case 1282:
case 3124:
case 2129:
case 1102:
case 195:
case 1484:
case 197:
case 2106:
case 1801:
case 93:
case 3365:
case 2263:
case 350:
case 1868:
case 1208:
case 1399:
case 599:
case 2345:
case 184:
case 2420:
case 3302:
case 1256:
case 256:
case 3488:
case 3932:
case 3670:
case 3149:
case 403:
case 3930:
case 127:
case 1366:
case 3908:
case 260:
case 2744:
case 62:
case 3189:
case 1158:
case 440:
case 1561:
case 3310:
case 2317:
case 1246:
case 1983:
case 3135:
case 1050:
case 1064:
case 1151:
case 1600:
case 509:
case 3973:
case 2680:
case 275:
case 2925:
case 2027:
case 615:
case 3049:
case 1334:
case 1457:
case 2301:
case 3977:
case 2336:
case 2613:
case 3026:
case 3089:
case 2330:
case 711:
case 404:
case 3056:
case 3806:
case 244:
case 1124:
case 541:
case 374:
case 3404:
case 3865:
case 4052:
case 2139:
case 669:
case 3179:
case 1483:
case 3949:
case 3469:
case 263:
case 2702:
case 1773:
case 2402:
case 3139:
case 1108:
case 745:
case 2205:
case 3234:
case 648:
case 3140:
case 4065:
case 2916:
case 1332:
case 1592:
case 2724:
case 838:
case 1326:
case 2217:
case 1263:
case 1544:
case 1679:
case 717:
case 3218:
case 3797:
case 3706:
case 1353:
case 2177:
case 2577:
case 3848:
case 371:
case 3669:
case 1601:
case 356:
case 2088:
case 3022:
case 239:
case 1461:
case 1061:
case 3258:
case 2976:
case 589:
case 2650:
case 1788:
case 3186:
case 227:
case 129:
case 3520:
case 4086:
case 3033:
case 3594:
case 1999:
case 2944:
case 3016:
case 1435:
case 545:
case 2594:
case 784:
case 2199:
case 503:
case 2693:
case 1337:
case 281:
case 2281:
case 3298:
case 457:
case 1433:
case 2573:
case 997:
case 3291:
case 3069:
case 3920:
case 2519:
case 1990:
case 2246:
case 3639:
case 1173:
case 2251:
case 3619:
case 3742:
case 1825:
case 1501:
case 1935:
case 1804:
case 3238:
case 1906:
case 299:
case 314:
case 157:
case 2366:
case 2065:
case 1247:
case 26:
case 3549:
case 2874:
case 2196:
case 3174:
case 1315:
case 3960:
case 1336:
case 2308:
case 164:
case 476:
case 971:
case 2327:
case 752:
case 3227:
case 2549:
case 2711:
case 1888:
case 1071:
case 398:
case 2432:
case 1390:
case 3114:
case 186:
case 2677:
case 1981:
case 3943:
case 1100:
case 3476:
case 1655:
case 3020:
case 760:
case 2324:
case 2:
case 578:
case 3658:
case 3618:
case 1116:
case 2484:
case 2917:
case 2981:
case 996:
case 224:
case 238:
case 658:
case 2933:
case 2984:
case 3544:
case 776:
case 368:
case 438:
case 3657:
case 3005:
case 3640:
case 3081:
case 2583:
case 3903:
case 253:
case 719:
case 2170:
case 3320:
case 2602:
case 2036:
case 3072:
case 4081:
case 1499:
case 2971:
case 303:
case 131:
case 1634:
case 2352:
case 2361:
case 3845:
case 3006:
case 152:
case 3933:
case 2742:
case 4056:
case 3336:
case 2367:
case 3529:
case 824:
case 859:
case 2394:
case 3703:
case 337:
case 3928:
case 1294:
case 3725:
case 3241:
case 1884:
case 2580:
case 3969:
case 2289:
case 3064:
case 273:
case 2132:
case 1815:
case 381:
case 1656:
case 1479:
case 2795:
case 124:
case 3979:
case 1584:
case 2193:
case 3755:
case 3677:
case 3177:
case 1672:
case 1929:
case 3978:
case 433:
case 1791:
case 4051:
case 2935:
case 453:
case 3170:
case 2899:
case 2329:
case 3381:
case 2593:
case 3222:
case 3198:
case 75:
case 1405:
case 536:
case 3729:
case 1327:
case 3952:
case 1424:
case 2793:
case 3421:
case 2797:
case 1126:
case 2782:
case 2290:
case 1255:
case 3077:
case 1182:
case 3990:
case 2416:
case 1833:
case 1800:
case 204:
case 1731:
case 1360:
case 360:
case 2266:
case 3455:
case 3397:
case 1824:
case 3506:
case 3551:
case 607:
case 3168:
case 767:
case 2485:
case 2412:
case 2373:
case 1218:
case 3536:
case 2614:
case 3513:
case 2341:
case 1164:
case 3003:
case 2255:
case 3869:
case 2468:
case 2175:
case 506:
case 4069:
case 978:
case 3918:
case 3000:
case 802:
case 1295:
case 958:
case 2859:
case 3051:
case 721:
case 792:
case 3355:
case 3101:
case 3264:
case 2401:
case 3938:
case 616:
case 2993:
case 2684:
case 1927:
case 412:
case 3422:
case 911:
case 542:
case 352:
case 4005:
case 3638:
case 490:
case 634:
case 1810:
case 1377:
case 2510:
case 3127:
case 3110:
case 1936:
case 1530:
case 3121:
case 1112:
case 2517:
case 723:
case 1709:
case 2368:
case 35:
case 2130:
case 3180:
case 3580:
case 185:
case 3590:
case 1967:
case 3942:
case 2396:
case 1429:
case 3576:
case 854:
case 1392:
case 606:
case 1420:
case 3269:
case 4026:
case 872:
case 2059:
case 3998:
case 1448:
case 306:
case 52:
case 334:
case 2610:
case 1462:
case 1539:
case 2164:
case 328:
case 2114:
case 2567:
case 1409:
case 2931:
case 3150:
case 4092:
case 1569:
case 613:
case 3691:
case 2337:
case 2007:
case 2511:
case 2064:
case 2156:
case 2136:
case 3405:
case 1753:
case 1853:
case 2537:
case 2647:
case 3452:
case 2074:
case 2375:
case 3230:
case 2761:
case 469:
case 1333:
case 3631:
case 2202:
case 1021:
case 3654:
case 3686:
case 2427:
case 2303:
case 3040:
case 1323:
case 1691:
case 3122:
case 2807:
case 1292:
case 2025:
case 3539:
case 544:
case 2385:
case 2843:
case 3434:
case 582:
case 3947:
case 3833:
case 2708:
case 1719:
case 3913:
case 588:
case 2062:
case 2667:
case 4054:
case 2003:
case 2079:
case 3213:
case 1354:
case 2813:
case 645:
case 649:
case 1136:
case 1131:
case 1065:
case 1487:
case 3642:
case 1882:
case 794:
case 3620:
case 870:
case 701:
case 115:
case 3282:
case 3819:
case 3401:
case 2096:
case 1900:
case 2740:
case 3887:
case 2578:
case 385:
case 513:
case 2436:
case 2486:
case 583:
case 2937:
case 1889:
case 1059:
case 1813:
case 3545:
case 3986:
case 1391:
case 291:
case 2995:
case 302:
case 2825:
case 1757:
case 3838:
case 1689:
case 3739:
case 436:
case 1066:
case 2243:
case 3429:
case 1891:
case 3313:
case 3262:
case 999:
case 2887:
case 604:
case 1553:
case 1495:
case 2165:
case 2333:
case 750:
case 1117:
case 2973:
case 2624:
case 1194:
case 826:
case 142:
case 572:
case 3249:
case 1456:
case 2492:
case 757:
case 1710:
case 3164:
case 1179:
case 1468:
case 3692:
case 4035:
case 1185:
case 653:
case 483:
case 3237:
case 2216:
case 3132:
case 2041:
case 3119:
case 837:
case 1296:
case 3009:
case 308:
case 2749:
case 145:
case 1260:
case 2230:
case 806:
case 2285:
case 3710:
case 3852:
case 1005:
case 3039:
case 1746:
case 3614:
case 3926:
case 3967:
case 1577:
case 2435:
case 639:
case 3025:
case 2560:
case 2858:
case 3374:
case 1987:
case 3451:
case 2592:
case 3985:
case 640:
case 3296:
case 2262:
case 3842:
case 3392:
case 733:
case 1313:
case 670:
case 523:
case 2393:
case 165:
case 376:
case 2936:
case 1417:
case 2700:
case 1165:
case 962:
case 620:
case 3546:
case 3728:
case 1945:
case 1371:
case 2607:
case 1181:
case 437:
case 3849:
case 170:
case 3740:
case 2194:
case 1982:
case 3899:
case 1171:
case 621:
case 569:
case 2620:
case 1904:
case 1682:
case 492:
case 2343:
case 3190:
case 2087:
case 3673:
case 1234:
case 3207:
case 1787:
case 3867:
case 574:
case 830:
case 2053:
case 3535:
case 1362:
case 1707:
case 2383:
case 1207:
case 3552:
case 1017:
case 3660:
case 3482:
case 3900:
case 2864:
case 2870:
case 2681:
case 1212:
case 994:
case 2734:
case 3079:
case 1646:
case 1676:
case 56:
case 3289:
case 1244:
case 85:
case 378:
case 4044:
case 3736:
case 362:
case 2755:
case 3861:
case 1464:
case 1789:
case 42:
case 2837:
case 3126:
case 2113:
case 2227:
case 2777:
case 947:
case 1414:
case 946:
case 6:
case 1895:
case 1184:
case 2665:
case 3880:
case 3516:
case 2331:
case 160:
case 3573:
case 3606:
case 1134:
case 1426:
case 3299:
case 2172:
case 656:
case 2134:
case 2307:
case 3815:
case 3600:
case 1472:
case 3579:
case 548:
case 4015:
case 2866:
case 3065:
case 312:
case 3002:
case 3010:
case 1219:
case 3444:
case 1094:
case 2354:
case 919:
case 2715:
case 1147:
case 1555:
case 2906:
case 1612:
case 1869:
case 3747:
case 3415:
case 2830:
case 1306:
case 2338:
case 1763:
case 3916:
case 496:
case 820:
case 2898:
case 543:
case 3802:
case 3440:
case 1946:
case 2140:
case 1269:
case 1826:
case 772:
case 1434:
case 420:
case 748:
case 3566:
case 835:
case 3414:
case 1664:
case 2063:
case 1795:
case 3378:
case 3485:
case 3696:
case 809:
case 3458:
case 3153:
case 3475:
case 2042:
case 1419:
case 712:
case 88:
case 245:
case 845:
case 3427:
case 1180:
case 1747:
case 261:
case 1808:
case 2276:
case 2446:
case 2767:
case 1357:
case 143:
case 464:
case 577:
case 2305:
case 2791:
case 3284:
case 358:
case 3402:
case 1708:
case 317:
case 1875:
case 1603:
case 2639:
case 1870:
case 3410:
case 1564:
case 209:
case 1811:
case 551:
case 766:
case 3837:
case 2200:
case 2655:
case 3621:
case 1232:
case 3340:
case 2876:
case 2872:
case 4078:
case 937:
case 1657:
case 3762:
case 892:
case 4071:
case 609:
case 601:
case 2581:
case 1324:
case 3569:
case 1045:
case 1516:
case 2298:
case 12:
case 3225:
case 704:
case 125:
case 41:
case 3031:
case 48:
case 1786:
case 4008:
case 2043:
case 216:
case 684:
case 2852:
case 2585:
case 1284:
case 3743:
case 3821:
case 1733:
case 2506:
case 2628:
case 2487:
case 2601:
case 2992:
case 3294:
case 1145:
case 1214:
case 3649:
case 1153:
case 3075:
case 2460:
case 4004:
case 1836:
case 2403:
case 3822:
case 1748:
case 1396:
case 499:
case 345:
case 112:
case 3667:
case 1897:
case 3384:
case 2770:
case 3770:
case 3:
case 4013:
case 2270:
case 159:
case 2179:
case 576:
case 1964:
case 698:
case 1129:
case 2729:
case 3556:
case 2419:
case 1618:
case 1578:
case 3574:
case 3714:
case 1741:
case 54:
case 2904:
case 710:
case 1533:
case 529:
case 1552:
case 2809:
case 3435:
case 2297:
case 2763:
case 1101:
case 2970:
case 3013:
case 3644:
case 559:
case 3383:
case 3244:
case 3570:
case 135:
case 720:
case 2225:
case 3038:
case 2800:
case 1706:
case 233:
case 3786:
case 1015:
case 3333:
case 3792:
case 1940:
case 372:
case 1466:
case 3479:
case 770:
case 1026:
case 38:
case 429:
case 991:
case 1871:
case 3019:
case 2076:
case 2287:
case 341:
case 272:
case 3453:
case 40:
case 2055:
case 2481:
case 3896:
case 443:
case 2643:
case 650:
case 796:
case 1200:
case 193:
case 2247:
case 241:
case 1918:
case 3604:
case 879:
case 2342:
case 3202:
case 2725:
case 3260:
case 3711:
case 17:
case 2437:
case 624:
case 3252:
case 4018:
case 1415:
case 2388:
case 1622:
case 2389:
case 2879:
case 3433:
case 1352:
case 1183:
case 3613:
case 2829:
case 2516:
case 2810:
case 3315:
case 2319:
case 279:
case 3564:
case 3300:
case 2954:
case 2635:
case 3680:
case 1216:
case 1952:
case 2587:
case 2046:
case 585:
case 3217:
case 3129:
case 1428:
case 1421:
case 4022:
case 4082:
case 532:
case 2653:
case 2972:
case 1537:
case 637:
case 793:
case 546:
case 252:
case 1172:
case 270:
case 774:
case 3354:
case 2656:
case 3733:
case 1046:
case 807:
case 2163:
case 2100:
case 2706:
case 3814:
case 1805:
case 2689:
case 1128:
case 237:
case 797:
case 2718:
case 1077:
case 2069:
case 2022:
case 1958:
case 19:
case 2890:
case 2746:
case 4039:
case 1723:
case 677:
case 3037:
case 3735:
case 2612:
case 2272:
case 986:
case 1347:
case 1217:
case 3418:
case 3831:
case 2066:
case 2335:
case 3138:
case 759:
case 840:
case 231:
case 1677:
case 2433:
case 799:
case 1979:
case 1962:
case 3653:
case 2532:
case 876:
case 3603:
case 1280:
case 1188:
case 2501:
case 2505:
case 1316:
case 2377:
case 2374:
case 850:
case 938:
case 1056:
case 3626:
case 3203:
case 1381:
case 2675:
case 1642:
case 1993:
case 1522:
case 897:
case 3092:
case 2750:
case 2423:
case 3246:
case 3363:
case 4017:
case 3312:
case 901:
case 1397:
case 2526:
case 1517:
case 203:
case 2553:
case 2012:
case 564:
case 18:
case 94:
case 1169:
case 1329:
case 2439:
case 3794:
case 2895:
case 2771:
case 3063:
case 623:
case 2224:
case 2409:
case 1633:
case 4033:
case 781:
case 1994:
case 3858:
case 1072:
case 1974:
case 983:
case 2362:
case 1685:
case 3532:
case 487:
case 3027:
case 2117:
case 939:
case 2410:
case 2632:
case 2107:
case 134:
case 3206:
case 1063:
case 3663:
case 561:
case 1506:
case 2634:
case 2814:
case 1271:
case 1186:
case 1277:
case 1388:
case 2838:
case 967:
case 1082:
case 1027:
case 908:
case 1743:
case 104:
case 3723:
case 3141:
case 804:
case 4075:
case 3489:
case 1430:
case 2542:
case 2741:
case 1439:
case 10:
case 1480:
case 37:
case 410:
case 3057:
case 2037:
case 2569:
case 349:
case 2648:
case 898:
case 3171:
case 2235:
case 2434:
case 2597:
case 1563:
case 3826:
case 479:
case 1608:
case 2363:
case 1905:
case 2418:
case 502:
case 2092:
case 1029:
case 3622:
case 39:
case 384:
case 1139:
case 1515:
case 1943:
case 250:
case 2798:
case 2358:
case 2275:
case 867:
case 444:
case 2296:
case 3555:
case 1097:
case 2905:
case 3044:
case 763:
case 2390:
case 3976:
case 2565:
case 1551:
case 2691:
case 271:
case 53:
case 2694:
case 2551:
case 1450:
case 2428:
case 1361:
case 2673:
case 4031:
case 223:
case 2730:
case 1057:
case 970:
case 2467:
case 3367:
case 187:
case 692:
case 3155:
case 3540:
case 2756:
case 910:
case 413:
case 702:
case 3538:
case 3528:
case 1239:
case 3717:
case 1615:
case 2178:
case 435:
case 3128:
case 123:
case 4068:
case 3184:
case 3776:
case 1890:
case 3255:
case 3906:
case 2094:
case 2500:
case 1647:
case 1398:
case 2808:
case 2371:
case 3045:
case 1783:
case 1911:
case 3091:
case 3143:
case 2009:
case 196:
case 2611:
case 3043:
case 3879:
case 980:
case 1036:
case 1087:
case 1209:
case 324:
case 2220:
case 61:
case 2617:
case 1199:
case 3992:
case 99:
case 680:
case 213:
case 2975:
case 151:
case 3872:
case 1196:
case 1024:
case 3662:
case 114:
case 3257:
case 3779:
case 3235:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1670137201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,];
var gg_b = "1670137201/";

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
