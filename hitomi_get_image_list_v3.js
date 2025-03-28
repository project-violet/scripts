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
case 2701:
case 507:
case 126:
case 2147:
case 3132:
case 267:
case 1250:
case 621:
case 757:
case 3785:
case 3097:
case 3240:
case 3811:
case 3396:
case 3417:
case 1537:
case 1586:
case 806:
case 3721:
case 2562:
case 1893:
case 2126:
case 2558:
case 2269:
case 3979:
case 1095:
case 340:
case 3133:
case 1787:
case 136:
case 1736:
case 1350:
case 1898:
case 2553:
case 200:
case 3630:
case 3020:
case 2155:
case 3354:
case 631:
case 2359:
case 612:
case 543:
case 3541:
case 37:
case 302:
case 1708:
case 363:
case 135:
case 1344:
case 2165:
case 242:
case 2369:
case 3364:
case 2216:
case 452:
case 193:
case 3400:
case 3638:
case 529:
case 2724:
case 780:
case 3487:
case 170:
case 1179:
case 2170:
case 1516:
case 1890:
case 3971:
case 1362:
case 2673:
case 3825:
case 2428:
case 3819:
case 647:
case 1938:
case 3243:
case 2002:
case 3277:
case 3606:
case 14:
case 2967:
case 1253:
case 3632:
case 3022:
case 2251:
case 2647:
case 189:
case 2422:
case 3348:
case 1700:
case 59:
case 4049:
case 539:
case 919:
case 1846:
case 2945:
case 3549:
case 2286:
case 2544:
case 255:
case 3242:
case 2237:
case 3866:
case 445:
case 2672:
case 765:
case 510:
case 1485:
case 3377:
case 930:
case 1717:
case 1252:
case 3633:
case 2550:
case 1353:
case 1421:
case 2476:
case 794:
case 766:
case 603:
case 2931:
case 446:
case 2655:
case 1049:
case 1748:
case 211:
case 232:
case 3464:
case 2040:
case 595:
case 897:
case 1444:
case 4001:
case 533:
case 3768:
case 888:
case 3440:
case 913:
case 3752:
case 609:
case 1993:
case 564:
case 641:
case 3989:
case 2585:
case 2874:
case 3879:
case 1194:
case 1181:
case 2054:
case 3059:
case 2320:
case 3762:
case 1576:
case 2521:
case 2110:
case 1523:
case 2680:
case 1689:
case 3775:
case 330:
case 1119:
case 1329:
case 146:
case 3693:
case 1125:
case 470:
case 3200:
case 1204:
case 222:
case 2618:
case 2416:
case 2735:
case 1830:
case 3016:
case 2839:
case 3127:
case 3834:
case 3317:
case 3496:
case 25:
case 3146:
case 2741:
case 2182:
case 1743:
case 2612:
case 2107:
case 773:
case 76:
case 2220:
case 1229:
case 320:
case 1166:
case 1522:
case 3763:
case 3690:
case 2515:
case 514:
case 3925:
case 2529:
case 934:
case 2683:
case 1321:
case 2376:
case 2113:
case 1694:
case 2180:
case 2610:
case 4024:
case 3981:
case 1453:
case 1035:
case 3871:
case 1625:
case 940:
case 12:
case 1796:
case 3208:
case 1990:
case 3443:
case 1832:
case 58:
case 80:
case 2228:
case 261:
case 218:
case 152:
case 2504:
case 3287:
case 493:
case 902:
case 963:
case 1463:
case 881:
case 369:
case 3760:
case 2112:
case 2682:
case 924:
case 3646:
case 2845:
case 426:
case 71:
case 2223:
case 2607:
case 2276:
case 1221:
case 3192:
case 375:
case 2749:
case 1285:
case 1468:
case 3308:
case 1754:
case 1927:
case 3750:
case 2437:
case 3442:
case 2118:
case 1597:
case 1458:
case 1462:
case 3627:
case 854:
case 3387:
case 1475:
case 3203:
case 3198:
case 3086:
case 1298:
case 143:
case 1103:
case 535:
case 351:
case 1904:
case 2747:
case 3732:
case 837:
case 769:
case 1600:
case 3389:
case 3738:
case 160:
case 916:
case 536:
case 3039:
case 2590:
case 3615:
case 1393:
case 4010:
case 2816:
case 1599:
case 3583:
case 2726:
case 2695:
case 3510:
case 2439:
case 3121:
case 1430:
case 1514:
case 4083:
case 390:
case 2474:
case 1398:
case 1187:
case 3588:
case 2997:
case 525:
case 681:
case 2859:
case 186:
case 776:
case 3074:
case 1070:
case 2284:
case 31:
case 2546:
case 1108:
case 3289:
case 107:
case 1293:
case 2869:
case 3582:
case 1860:
case 3507:
case 848:
case 3211:
case 4082:
case 1844:
case 775:
case 3115:
case 3325:
case 1078:
case 3685:
case 4080:
case 1779:
case 3842:
case 3319:
case 2431:
case 464:
case 3266:
case 2837:
case 3513:
case 2770:
case 2923:
case 744:
case 2976:
case 2195:
case 1390:
case 1985:
case 1862:
case 1603:
case 3256:
case 358:
case 2445:
case 719:
case 277:
case 1868:
case 1852:
case 1100:
case 3045:
case 408:
case 3903:
case 54:
case 1406:
case 3225:
case 2214:
case 373:
case 979:
case 1432:
case 3281:
case 2592:
case 589:
case 2467:
case 19:
case 1047:
case 1346:
case 1117:
case 1438:
case 697:
case 1026:
case 1636:
case 688:
case 3356:
case 9:
case 3471:
case 3902:
case 1734:
case 3987:
case 4018:
case 2457:
case 2851:
case 2506:
case 2532:
case 838:
case 3547:
case 862:
case 583:
case 803:
case 3234:
case 271:
case 1567:
case 3800:
case 282:
case 1804:
case 973:
case 3790:
case 4026:
case 1142:
case 1815:
case 2916:
case 3:
case 3158:
case 3526:
case 1557:
case 2374:
case 1725:
case 1018:
case 196:
case 1080:
case 164:
case 1654:
case 3091:
case 4055:
case 2135:
case 828:
case 3334:
case 3084:
case 3411:
case 2339:
case 2788:
case 3153:
case 3578:
case 1756:
case 3489:
case 691:
case 2959:
case 3727:
case 2484:
case 2011:
case 366:
case 1493:
case 2897:
case 2141:
case 4065:
case 3940:
case 3746:
case 439:
case 713:
case 1944:
case 1545:
case 4072:
case 1664:
case 650:
case 545:
case 3565:
case 2969:
case 365:
case 3163:
case 1960:
case 108:
case 133:
case 574:
case 2056:
case 1975:
case 2357:
case 1574:
case 1962:
case 3942:
case 2245:
case 984:
case 3662:
case 2986:
case 1088:
case 2823:
case 1196:
case 1338:
case 2876:
case 1952:
case 1446:
case 2066:
case 278:
case 3803:
case 812:
case 831:
case 2367:
case 357:
case 1332:
case 724:
case 485:
case 3948:
case 1007:
case 2231:
case 2961:
case 253:
case 3160:
case 2712:
case 443:
case 1164:
case 3271:
case 18:
case 702:
case 3808:
case 552:
case 2149:
case 951:
case 2822:
case 3792:
case 3663:
case 3005:
case 460:
case 1490:
case 3977:
case 1010:
case 740:
case 605:
case 2019:
case 2951:
case 2718:
case 2267:
case 3494:
case 2635:
case 3150:
case 2499:
case 1539:
case 52:
case 1206:
case 2828:
case 1083:
case 3182:
case 3612:
case 893:
case 1508:
case 2146:
case 3107:
case 2692:
case 3220:
case 40:
case 1761:
case 2763:
case 1224:
case 2200:
case 1587:
case 3735:
case 3618:
case 322:
case 3096:
case 3188:
case 2127:
case 2496:
case 2698:
case 3984:
case 1870:
case 3585:
case 454:
case 956:
case 3991:
case 527:
case 1395:
case 3183:
case 1737:
case 3874:
case 1199:
case 3110:
case 825:
case 4085:
case 3054:
case 304:
case 601:
case 1913:
case 1691:
case 1324:
case 1684:
case 1044:
case 1105:
case 3040:
case 3297:
case 2464:
case 548:
case 368:
case 614:
case 1309:
case 332:
case 1060:
case 2069:
case 187:
case 777:
case 2440:
case 1759:
case 1517:
case 1062:
case 3688:
case 3328:
case 2956:
case 2302:
case 2198:
case 2086:
case 2627:
case 1201:
case 3042:
case 2203:
case 2387:
case 2646:
case 3845:
case 3322:
case 2966:
case 1068:
case 497:
case 1052:
case 3607:
case 3048:
case 3749:
case 623:
case 4004:
case 1063:
case 942:
case 2061:
case 541:
case 2509:
case 3504:
case 2202:
case 3043:
case 84:
case 269:
case 1301:
case 1500:
case 150:
case 2925:
case 3914:
case 3222:
case 2919:
case 695:
case 1716:
case 1699:
case 3376:
case 2981:
case 1983:
case 4029:
case 3180:
case 2994:
case 2208:
case 1614:
case 1826:
case 2871:
case 2193:
case 27:
case 2296:
case 1004:
case 1543:
case 2340:
case 1349:
case 1812:
case 562:
case 883:
case 961:
case 2364:
case 3165:
case 491:
case 2400:
case 3563:
case 1722:
case 240:
case 1131:
case 3420:
case 639:
case 3939:
case 1029:
case 3178:
case 1015:
case 3553:
case 2354:
case 2020:
case 2138:
case 4058:
case 2396:
case 2417:
case 2785:
case 2240:
case 1674:
case 4062:
case 1249:
case 1542:
case 3497:
case 3316:
case 2264:
case 528:
case 3891:
case 3173:
case 1970:
case 3562:
case 2721:
case 1880:
case 3974:
case 1157:
case 1548:
case 2106:
case 778:
case 188:
case 197:
case 4052:
case 2132:
case 367:
case 2254:
case 1021:
case 1631:
case 1888:
case 2633:
case 1554:
case 2377:
case 3351:
case 406:
case 1978:
case 904:
case 3678:
case 1335:
case 1085:
case 3476:
case 3423:
case 2856:
case 4050:
case 2130:
case 874:
case 3931:
case 1972:
case 2403:
case 1807:
case 405:
case 4044:
case 1645:
case 3003:
case 498:
case 3237:
case 968:
case 3544:
case 531:
case 1540:
case 487:
case 2632:
case 2022:
case 3647:
case 852:
case 317:
case 1235:
case 2704:
case 3008:
case 3422:
case 95:
case 2348:
case 82:
case 3899:
case 2436:
case 2881:
case 2729:
case 2487:
case 2971:
case 1720:
case 607:
case 1973:
case 3814:
case 3087:
case 2342:
case 3795:
case 3386:
case 521:
case 3673:
case 3036:
case 2825:
case 3626:
case 1241:
case 2243:
case 1596:
case 885:
case 2746:
case 3707:
case 3649:
case 431:
case 587:
case 3274:
case 1161:
case 755:
case 2163:
case 1659:
case 2334:
case 3089:
case 2411:
case 2084:
case 3788:
case 3339:
case 506:
case 1093:
case 127:
case 1480:
case 756:
case 1151:
case 4033:
case 266:
case 3491:
case 3897:
case 294:
case 3011:
case 3538:
case 2996:
case 1799:
case 1186:
case 1098:
case 280:
case 3783:
case 1824:
case 2573:
case 63:
case 421:
case 2162:
case 3710:
case 3916:
case 1714:
case 1895:
case 860:
case 1412:
case 371:
case 3532:
case 1705:
case 2547:
case 4006:
case 717:
case 382:
case 1809:
case 2152:
case 1355:
case 1159:
case 550:
case 2494:
case 1378:
case 3025:
case 3267:
case 1483:
case 2481:
case 3951:
case 1935:
case 1410:
case 2419:
case 829:
case 3331:
case 3828:
case 3414:
case 3094:
case 216:
case 959:
case 1372:
case 353:
case 141:
case 1365:
case 109:
case 1169:
case 1273:
case 992:
case 646:
case 2144:
case 438:
case 3822:
case 403:
case 2663:
case 2005:
case 1661:
case 1255:
case 1278:
case 1801:
case 3066:
case 2803:
case 1407:
case 1347:
case 447:
case 1046:
case 839:
case 3231:
case 1579:
case 1488:
case 3713:
case 1686:
case 1373:
case 2570:
case 1326:
case 2371:
case 3245:
case 2662:
case 3986:
case 2658:
case 428:
case 810:
case 2864:
case 833:
case 2582:
case 3869:
case 1280:
case 2507:
case 597:
case 670:
case 2211:
case 3765:
case 2840:
case 4046:
case 895:
case 147:
case 1849:
case 1312:
case 1566:
case 2733:
case 3474:
case 284:
case 128:
case 3527:
case 896:
case 3590:
case 3816:
case 2738:
case 3624:
case 3034:
case 2039:
case 2629:
case 2583:
case 1030:
case 1581:
case 1380:
case 1594:
case 1995:
case 4090:
case 1313:
case 2434:
case 3695:
case 2311:
case 1176:
case 3439:
case 3726:
case 1525:
case 1212:
case 290:
case 1757:
case 1519:
case 3101:
case 392:
case 3747:
case 2732:
case 409:
case 1767:
case 3609:
case 103:
case 1218:
case 953:
case 359:
case 722:
case 2518:
case 626:
case 1388:
case 1197:
case 2471:
case 1426:
case 3598:
case 2936:
case 2730:
case 273:
case 3214:
case 2366:
case 849:
case 3922:
case 982:
case 2225:
case 2067:
case 2843:
case 75:
case 1006:
case 3299:
case 50:
case 2294:
case 3592:
case 1307:
case 1622:
case 732:
case 2256:
case 258:
case 131:
case 2104:
case 112:
case 1465:
case 1288:
case 3305:
case 2903:
case 2045:
case 2115:
case 2325:
case 2685:
case 3923:
case 3770:
case 427:
case 4093:
case 3399:
case 1207:
case 1676:
case 2621:
case 693:
case 2580:
case 3195:
case 1455:
case 1282:
case 3640:
case 1163:
case 1279:
case 333:
case 3960:
case 2949:
case 3545:
case 3944:
case 3664:
case 458:
case 1940:
case 1727:
case 1489:
case 3493:
case 530:
case 166:
case 3177:
case 1578:
case 3950:
case 3756:
case 227:
case 1411:
case 1084:
case 1334:
case 3531:
case 661:
case 3654:
case 364:
case 3725:
case 3498:
case 3557:
case 3696:
case 929:
case 2895:
case 1175:
case 2714:
case 323:
case 2370:
case 1526:
case 1158:
case 1573:
case 1:
case 2137:
case 180:
case 4057:
case 3142:
case 2799:
case 2616:
case 1152:
case 1168:
case 789:
case 3567:
case 3012:
case 892:
case 3492:
case 1547:
case 2705:
case 99:
case 2412:
case 3206:
case 3677:
case 1425:
case 490:
case 1419:
case 1653:
case 2090:
case 1481:
case 1014:
case 3953:
case 2483:
case 1887:
case 1150:
case 2378:
case 736:
case 668:
case 314:
case 632:
case 1802:
case 2159:
case 3490:
case 1977:
case 604:
case 569:
case 1005:
case 1144:
case 793:
case 115:
case 1792:
case 209:
case 451:
case 1808:
case 38:
case 3233:
case 2046:
case 157:
case 1803:
case 877:
case 2407:
case 2801:
case 2278:
case 2482:
case 2255:
case 1675:
case 3338:
case 3196:
case 2784:
case 3088:
case 2791:
case 1658:
case 1662:
case 4074:
case 1570:
case 2326:
case 1371:
case 2686:
case 484:
case 2265:
case 2488:
case 986:
case 3958:
case 2637:
case 3574:
case 725:
case 2579:
case 524:
case 2849:
case 385:
case 3844:
case 247:
case 1840:
case 2213:
case 73:
case 457:
case 1211:
case 3860:
case 1507:
case 2280:
case 3392:
case 1289:
case 3108:
case 1582:
case 1864:
case 307:
case 3070:
case 1917:
case 617:
case 2556:
case 228:
case 2318:
case 2697:
case 1588:
case 184:
case 774:
case 2470:
case 1854:
case 3850:
case 1479:
case 3514:
case 416:
case 914:
case 3430:
case 3771:
case 1121:
case 2176:
case 1510:
case 1311:
case 1896:
case 1434:
case 3599:
case 2594:
case 2581:
case 3292:
case 1039:
case 360:
case 1738:
case 1389:
case 3393:
case 1185:
case 3600:
case 2218:
case 262:
case 1604:
case 203:
case 415:
case 2767:
case 2909:
case 3904:
case 1706:
case 502:
case 3298:
case 3103:
case 1730:
case 1987:
case 1471:
case 2038:
case 221:
case 3734:
case 2388:
case 1518:
case 923:
case 2835:
case 3073:
case 3047:
case 2032:
case 3346:
case 479:
case 2283:
case 1281:
case 3863:
case 2006:
case 1843:
case 3432:
case 1225:
case 1512:
case 16:
case 1219:
case 173:
case 783:
case 1045:
case 600:
case 1903:
case 878:
case 2288:
case 2465:
case 212:
case 231:
case 1104:
case 158:
case 1256:
case 3227:
case 3603:
case 908:
case 339:
case 513:
case 494:
case 2282:
case 642:
case 3858:
case 3246:
case 3584:
case 964:
case 3985:
case 466:
case 2623:
case 1381:
case 1580:
case 2676:
case 2207:
case 2478:
case 1394:
case 746:
case 2120:
case 4084:
case 3779:
case 3078:
case 1325:
case 1115:
case 310:
case 1266:
case 1129:
case 1319:
case 1842:
case 3166:
case 120:
case 2912:
case 3522:
case 94:
case 2761:
case 3215:
case 79:
case 2295:
case 383:
case 3743:
case 1698:
case 1016:
case 1317:
case 1834:
case 1127:
case 5:
case 3156:
case 2918:
case 2751:
case 1753:
case 580:
case 729:
case 678:
case 2684:
case 3119:
case 130:
case 2324:
case 2050:
case 2913:
case 3576:
case 2786:
case 3194:
case 2199:
case 206:
case 3611:
case 2395:
case 3993:
case 1454:
case 2870:
case 1768:
case 119:
case 1069:
case 345:
case 3304:
case 739:
case 2105:
case 3748:
case 413:
case 1501:
case 1300:
case 2503:
case 1203:
case 1387:
case 2201:
case 1627:
case 786:
case 3458:
case 1302:
case 682:
case 3462:
case 1750:
case 1956:
case 1442:
case 2075:
case 3754:
case 671:
case 2759:
case 3468:
case 424:
case 33:
case 926:
case 557:
case 1192:
case 1744:
case 2907:
case 785:
case 3221:
case 2052:
case 2301:
case 2500:
case 169:
case 3463:
case 3041:
case 352:
case 2605:
case 1061:
case 3832:
case 463:
case 2847:
case 2873:
case 2826:
case 1871:
case 3035:
case 2614:
case 1208:
case 434:
case 3796:
case 32:
case 760:
case 2699:
case 2716:
case 3694:
case 1919:
case 2053:
case 1690:
case 440:
case 1524:
case 85:
case 3360:
case 999:
case 3892:
case 701:
case 1364:
case 2145:
case 3344:
case 551:
case 335:
case 2349:
case 952:
case 163:
case 3708:
case 78:
case 590:
case 2577:
case 134:
case 2015:
case 3551:
case 2639:
case 2495:
case 3024:
case 2728:
case 714:
case 1934:
case 3702:
case 1535:
case 2818:
case 140:
case 3095:
case 4051:
case 2424:
case 2157:
case 4037:
case 3260:
case 476:
case 2776:
case 3893:
case 2542:
case 3537:
case 2249:
case 3244:
case 3586:
case 2674:
case 1097:
case 1785:
case 1396:
case 2813:
case 1811:
case 1254:
case 124:
case 832:
case 2167:
case 326:
case 1106:
case 93:
case 2548:
case 3933:
case 1130:
case 4059:
case 3134:
case 2139:
case 659:
case 2085:
case 2797:
case 2335:
case 3268:
case 3485:
case 1633:
case 1023:
case 444:
case 2631:
case 3717:
case 2021:
case 4069:
case 2341:
case 1343:
case 1549:
case 1866:
case 733:
case 708:
case 3258:
case 3262:
case 3275:
case 1403:
case 3363:
case 420:
case 1348:
case 20:
case 2947:
case 983:
case 2667:
case 861:
case 389:
case 1022:
case 1632:
case 56:
case 34:
case 3352:
case 2810:
case 1243:
case 3938:
case 3671:
case 1819:
case 1342:
case 3890:
case 3358:
case 3516:
case 3362:
case 2720:
case 2973:
case 2926:
case 3375:
case 1487:
case 1028:
case 1881:
case 3263:
case 1436:
case 1715:
case 3767:
case 3218:
case 303:
case 1609:
case 338:
case 2505:
case 3909:
case 2904:
case 1747:
case 243:
case 2298:
case 3757:
case 3212:
case 2929:
case 3525:
case 2514:
case 3519:
case 2430:
case 1439:
case 3123:
case 3313:
case 1920:
case 2771:
case 750:
case 3030:
case 8:
case 3620:
case 3995:
case 4019:
case 2393:
case 1590:
case 1384:
case 1034:
case 1527:
case 2070:
case 3697:
case 1079:
case 3556:
case 3128:
case 1859:
case 1997:
case 2617:
case 2187:
case 894:
case 2850:
case 1474:
case 3312:
case 3122:
case 285:
case 3566:
case 1772:
case 1765:
case 347:
case 865:
case 3280:
case 2392:
case 3745:
case 4066:
case 207:
case 1284:
case 1546:
case 556:
case 2584:
case 2246:
case 2985:
case 2862:
case 3455:
case 1593:
case 3282:
case 2591:
case 2390:
case 2858:
case 1399:
case 1195:
case 927:
case 3676:
case 3207:
case 3383:
case 2875:
case 67:
case 1976:
case 663:
case 602:
case 3310:
case 3120:
case 210:
case 1314:
case 2433:
case 1124:
case 2779:
case 1886:
case 706:
case 798:
case 3901:
case 3472:
case 3288:
case 555:
case 177:
case 2868:
case 948:
case 2072:
case 857:
case 1601:
case 2065:
case 2227:
case 3382:
case 2047:
case 3032:
case 29:
case 3622:
case 3283:
case 517:
case 3841:
case 1922:
case 1214:
case 2406:
case 1851:
case 1598:
case 1457:
case 3038:
case 2734:
case 3388:
case 3473:
case 1205:
case 2602:
case 2026:
case 3835:
case 1071:
case 2073:
case 2687:
case 816:
case 2804:
case 182:
case 676:
case 2492:
case 2567:
case 781:
case 1239:
case 3705:
case 55:
case 2230:
case 2696:
case 3895:
case 675:
case 3714:
case 223:
case 1374:
case 2498:
case 3571:
case 3370:
case 3098:
case 522:
case 3799:
case 3616:
case 3824:
case 1783:
case 3137:
case 2142:
case 3418:
case 2829:
case 4071:
case 890:
case 1897:
case 2177:
case 1959:
case 504:
case 669:
case 2756:
case 3151:
case 1788:
case 3413:
case 1135:
case 3093:
case 2654:
case 264:
case 296:
case 1533:
case 233:
case 2640:
case 81:
case 477:
case 568:
case 912:
case 2664:
case 3669:
case 3949:
case 295:
case 348:
case 2143:
case 1782:
case 2338:
case 2789:
case 2427:
case 1986:
case 1245:
case 1937:
case 1713:
case 3027:
case 3265:
case 3637:
case 2711:
case 3686:
case 1357:
case 3272:
case 2007:
case 1231:
case 2233:
case 2306:
case 2332:
case 3278:
case 947:
case 3255:
case 2952:
case 2648:
case 2140:
case 1822:
case 630:
case 492:
case 3169:
case 3273:
case 938:
case 3226:
case 962:
case 1257:
case 1641:
case 1712:
case 1081:
case 2333:
case 1331:
case 2083:
case 2206:
case 2232:
case 3090:
case 3247:
case 619:
case 2539:
case 3935:
case 3534:
case 1635:
case 1951:
case 1718:
case 2953:
case 3483:
case 3355:
case 214:
case 4034:
case 3159:
case 1568:
case 1552:
case 2250:
case 167:
case 3167:
case 397:
case 226:
case 3548:
case 1701:
case 1575:
case 844:
case 1974:
case 3880:
case 3157:
case 2171:
case 1126:
case 1316:
case 1562:
case 1017:
case 3723:
case 673:
case 3249:
case 2586:
case 2244:
case 66:
case 225:
case 3542:
case 3813:
case 2679:
case 830:
case 3577:
case 950:
case 3639:
case 2024:
case 3495:
case 100:
case 2551:
case 1420:
case 1939:
case 2930:
case 658:
case 236:
case 3131:
case 2787:
case 3424:
case 2095:
case 2892:
case 2561:
case 293:
case 1563:
case 1369:
case 142:
case 4043:
case 418:
case 3349:
case 1000:
case 592:
case 991:
case 2009:
case 3543:
case 2938:
case 3596:
case 1795:
case 1337:
case 1626:
case 2671:
case 1036:
case 3973:
case 3926:
case 2890:
case 61:
case 2516:
case 422:
case 1170:
case 2179:
case 1261:
case 2375:
case 3883:
case 1957:
case 2906:
case 3667:
case 1709:
case 3947:
case 1647:
case 1251:
case 2253:
case 381:
case 684:
case 45:
case 1805:
case 737:
case 3341:
case 905:
case 577:
case 690:
case 1945:
case 2846:
case 4040:
case 875:
case 2262:
case 3564:
case 411:
case 468:
case 2258:
case 3965:
case 2569:
case 1560:
case 1361:
case 3401:
case 1655:
case 2933:
case 3085:
case 3335:
case 1423:
case 3139:
case 2252:
case 3888:
case 3021:
case 651:
case 2559:
case 3955:
case 2268:
case 2485:
case 727:
case 354:
case 731:
case 1064:
case 2444:
case 245:
case 4003:
case 1297:
case 2304:
case 305:
case 3044:
case 246:
case 3050:
case 3684:
case 456:
case 3114:
case 2689:
case 1680:
case 2523:
case 1110:
case 1521:
case 1054:
case 2611:
case 3737:
case 2742:
case 1613:
case 3786:
case 2194:
case 3199:
case 2450:
case 306:
case 1585:
case 1459:
case 3870:
case 1984:
case 1991:
case 721:
case 1839:
case 840:
case 3918:
case 2830:
case 2156:
case 1735:
case 1096:
case 122:
case 2204:
case 3536:
case 802:
case 2522:
case 87:
case 2166:
case 3912:
case 417:
case 4008:
case 1107:
case 2992:
case 90:
case 1741:
case 3508:
case 2990:
case 2189:
case 3184:
case 2619:
case 3191:
case 2385:
case 2035:
case 3983:
case 1451:
case 1610:
case 1180:
case 1999:
case 1077:
case 3699:
case 3435:
case 2694:
case 1323:
case 2681:
case 3053:
case 1461:
case 1867:
case 2463:
case 703:
case 3301:
case 762:
case 738:
case 666:
case 2041:
case 442:
case 694:
case 1043:
case 1228:
case 161:
case 3847:
case 299:
case 6:
case 2452:
case 3982:
case 2740:
case 2468:
case 813:
case 747:
case 3769:
case 2221:
case 1276:
case 1607:
case 1845:
case 1682:
case 680:
case 3878:
case 2475:
case 1042:
case 3855:
case 2656:
case 1118:
case 1831:
case 1437:
case 2833:
case 2754:
case 3058:
case 3759:
case 3517:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743123601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,];
var gg_b = "1743123601/";

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
