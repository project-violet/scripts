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
case 469:
case 3961:
case 652:
case 560:
case 3466:
case 3419:
case 2478:
case 433:
case 2352:
case 1661:
case 1846:
case 3815:
case 347:
case 3432:
case 1235:
case 3692:
case 665:
case 2107:
case 3319:
case 3366:
case 1600:
case 3905:
case 337:
case 3900:
case 31:
case 1605:
case 351:
case 3332:
case 1959:
case 1782:
case 657:
case 631:
case 2186:
case 2428:
case 2895:
case 558:
case 2399:
case 2612:
case 259:
case 696:
case 3521:
case 2631:
case 1427:
case 3574:
case 781:
case 3314:
case 2201:
case 2391:
case 938:
case 1327:
case 2075:
case 3173:
case 3651:
case 37:
case 2491:
case 4050:
case 1951:
case 2265:
case 2996:
case 594:
case 2394:
case 3806:
case 1182:
case 3645:
case 2494:
case 3654:
case 2025:
case 3640:
case 1108:
case 1945:
case 3090:
case 1002:
case 816:
case 166:
case 3095:
case 2193:
case 3511:
case 1417:
case 67:
case 782:
case 2594:
case 960:
case 1248:
case 3135:
case 2010:
case 1626:
case 2749:
case 3421:
case 12:
case 3474:
case 2155:
case 3957:
case 787:
case 3514:
case 709:
case 647:
case 2006:
case 3638:
case 239:
case 3329:
case 4086:
case 538:
case 1223:
case 2672:
case 637:
case 1385:
case 3429:
case 2741:
case 365:
case 548:
case 3825:
case 3498:
case 3667:
case 1273:
case 357:
case 3735:
case 3713:
case 1063:
case 2318:
case 3042:
case 3566:
case 2578:
case 4007:
case 341:
case 2087:
case 2983:
case 742:
case 3731:
case 2257:
case 3824:
case 2226:
case 1003:
case 1384:
case 364:
case 1907:
case 4038:
case 3587:
case 1481:
case 2159:
case 609:
case 3734:
case 226:
case 2542:
case 3078:
case 751:
case 3874:
case 2032:
case 405:
case 2740:
case 3829:
case 289:
case 158:
case 673:
case 92:
case 3898:
case 1389:
case 588:
case 2792:
case 2673:
case 2151:
case 687:
case 1885:
case 3325:
case 2590:
case 1489:
case 471:
case 2014:
case 3470:
case 2818:
case 3879:
case 966:
case 2759:
case 3134:
case 2145:
case 2908:
case 1062:
case 3043:
case 123:
case 1647:
case 390:
case 3370:
case 3739:
case 2623:
case 77:
case 3570:
case 1097:
case 1993:
case 3575:
case 1239:
case 3909:
case 3693:
case 483:
case 2878:
case 3819:
case 2264:
case 4045:
case 1941:
case 2021:
case 4054:
case 808:
case 477:
case 2200:
case 3722:
case 2635:
case 2630:
case 681:
case 148:
case 2613:
case 1783:
case 2490:
case 2899:
case 1950:
case 2495:
case 2828:
case 138:
case 3650:
case 2261:
case 3814:
case 731:
case 2216:
case 1768:
case 1581:
case 3172:
case 4059:
case 2342:
case 1856:
case 3018:
case 2079:
case 1604:
case 2843:
case 988:
case 3387:
case 215:
case 43:
case 3965:
case 1660:
case 3306:
case 2894:
case 1584:
case 3122:
case 309:
case 752:
case 2098:
case 1737:
case 3406:
case 4092:
case 412:
case 1231:
case 1601:
case 3560:
case 3736:
case 1039:
case 134:
case 1743:
case 1549:
case 1307:
case 1178:
case 1297:
case 1984:
case 1152:
case 3876:
case 961:
case 144:
case 2221:
case 1791:
case 386:
case 1407:
case 2064:
case 476:
case 3103:
case 1981:
case 1128:
case 2777:
case 2005:
case 3681:
case 4085:
case 1199:
case 935:
case 2000:
case 853:
case 3504:
case 1386:
case 1794:
case 2224:
case 2271:
case 756:
case 3920:
case 3136:
case 3925:
case 1620:
case 221:
case 2127:
case 1143:
case 555:
case 3162:
case 2156:
case 50:
case 3689:
case 1752:
case 1838:
case 650:
case 1544:
case 2177:
case 2298:
case 1728:
case 3703:
case 1675:
case 2229:
case 330:
case 329:
case 2883:
case 1593:
case 984:
case 3447:
case 2408:
case 1031:
case 1194:
case 4077:
case 1493:
case 2057:
case 3409:
case 1341:
case 561:
case 1892:
case 350:
case 3037:
case 3910:
case 3228:
case 3646:
case 1203:
case 222:
case 3915:
case 2508:
case 3299:
case 1441:
case 2026:
case 1946:
case 1633:
case 1350:
case 629:
case 425:
case 1718:
case 535:
case 1450:
case 1859:
case 3068:
case 2219:
case 736:
case 2602:
case 1687:
case 2211:
case 2185:
case 3304:
case 49:
case 1851:
case 2896:
case 955:
case 2663:
case 119:
case 869:
case 2942:
case 2717:
case 1840:
case 3291:
case 1854:
case 3460:
case 3869:
case 3816:
case 1845:
case 1236:
case 3906:
case 1507:
case 103:
case 1118:
case 584:
case 3401:
case 1072:
case 1606:
case 3797:
case 3461:
case 3919:
case 2978:
case 167:
case 3305:
case 83:
case 3295:
case 1632:
case 3932:
case 3290:
case 3300:
case 1619:
case 397:
case 954:
case 3361:
case 1893:
case 84:
case 2583:
case 3405:
case 1288:
case 493:
case 1459:
case 680:
case 2215:
case 10:
case 2999:
case 2233:
case 1855:
case 1048:
case 162:
case 691:
case 3253:
case 786:
case 3008:
case 877:
case 408:
case 2784:
case 646:
case 1023:
case 2943:
case 3526:
case 3627:
case 1351:
case 2206:
case 3804:
case 3656:
case 2991:
case 3557:
case 1614:
case 544:
case 3801:
case 1263:
case 1340:
case 3242:
case 356:
case 1345:
case 1977:
case 2568:
case 3316:
case 1454:
case 4046:
case 1849:
case 979:
case 424:
case 3865:
case 2994:
case 1445:
case 3971:
case 184:
case 768:
case 2468:
case 554:
case 1153:
case 1917:
case 1030:
case 3376:
case 1554:
case 1540:
case 336:
case 1621:
case 2437:
case 218:
case 985:
case 3921:
case 410:
case 3426:
case 3974:
case 1886:
case 2596:
case 750:
case 1551:
case 1190:
case 3326:
case 135:
case 697:
case 2001:
case 3685:
case 1753:
case 4081:
case 145:
case 1142:
case 1698:
case 3163:
case 598:
case 2060:
case 3998:
case 278:
case 805:
case 2808:
case 692:
case 3788:
case 2004:
case 579:
case 1795:
case 2225:
case 3500:
case 944:
case 85:
case 3505:
case 811:
case 161:
case 2220:
case 2918:
case 2492:
case 886:
case 2288:
case 1789:
case 328:
case 2841:
case 3720:
case 2202:
case 643:
case 1978:
case 3522:
case 3725:
case 2632:
case 521:
case 3835:
case 431:
case 255:
case 3439:
case 4042:
case 2359:
case 3558:
case 74:
case 3699:
case 3572:
case 262:
case 1210:
case 1233:
case 1181:
case 2855:
case 1215:
case 3628:
case 3339:
case 1999:
case 304:
case 20:
case 1603:
case 2844:
case 73:
case 1496:
case 2451:
case 2614:
case 1189:
case 496:
case 3936:
case 1396:
case 1662:
case 68:
case 3431:
case 3962:
case 1943:
case 1636:
case 1784:
case 2927:
case 3125:
case 840:
case 922:
case 783:
case 3334:
case 1287:
case 2611:
case 2849:
case 3175:
case 2977:
case 2340:
case 3110:
case 2540:
case 1146:
case 2545:
case 3115:
case 3534:
case 3848:
case 2153:
case 2807:
case 1468:
case 3787:
case 284:
case 3706:
case 1697:
case 1009:
case 3284:
case 1337:
case 3041:
case 921:
case 2621:
case 3531:
case 1437:
case 3710:
case 369:
case 2338:
case 2629:
case 628:
case 711:
case 3733:
case 3458:
case 1060:
case 1270:
case 3372:
case 199:
case 1065:
case 245:
case 2438:
case 2753:
case 2980:
case 506:
case 3873:
case 235:
case 3187:
case 41:
case 1483:
case 2790:
case 3322:
case 2795:
case 1383:
case 522:
case 3422:
case 1004:
case 2467:
case 1808:
case 4018:
case 2984:
case 897:
case 3119:
case 2743:
case 317:
case 2039:
case 3132:
case 704:
case 1271:
case 500:
case 2794:
case 999:
case 611:
case 3217:
case 2199:
case 1000:
case 605:
case 2128:
case 1777:
case 3473:
case 2989:
case 3114:
case 2838:
case 2752:
case 2034:
case 383:
case 3373:
case 1069:
case 2620:
case 918:
case 3045:
case 2778:
case 3719:
case 285:
case 3040:
case 3535:
case 3732:
case 2625:
case 2194:
case 2867:
case 2031:
case 3280:
case 1382:
case 482:
case 1229:
case 2675:
case 1883:
case 372:
case 1482:
case 856:
case 1026:
case 2633:
case 4094:
case 279:
case 2441:
case 1117:
case 578:
case 2203:
case 2615:
case 3798:
case 677:
case 3124:
case 3653:
case 2341:
case 1780:
case 106:
case 2455:
case 371:
case 3335:
case 2444:
case 3573:
case 1076:
case 2859:
case 2450:
case 3313:
case 3330:
case 3779:
case 2718:
case 1990:
case 1232:
case 3902:
case 2355:
case 1688:
case 298:
case 4043:
case 3812:
case 490:
case 78:
case 3988:
case 900:
case 3963:
case 219:
case 1942:
case 1717:
case 64:
case 3277:
case 3771:
case 1185:
case 4028:
case 2687:
case 1180:
case 35:
case 254:
case 2606:
case 769:
case 891:
case 3179:
case 2118:
case 4052:
case 203:
case 2072:
case 3834:
case 2236:
case 880:
case 4078:
case 2449:
case 2854:
case 743:
case 2384:
case 81:
case 3948:
case 2907:
case 2003:
case 294:
case 39:
case 3100:
case 1226:
case 2796:
case 1751:
case 1754:
case 107:
case 1740:
case 1745:
case 3563:
case 126:
case 3716:
case 842:
case 3164:
case 963:
case 87:
case 3705:
case 3502:
case 1590:
case 3267:
case 2196:
case 1151:
case 2222:
case 2389:
case 3761:
case 450:
case 3588:
case 4037:
case 559:
case 1623:
case 2647:
case 223:
case 1140:
case 2546:
case 3116:
case 1908:
case 3027:
case 1759:
case 514:
case 1818:
case 3056:
case 1014:
case 2258:
case 3764:
case 175:
case 2446:
case 1074:
case 2941:
case 1021:
case 1878:
case 2346:
case 3176:
case 2168:
case 1852:
case 2993:
case 316:
case 1453:
case 2212:
case 2609:
case 1738:
case 3157:
case 1261:
case 3803:
case 2955:
case 1495:
case 708:
case 1828:
case 429:
case 1024:
case 2589:
case 3388:
case 430:
case 1071:
case 3402:
case 1899:
case 248:
case 1613:
case 1630:
case 3935:
case 1205:
case 2137:
case 440:
case 549:
case 3017:
case 3292:
case 1442:
case 3463:
case 115:
case 69:
case 2827:
case 959:
case 2604:
case 3240:
case 1079:
case 2581:
case 2877:
case 2601:
case 3757:
case 3080:
case 2231:
case 841:
case 914:
case 3085:
case 2737:
case 2665:
case 1029:
case 831:
case 3251:
case 3726:
case 1167:
case 793:
case 1894:
case 864:
case 2605:
case 114:
case 2230:
case 1107:
case 1518:
case 2600:
case 3081:
case 1352:
case 2661:
case 693:
case 2846:
case 1478:
case 3255:
case 2708:
case 1639:
case 3293:
case 915:
case 1399:
case 3939:
case 1612:
case 3888:
case 79:
case 1186:
case 2585:
case 2782:
case 1890:
case 3802:
case 2580:
case 2959:
case 1265:
case 2456:
case 3249:
case 1343:
case 3362:
case 1707:
case 446:
case 2327:
case 3436:
case 2356:
case 3863:
case 1201:
case 1391:
case 3931:
case 1842:
case 1443:
case 526:
case 3462:
case 436:
case 2427:
case 2108:
case 2945:
case 890:
case 2616:
case 2669:
case 975:
case 1020:
case 2182:
case 1634:
case 1786:
case 624:
case 1204:
case 502:
case 3286:
case 2417:
case 1193:
case 4082:
case 1968:
case 2577:
case 1144:
case 456:
case 2881:
case 882:
case 501:
case 2556:
case 1543:
case 3562:
case 3046:
case 22:
case 3760:
case 3536:
case 2248:
case 3397:
case 716:
case 926:
case 2380:
case 149:
case 1741:
case 3104:
case 3:
case 1658:
case 295:
case 1247:
case 163:
case 2223:
case 2480:
case 139:
case 3972:
case 3503:
case 1006:
case 3101:
case 670:
case 1744:
case 1087:
case 2063:
case 3922:
case 1149:
case 2967:
case 3165:
case 776:
case 2273:
case 3345:
case 586:
case 1369:
case 785:
case 3354:
case 3340:
case 156:
case 3445:
case 1911:
case 950:
case 1469:
case 1860:
case 1416:
case 3454:
case 3611:
case 2334:
case 4015:
case 821:
case 2431:
case 1627:
case 1804:
case 684:
case 3927:
case 1008:
case 2125:
case 3023:
case 1526:
case 3956:
case 1557:
case 1656:
case 2903:
case 2572:
case 2699:
case 2775:
case 2312:
case 362:
case 2246:
case 3844:
case 734:
case 192:
case 2628:
case 4087:
case 2770:
case 30:
case 2835:
case 1364:
case 2813:
case 3359:
case 2830:
case 1290:
case 540:
case 1932:
case 3202:
case 3619:
case 197:
case 3666:
case 3567:
case 1305:
case 1919:
case 367:
case 2522:
case 3632:
case 420:
case 3288:
case 439:
case 4006:
case 530:
case 529:
case 2652:
case 463:
case 1361:
case 228:
case 3467:
case 1788:
case 180:
case 2823:
case 1847:
case 2106:
case 3367:
case 1505:
case 361:
case 2322:
case 3679:
case 655:
case 3980:
case 1685:
case 2358:
case 3438:
case 3753:
case 2187:
case 2472:
case 243:
case 1564:
case 269:
case 345:
case 1929:
case 2049:
case 2715:
case 2531:
case 3674:
case 2706:
case 806:
case 779:
case 3886:
case 1457:
case 798:
case 3807:
case 2055:
case 1971:
case 28:
case 930:
case 1924:
case 1476:
case 2787:
case 3554:
case 3035:
case 822:
case 1617:
case 2281:
case 2133:
case 3917:
case 2115:
case 1763:
case 3030:
case 1376:
case 1569:
case 3799:
case 1970:
case 4024:
case 129:
case 272:
case 2051:
case 3593:
case 1096:
case 4071:
case 1509:
case 3728:
case 1975:
case 1703:
case 2822:
case 3867:
case 3194:
case 2285:
case 1447:
case 2111:
case 3541:
case 1925:
case 3778:
case 2719:
case 2045:
case 2766:
case 2373:
case 1162:
case 4074:
case 277:
case 2535:
case 475:
case 4021:
case 385:
case 1136:
case 3544:
case 2473:
case 3989:
case 2114:
case 283:
case 2872:
case 3191:
case 3555:
case 3034:
case 1681:
case 3199:
case 2217:
case 2092:
case 1103:
case 767:
case 1504:
case 654:
case 762:
case 3743:
case 1565:
case 3549:
case 3012:
case 3984:
case 2348:
case 2166:
case 70:
case 1736:
case 1684:
case 23:
case 334:
case 3039:
case 415:
case 2132:
case 991:
case 2448:
case 3152:
case 556:
case 2059:
case 3791:
case 1869:
case 4066:
case 878:
case 1465:
case 997:
case 4032:
case 3840:
case 3449:
case 3854:
case 1301:
case 354:
case 25:
case 3236:
case 2834:
case 3118:
case 303:
case 2179:
case 3507:
case 3349:
case 3072:
case 1401:
case 2548:
case 634:
case 992:
case 1304:
case 1987:
case 1083:
case 644:
case 2963:
case 319:
case 2129:
case 2642:
case 2198:
case 2435:
case 398:
case 2121:
case 2839:
case 2430:
case 2988:
case 168:
case 818:
case 784:
case 2413:
case 1252:
case 3350:
case 1197:
case 2335:
case 4014:
case 3455:
case 2779:
case 2695:
case 3450:
case 2313:
case 1800:
case 2171:
case 956:
case 3892:
case 685:
case 2124:
case 591:
case 3493:
case 379:
case 1299:
case 3441:
case 3633:
case 2523:
case 150:
case 3615:
case 1228:
case 1910:
case 3393:
case 1646:
case 51:
case 4076:
case 1091:
case 2056:
case 551:
case 2682:
case 1134:
case 225:
case 648:
case 996:
case 2764:
case 406:
case 1370:
case 1739:
case 3272:
case 3036:
case 1533:
case 2027:
case 360:
case 1375:
case 2923:
case 3546:
case 2116:
case 3389:
case 1829:
case 1283:
case 4026:
case 358:
case 422:
case 2705:
case 2077:
case 1325:
case 1320:
case 3222:
case 2267:
case 3885:
case 1734:
case 1052:
case 57:
case 1587:
case 2164:
case 3986:
case 1268:
case 2769:
case 2716:
case 3381:
case 965:
case 2161:
case 3817:
case 3003:
case 2948:
case 164:
case 814:
case 788:
case 3907:
case 3796:
case 1607:
case 394:
case 1099:
case 1960:
case 3665:
case 4061:
case 1811:
case 947:
case 1306:
case 3660:
case 3584:
case 3949:
case 1122:
case 4005:
case 596:
case 2080:
case 3601:
case 937:
case 951:
case 1901:
case 3231:
case 3768:
case 942:
case 1172:
case 2363:
case 1018:
case 113:
case 3856:
case 863:
case 276:
case 839:
case 820:
case 694:
case 932:
case 849:
case 3827:
case 2935:
case 1520:
case 3137:
case 565:
case 2302:
case 2017:
case 766:
case 1525:
case 1722:
case 2913:
case 2126:
case 660:
case 1644:
case 3955:
case 1650:
case 3783:
case 3589:
case 3950:
case 623:
case 3944:
case 3239:
case 1575:
case 3346:
case 1693:
case 72:
case 3168:
case 1310:
case 3609:
case 3097:
case 1570:
case 1333:
case 1832:
case 3941:
case 3446:
case 2259:
case 557:
case 1819:
case 1410:
case 531:
case 1641:
case 1433:
case 1311:
case 1571:
case 3182:
case 1524:
case 758:
case 2934:
case 4009:
case 1411:
case 1654:
case 418:
case 3945:
case 1969:
case 1916:
case 1123:
case 1645:
case 3940:
case 3669:
case 987:
case 3616:
case 3356:
case 2863:
case 2931:
case 666:
case 2436:
case 1521:
case 1574:
case 2597:
case 2249:
case 2336:
case 723:
case 1748:
case 3327:
case 1173:
case 2362:
case 1651:
case 2403:
case 1659:
case 3959:
case 3580:
case 388:
case 2912:
case 478:
case 3708:
case 807:
case 2888:
case 2939:
case 909:
case 3846:
case 2244:
case 590:
case 1432:
case 4065:
case 1833:
case 1961:
case 2255:
case 4060:
case 1466:
case 4001:
case 11:
case 3605:
case 1773:
case 2081:
case 3600:
case 1319:
case 3967:
case 1730:
case 3063:
case 1519:
case 587:
case 157:
case 131:
case 1735:
case 1479:
case 1870:
case 2683:
case 688:
case 141:
case 3889:
case 152:
case 1398:
case 3485:
case 801:
case 2972:
case 165:
case 1825:
case 2104:
case 395:
case 2:
case 1820:
case 3527:
case 224:
case 2637:
case 2562:
case 2765:
case 3248:
case 2397:
case 2207:
case 2760:
case 2536:
case 1321:
case 513:
case 2701:
case 1374:
case 2497:
case 3881:
case 1957:
case 3676:
case 3577:
case 1090:
case 1471:
case 366:
case 2286:
case 738:
case 4047:
case 208:
case 1511:
case 509:
case 3494:
case 2645:
case 3020:
case 2969:
case 823:
case 2640:
case 1934:
case 3204:
case 2806:
case 2524:
case 2311:
case 3343:
case 1696:
case 2173:
case 1362:
case 2414:
case 2748:
case 3265:
case 484:
case 3996:
case 1336:
case 3070:
case 374:
case 1597:
case 2574:
case 858:
case 3443:
case 4035:
case 1462:
case 3842:
case 4013:
case 3391:
case 3399:
case 232:
case 702:
case 3328:
case 1912:
case 359:
case 2529:
case 1084:
case 3639:
case 1293:
case 2723:
case 3499:
case 1802:
case 461:
case 2964:
case 976:
case 1403:
case 2692:
case 2579:
case 2366:
case 3378:
case 726:
case 2319:
case 894:
case 1081:
case 2773:
case 237:
case 251:
case 707:
case 649:
case 525:
case 3478:
case 2466:
case 2833:
case 1255:
case 247:
case 2432:
case 1250:
case 3352:
case 241:
case 3552:
case 3755:
case 2870:
case 3418:
case 1101:
case 3983:
case 40:
case 257:
case 3622:
case 2735:
case 2532:
case 701:
case 2379:
case 3318:
case 2730:
case 2519:
case 3578:
case 2713:
case 1165:
case 349:
case 2820:
case 1104:
case 614:
case 3658:
case 2498:
case 265:
case 193:
case 1709:
case 3528:
case 1972:
case 2329:
case 1503:
case 3006:
case 363:
case 252:
case 3155:
case 576:
case 4073:
case 2053:
case 3144:
case 2514:
case 2321:
case 3033:
case 1760:
case 3937:
case 3010:
case 2926:
case 848:
case 1562:
case 3749:
case 3015:
case 2130:
case 124:
case 674:
case 3141:
case 108:
case 1286:
case 4023:
case 3968:
case 2090:
case 3193:
case 1923:
case 1169:
case 2043:
case 2375:
case 498:
case 3145:
case 1238:
case 2533:
case 774:
case 3623:
case 3154:
case 2739:
case 2370:
case 1608:
case 3014:
case 2475:
case 1764:
case 3759:
case 2470:
case 3151:
case 2320:
case 675:
case 2325:
case 1077:
case 2094:
case 479:
case 2420:
case 2829:
case 570:
case 2283:
case 389:
case 3011:
case 2425:
case 3745:
case 1563:
case 2112:
case 1716:
case 3754:
case 3740:
case 307:
case 9:
case 3276:
case 888:
case 1164:
case 1897:
case 454:
case 993:
case 2052:
case 2824:
case 3751:
case 1948:
case 2506:
case 759:
case 510:
case 3257:
case 2901:
case 1085:
case 1080:
case 2122:
case 209:
case 2306:
case 739:
case 3894:
case 3167:
case 1726:
case 508:
case 66:
case 895:
case 2158:
case 1463:
case 2387:
case 602:
case 1836:
case 301:
case 1245:
case 176:
case 2172:
case 3342:
case 2018:
case 1363:
case 1776:
case 2487:
case 444:
case 3071:
case 1402:
case 593:
case 282:
case 3899:
case 2644:
case 2650:
case 3261:
case 1803:
case 3495:
case 3767:
case 1126:
case 1488:
case 1302:
case 3635:
case 1292:
case 2722:
case 3395:
case 1935:
case 82:
case 3205:
case 2433:
case 2758:
case 3353:
case 2410:
case 2819:
case 2641:
case 910:
case 375:
case 3074:
case 1259:
case 2832:
case 3021:
case 287:
case 866:
case 2772:
case 2575:
case 1280:
case 1111:
case 3408:
case 240:
case 528:
case 1323:
case 3177:
case 3298:
case 2509:
case 3308:
case 438:
case 700:
case 98:
case 2096:
case 3229:
case 3883:
case 172:
case 2689:
case 183:
case 1473:
case 553:
case 177:
case 1732:
case 1054:
case 2218:
case 1535:
case 1858:
case 3069:
case 3016:
case 2162:
case 1530:
case 2925:
case 321:
case 1719:
case 3127:
case 1766:
case 2504:
case 3061:
case 2826:
case 933:
case 3005:
case 80:
case 2857:
case 112:
case 1092:
case 943:
case 14:
case 3221:
case 3868:
case 3064:
case 286:
case 1714:
case 2684:
case 1132:
case 2736:
case 3727:
case 1348:
case 1548:
case 58:
case 2401:
case 1834:
case 2365:
case 15:
case 1227:
case 928:
case 1038:
case 111:
case 861:
case 2243:
case 2291:
case 2301:
case 1256:
case 1774:
case 105:
case 2465:
case 1198:
case 3663:
case 1831:
case 1129:
case 3717:
case 3942:
case 778:
case 3211:
case 494:
case 2304:
case 3185:
case 904:
case 2294:
case 1313:
case 2068:
case 3076:
case 1695:
case 1779:
case 1330:
case 1902:
case 543:
case 306:
case 3266:
case 2278:
case 2197:
case 3219:
case 2864:
case 1690:
case 171:
case 2252:
case 533:
case 4036:
case 460:
case 1812:
case 1435:
case 250:
case 1798:
case 2228:
case 3026:
case 2547:
case 458:
case 3508:
case 3117:
case 1729:
case 3953:
case 1124:
case 2800:
case 3994:
case 517:
case 2860:
case 1434:
case 256:
case 2677:
case 2801:
case 2242:
case 3568:
case 2576:
case 618:
case 1175:
case 2914:
case 3189:
case 971:
case 2656:
case 4002:
case 3496:
case 466:
case 3991:
case 1331:
case 512:
case 1962:
case 3047:
case 1125:
case 3396:
case 2804:
case 1120:
case 2627:
case 300:
case 3537:
case 577:
case 1813:
case 1835:
case 1412:
case 2364:
case 292:
case 583:
case 3999:
case 3603:
case 1572:
case 3928:
case 1007:
case 153:
case 1903:
case 3583:
case 1086:
case 3789:
case 128:
case 2809:
case 3952:
case 2919:
case 3978:
case 834:
case 3184:
case 2461:
case 2932:
case 1678:
case 2300:
case 3225:
case 1618:
case 2500:
case 3882:
case 3483:
case 854:
case 2702:
case 1322:
case 3918:
case 1106:
case 3808:
case 1823:
case 1289:
case 3383:
case 2561:
case 917:
case 1372:
case 3270:
case 1512:
case 1049:
case 819:
case 2998:
case 169:
case 1539:
case 1458:
case 2564:
case 1187:
case 2685:
case 1873:
case 2457:
case 3596:
case 3337:
case 1706:
case 2102:
case 3009:
case 318:
case 2357:
case 1531:
case 898:
case 2426:
case 1041:
case 2921:
case 2376:
case 727:
case 2569:
case 505:
case 2516:
case 2763:
case 1281:
case 1133:
case 879:
case 1110:
case 2617:
case 1787:
case 1050:
case 3468:
case 972:
case 1044:
case 1534:
case 55:
case 511:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759906801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,];
var gg_b = "1759906801/";

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
