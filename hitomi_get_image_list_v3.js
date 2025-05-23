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
case 2536:
case 2542:
case 2402:
case 1228:
case 2827:
case 2566:
case 1748:
case 3094:
case 1789:
case 3978:
case 694:
case 3586:
case 2863:
case 2976:
case 242:
case 2409:
case 928:
case 2334:
case 602:
case 1310:
case 1004:
case 1185:
case 2935:
case 1844:
case 1601:
case 137:
case 4021:
case 3456:
case 269:
case 108:
case 2233:
case 2263:
case 3998:
case 2595:
case 730:
case 330:
case 3329:
case 1959:
case 2177:
case 2160:
case 2301:
case 2130:
case 1031:
case 1114:
case 670:
case 185:
case 3914:
case 3180:
case 1634:
case 3315:
case 2996:
case 3322:
case 1724:
case 833:
case 1587:
case 3820:
case 927:
case 300:
case 912:
case 1136:
case 1225:
case 1175:
case 2455:
case 1990:
case 3966:
case 1772:
case 1203:
case 9:
case 78:
case 38:
case 3936:
case 784:
case 1616:
case 3293:
case 806:
case 454:
case 1188:
case 440:
case 2604:
case 3900:
case 1149:
case 803:
case 2585:
case 3022:
case 3988:
case 586:
case 1779:
case 541:
case 3447:
case 1361:
case 3949:
case 3507:
case 3565:
case 583:
case 1331:
case 3394:
case 1792:
case 32:
case 724:
case 1970:
case 2756:
case 2316:
case 1803:
case 3995:
case 2598:
case 3170:
case 3709:
case 1195:
case 366:
case 987:
case 1446:
case 191:
case 363:
case 1812:
case 1506:
case 2661:
case 615:
case 107:
case 1799:
case 3084:
case 2631:
case 3713:
case 3167:
case 1469:
case 860:
case 1819:
case 3681:
case 3273:
case 56:
case 1304:
case 3702:
case 564:
case 3617:
case 3318:
case 1439:
case 2241:
case 3087:
case 297:
case 2426:
case 2023:
case 2581:
case 3134:
case 1680:
case 1376:
case 1307:
case 2067:
case 1365:
case 1934:
case 3614:
case 2910:
case 1964:
case 2696:
case 745:
case 3561:
case 253:
case 1171:
case 256:
case 1221:
case 405:
case 3428:
case 2943:
case 641:
case 2725:
case 2665:
case 3330:
case 1068:
case 2635:
case 1396:
case 3360:
case 1901:
case 3685:
case 2272:
case 2122:
case 1856:
case 1518:
case 2245:
case 2892:
case 1086:
case 3991:
case 2359:
case 0:
case 515:
case 4044:
case 3678:
case 664:
case 66:
case 2279:
case 210:
case 1117:
case 1763:
case 3510:
case 2848:
case 4003:
case 2080:
case 2931:
case 1181:
case 2052:
case 1727:
case 890:
case 1584:
case 1368:
case 2008:
case 3981:
case 3030:
case 1605:
case 1493:
case 1338:
case 59:
case 1096:
case 4012:
case 3419:
case 3403:
case 3006:
case 113:
case 487:
case 3077:
case 429:
case 2571:
case 3695:
case 2744:
case 3425:
case 1454:
case 819:
case 3412:
case 2224:
case 396:
case 3862:
case 796:
case 3846:
case 3832:
case 2850:
case 359:
case 2153:
case 2668:
case 1007:
case 3269:
case 2904:
case 2337:
case 1522:
case 954:
case 95:
case 2323:
case 3649:
case 3751:
case 3311:
case 1847:
case 2824:
case 3262:
case 435:
case 471:
case 3116:
case 2250:
case 817:
case 3232:
case 275:
case 1420:
case 14:
case 427:
case 1690:
case 3726:
case 2591:
case 412:
case 3675:
case 2282:
case 87:
case 489:
case 3642:
case 570:
case 3097:
case 198:
case 213:
case 216:
case 3342:
case 3336:
case 3098:
case 1571:
case 3974:
case 3255:
case 2386:
case 2454:
case 465:
case 1850:
case 1059:
case 318:
case 3564:
case 2763:
case 1961:
case 1080:
case 1931:
case 2733:
case 1848:
case 2247:
case 1889:
case 2605:
case 3131:
case 2667:
case 2727:
case 2338:
case 2420:
case 175:
case 680:
case 4041:
case 1194:
case 60:
case 1282:
case 1591:
case 3078:
case 244:
case 24:
case 1370:
case 250:
case 2007:
case 1367:
case 1668:
case 2065:
case 1305:
case 692:
case 2076:
case 2473:
case 3501:
case 1337:
case 1638:
case 548:
case 1904:
case 858:
case 1323:
case 2515:
case 3085:
case 3104:
case 1289:
case 3953:
case 1248:
case 3213:
case 3606:
case 1451:
case 1070:
case 549:
case 859:
case 1943:
case 2741:
case 2574:
case 3773:
case 101:
case 1872:
case 3240:
case 197:
case 2256:
case 3984:
case 1845:
case 1910:
case 1184:
case 2365:
case 1067:
case 2307:
case 979:
case 2376:
case 2652:
case 3720:
case 3209:
case 1696:
case 3660:
case 2964:
case 1037:
case 790:
case 3802:
case 3516:
case 857:
case 547:
case 2594:
case 3066:
case 452:
case 3697:
case 1129:
case 3398:
case 3036:
case 2821:
case 1607:
case 2068:
case 1308:
case 719:
case 3314:
case 896:
case 1725:
case 3809:
case 3922:
case 2038:
case 977:
case 3915:
case 2518:
case 2856:
case 914:
case 1115:
case 3840:
case 4033:
case 2901:
case 921:
case 199:
case 1380:
case 4063:
case 830:
case 673:
case 1604:
case 534:
case 3317:
case 3618:
case 2361:
case 2100:
case 2331:
case 209:
case 3168:
case 736:
case 2142:
case 2597:
case 2175:
case 2212:
case 3424:
case 1578:
case 2166:
case 238:
case 2990:
case 3694:
case 2616:
case 2772:
case 207:
case 3489:
case 2923:
case 4082:
case 647:
case 2967:
case 2010:
case 2819:
case 4050:
case 2304:
case 2792:
case 3482:
case 3674:
case 1756:
case 2446:
case 495:
case 3071:
case 1598:
case 3450:
case 2506:
case 2577:
case 2812:
case 3746:
case 225:
case 2310:
case 3732:
case 414:
case 41:
case 142:
case 421:
case 1364:
case 3762:
case 1935:
case 520:
case 1500:
case 237:
case 3135:
case 2782:
case 82:
case 169:
case 3107:
case 1440:
case 824:
case 3226:
case 3176:
case 360:
case 3629:
case 1197:
case 1542:
case 952:
case 3371:
case 3769:
case 2178:
case 3590:
case 1566:
case 1458:
case 2228:
case 1575:
case 2789:
case 1833:
case 1016:
case 1863:
case 3537:
case 2244:
case 167:
case 655:
case 479:
case 1160:
case 3196:
case 2114:
case 1130:
case 2031:
case 3684:
case 88:
case 884:
case 3472:
case 2908:
case 3081:
case 2952:
case 2511:
case 2587:
case 3523:
case 1996:
case 3960:
case 4072:
case 1233:
case 648:
case 751:
case 3977:
case 3479:
case 3906:
case 208:
case 4045:
case 592:
case 3570:
case 306:
case 1643:
case 706:
case 1227:
case 303:
case 2261:
case 572:
case 1509:
case 4090:
case 511:
case 820:
case 2319:
case 3281:
case 524:
case 1540:
case 1442:
case 1436:
case 2780:
case 36:
case 76:
case 1466:
case 3490:
case 1816:
case 499:
case 2303:
case 2155:
case 3760:
case 326:
case 2924:
case 2752:
case 1027:
case 2325:
case 3599:
case 2708:
case 2312:
case 3437:
case 3881:
case 645:
case 3545:
case 3939:
case 58:
case 3467:
case 3405:
case 3817:
case 584:
case 2861:
case 3797:
case 2831:
case 3026:
case 3423:
case 2989:
case 4070:
case 786:
case 1735:
case 4005:
case 3962:
case 967:
case 4067:
case 3579:
case 1776:
case 2950:
case 3654:
case 1612:
case 383:
case 4037:
case 1707:
case 497:
case 1132:
case 288:
case 1146:
case 1603:
case 1216:
case 2109:
case 212:
case 1801:
case 227:
case 1485:
case 2992:
case 289:
case 83:
case 3326:
case 834:
case 271:
case 1234:
case 475:
case 2:
case 2140:
case 659:
case 2999:
case 3351:
case 2497:
case 2633:
case 1555:
case 3787:
case 2663:
case 2102:
case 1921:
case 2158:
case 3271:
case 2243:
case 2328:
case 2627:
case 2767:
case 3683:
case 2705:
case 3891:
case 1834:
case 3589:
case 2460:
case 968:
case 3548:
case 165:
case 657:
case 3452:
case 1786:
case 1864:
case 4059:
case 2430:
case 1414:
case 2972:
case 1201:
case 2344:
case 2945:
case 2790:
case 2539:
case 3459:
case 1738:
case 4008:
case 3957:
case 3871:
case 4052:
case 2025:
case 696:
case 3291:
case 2546:
case 1333:
case 1498:
case 3550:
case 2003:
case 1363:
case 2979:
case 2406:
case 1157:
case 143:
case 3662:
case 3715:
case 3355:
case 2650:
case 3954:
case 876:
case 1925:
case 1551:
case 146:
case 3632:
case 467:
case 559:
case 1290:
case 3266:
case 849:
case 3125:
case 2474:
case 179:
case 2682:
case 2701:
case 3895:
case 3236:
case 1870:
case 1867:
case 1417:
case 1526:
case 1805:
case 3639:
case 1919:
case 2268:
case 3669:
case 3200:
case 1481:
case 370:
case 956:
case 3288:
case 1823:
case 3249:
case 2347:
case 3119:
case 901:
case 2583:
case 1099:
case 1382:
case 3866:
case 1890:
case 3416:
case 847:
case 3836:
case 557:
case 79:
case 1120:
case 3058:
case 121:
case 1710:
case 2734:
case 3849:
case 1173:
case 2056:
case 1223:
case 1092:
case 1348:
case 593:
case 2418:
case 2868:
case 1267:
case 302:
case 3009:
case 3800:
case 1743:
case 2941:
case 2838:
case 3718:
case 3302:
case 1704:
case 3657:
case 3358:
case 1050:
case 1471:
case 4064:
case 1859:
case 3128:
case 3753:
case 2554:
case 624:
case 62:
case 1082:
case 3898:
case 611:
case 1808:
case 3814:
case 2265:
case 2207:
case 2235:
case 732:
case 2896:
case 2672:
case 2356:
case 3340:
case 468:
case 1880:
case 1392:
case 315:
case 2593:
case 684:
case 3878:
case 2933:
case 1761:
case 1379:
case 3298:
case 1621:
case 855:
case 3055:
case 25:
case 2927:
case 1259:
case 3983:
case 2429:
case 1656:
case 1372:
case 3774:
case 3885:
case 1345:
case 2692:
case 975:
case 2047:
case 3401:
case 931:
case 1280:
case 2865:
case 1252:
case 2807:
case 2415:
case 1208:
case 3214:
case 2422:
case 2835:
case 1126:
case 2852:
case 1265:
case 295:
case 3830:
case 4043:
case 3860:
case 1896:
case 3410:
case 1235:
case 590:
case 894:
case 747:
case 2089:
case 2880:
case 3503:
case 4010:
case 2704:
case 3046:
case 2859:
case 802:
case 3032:
case 3443:
case 519:
case 2399:
case 3297:
case 1321:
case 582:
case 1679:
case 749:
case 349:
case 1573:
case 2372:
case 2280:
case 278:
case 2345:
case 1422:
case 2208:
case 94:
case 1415:
case 2252:
case 376:
case 776:
case 950:
case 3260:
case 762:
case 362:
case 3613:
case 2183:
case 1933:
case 3127:
case 2621:
case 517:
case 3897:
case 2379:
case 522:
case 1520:
case 1963:
case 15:
case 633:
case 3658:
case 154:
case 2491:
case 3717:
case 57:
case 3133:
case 870:
case 1268:
case 2919:
case 2805:
case 3791:
case 2526:
case 2417:
case 2867:
case 2837:
case 2481:
case 1238:
case 3431:
case 3887:
case 2072:
case 2045:
case 3811:
case 2193:
case 1648:
case 3461:
case 603:
case 3057:
case 485:
case 1286:
case 2912:
case 281:
case 246:
case 606:
case 1682:
case 4061:
case 3528:
case 2870:
case 651:
case 2223:
case 2173:
case 1453:
case 3287:
case 3211:
case 518:
case 2092:
case 2205:
case 1418:
case 1838:
case 3369:
case 3771:
case 2890:
case 1583:
case 277:
case 1021:
case 2120:
case 2270:
case 1624:
case 1886:
case 1764:
case 214:
case 3362:
case 1734:
case 2710:
case 660:
case 1497:
case 1999:
case 2921:
case 1723:
case 304:
case 1663:
case 70:
case 2555:
case 30:
case 4076:
case 3902:
case 4007:
case 1705:
case 4035:
case 1767:
case 909:
case 1627:
case 3199:
case 127:
case 44:
case 2801:
case 444:
case 506:
case 1109:
case 1992:
case 886:
case 938:
case 551:
case 2234:
case 841:
case 171:
case 3192:
case 3435:
case 3407:
case 3815:
case 3465:
case 1:
case 392:
case 883:
case 792:
case 3822:
case 3073:
case 2264:
case 3909:
case 720:
case 618:
case 907:
case 3700:
case 3179:
case 2768:
case 3383:
case 1012:
case 3054:
case 1025:
case 2333:
case 3651:
case 1532:
case 1546:
case 1477:
case 3788:
case 1406:
case 1979:
case 1003:
case 265:
case 1019:
case 1460:
case 3496:
case 3145:
case 3093:
case 2834:
case 3222:
case 1430:
case 823:
case 2786:
case 3215:
case 3172:
case 560:
case 413:
case 1344:
case 3742:
case 1972:
case 187:
case 129:
case 416:
case 1780:
case 925:
case 3124:
case 2502:
case 1155:
case 1303:
case 2558:
case 2063:
case 2816:
case 2466:
case 1924:
case 2796:
case 937:
case 3083:
case 1708:
case 4038:
case 3486:
case 1325:
case 2513:
case 1752:
case 252:
case 1044:
case 2509:
case 1261:
case 2449:
case 3853:
case 1231:
case 2947:
case 1319:
case 3393:
case 4086:
case 3438:
case 2400:
case 1804:
case 3468:
case 2540:
case 3320:
case 2735:
case 2765:
case 3182:
case 2612:
case 1950:
case 2776:
case 939:
case 985:
case 2146:
case 3874:
case 1557:
case 734:
case 3785:
case 334:
case 3189:
case 2619:
case 908:
case 2341:
case 1204:
case 3218:
case 1861:
case 3778:
case 674:
case 533:
case 1487:
case 1851:
case 535:
case 1479:
case 2159:
case 5:
case 809:
case 230:
case 512:
case 2671:
case 3595:
case 470:
case 3227:
case 367:
case 941:
case 986:
case 1445:
case 3301:
case 1196:
case 3160:
case 2108:
case 1684:
case 983:
case 1505:
case 1472:
case 2180:
case 1930:
case 1081:
case 3610:
case 2755:
case 1523:
case 3996:
case 2315:
case 1629:
case 3197:
case 3536:
case 1371:
case 402:
case 3566:
case 4009:
case 3827:
case 2978:
case 4040:
case 807:
case 3016:
case 1997:
case 4002:
case 1732:
case 3334:
case 3409:
case 4058:
case 742:
case 342:
case 891:
case 96:
case 3588:
case 1762:
case 3364:
case 3549:
case 2018:
case 2985:
case 4013:
case 2384:
case 923:
case 1226:
case 2394:
case 2995:
case 3316:
case 1674:
case 224:
case 415:
case 22:
case 2220:
case 1071:
case 3598:
case 272:
case 825:
case 2854:
case 263:
case 1489:
case 2596:
case 2137:
case 1448:
case 3661:
case 2167:
case 2713:
case 1911:
case 3631:
case 3034:
case 2681:
case 528:
case 3241:
case 2123:
case 2318:
case 3064:
case 3986:
case 885:
case 1424:
case 3578:
case 2254:
case 2190:
case 133:
case 2975:
case 2966:
case 2942:
case 2936:
case 839:
case 2374:
case 3968:
case 588:
case 2293:
case 4055:
case 3585:
case 2873:
case 2015:
case 3841:
case 3604:
case 808:
case 2447:
case 2576:
case 1168:
case 1653:
case 3607:
case 1314:
case 119:
case 3352:
case 426:
case 3725:
case 1809:
case 994:
case 182:
case 1922:
case 861:
case 2101:
case 1000:
case 1915:
case 1840:
case 2685:
case 3272:
case 3703:
case 46:
case 464:
case 799:
case 3892:
case 3245:
case 1929:
case 2257:
case 190:
case 1802:
case 1427:
case 1858:
case 3359:
case 2991:
case 1793:
case 1075:
case 3899:
case 2678:
case 1463:
case 2306:
case 1697:
case 1433:
case 628:
case 3129:
case 1398:
case 84:
case 55:
case 3023:
case 797:
case 3426:
case 1240:
case 1385:
case 2134:
case 3845:
case 2011:
case 1110:
case 3581:
case 3292:
case 3910:
case 2614:
case 1630:
case 1720:
case 245:
case 117:
case 122:
case 753:
case 353:
case 1213:
case 3299:
case 1143:
case 2698:
case 4026:
case 756:
case 688:
case 356:
case 3070:
case 3943:
case 1773:
case 2971:
case 258:
case 3668:
case 6:
case 3153:
case 259:
case 1918:
case 3337:
case 635:
case 3638:
case 3904:
case 2649:
case 3323:
case 689:
case 1104:
case 612:
case 1953:
case 3686:
case 2262:
case 375:
case 2246:
case 3250:
case 3194:
case 3282:
case 3591:
case 2726:
case 1994:
case 2636:
case 3370:
case 3961:
case 1687:
case 629:
case 1388:
case 3931:
case 1611:
case 687:
case 3848:
case 3889:
case 2030:
case 3008:
case 2839:
case 3052:
case 2419:
case 2060:
case 1161:
case 1300:
case 2917:
case 257:
case 398:
case 798:
case 3390:
case 3882:
case 2695:
case 1098:
case 2543:
case 1255:
case 2862:
case 3224:
case 2412:
case 3174:
case 293:
case 915:
case 1262:
case 1116:
case 492:
case 1232:
case 2994:
case 74:
case 344:
case 897:
case 2078:
case 973:
case 1726:
case 1675:
case 750:
case 976:
case 3529:
case 1642:
case 3916:
case 1636:
case 2395:
case 962:
case 4020:
case 159:
case 3473:
case 480:
case 3007:
case 1269:
case 3035:
case 2918:
case 2501:
case 2104:
case 1387:
case 1688:
case 3515:
case 1649:
case 546:
case 1311:
case 40:
case 1403:
case 2366:
case 313:
case 3670:
case 2974:
case 1543:
case 716:
case 316:
case 4093:
case 1862:
case 3386:
case 193:
case 1846:
case 761:
case 361:
case 3763:
case 2349:
case 2564:
case 2534:
case 3247:
case 521:
case 810:
case 3181:
case 420:
case 3727:
case 2783:
case 1030:
case 2131:
case 2014:
case 3493:
case 665:
case 157:
case 3338:
case 1917:
case 2300:
case 1060:
case 3096:
case 1869:
case 577:
case 2858:
case 2427:
case 2802:
case 3086:
case 2793:
case 3594:
case 2813:
case 1306:
case 2463:
case 595:
case 3821:
case 2042:
case 2433:
case 2754:
case 219:
case 3553:
case 3068:
case 2915:
case 1360:
case 4083:
case 3396:
case 3038:
case 2809:
case 2840:
case 2049:
case 3856:
case 3518:
case 1444:
case 2213:
case 2677:
case 3171:
case 1397:
case 2095:
case 1971:
case 1428:
case 1857:
case 2258:
case 3659:
case 274:
case 434:
case 3680:
case 3376:
case 1531:
case 3307:
case 3608:
case 3365:
case 3934:
case 1614:
case 222:
case 875:
case 3964:
case 3335:
case 2209:
case 217:
case 1137:
case 1596:
case 707:
case 307:
case 3530:
case 1353:
case 1105:
case 2911:
case 3469:
case 1681:
case 3905:
case 3967:
case 4032:
case 3304:
case 1318:
case 111:
case 124:
case 3970:
case 2674:
case 1995:
case 3803:
case 1170:
case 2071:
case 4039:
case 1709:
case 3043:
case 166:
case 3432:
case 552:
case 1220:
case 391:
case 3577:
case 3506:
case 4069:
case 3219:
case 3188:
case 2317:
case 3149:
case 2757:
case 904:
case 1022:
case 1988:
case 2138:
case 3779:
case 3100:
case 3361:
case 1949:
case 980:
case 678:
case 1565:
case 709:
case 3142:
case 100:
case 476:
case 233:
case 2424:
case 3175:
case 462:
case 867:
case 2694:
case 738:
case 1966:
case 338:
case 3745:
case 1975:
case 1374:
case 18:
case 2186:
case 1936:
case 992:
case 3616:
case 2196:
case 3061:
case 2445:
case 2472:
case 2826:
case 2505:
case 739:
case 3031:
case 339:
case 3114:
case 448:
case 4057:
case 1180:
case 3908:
case 3664:
case 2960:
case 1322:
case 3587:
case 93:
case 1755:
case 1159:
case 2906:
case 2851:
case 1074:
case 455:
case 681:
case 646:
case 1329:
case 2570:
case 3457:
case 643:
case 3750:
case 2732:
case 2746:
case 325:
case 1018:
case 3004:
case 2762:
case 2492:
case 3601:
case 2135:
case 337:
case 1538:
case 868:
case 1568:
case 2226:
case 3343:
case 3228:
case 1691:
case 1883:
case 2590:
case 3748:
case 677:
case 2251:
case 1421:
case 3789:
case 565:
case 2499:
case 2997:
case 305:
case 2939:
case 2545:
case 1148:
case 2437:
case 2572:
case 2467:
case 2969:
case 458:
case 1218:
case 2797:
case 3411:
case 3861:
case 3989:
case 2423:
case 2026:
case 697:
case 3948:
case 3487:
case 3831:
case 1253:
case 241:
case 286:
case 2932:
case 1182:
case 2654:
case 3950:
case 445:
case 388:
case 3982:
case 2051:
case 1150:
case 2470:
case 3557:
case 1785:
case 134:
case 3044:
case 1798:
case 3261:
case 2777:
case 1853:
case 2592:
case 1393:
case 1438:
case 3759:
case 2147:
case 3804:
case 2673:
case 3780:
case 610:
case 328:
case 1124:
case 3155:
case 264:
case 1274:
case 26:
case 2620:
case 3924:
case 226:
case 1521:
case 3312:
case 1083:
case 2730:
case 3708:
case 1486:
case 2599:
case 3325:
case 2548:
case 3019:
case 3460:
case 2589:
case 1145:
case 3810:
case 1093:
case 3430:
case 92:
case 493:
case 1215:
case 1172:
case 2480:
case 3569:
case 972:
case 4006:
case 1736:
case 3344:
case 787:
case 966:
case 1775:
case 329:
case 3539:
case 3790:
case 3945:
case 2871:
case 2957:
case 1179:
case 457:
case 569:
case 4060:
case 2291:
case 3025:
case 1651:
case 542:
case 852:
case 3546:
case 1749:
case 698:
case 3003:
case 327:
case 727:
case 1795:
case 900:
case 712:
case 312:
case 1284:
case 389:
case 735:
case 1547:
case 1192:
case 771:
case 1435:
case 1407:
case 3140:
case 192:
case 2156:
case 3633:
case 3497:
case 1913:
case 2711:
case 3158:
case 3723:
case 104:
case 2524:
case 3102:
case 3663:
case 631:
case 1020:
case 1958:
case 2271:
case 675:
case 3113:
case 3705:
case 2683:
case 3627:
case 1199:
case 3328:
case 2527:
case 2295:
case 3494:
case 2563:
case 2002:
case 3886:
case 4018:
case 1332:
case 3734:
case 2533:
case 2888:
case 2040:
case 1141:
case 2849:
case 3056:
case 3453:
case 1211:
case 3868:
case 598:
case 3418:
case 642:
case 3941:
case 2800:
case 1369:
case 2973:
case 1771:
case 2722:
case 1057:
case 2355:
case 3286:
case 2715:
case 2103:
case 2662:
case 2646:
case 2954:
case 2275:
case 3474:
case 2242:
case 3268:
case 2993:
case 1791:
case 2729:
case 2200:
case 1431:
case 2288:
case 3689:
case 4074:
case 2119:
case 531:
case 3347:
case 155:
case 1613:
case 3933:
case 1206:
case 2878:
case 2298:
case 3520:
case 3963:
case 2055:
case 754:
case 1658:
case 354:
case 1602:
case 4015:
case 3927:
case 149:
case 2885:
case 2774:
case 879:
case 2401:
case 3047:
case 501:
case 2214:
case 553:
case 4029:
case 400:
case 173:
case 2144:
case 3835:
case 556:
case 1260:
case 881:
case 2358:
case 1503:
case 1062:
case 2718:
case 1046:
case 1443:
case 599:
case 3151:
case 1806:
case 1525:
case 2313:
case 2278:
case 1877:
case 1951:
case 2753:
case 668:
case 1297:
case 957:
case 3679:
case 2898:
case 472:
case 3207:
case 3126:
case 3265:
case 1830:
case 2464:
case 1860:
case 463:
case 2434:
case 821:
case 3235:
case 1069:
case 2309:
case 3716:
case 2340:
case 411:
case 3484:
case 996:
case 2285:
case 3672:
case 42:
case 147:
case 215:
case 424:
case 877:
case 609:
case 1541:
case 1774:
case 1885:
case 249:
case 378:
case 1401:
case 3280:
case 3208:
case 2230:
case 1214:
case 262:
case 2609:
case 4091:
case 1144:
case 276:
case 1878:
case 2206:
case 2127:
case 3183:
case 638:
case 2163:
case 3024:
case 1983:
case 2781:
case 3808:
case 1464:
case 2830:
case 2039:
case 3852:
case 132:
case 2860:
case 1285:
case 1340:
case 607:
case 3048:
case 1794:
case 3392:
case 115:
case 3089:
case 2926:
case 3704:
case 1302:
case 1657:
case 691:
case 3471:
case 2443:
case 3859:
case 2046:
case 1128:
case 1753:
case 2512:
case 3082:
case 1898:
case 2297:
case 2141:
case 1040:
case 3223:
case 3092:
case 561:
case 3647:
case 3348:
case 460:
case 513:
case 2404:
case 3267:
case 2339:
case 625:
case 102:
case 3237:
case 2771:
case 2369:
case 1009:
case 1800:
case 516:
case 919:
case 1875:
case 1527:
case 982:
case 1836:
case 3120:
case 777:
case 377:
case 314:
case 71:
case 1058:
case 1563:
case 2655:
case 721:
case 321:
case 2346:
case 85:
case 1993:
case 854:
case 1639:
case 3919:
case 550:
case 840:
case 3481:
case 1729:
case 403:
case 3072:
case 639:
case 451:
case 1288:
case 2887:
case 2431:
case 1249:
case 2461:
case 255:
case 3193:
case 1119:
case 343:
case 1662:
case 974:
case 3324:
case 3925:
case 746:
case 3551:
case 4017:
case 3290:
case 1266:
case 2528:
case 1275:
case 248:
case 3079:
case 1895:
case 3903:
case 922:
case 3870:
case 1236:
case 608:
case 4014:
case 1459:
case 2229:
case 1957:
case 220:
case 1871:
case 1582:
case 3327:
case 3768:
case 2651:
case 3333:
case 525:
case 1550:
case 3363:
case 2749:
case 2145:
case 1589:
case 2496:
case 765:
case 365:
case 1548:
case 2172:
case 2215:
case 3786:
case 418:
case 2222:
case 2742:
case 2626:
case 585:
case 2913:
case 1711:
case 3555:
case 1787:
case 1524:
case 204:
case 3478:
case 2829:
case 805:
case 1121:
case 2020:
case 2199:
case 539:
case 1683:
case 1891:
case 4078:
case 3644:
case 2284:
case 3264:
case 2073:
case 292:
case 2465:
case 2407:
case 186:
case 141:
case 2320:
case 1579:
case 3776:
case 1654:
case 183:
case 3612:
case 2182:
case 1932:
case 3765:
case 1470:
case 827:
case 2294:
case 2150:
case 3132:
case 47:
case 3162:
case 3216:
case 951:
case 2148:
case 538:
case 1545:
case 1939:
case 2189:
case 1969:
case 906:
case 2253:
case 903:
case 1423:
case 3139:
case 4049:
case 3436:
case 1490:
case 829:
case 3816:
case 2274:
case 3063:
case 3558:
case 164:
case 3502:
case 2124:
case 3475:
case 1760:
case 2521:
case 419:
case 126:
case 2354:
case 123:
case 3513:
case 1599:
case 1730:
case 4000:
case 4075:
case 3509:
case 2798:
case 752:
case 4066:
case 352:
case 591:
case 4036:
case 3488:
case 1147:
case 3400:
case 2438:
case 490:
case 1592:
case 2556:
case 2818:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748019602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,];
var gg_b = "1748019602/";

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
