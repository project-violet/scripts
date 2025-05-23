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
case 734:
case 374:
case 3536:
case 464:
case 3795:
case 116:
case 3986:
case 596:
case 2207:
case 4072:
case 2395:
case 3515:
case 234:
case 2910:
case 3569:
case 2850:
case 3243:
case 1979:
case 1241:
case 2956:
case 1057:
case 2443:
case 1178:
case 572:
case 2835:
case 3620:
case 2064:
case 2021:
case 2803:
case 1168:
case 3748:
case 2074:
case 3966:
case 598:
case 1404:
case 2420:
case 625:
case 3847:
case 1390:
case 1969:
case 3939:
case 2037:
case 1855:
case 3589:
case 790:
case 1702:
case 25:
case 1729:
case 4062:
case 2197:
case 3579:
case 2326:
case 2111:
case 2012:
case 117:
case 75:
case 1576:
case 3726:
case 3098:
case 2084:
case 671:
case 3943:
case 1459:
case 3408:
case 3164:
case 2596:
case 3316:
case 568:
case 1636:
case 219:
case 1744:
case 3780:
case 526:
case 3009:
case 3639:
case 3022:
case 50:
case 719:
case 1615:
case 14:
case 1442:
case 3276:
case 844:
case 703:
case 2750:
case 3410:
case 2208:
case 260:
case 3895:
case 1520:
case 1123:
case 1941:
case 3770:
case 1279:
case 3112:
case 1215:
case 2198:
case 3239:
case 566:
case 1543:
case 3686:
case 695:
case 3760:
case 528:
case 97:
case 3266:
case 1829:
case 1385:
case 1301:
case 2610:
case 545:
case 3097:
case 3137:
case 1167:
case 3747:
case 1755:
case 2656:
case 220:
case 2154:
case 3848:
case 2038:
case 2703:
case 3676:
case 3174:
case 2466:
case 1104:
case 2523:
case 489:
case 4080:
case 3066:
case 125:
case 1606:
case 2705:
case 2781:
case 148:
case 3211:
case 1468:
case 3381:
case 3814:
case 2587:
case 3954:
case 1069:
case 3039:
case 3609:
case 3882:
case 2497:
case 3199:
case 3872:
case 433:
case 700:
case 763:
case 3998:
case 3557:
case 507:
case 4070:
case 1545:
case 1196:
case 263:
case 159:
case 1694:
case 3222:
case 3209:
case 1125:
case 3893:
case 52:
case 2724:
case 1700:
case 2761:
case 343:
case 146:
case 1488:
case 1331:
case 3324:
case 2010:
case 3611:
case 3697:
case 1089:
case 883:
case 1206:
case 1832:
case 1554:
case 165:
case 223:
case 1294:
case 4047:
case 3333:
case 3107:
case 1613:
case 1079:
case 3945:
case 3076:
case 977:
case 399:
case 839:
case 935:
case 1392:
case 2540:
case 1817:
case 1957:
case 2498:
case 2237:
case 2372:
case 3506:
case 3254:
case 3412:
case 2752:
case 3911:
case 515:
case 1509:
case 3352:
case 3772:
case 181:
case 451:
case 2454:
case 3782:
case 2749:
case 922:
case 2139:
case 1853:
case 2805:
case 3594:
case 369:
case 986:
case 479:
case 3020:
case 1906:
case 1434:
case 2445:
case 3464:
case 987:
case 2833:
case 4048:
case 3108:
case 64:
case 1791:
case 3654:
case 11:
case 757:
case 1597:
case 1818:
case 1958:
case 3513:
case 2393:
case 1257:
case 329:
case 873:
case 793:
case 3762:
case 1142:
case 2221:
case 2264:
case 1487:
case 2861:
case 988:
case 2186:
case 1800:
case 2824:
case 2568:
case 3793:
case 1041:
case 3698:
case 2684:
case 962:
case 2612:
case 1994:
case 2362:
case 1423:
case 409:
case 588:
case 820:
case 3181:
case 1836:
case 2448:
case 1490:
case 1955:
case 1815:
case 3226:
case 621:
case 2049:
case 3947:
case 3248:
case 780:
case 1396:
case 2:
case 3399:
case 2426:
case 3171:
case 675:
case 3960:
case 3695:
case 2052:
case 474:
case 280:
case 413:
case 1183:
case 1580:
case 3544:
case 1741:
case 661:
case 586:
case 3970:
case 636:
case 3886:
case 3161:
case 3124:
case 2950:
case 1325:
case 2810:
case 744:
case 1629:
case 3062:
case 803:
case 3295:
case 1192:
case 4054:
case 2707:
case 3876:
case 1944:
case 3743:
case 1091:
case 1163:
case 3307:
case 3133:
case 2501:
case 1560:
case 3530:
case 685:
case 1485:
case 3926:
case 2071:
case 535:
case 691:
case 85:
case 270:
case 2203:
case 541:
case 2650:
case 330:
case 770:
case 1902:
case 2172:
case 1715:
case 2366:
case 2447:
case 3260:
case 3149:
case 1769:
case 2635:
case 3680:
case 906:
case 578:
case 1595:
case 3820:
case 1475:
case 3403:
case 2339:
case 3948:
case 3356:
case 1465:
case 592:
case 3435:
case 907:
case 3776:
case 2708:
case 1419:
case 1526:
case 3416:
case 3529:
case 2756:
case 1655:
case 1018:
case 1779:
case 3308:
case 3270:
case 2386:
case 4011:
case 2162:
case 1244:
case 96:
case 1789:
case 1630:
case 2024:
case 2061:
case 908:
case 1000:
case 3660:
case 3786:
case 1841:
case 3310:
case 576:
case 2193:
case 394:
case 440:
case 2216:
case 214:
case 2195:
case 2546:
case 3424:
case 1218:
case 3993:
case 893:
case 333:
case 161:
case 1388:
case 714:
case 2233:
case 1582:
case 2050:
case 57:
case 928:
case 2261:
case 2016:
case 857:
case 1492:
case 1572:
case 1463:
case 1857:
case 1991:
case 1917:
case 2605:
case 1044:
case 2035:
case 931:
case 3845:
case 2528:
case 4066:
case 2633:
case 1473:
case 3481:
case 967:
case 121:
case 1618:
case 138:
case 3047:
case 3982:
case 2271:
case 2837:
case 1562:
case 1055:
case 175:
case 1427:
case 2281:
case 3972:
case 3711:
case 2451:
case 752:
case 1483:
case 2812:
case 2126:
case 2311:
case 4086:
case 1377:
case 1119:
case 1757:
case 469:
case 2721:
case 502:
case 379:
case 4020:
case 2180:
case 3135:
case 1232:
case 3809:
case 58:
case 2649:
case 3682:
case 1918:
case 1334:
case 3672:
case 1291:
case 1217:
case 283:
case 2652:
case 1387:
case 410:
case 1894:
case 2573:
case 2493:
case 2924:
case 998:
case 1900:
case 3452:
case 1428:
case 2784:
case 601:
case 3026:
case 2971:
case 1185:
case 2472:
case 1632:
case 1029:
case 3897:
case 3518:
case 2398:
case 3384:
case 1340:
case 1953:
case 2737:
case 1813:
case 3449:
case 2414:
case 3337:
case 3103:
case 1367:
case 2838:
case 1446:
case 2354:
case 2774:
case 2981:
case 3460:
case 1430:
case 2247:
case 370:
case 2152:
case 1083:
case 460:
case 2051:
case 3899:
case 3172:
case 230:
case 3616:
case 2260:
case 1201:
case 1285:
case 2149:
case 3447:
case 1804:
case 1315:
case 2820:
case 2680:
case 3635:
case 3005:
case 3081:
case 1665:
case 1073:
case 521:
case 1990:
case 3339:
case 1369:
case 2776:
case 2356:
case 1444:
case 4038:
case 1379:
case 1191:
case 3603:
case 3708:
case 1759:
case 905:
case 809:
case 3756:
case 420:
case 561:
case 686:
case 1219:
case 3386:
case 2450:
case 536:
case 874:
case 1742:
case 3162:
case 1265:
case 3235:
case 813:
case 3193:
case 3590:
case 1685:
case 1031:
case 1601:
case 2995:
case 1389:
case 3216:
case 622:
case 294:
case 2866:
case 916:
case 1975:
case 2720:
case 3903:
case 3448:
case 2082:
case 2947:
case 1153:
case 2839:
case 585:
case 677:
case 3799:
case 3151:
case 1290:
case 1402:
case 434:
case 111:
case 764:
case 2072:
case 2960:
case 1985:
case 3426:
case 264:
case 3565:
case 1535:
case 1028:
case 3052:
case 380:
case 1796:
case 1100:
case 2161:
case 2124:
case 4084:
case 1503:
case 2626:
case 2970:
case 490:
case 4012:
case 3575:
case 3495:
case 3810:
case 1341:
case 676:
case 3950:
case 45:
case 1842:
case 3916:
case 18:
case 692:
case 224:
case 2295:
case 3856:
case 4037:
case 3707:
case 1965:
case 917:
case 2876:
case 102:
case 3808:
case 2530:
case 1859:
case 2307:
case 2133:
case 2648:
case 1919:
case 67:
case 3933:
case 1963:
case 1417:
case 1878:
case 1491:
case 2135:
case 2745:
case 3764:
case 2822:
case 981:
case 3527:
case 2614:
case 339:
case 1432:
case 1787:
case 2672:
case 1888:
case 1505:
case 204:
case 383:
case 1723:
case 186:
case 2095:
case 3170:
case 3493:
case 3573:
case 3712:
case 493:
case 2452:
case 1130:
case 2282:
case 3249:
case 3160:
case 1533:
case 458:
case 3971:
case 3784:
case 2798:
case 1927:
case 3472:
case 1246:
case 3592:
case 2811:
case 932:
case 2518:
case 2384:
case 2951:
case 3147:
case 1767:
case 3737:
case 2754:
case 2374:
case 3252:
case 1228:
case 1561:
case 1524:
case 162:
case 1868:
case 2337:
case 2048:
case 1973:
case 3905:
case 2272:
case 457:
case 3354:
case 1823:
case 373:
case 829:
case 3195:
case 925:
case 1292:
case 2993:
case 948:
case 1627:
case 233:
case 2651:
case 3050:
case 1263:
case 2709:
case 2722:
case 3261:
case 1418:
case 789:
case 1306:
case 3016:
case 1673:
case 1358:
case 68:
case 2433:
case 855:
case 959:
case 1552:
case 3821:
case 3864:
case 512:
case 289:
case 3605:
case 2080:
case 3035:
case 1313:
case 4008:
case 3148:
case 3003:
case 554:
case 1075:
case 2405:
case 2481:
case 1867:
case 1453:
case 3271:
case 965:
case 2914:
case 869:
case 2532:
case 1283:
case 141:
case 1129:
case 3205:
case 3281:
case 810:
case 4010:
case 501:
case 3451:
case 2797:
case 3397:
case 2471:
case 1840:
case 2898:
case 3126:
case 3311:
case 2591:
case 1001:
case 1631:
case 1085:
case 3624:
case 3210:
case 2408:
case 1157:
case 1078:
case 1765:
case 319:
case 2666:
case 4005:
case 4081:
case 2164:
case 3145:
case 1242:
case 3907:
case 2009:
case 2022:
case 3716:
case 672:
case 1344:
case 3380:
case 2335:
case 2456:
case 784:
case 1489:
case 3208:
case 1259:
case 565:
case 696:
case 12:
case 470:
case 284:
case 3256:
case 2770:
case 546:
case 2112:
case 107:
case 2760:
case 547:
case 2686:
case 4024:
case 3198:
case 2184:
case 912:
case 2239:
case 2266:
case 1642:
case 697:
case 2011:
case 3610:
case 1507:
case 1330:
case 3360:
case 2747:
case 1469:
case 1415:
case 16:
case 698:
case 525:
case 3608:
case 3038:
case 1068:
case 3347:
case 2541:
case 108:
case 4033:
case 2848:
case 1890:
case 3466:
case 1775:
case 548:
case 2676:
case 2920:
case 213:
case 1023:
case 2536:
case 2870:
case 4:
case 334:
case 894:
case 1942:
case 3395:
case 2515:
case 3850:
case 3910:
case 2407:
case 4049:
case 3122:
case 3109:
case 51:
case 1077:
case 532:
case 19:
case 682:
case 626:
case 3443:
case 150:
case 2976:
case 2880:
case 1106:
case 3835:
case 2643:
case 2748:
case 2138:
case 3803:
case 1875:
case 3420:
case 1067:
case 3037:
case 1113:
case 2847:
case 3542:
case 2054:
case 35:
case 115:
case 581:
case 3326:
case 3111:
case 631:
case 3197:
case 628:
case 444:
case 390:
case 3012:
case 3084:
case 2098:
case 1040:
case 1801:
case 2860:
case 3559:
case 517:
case 1728:
case 3752:
case 1623:
case 197:
case 1883:
case 483:
case 2558:
case 2851:
case 607:
case 3099:
case 710:
case 2714:
case 769:
case 3454:
case 439:
case 3284:
case 2298:
case 3139:
case 2782:
case 1677:
case 3621:
case 2645:
case 1634:
case 356:
case 1746:
case 518:
case 1136:
case 2594:
case 3588:
case 3805:
case 269:
case 3166:
case 198:
case 2349:
case 3938:
case 66:
case 1287:
case 2464:
case 357:
case 1978:
case 2108:
case 172:
case 3833:
case 1457:
case 985:
case 1892:
case 3007:
case 3637:
case 1667:
case 1391:
case 606:
case 2110:
case 3393:
case 1234:
case 2245:
case 1189:
case 2793:
case 1025:
case 516:
case 3186:
case 3824:
case 1831:
case 393:
case 833:
case 196:
case 1988:
case 3705:
case 3974:
case 4035:
case 1846:
case 3120:
case 2438:
case 2211:
case 2297:
case 1773:
case 1678:
case 2954:
case 961:
case 3587:
case 2305:
case 2882:
case 1413:
case 3937:
case 2199:
case 3577:
case 2872:
case 3351:
case 615:
case 3912:
case 1688:
case 414:
case 166:
case 1521:
case 363:
case 300:
case 3724:
case 1731:
case 2222:
case 1494:
case 1574:
case 3010:
case 2611:
case 3567:
case 2324:
case 2361:
case 2862:
case 1042:
case 1288:
case 937:
case 879:
case 1792:
case 2333:
case 2107:
case 3422:
case 3409:
case 1458:
case 1406:
case 1512:
case 2945:
case 2076:
case 69:
case 3733:
case 3638:
case 1763:
case 1059:
case 3143:
case 1318:
case 1584:
case 3540:
case 1649:
case 3777:
case 524:
case 2918:
case 2551:
case 2858:
case 1527:
case 1345:
case 3992:
case 139:
case 3963:
case 2757:
case 2119:
case 2377:
case 4004:
case 1583:
case 453:
case 2232:
case 2806:
case 1180:
case 1721:
case 3734:
case 3646:
case 2894:
case 497:
case 386:
case 3628:
case 1652:
case 1573:
case 1170:
case 1493:
case 846:
case 1462:
case 3432:
case 3787:
case 322:
case 2291:
case 2632:
case 3927:
case 2002:
case 1592:
case 3246:
case 859:
case 2340:
case 496:
case 791:
case 3983:
case 1712:
case 4025:
case 1563:
case 3533:
case 1249:
case 3130:
case 3740:
case 1784:
case 1971:
case 362:
case 3868:
case 1531:
case 3524:
case 1838:
case 3561:
case 2617:
case 3973:
case 3090:
case 1905:
case 1147:
case 2813:
case 848:
case 1482:
case 3767:
case 3228:
case 1252:
case 929:
case 825:
case 261:
case 236:
case 2932:
case 3627:
case 644:
case 3263:
case 428:
case 376:
case 736:
case 431:
case 3823:
case 114:
case 3683:
case 2794:
case 466:
case 1671:
case 2431:
case 2917:
case 3778:
case 1322:
case 3358:
case 1864:
case 1821:
case 3552:
case 2044:
case 1035:
case 1605:
case 1681:
case 3065:
case 2378:
case 3231:
case 1261:
case 427:
case 2368:
case 1271:
case 1949:
case 3692:
case 426:
case 3283:
case 1148:
case 4059:
case 3313:
case 468:
case 3663:
case 3946:
case 221:
case 943:
case 467:
case 335:
case 775:
case 2483:
case 737:
case 377:
case 1884:
case 3840:
case 2253:
case 3085:
case 1661:
case 152:
case 3631:
case 237:
case 6:
case 341:
case 2427:
case 275:
case 3102:
case 3129:
case 1205:
case 1451:
case 3273:
case 530:
case 1650:
case 1203:
case 817:
case 201:
case 2902:
case 2485:
case 2255:
case 2128:
case 42:
case 3896:
case 170:
case 701:
case 406:
case 3804:
case 984:
case 2146:
case 2475:
case 254:
case 2644:
case 3990:
case 3619:
case 3369:
case 1339:
case 3455:
case 1366:
case 1114:
case 1616:
case 2769:
case 2053:
case 818:
case 3092:
case 46:
case 37:
case 73:
case 1807:
case 2779:
case 23:
case 3444:
case 940:
case 2465:
case 2419:
case 4068:
case 3117:
case 212:
case 1708:
case 3759:
case 1033:
case 408:
case 3825:
case 1590:
case 2841:
case 1470:
case 1193:
case 3601:
case 3031:
case 1061:
case 407:
case 1216:
case 2342:
case 3389:
case 1386:
case 683:
case 533:
case 1710:
case 2789:
case 3742:
case 816:
case 3132:
case 1235:
case 3265:
case 1162:
case 2955:
case 450:
case 2202:
case 913:
case 3975:
case 3046:
case 2490:
case 1448:
case 2570:
case 2930:
case 3985:
case 1426:
case 2183:
case 2580:
case 3535:
case 1565:
case 4023:
case 3028:
case 1151:
case 652:
case 3402:
case 4087:
case 3429:
case 2396:
case 311:
case 1950:
case 673:
case 2629:
case 3842:
case 504:
case 4040:
case 3100:
case 144:
case 1495:
case 1575:
case 1935:
case 84:
case 2163:
case 1585:
case 1808:
case 2560:
case 3690:
case 2879:
case 1343:
case 4067:
case 2522:
case 3687:
case 281:
case 295:
case 951:
case 2328:
case 2440:
case 1498:
case 1237:
case 1871:
case 1578:
case 3728:
case 1372:
case 486:
case 781:
case 837:
case 3746:
case 156:
case 904:
case 1664:
case 353:
case 3136:
case 1805:
case 1588:
case 1382:
case 620:
case 838:
case 2657:
case 821:
case 1454:
case 1139:
case 1284:
case 2467:
case 2913:
case 1749:
case 3892:
case 3223:
case 21:
case 2958:
case 1007:
case 3317:
case 2597:
case 3179:
case 3391:
case 2511:
case 3287:
case 1176:
case 149:
case 157:
case 462:
case 2717:
case 732:
case 3457:
case 488:
case 372:
case 513:
case 1684:
case 3025:
case 158:
case 2041:
case 574:
case 3277:
case 1824:
case 1186:
case 3538:
case 3332:
case 396:
case 836:
case 2423:
case 1612:
case 3988:
case 1393:
case 2257:
case 1264:
case 3189:
case 2015:
case 327:
case 933:
case 1587:
case 3413:
case 748:
case 1849:
case 2658:
case 1937:
case 2753:
case 2069:
case 2606:
case 1974:
case 1705:
case 3846:
case 4065:
case 3353:
case 4019:
case 2468:
case 3678:
case 2213:
case 1984:
case 3940:
case 1771:
case 476:
case 771:
case 891:
case 3783:
case 259:
case 331:
case 1912:
case 247:
case 3564:
case 3521:
case 3828:
case 989:
case 1534:
case 2545:
case 2327:
case 1497:
case 3268:
case 1577:
case 1238:
case 1411:
case 3727:
case 747:
case 1010:
case 3537:
case 3278:
case 2206:
case 2089:
case 3987:
case 1761:
case 1724:
case 3141:
case 2258:
case 435:
case 2488:
case 477:
case 2392:
case 1921:
case 1964:
case 1008:
case 3763:
case 1638:
case 478:
case 1540:
case 1143:
case 2817:
case 30:
case 3288:
case 3792:
case 326:
case 1056:
case 2718:
case 2613:
case 1409:
case 2363:
case 842:
case 649:
case 2319:
case 3599:
case 2177:
case 2058:
case 1716:
case 2365:
case 930:
case 1380:
case 4073:
case 3078:
case 119:
case 2006:
case 1735:
case 2134:
case 1476:
case 3088:
case 2520:
case 306:
case 103:
case 2123:
case 2279:
case 543:
case 2187:
case 3259:
case 1208:
case 1750:
case 693:
case 2802:
case 2829:
case 205:
case 3642:
case 1610:
case 1999:
case 1360:
case 2301:
case 3330:
case 3507:
case 307:
case 3996:
case 705:
case 3785:
case 1198:
case 3659:
case 1608:
case 1525:
case 4063:
case 3890:
case 308:
case 1347:
case 3436:
case 1466:
case 994:
case 2013:
case 2679:
case 3469:
case 2167:
case 656:
case 36:
case 1154:
case 3415:
case 2755:
case 120:
case 2989:
case 3942:
case 3087:
case 134:
case 411:
case 716:
case 1395:
case 1850:
case 1699:
case 529:
case 3023:
case 4028:
case 3194:
case 2566:
case 3441:
case 1207:
case 623:
case 1908:
case 1064:
case 3034:
case 3604:
case 3106:
case 2844:
case 3865:
case 3158:
case 2241:
case 812:
case 2979:
case 3077:
case 1956:
case 1816:
case 1607:
case 2969:
case 2390:
case 1348:
case 2855:
case 48:
case 2915:
case 3790:
case 1299:
case 2168:
case 1420:
case 3875:
case 2936:
case 1074:
case 3302:
case 2576:
case 1012:
case 217:
case 1084:
case 3040:
case 2830:
case 3508:
case 3556:
case 717:
case 663:
case 600:
case 1197:
case 1111:
case 1326:
case 1814:
case 227:
case 1954:
case 1622:
case 3753:
case 3069:
case 2967:
case 1882:
case 2413:
case 888:
case 727:
case 914:
case 3036:
case 3606:
case 325:
case 1066:
case 348:
case 2678:
case 2773:
case 1211:
case 1297:
case 1557:
case 2564:
case 2521:
case 347:
case 2688:
case 231:
case 1751:
case 3383:
case 766:
case 2727:
case 245:
case 613:
case 2278:
case 2300:
case 1361:
case 3331:
case 1611:
case 2042:
case 767:
case 475:
case 437:
case 1862:
case 3832:
case 3554:
case 1222:
case 346:
case 2494:
case 3488:
case 267:
case 70:
case 1076:
case 1945:
case 2934:
case 2512:
case 421:
case 199:
case 3478:
case 3817:
case 268:
case 952:
case 3598:
case 2318:
case 2584:
case 282:
case 226:
case 2792:
case 20:
case 3363:
case 768:
case 3718:
case 3613:
case 1911:
case 55:
case 1997:
case 939:
case 3328:
case 835:
case 2827:
case 395:
case 381:
case 1772:
case 2687:
case 3440:
case 1412:
case 1254:
case 1506:
case 297:
case 841:
case 2096:
case 2728:
case 169:
case 2136:
case 1594:
case 1474:
case 2004:
case 2634:
case 253:
case 2746:
case 2968:
case 298:
case 1349:
case 3346:
case 2115:
case 753:
case 1714:
case 1782:
case 2677:
case 3467:
case 2169:
case 1298:
case 31:
case 1654:
case 155:
case 2892:
case 1156:
case 3477:
case 3511:
case 3597:
case 772:
case 1909:
case 3958:
case 1421:
case 3434:
case 3159:
case 2863:
case 272:
case 3717:
case 2978:
case 2831:
case 3800:
case 1698:
case 2640:
case 1793:
case 3994:
case 296:
case 1110:
case 534:
case 3732:
case 491:
case 4029:
case 2189:
case 1245:
case 1515:
case 2087:
case 3989:
case 1243:
case 643:
case 1569:
case 3188:
case 2194:
case 3566:
case 174:
case 113:
case 316:
case 2696:
case 2023:
case 558:
case 1986:
case 1870:
case 3425:
case 2441:
case 3057:
case 549:
case 3178:
case 980:
case 3844:
case 1880:
case 2865:
case 109:
case 250:
case 1976:
case 2604:
case 3979:
case 2077:
case 2158:
case 1847:
case 2113:
case 2067:
case 1138:
case 4017:
case 318:
case 1748:
case 2875:
case 317:
case 715:
case 2885:
case 1860:
case 2801:
case 3641:
case 1726:
case 3729:
case 3702:
case 215:
case 1220:
case 2556:
case 1579:
case 1639:
case 1022:
case 1009:
case 802:
case 3319:
case 4053:
case 3177:
case 2479:
case 3365:
case 2344:
case 1335:
case 3615:
case 1943:
case 2078:
case 2157:
case 454:
case 3289:
case 1316:
case 88:
case 1164:
case 970:
case 1780:
case 3006:
case 3123:
case 3520:
case 1895:
case 3094:
case 2088:
case 1350:
case 629:
case 1276:
case 2489:
case 72:
case 706:
case 401:
case 2642:
case 707:
case 3802:
case 3829:
case 305:
case 610:
case 2507:
case 1097:
case 1011:
case 140:
case 1112:
case 811:
case 3543:
case 563:
case 500:
case 4000:
case 1239:
case 3140:
case 2785:
case 2701:
case 1760:
case 1686:
case 412:
case 1848:
case 2890:
case 1541:
case 2068:
case 76:
case 2436:
case 43:
case 1174:
case 4018:
case 3167:
case 1137:
case 2469:
case 669:
case 708:
case 3755:
case 26:
case 3932:
case 2627:
case 133:
case 471:
case 2887:
case 3388:
case 3582:
case 2263:
case 2788:
case 276:
case 459:
case 2823:
case 447:
case 3431:
case 1461:
case 1070:
case 624:
case 3857:
case 292:
case 2778:
case 900:
case 1080:
case 963:
case 4036:
case 425:
case 2552:
case 2231:
case 2877:
case 3200:
case 3378:
case 1709:
case 4015:
case 3572:
case 2306:
case 1047:
case 3713:
case 778:
case 2453:
case 3368:
case 1532:
case 1854:
case 2283:
case 853:
case 3055:
case 1914:
case 2768:
case 2663:
case 1251:
case 3190:
case 3473:
case 1405:
case 321:
case 2075:
case 2946:
case 446:
case 741:
case 235:
case 2928:
case 2085:
case 3600:
case 2631:
case 3253:
case 1591:
case 2840:
case 2102:
case 2129:
case 375:
case 465:
case 337:
case 897:
case 1711:
case 1797:
case 2273:
case 882:
case 3551:
case 1809:
case 2777:
case 868:
case 1682:
case 1116:
case 3334:
case 1364:
case 2878:
case 3377:
case 3757:
case 342:
case 1745:
case 3232:
case 3806:
case 1135:
case 2628:
case 286:
case 956:
case 3894:
case 2888:
case 3387:
case 722:
case 544:
case 495:
case 2432:
case 481:
case 3217:
case 1553:
case 3291:
case 1150:
case 694:
case 391:
case 831:
case 1312:
case 787:
case 2246:
case 385:
case 1662:
case 3340:
case 1518:
case 1811:
case 1897:
case 5:
case 957:
case 3428:
case 949:
case 1026:
case 1693:
case 1798:
case 1282:
case 2130:
case 2533:
case 4041:
case 630:
case 1048:
case 2090:
case 3691:
case 288:
case 262:
case 2868:
case 2561:
case 1500:
case 1337:
case 827:
case 3446:
case 3953:
case 1449:
case 3813:
case 1374:
case 2228:
case 41:
case 1754:
case 1014:
case 3955:
case 2153:
case 1839:
case 1226:
case 3869:
case 808:
case 1082:
case 1947:
case 2975:
case 86:
case 2704:
case 1720:
case 3229:
case 1866:
case 3570:
case 3173:
case 4057:
case 1171:
case 3930:
case 2985:
case 2901:
case 1695:
case 2796:
case 2535:
case 3580:
case 164:
case 3183:
case 711:
case 1248:
case 2290:
case 807:
case 211:
case 1072:
case 2402:
case 3396:
case 2516:
case 3325:
case 3547:
case 2842:
case 82:
case 3629:
case 1970:
case 1626:
case 583:
case 1093:
case 1124:
case 3131:
case 2503:
case 1876:
case 78:
case 3944:
case 990:
case 2965:
case 3091:
case 1648:
case 3017:
case 3560:
case 418:
case 1133:
case 95:
case 1295:
case 124:
case 1051:
case 3902:
case 130:
case 2430:
case 1670:
case 2083:
case 552:
case 919:
case 1152:
case 2665:
case 903:
case 1680:
case 960:
case 3475:
case 4006:
case 3146:
case 2804:
case 1403:
case 2619:
case 2073:
case 3715:
case 44:
case 2285:
case 1260:
case 2201:
case 4058:
case 1739:
case 3053:
case 27:
case 1416:
case 850:
case 2092:
case 1647:
case 3779:
case 679:
case 1270:
case 4013:
case 3359:
case 2444:
case 3465:
case 2759:
case 312:
case 3526:
case 2191:
case 2601:
case 1660:
case 2031:
case 3630:
case 1310:
case 3841:
case 2389:
case 1450:
case 2132:
case 3244:
case 1280:
case 2265:
case 3789:
case 405:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748008801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,];
var gg_b = "1748008801/";

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
