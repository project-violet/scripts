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
case 1292:
case 1669:
case 1243:
case 3362:
case 243:
case 520:
case 1866:
case 2844:
case 2442:
case 3393:
case 4048:
case 1541:
case 855:
case 4075:
case 2304:
case 2918:
case 3376:
case 721:
case 1790:
case 3451:
case 3525:
case 3898:
case 775:
case 320:
case 376:
case 2839:
case 3671:
case 2458:
case 2986:
case 2069:
case 1995:
case 490:
case 3596:
case 3560:
case 1:
case 931:
case 3721:
case 2756:
case 2504:
case 723:
case 3300:
case 2159:
case 1030:
case 646:
case 3849:
case 2014:
case 2143:
case 2574:
case 2855:
case 1288:
case 335:
case 570:
case 71:
case 2357:
case 422:
case 2012:
case 1084:
case 1917:
case 877:
case 692:
case 673:
case 3786:
case 3259:
case 2421:
case 2192:
case 150:
case 1868:
case 3683:
case 2046:
case 2307:
case 1133:
case 1603:
case 3384:
case 3410:
case 453:
case 1147:
case 1662:
case 1814:
case 133:
case 1268:
case 690:
case 3095:
case 53:
case 1890:
case 1618:
case 906:
case 1763:
case 1312:
case 1928:
case 195:
case 744:
case 1699:
case 1730:
case 741:
case 1898:
case 902:
case 2799:
case 442:
case 1781:
case 77:
case 1935:
case 749:
case 189:
case 181:
case 2098:
case 1550:
case 919:
case 1252:
case 3423:
case 3414:
case 64:
case 3579:
case 3388:
case 1747:
case 2930:
case 2909:
case 2675:
case 3052:
case 1981:
case 3747:
case 2649:
case 3485:
case 3398:
case 1585:
case 81:
case 2148:
case 1741:
case 726:
case 2838:
case 2275:
case 1563:
case 737:
case 3382:
case 1379:
case 148:
case 3360:
case 3996:
case 245:
case 1548:
case 1553:
case 2631:
case 761:
case 3435:
case 2193:
case 3570:
case 2076:
case 1667:
case 2381:
case 3564:
case 2511:
case 784:
case 1788:
case 3240:
case 2205:
case 2660:
case 3919:
case 1110:
case 2637:
case 2317:
case 2087:
case 1189:
case 1261:
case 2570:
case 2097:
case 1357:
case 3718:
case 3014:
case 2111:
case 3438:
case 2153:
case 1338:
case 725:
case 3327:
case 2254:
case 3304:
case 29:
case 836:
case 948:
case 2892:
case 295:
case 3694:
case 1968:
case 3296:
case 1648:
case 1249:
case 1157:
case 3155:
case 3328:
case 3673:
case 3646:
case 3588:
case 918:
case 1390:
case 542:
case 2887:
case 3113:
case 3892:
case 3409:
case 3641:
case 2256:
case 3987:
case 3940:
case 1676:
case 2152:
case 2512:
case 2318:
case 2031:
case 606:
case 2607:
case 382:
case 118:
case 1064:
case 3307:
case 120:
case 2692:
case 3519:
case 1414:
case 779:
case 3541:
case 62:
case 1996:
case 2249:
case 204:
case 164:
case 3134:
case 1127:
case 1653:
case 1658:
case 1216:
case 2831:
case 1595:
case 2460:
case 592:
case 3073:
case 1714:
case 3427:
case 3842:
case 4022:
case 1122:
case 1685:
case 1285:
case 588:
case 3948:
case 3556:
case 2187:
case 2289:
case 1045:
case 2982:
case 2261:
case 2985:
case 2164:
case 1650:
case 3447:
case 3810:
case 3496:
case 917:
case 3034:
case 34:
case 3185:
case 3795:
case 508:
case 1013:
case 2155:
case 1328:
case 4056:
case 3608:
case 719:
case 3785:
case 3524:
case 2792:
case 1023:
case 3706:
case 3627:
case 976:
case 252:
case 2900:
case 2740:
case 1467:
case 2693:
case 674:
case 464:
case 2944:
case 4033:
case 3797:
case 4073:
case 2966:
case 2881:
case 1568:
case 3062:
case 3174:
case 3055:
case 815:
case 3521:
case 1703:
case 527:
case 538:
case 1577:
case 2001:
case 794:
case 1637:
case 1784:
case 3183:
case 3002:
case 2335:
case 1331:
case 3572:
case 3421:
case 35:
case 3614:
case 1851:
case 591:
case 3368:
case 1589:
case 3337:
case 2711:
case 3607:
case 393:
case 3986:
case 3470:
case 3733:
case 3681:
case 1608:
case 3741:
case 2778:
case 887:
case 2443:
case 2034:
case 307:
case 1187:
case 462:
case 1907:
case 604:
case 3930:
case 1861:
case 2809:
case 3086:
case 2803:
case 3122:
case 3593:
case 1991:
case 2383:
case 3534:
case 2568:
case 3829:
case 897:
case 264:
case 2689:
case 3545:
case 3929:
case 2336:
case 1503:
case 697:
case 3557:
case 2222:
case 2480:
case 17:
case 966:
case 117:
case 2647:
case 2498:
case 1210:
case 2372:
case 1809:
case 1217:
case 101:
case 2311:
case 2733:
case 3657:
case 2468:
case 13:
case 42:
case 1764:
case 38:
case 3009:
case 67:
case 2547:
case 526:
case 2688:
case 1479:
case 963:
case 310:
case 2145:
case 352:
case 481:
case 2125:
case 510:
case 1876:
case 2445:
case 3190:
case 3870:
case 1302:
case 3705:
case 3060:
case 4035:
case 1792:
case 198:
case 632:
case 3617:
case 1293:
case 135:
case 1150:
case 852:
case 4:
case 3551:
case 3481:
case 654:
case 3254:
case 410:
case 1457:
case 988:
case 985:
case 1778:
case 3148:
case 875:
case 530:
case 681:
case 1937:
case 507:
case 3072:
case 503:
case 3544:
case 1642:
case 2447:
case 332:
case 385:
case 2623:
case 894:
case 709:
case 3820:
case 1552:
case 3173:
case 3136:
case 323:
case 3140:
case 795:
case 3757:
case 3827:
case 1352:
case 605:
case 3031:
case 699:
case 711:
case 2862:
case 2427:
case 1239:
case 2861:
case 2135:
case 1721:
case 2643:
case 590:
case 1916:
case 2558:
case 399:
case 288:
case 3332:
case 4062:
case 2198:
case 3329:
case 420:
case 115:
case 1707:
case 2595:
case 1279:
case 2095:
case 1161:
case 1240:
case 2107:
case 575:
case 2748:
case 838:
case 2163:
case 3206:
case 3314:
case 1538:
case 1073:
case 2878:
case 1184:
case 2168:
case 2525:
case 1526:
case 3442:
case 560:
case 1257:
case 2233:
case 1238:
case 536:
case 3778:
case 2172:
case 2841:
case 1939:
case 2146:
case 3715:
case 1724:
case 983:
case 1318:
case 2301:
case 1974:
case 4079:
case 2320:
case 3738:
case 2316:
case 1171:
case 163:
case 1774:
case 629:
case 628:
case 3209:
case 3334:
case 3911:
case 3659:
case 2633:
case 2423:
case 3695:
case 121:
case 4020:
case 2781:
case 1938:
case 1671:
case 3728:
case 1922:
case 3802:
case 2061:
case 2051:
case 3736:
case 781:
case 248:
case 2768:
case 3856:
case 3407:
case 2546:
case 1659:
case 2576:
case 1095:
case 2735:
case 44:
case 3739:
case 2456:
case 2032:
case 986:
case 3983:
case 2910:
case 1107:
case 487:
case 3648:
case 1717:
case 616:
case 2888:
case 401:
case 3381:
case 272:
case 1492:
case 3853:
case 1354:
case 2940:
case 1401:
case 3217:
case 1590:
case 2356:
case 3968:
case 492:
case 3121:
case 246:
case 1027:
case 4027:
case 328:
case 1162:
case 2917:
case 308:
case 4025:
case 729:
case 3852:
case 2557:
case 1581:
case 3179:
case 2287:
case 1630:
case 3758:
case 3493:
case 3318:
case 1610:
case 2848:
case 1131:
case 680:
case 3230:
case 3590:
case 2813:
case 2332:
case 0:
case 3801:
case 2003:
case 2684:
case 1776:
case 2592:
case 1901:
case 742:
case 141:
case 2039:
case 2247:
case 140:
case 3294:
case 368:
case 1389:
case 796:
case 1443:
case 2175:
case 3869:
case 3499:
case 1178:
case 3546:
case 2616:
case 76:
case 212:
case 2360:
case 847:
case 94:
case 329:
case 984:
case 1470:
case 2094:
case 685:
case 1315:
case 1936:
case 2236:
case 517:
case 2367:
case 1367:
case 1567:
case 849:
case 2112:
case 3623:
case 961:
case 3846:
case 236:
case 2921:
case 470:
case 1835:
case 119:
case 1688:
case 3893:
case 3293:
case 1149:
case 1573:
case 1298:
case 3888:
case 2303:
case 739:
case 3207:
case 2402:
case 2835:
case 2686:
case 896:
case 2493:
case 489:
case 2959:
case 3037:
case 2717:
case 3602:
case 2642:
case 3765:
case 351:
case 1871:
case 3246:
case 1886:
case 1159:
case 993:
case 3970:
case 2694:
case 1355:
case 1656:
case 2719:
case 3698:
case 603:
case 1547:
case 823:
case 193:
case 2106:
case 3170:
case 2886:
case 4010:
case 3258:
case 3047:
case 2379:
case 1970:
case 3054:
case 2225:
case 1054:
case 1000:
case 2242:
case 3907:
case 2010:
case 1415:
case 380:
case 179:
case 2779:
case 1015:
case 1645:
case 2922:
case 477:
case 3450:
case 1952:
case 2216:
case 1128:
case 2212:
case 3176:
case 1284:
case 3879:
case 3348:
case 1975:
case 3792:
case 2531:
case 2462:
case 2237:
case 3776:
case 4031:
case 1840:
case 2006:
case 3090:
case 2416:
case 1003:
case 792:
case 1807:
case 3197:
case 1088:
case 2858:
case 1982:
case 3135:
case 1052:
case 4013:
case 154:
case 306:
case 2412:
case 2931:
case 139:
case 338:
case 41:
case 1308:
case 2974:
case 2654:
case 3045:
case 415:
case 2989:
case 1360:
case 3920:
case 2953:
case 3522:
case 1596:
case 3473:
case 3867:
case 1060:
case 3533:
case 2392:
case 1040:
case 159:
case 914:
case 1380:
case 3194:
case 205:
case 990:
case 3910:
case 2577:
case 1512:
case 1473:
case 183:
case 1632:
case 237:
case 671:
case 2996:
case 2856:
case 3446:
case 233:
case 2810:
case 1009:
case 2650:
case 947:
case 1283:
case 3814:
case 1999:
case 1847:
case 4053:
case 920:
case 409:
case 1993:
case 2827:
case 2496:
case 3389:
case 2339:
case 1290:
case 2612:
case 49:
case 611:
case 267:
case 4015:
case 3247:
case 4061:
case 1511:
case 2661:
case 788:
case 1670:
case 312:
case 4050:
case 3275:
case 2399:
case 283:
case 3040:
case 374:
case 59:
case 930:
case 4014:
case 3529:
case 1368:
case 2431:
case 640:
case 3330:
case 3429:
case 2008:
case 259:
case 2452:
case 2414:
case 3126:
case 1488:
case 2716:
case 594:
case 1375:
case 2276:
case 2118:
case 3581:
case 2160:
case 3063:
case 1423:
case 1324:
case 1449:
case 2267:
case 3868:
case 778:
case 3781:
case 848:
case 3771:
case 1336:
case 3371:
case 1463:
case 1570:
case 1036:
case 1102:
case 1425:
case 2710:
case 3670:
case 3053:
case 1427:
case 384:
case 736:
case 857:
case 2597:
case 1920:
case 1732:
case 3214:
case 4077:
case 1587:
case 301:
case 1136:
case 3989:
case 2043:
case 11:
case 1759:
case 3794:
case 406:
case 3043:
case 4028:
case 3372:
case 1453:
case 2524:
case 375:
case 1005:
case 1627:
case 550:
case 1011:
case 3319:
case 735:
case 3766:
case 2310:
case 1605:
case 3141:
case 2948:
case 202:
case 224:
case 2591:
case 3864:
case 2020:
case 411:
case 686:
case 3130:
case 3656:
case 327:
case 579:
case 31:
case 3598:
case 2373:
case 1182:
case 2655:
case 1071:
case 3118:
case 2825:
case 43:
case 2933:
case 1908:
case 757:
case 3196:
case 3484:
case 3344:
case 3383:
case 3051:
case 404:
case 3149:
case 1514:
case 3392:
case 1394:
case 811:
case 651:
case 2561:
case 2415:
case 1655:
case 2078:
case 3800:
case 3813:
case 430:
case 2132:
case 2853:
case 1121:
case 1750:
case 2351:
case 2210:
case 1972:
case 2400:
case 21:
case 4044:
case 3436:
case 599:
case 1875:
case 1859:
case 2852:
case 1598:
case 4026:
case 2937:
case 1327:
case 2588:
case 3745:
case 2313:
case 1766:
case 2234:
case 516:
case 2376:
case 547:
case 3935:
case 303:
case 3248:
case 386:
case 3763:
case 2569:
case 3089:
case 2165:
case 4071:
case 2816:
case 2634:
case 4045:
case 704:
case 3249:
case 2084:
case 1775:
case 1431:
case 2580:
case 3584:
case 4086:
case 3779:
case 251:
case 1557:
case 2956:
case 1826:
case 3686:
case 750:
case 1235:
case 1560:
case 1633:
case 2197:
case 1335:
case 3232:
case 454:
case 2797:
case 3242:
case 218:
case 194:
case 3439:
case 3459:
case 2436:
case 2223:
case 1474:
case 1301:
case 727:
case 4090:
case 478:
case 2295:
case 3116:
case 3424:
case 3749:
case 2890:
case 1409:
case 2913:
case 2089:
case 1205:
case 2217:
case 540:
case 147:
case 2750:
case 1438:
case 3971:
case 3477:
case 169:
case 3844:
case 2672:
case 4009:
case 3498:
case 623:
case 1340:
case 3358:
case 1053:
case 2730:
case 2685:
case 1496:
case 2916:
case 3353:
case 3471:
case 2556:
case 3742:
case 3860:
case 2220:
case 940:
case 2734:
case 1126:
case 2535:
case 1289:
case 3679:
case 2251:
case 2042:
case 1196:
case 1296:
case 344:
case 3143:
case 3592:
case 2590:
case 1405:
case 2333:
case 313:
case 3222:
case 1433:
case 3764:
case 3613:
case 1533:
case 861:
case 3093:
case 3647:
case 1014:
case 3200:
case 637:
case 3345:
case 19:
case 2009:
case 3425:
case 444:
case 3610:
case 2516:
case 90:
case 1711:
case 969:
case 2774:
case 1639:
case 791:
case 3840:
case 1508:
case 3458:
case 2147:
case 813:
case 1028:
case 3069:
case 2969:
case 3684:
case 1696:
case 2470:
case 1008:
case 1032:
case 1689:
case 994:
case 2560:
case 3532:
case 1818:
case 1386:
case 3252:
case 1057:
case 881:
case 959:
case 3012:
case 3552:
case 437:
case 3097:
case 2117:
case 3772:
case 738:
case 3160:
case 28:
case 703:
case 92:
case 4087:
case 460:
case 3639:
case 3625:
case 424:
case 548:
case 3396:
case 235:
case 2824:
case 2190:
case 377:
case 3385:
case 3999:
case 1117:
case 2538:
case 3406:
case 901:
case 3369:
case 1506:
case 522:
case 2709:
case 1154:
case 3837:
case 2437:
case 1466:
case 403:
case 3740:
case 909:
case 1341:
case 2342:
case 1494:
case 1829:
case 3622:
case 2056:
case 256:
case 2199:
case 358:
case 69:
case 1640:
case 298:
case 3981:
case 2397:
case 3851:
case 2911:
case 883:
case 1370:
case 3335:
case 3100:
case 1780:
case 3662:
case 2119:
case 113:
case 4093:
case 3644:
case 525:
case 174:
case 20:
case 2699:
case 2268:
case 2176:
case 3845:
case 747:
case 1592:
case 1114:
case 3469:
case 1428:
case 1270:
case 587:
case 2314:
case 1572:
case 214:
case 863:
case 3000:
case 3982:
case 1244:
case 1679:
case 2603:
case 3286:
case 98:
case 485:
case 1090:
case 2461:
case 3108:
case 498:
case 242:
case 2695:
case 1615:
case 2194:
case 3058:
case 1673:
case 3305:
case 3866:
case 977:
case 3798:
case 3667:
case 2682:
case 3390:
case 145:
case 2044:
case 2664:
case 553:
case 3339:
case 974:
case 3323:
case 439:
case 199:
case 4011:
case 722:
case 1066:
case 480:
case 825:
case 1811:
case 2763:
case 2238:
case 2906:
case 3947:
case 1097:
case 3643:
case 669:
case 3708:
case 3103:
case 3412:
case 426:
case 633:
case 1878:
case 1827:
case 2422:
case 3730:
case 1682:
case 3628:
case 2554:
case 620:
case 926:
case 3006:
case 216:
case 3193:
case 2092:
case 3380:
case 1035:
case 1183:
case 910:
case 96:
case 751:
case 300:
case 2544:
case 2553:
case 1140:
case 1059:
case 3951:
case 1274:
case 45:
case 2419:
case 3291:
case 1593:
case 1613:
case 2669:
case 3150:
case 3137:
case 1203:
case 1559:
case 443:
case 2382:
case 24:
case 925:
case 3756:
case 1903:
case 3782:
case 26:
case 1317:
case 1625:
case 3880:
case 2063:
case 3237:
case 631:
case 578:
case 1678:
case 2279:
case 3697:
case 2847:
case 3585:
case 509:
case 3466:
case 1737:
case 1881:
case 809:
case 2925:
case 354:
case 1845:
case 3630:
case 271:
case 3629:
case 3059:
case 3321:
case 3342:
case 3301:
case 933:
case 952:
case 561:
case 1749:
case 1004:
case 1142:
case 1236:
case 383:
case 3753:
case 1883:
case 228:
case 1407:
case 249:
case 222:
case 227:
case 856:
case 965:
case 1191:
case 701:
case 356:
case 2973:
case 2060:
case 3070:
case 4019:
case 178:
case 3210:
case 1959:
case 2998:
case 2565:
case 3586:
case 3295:
case 2618:
case 2706:
case 3483:
case 2632:
case 2889:
case 3526:
case 2725:
case 2645:
case 2796:
case 758:
case 143:
case 3322:
case 1891:
case 2177:
case 1842:
case 161:
case 2864:
case 1006:
case 339:
case 1988:
case 864:
case 1413:
case 244:
case 734:
case 3192:
case 2777:
case 3967:
case 912:
case 618:
case 3938:
case 716:
case 824:
case 2459:
case 1855:
case 1275:
case 3839:
case 2071:
case 1808:
case 2599:
case 208:
case 3404:
case 1487:
case 2478:
case 2714:
case 1219:
case 3865:
case 2428:
case 2124:
case 565:
case 2548:
case 1259:
case 2707:
case 2683:
case 2122:
case 4089:
case 2127:
case 1313:
case 2529:
case 180:
case 2296:
case 1056:
case 3514:
case 499:
case 746:
case 3456:
case 524:
case 367:
case 2013:
case 846:
case 937:
case 891:
case 3415:
case 3918:
case 3311:
case 2899:
case 535:
case 3714:
case 1226:
case 1994:
case 3462:
case 2080:
case 1435:
case 822:
case 1012:
case 928:
case 529:
case 2665:
case 3397:
case 3449:
case 1823:
case 4041:
case 2854:
case 1441:
case 3132:
case 4052:
case 1403:
case 1700:
case 2389:
case 2326:
case 1356:
case 1578:
case 2869:
case 3324:
case 2915:
case 2182:
case 479:
case 2407:
case 702:
case 3979:
case 1924:
case 893:
case 642:
case 696:
case 2923:
case 1815:
case 3958:
case 102:
case 2506:
case 3039:
case 84:
case 3189:
case 1623:
case 436:
case 1046:
case 225:
case 3964:
case 196:
case 677:
case 400:
case 2833:
case 840:
case 3710:
case 2903:
case 2832:
case 284:
case 3228:
case 2425:
case 2352:
case 3297:
case 929:
case 2404:
case 1472:
case 2409:
case 2114:
case 1017:
case 3658:
case 2038:
case 254:
case 4021:
case 1554:
case 2108:
case 3537:
case 2898:
case 1434:
case 2283:
case 1558:
case 3966:
case 1765:
case 2575:
case 821:
case 1086:
case 3285:
case 1799:
case 2625:
case 2202:
case 1798:
case 3528:
case 457:
case 3195:
case 1600:
case 2158:
case 1271:
case 2126:
case 1926:
case 2775:
case 645:
case 826:
case 3161:
case 381:
case 3184:
case 1654:
case 3430:
case 2772:
case 440:
case 3677:
case 1418:
case 355:
case 798:
case 144:
case 2736:
case 441:
case 2271:
case 514:
case 2173:
case 1276:
case 221:
case 3013:
case 3241:
case 518:
case 229:
case 1076:
case 4024:
case 3266:
case 3216:
case 2894:
case 1446:
case 2764:
case 1329:
case 1812:
case 1758:
case 2191:
case 3884:
case 153:
case 2871:
case 1961:
case 866:
case 474:
case 915:
case 2658:
case 158:
case 1495:
case 1195:
case 2936:
case 3751:
case 3808:
case 999:
case 1294:
case 1923:
case 2728:
case 5:
case 567:
case 2999:
case 2784:
case 3506:
case 3806:
case 3737:
case 2865:
case 842:
case 1728:
case 790:
case 4063:
case 1983:
case 496:
case 2444:
case 3488:
case 3199:
case 3320:
case 3256:
case 783:
case 2000:
case 3939:
case 324:
case 497:
case 2521:
case 1480:
case 3562:
case 895:
case 4012:
case 3527:
case 3154:
case 3281:
case 2563:
case 884:
case 3278:
case 3359:
case 2762:
case 2545:
case 667:
case 91:
case 3944:
case 1099:
case 343:
case 4084:
case 3807:
case 1269:
case 2059:
case 3163:
case 472:
case 3952:
case 871:
case 79:
case 2082:
case 105:
case 708:
case 2115:
case 1344:
case 467:
case 2142:
case 392:
case 3889:
case 275:
case 146:
case 771:
case 3645:
case 160:
case 3026:
case 3901:
case 427:
case 2601:
case 3928:
case 1819:
case 1549:
case 1089:
case 52:
case 3487:
case 4074:
case 3087:
case 3317:
case 2533:
case 398:
case 1586:
case 3331:
case 476:
case 1806:
case 3601:
case 7:
case 201:
case 162:
case 995:
case 3355:
case 3502:
case 720:
case 3925:
case 564:
case 2077:
case 2200:
case 168:
case 1391:
case 944:
case 648:
case 2474:
case 691:
case 3019:
case 3370:
case 3273:
case 2196:
case 3020:
case 1186:
case 1058:
case 3543:
case 4023:
case 2018:
case 3704:
case 2987:
case 3434:
case 3863:
case 3094:
case 435:
case 1769:
case 949:
case 3963:
case 853:
case 3405:
case 2843:
case 1879:
case 3900:
case 1193:
case 2334:
case 3465:
case 1311:
case 4058:
case 1830:
case 1222:
case 2178:
case 2731:
case 818:
case 292:
case 294:
case 1169:
case 1319:
case 302:
case 1515:
case 2490:
case 3652:
case 1896:
case 99:
case 2346:
case 2292:
case 2630:
case 3079:
case 1504:
case 2030:
case 2390:
case 936:
case 331:
case 1245:
case 3969:
case 730:
case 4088:
case 3145:
case 1531:
case 1904:
case 3995:
case 4005:
case 73:
case 2993:
case 2300:
case 3953:
case 2724:
case 675:
case 571:
case 2757:
case 3857:
case 1571:
case 1525:
case 1709:
case 3336:
case 2621:
case 1325:
case 337:
case 2514:
case 396:
case 126:
case 1118:
case 2793:
case 95:
case 1007:
case 3809:
case 2726:
case 4042:
case 3962:
case 1501:
case 1934:
case 939:
case 2229:
case 3985:
case 502:
case 3234:
case 3854:
case 3896:
case 614:
case 3357:
case 3650:
case 3567:
case 1555:
case 2836:
case 321:
case 1520:
case 2870:
case 2908:
case 1272:
case 3976:
case 3271:
case 2294:
case 3674:
case 2954:
case 1282:
case 1482:
case 345:
case 3804:
case 2823:
case 793:
case 573:
case 2321:
case 2134:
case 1529:
case 3790:
case 3554:
case 549:
case 851:
case 1378:
case 2475:
case 2079:
case 466:
case 3119:
case 258:
case 3872:
case 2817:
case 3165:
case 3251:
case 1971:
case 1791:
case 3085:
case 2617:
case 1111:
case 2104:
case 2457:
case 3386:
case 2834:
case 1677:
case 3666:
case 1631:
case 1124:
case 3106:
case 1614:
case 1485:
case 108:
case 1651:
case 4095:
case 1535:
case 2508:
case 558:
case 3312:
case 2074:
case 666:
case 2662:
case 1686:
case 230:
case 4066:
case 2802:
case 717:
case 2228:
case 1080:
case 2140:
case 1436:
case 2715:
case 3011:
case 2509:
case 689:
case 546:
case 4006:
case 805:
case 3566:
case 1208:
case 1772:
case 2676:
case 816:
case 2154:
case 3642:
case 100:
case 627:
case 1992:
case 1708:
case 207:
case 2174:
case 1647:
case 57:
case 428:
case 500:
case 429:
case 3400:
case 2857:
case 3316:
case 2370:
case 3678:
case 1242:
case 3535:
case 2252:
case 372:
case 2157:
case 1629:
case 1207:
case 1010:
case 1383:
case 1077:
case 347:
case 1756:
case 962:
case 2904:
case 3432:
case 15:
case 1746:
case 2068:
case 2133:
case 705:
case 1254:
case 16:
case 3171:
case 1068:
case 975:
case 104:
case 1802:
case 934:
case 2882:
case 2100:
case 1343:
case 1652:
case 3080:
case 37:
case 55:
case 3028:
case 2826:
case 2424:
case 2957:
case 1016:
case 1306:
case 1584:
case 3326:
case 1498:
case 2265:
case 2555:
case 1041:
case 2072:
case 3787:
case 2302:
case 2033:
case 682:
case 2410:
case 3428:
case 3973:
case 240:
case 899:
case 2867:
case 3478:
case 357:
case 2269:
case 3250:
case 2024:
case 2239:
case 3653:
case 2644:
case 843:
case 4051:
case 1055:
case 3088:
case 1277:
case 4036:
case 68:
case 2139:
case 3349:
case 541:
case 1061:
case 1521:
case 3377:
case 1406:
case 2297:
case 3761:
case 3016:
case 2984:
case 2700:
case 3903:
case 3908:
case 1701:
case 1722:
case 2613:
case 2532:
case 2541:
case 1232:
case 1522:
case 1518:
case 1125:
case 589:
case 1735:
case 3693:
case 2846:
case 3021:
case 1719:
case 1384:
case 2209:
case 3264:
case 3720:
case 1447:
case 2151:
case 3501:
case 269:
case 130:
case 942:
case 1856:
case 2788:
case 2926:
case 3411:
case 493:
case 797:
case 190:
case 2103:
case 138:
case 3354:
case 3767:
case 770:
case 280:
case 56:
case 61:
case 1087:
case 22:
case 1620:
case 876:
case 1911:
case 72:
case 1509:
case 1864:
case 3716:
case 418:
case 2850:
case 602:
case 804:
case 3957:
case 665:
case 1646:
case 1094:
case 1523:
case 559:
case 1690:
case 1113:
case 3290:
case 3492:
case 693:
case 3843:
case 1820:
case 892:
case 2380:
case 1612:
case 48:
case 2231:
case 4078:
case 1713:
case 3378:
case 3309:
case 1464:
case 2065:
case 263:
case 2943:
case 3263:
case 2804:
case 2681:
case 3847:
case 837:
case 776:
case 584:
case 2614:
case 2280:
case 4004:
case 2007:
case 3208:
case 3117:
case 1838:
case 3306:
case 3494:
case 1034:
case 710:
case 3818:
case 2798:
case 568:
case 1755:
case 1556:
case 2338:
case 4001:
case 630:
case 676:
case 1422:
case 3363:
case 967:
case 1019:
case 2666:
case 2464:
case 333:
case 365:
case 1733:
case 2277:
case 3443:
case 3288:
case 3426:
case 1932:
case 2344:
case 2433:
case 1477:
case 619:
case 3700:
case 621:
case 3476:
case 3068:
case 946:
case 1460:
case 3637:
case 1502:
case 388:
case 2052:
case 1365:
case 2492:
case 3124:
case 4007:
case 2203:
case 261:
case 2754:
case 2463:
case 1943:
case 2919:
case 3379:
case 2946:
case 706:
case 3597:
case 2067:
case 2141:
case 2988:
case 1377:
case 3076:
case 3755:
case 2729:
case 2935:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1654927201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,];
var gg_b = "1654927201/";

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
