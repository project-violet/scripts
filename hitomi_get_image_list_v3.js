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
case 245:
case 1334:
case 3786:
case 328:
case 3412:
case 2083:
case 1480:
case 1549:
case 3428:
case 2965:
case 600:
case 672:
case 3857:
case 562:
case 1961:
case 3698:
case 2876:
case 3566:
case 3131:
case 179:
case 1296:
case 549:
case 4089:
case 3952:
case 2259:
case 3027:
case 3489:
case 3424:
case 1082:
case 840:
case 1907:
case 3108:
case 2803:
case 3155:
case 1578:
case 744:
case 3826:
case 3933:
case 1493:
case 573:
case 143:
case 2618:
case 1752:
case 2204:
case 60:
case 2474:
case 487:
case 399:
case 1647:
case 2077:
case 1441:
case 688:
case 725:
case 730:
case 866:
case 3761:
case 3056:
case 4085:
case 1116:
case 474:
case 1239:
case 812:
case 332:
case 3581:
case 106:
case 2011:
case 2593:
case 1623:
case 2492:
case 2208:
case 400:
case 814:
case 1138:
case 1691:
case 2521:
case 1497:
case 3968:
case 3619:
case 3331:
case 2807:
case 1094:
case 1:
case 1643:
case 1869:
case 340:
case 769:
case 828:
case 59:
case 3964:
case 1627:
case 2597:
case 2636:
case 912:
case 2570:
case 3860:
case 3517:
case 687:
case 463:
case 4044:
case 3615:
case 3254:
case 40:
case 488:
case 1316:
case 3444:
case 3520:
case 2105:
case 1588:
case 2330:
case 3047:
case 2488:
case 1656:
case 1101:
case 3258:
case 940:
case 3205:
case 590:
case 2861:
case 366:
case 3703:
case 564:
case 2006:
case 1768:
case 2154:
case 934:
case 2726:
case 1584:
case 3023:
case 899:
case 1529:
case 2699:
case 1737:
case 3448:
case 1952:
case 593:
case 3235:
case 421:
case 379:
case 3296:
case 3150:
case 1131:
case 2769:
case 3961:
case 1698:
case 8:
case 2413:
case 3082:
case 2512:
case 1424:
case 1540:
case 2036:
case 713:
case 2095:
case 1027:
case 1159:
case 906:
case 128:
case 1513:
case 3019:
case 3334:
case 4080:
case 460:
case 2953:
case 1857:
case 709:
case 2196:
case 2673:
case 3116:
case 2864:
case 692:
case 3239:
case 1056:
case 446:
case 3623:
case 2099:
case 2932:
case 2606:
case 3802:
case 504:
case 1485:
case 776:
case 1230:
case 3493:
case 1826:
case 1933:
case 1155:
case 881:
case 2585:
case 2481:
case 3015:
case 3907:
case 4093:
case 3647:
case 271:
case 2139:
case 3441:
case 979:
case 3752:
case 3134:
case 1964:
case 1359:
case 1209:
case 1479:
case 3098:
case 3072:
case 4021:
case 1682:
case 1860:
case 2267:
case 585:
case 3627:
case 3525:
case 3094:
case 3470:
case 3200:
case 3903:
case 1619:
case 3691:
case 879:
case 2833:
case 134:
case 3497:
case 1968:
case 3167:
case 3138:
case 4070:
case 855:
case 502:
case 733:
case 289:
case 570:
case 1776:
case 1355:
case 9:
case 381:
case 2420:
case 3363:
case 2852:
case 2014:
case 843:
case 3584:
case 1023:
case 2611:
case 646:
case 619:
case 1703:
case 2417:
case 2339:
case 166:
case 2548:
case 439:
case 1517:
case 806:
case 2575:
case 3865:
case 2677:
case 2957:
case 57:
case 14:
case 3588:
case 49:
case 2120:
case 3505:
case 3401:
case 3393:
case 1633:
case 2381:
case 1284:
case 1229:
case 252:
case 169:
case 616:
case 7:
case 2117:
case 4001:
case 813:
case 500:
case 436:
case 3217:
case 2646:
case 1144:
case 2906:
case 2660:
case 11:
case 3686:
case 2882:
case 3220:
case 1385:
case 1288:
case 2632:
case 3068:
case 2714:
case 490:
case 1312:
case 1994:
case 1003:
case 3434:
case 2270:
case 3121:
case 1890:
case 2297:
case 464:
case 1328:
case 2366:
case 3438:
case 876:
case 3661:
case 1500:
case 1972:
case 3467:
case 1652:
case 50:
case 3170:
case 673:
case 1324:
case 4038:
case 1389:
case 4067:
case 416:
case 449:
case 2241:
case 1727:
case 1404:
case 2736:
case 223:
case 2657:
case 2371:
case 1185:
case 2293:
case 2555:
case 2508:
case 69:
case 4016:
case 2069:
case 1710:
case 1873:
case 958:
case 2742:
case 2977:
case 1408:
case 1292:
case 1455:
case 3530:
case 3956:
case 2181:
case 2898:
case 2320:
case 2911:
case 3719:
case 196:
case 755:
case 2504:
case 2439:
case 4063:
case 636:
case 2317:
case 3991:
case 1668:
case 2626:
case 1596:
case 3822:
case 1535:
case 1431:
case 2983:
case 376:
case 144:
case 1887:
case 3603:
case 3240:
case 690:
case 3818:
case 1124:
case 1756:
case 2559:
case 130:
case 3213:
case 1061:
case 358:
case 3052:
case 2140:
case 1459:
case 1379:
case 1112:
case 2435:
case 706:
case 2166:
case 2496:
case 1982:
case 1249:
case 1806:
case 2129:
case 1554:
case 3076:
case 2345:
case 342:
case 2248:
case 1895:
case 3385:
case 470:
case 1220:
case 2458:
case 1794:
case 2392:
case 402:
case 3144:
case 2275:
case 2405:
case 3175:
case 910:
case 22:
case 1271:
case 1401:
case 1505:
case 3883:
case 1607:
case 1558:
case 3148:
case 1772:
case 2454:
case 896:
case 2669:
case 133:
case 727:
case 1341:
case 369:
case 2349:
case 1064:
case 1170:
case 969:
case 2856:
case 1467:
case 1197:
case 3972:
case 261:
case 47:
case 3811:
case 2409:
case 825:
case 3324:
case 235:
case 247:
case 604:
case 3179:
case 1068:
case 3723:
case 3328:
case 942:
case 1380:
case 3890:
case 651:
case 2285:
case 3743:
case 1530:
case 3551:
case 925:
case 3375:
case 930:
case 602:
case 3292:
case 3278:
case 2032:
case 3791:
case 2999:
case 869:
case 1141:
case 3348:
case 396:
case 4055:
case 2060:
case 944:
case 2145:
case 3539:
case 3274:
case 728:
case 842:
case 2329:
case 2384:
case 2192:
case 33:
case 2178:
case 3344:
case 3185:
case 2430:
case 3459:
case 56:
case 3112:
case 1052:
case 2942:
case 158:
case 3061:
case 2777:
case 1213:
case 93:
case 4059:
case 2602:
case 3982:
case 1321:
case 1927:
case 1814:
case 2995:
case 2936:
case 1180:
case 2823:
case 2550:
case 2711:
case 3919:
case 2228:
case 176:
case 1266:
case 519:
case 3431:
case 451:
case 3637:
case 1370:
case 1991:
case 1822:
case 3596:
case 404:
case 3189:
case 3756:
case 2053:
case 4031:
case 248:
case 1240:
case 2847:
case 435:
case 183:
case 648:
case 1294:
case 2391:
case 307:
case 2970:
case 2502:
case 3383:
case 2997:
case 1402:
case 1272:
case 1336:
case 1395:
case 1503:
case 3009:
case 2921:
case 3729:
case 2878:
case 3696:
case 3568:
case 461:
case 88:
case 2310:
case 2744:
case 1771:
case 3828:
case 550:
case 2779:
case 3390:
case 3054:
case 2287:
case 2123:
case 875:
case 3377:
case 3457:
case 285:
case 859:
case 1984:
case 3812:
case 3725:
case 3639:
case 880:
case 3889:
case 907:
case 2849:
case 2663:
case 2356:
case 270:
case 2476:
case 1122:
case 1988:
case 3223:
case 589:
case 3920:
case 3373:
case 3453:
case 3291:
case 1219:
case 3745:
case 251:
case 1136:
case 2980:
case 1465:
case 1195:
case 2283:
case 3966:
case 167:
case 204:
case 4053:
case 3940:
case 647:
case 620:
case 2031:
case 3778:
case 3792:
case 756:
case 1142:
case 1781:
case 1609:
case 1096:
case 415:
case 1035:
case 2059:
case 3183:
case 2888:
case 3774:
case 2461:
case 3875:
case 2191:
case 980:
case 141:
case 1949:
case 1282:
case 2941:
case 1215:
case 3749:
case 1199:
case 293:
case 3030:
case 2347:
case 1051:
case 2290:
case 2825:
case 1897:
case 2004:
case 62:
case 2277:
case 2407:
case 2601:
case 705:
case 375:
case 3432:
case 3306:
case 1992:
case 3177:
case 1978:
case 3533:
case 4046:
case 1039:
case 1314:
case 3460:
case 2569:
case 782:
case 3446:
case 2055:
case 359:
case 98:
case 4060:
case 1635:
case 1696:
case 1568:
case 3395:
case 3503:
case 3272:
case 3298:
case 867:
case 601:
case 4002:
case 895:
case 3294:
case 1564:
case 3720:
case 2319:
case 2172:
case 2198:
case 522:
case 2631:
case 264:
case 3717:
case 1889:
case 3118:
case 1058:
case 236:
case 2948:
case 1725:
case 2797:
case 2557:
case 983:
case 3988:
case 1187:
case 3122:
case 731:
case 29:
case 1377:
case 1457:
case 2944:
case 2222:
case 3662:
case 3114:
case 1828:
case 2866:
case 1971:
case 826:
case 765:
case 2840:
case 1812:
case 1247:
case 2721:
case 623:
case 3984:
case 797:
case 3035:
case 1848:
case 2793:
case 3609:
case 1210:
case 3781:
case 2242:
case 2817:
case 868:
case 2741:
case 3282:
case 1875:
case 2119:
case 2372:
case 2236:
case 1774:
case 2553:
case 1183:
case 1600:
case 2871:
case 1966:
case 3219:
case 1745:
case 3136:
case 1844:
case 1291:
case 1552:
case 18:
case 3142:
case 4065:
case 2394:
case 1792:
case 1778:
case 729:
case 2912:
case 1940:
case 1243:
case 1460:
case 3605:
case 1190:
case 967:
case 3507:
case 3740:
case 2985:
case 3992:
case 1256:
case 175:
case 995:
case 2115:
case 2299:
case 326:
case 3766:
case 2063:
case 249:
case 3974:
case 1111:
case 652:
case 3469:
case 180:
case 3654:
case 3215:
case 941:
case 2546:
case 1062:
case 3586:
case 3870:
case 2560:
case 518:
case 2433:
case 3897:
case 1207:
case 1477:
case 1357:
case 2041:
case 2800:
case 3930:
case 1951:
case 26:
case 3556:
case 1490:
case 2644:
case 1074:
case 329:
case 3796:
case 3629:
case 1146:
case 767:
case 471:
case 3735:
case 2269:
case 3081:
case 795:
case 3834:
case 2415:
case 911:
case 2750:
case 1092:
case 2648:
case 1078:
case 3169:
case 1617:
case 1411:
case 1515:
case 219:
case 246:
case 1045:
case 3867:
case 2590:
case 1620:
case 2955:
case 689:
case 2763:
case 2080:
case 3801:
case 2337:
case 1483:
case 2152:
case 3527:
case 105:
case 3625:
case 2931:
case 221:
case 2716:
case 3013:
case 2482:
case 1519:
case 1261:
case 1153:
case 3302:
case 1935:
case 3252:
case 3495:
case 929:
case 3591:
case 182:
case 2959:
case 865:
case 3751:
case 1730:
case 1049:
case 2679:
case 897:
case 1762:
case 650:
case 3442:
case 671:
case 561:
case 2738:
case 3418:
case 1084:
case 2333:
case 1681:
case 1709:
case 4018:
case 3692:
case 1360:
case 2835:
case 965:
case 547:
case 997:
case 3905:
case 535:
case 2734:
case 3017:
case 2587:
case 2685:
case 4014:
case 3645:
case 3700:
case 3020:
case 829:
case 1346:
case 1088:
case 292:
case 3102:
case 1900:
case 2628:
case 1572:
case 1203:
case 1353:
case 3816:
case 2164:
case 1758:
case 2494:
case 1640:
case 2070:
case 397:
case 1025:
case 365:
case 2097:
case 1613:
case 3909:
case 1594:
case 2624:
case 450:
case 52:
case 2021:
case 1855:
case 1808:
case 2137:
case 3649:
case 1126:
case 1754:
case 2168:
case 2352:
case 2809:
case 3411:
case 1169:
case 1499:
case 3939:
case 3078:
case 2456:
case 1688:
case 2376:
case 4011:
case 2963:
case 3286:
case 2260:
case 1867:
case 3490:
case 1233:
case 2759:
case 1930:
case 708:
case 2186:
case 3477:
case 3207:
case 1962:
case 78:
case 877:
case 3357:
case 501:
case 554:
case 356:
case 287:
case 3146:
case 4077:
case 129:
case 2599:
case 1684:
case 1165:
case 1495:
case 3996:
case 1302:
case 1252:
case 1436:
case 2024:
case 3153:
case 956:
case 2858:
case 3519:
case 2410:
case 1442:
case 418:
case 1543:
case 3762:
case 617:
case 382:
case 1066:
case 437:
case 445:
case 198:
case 2708:
case 111:
case 2950:
case 305:
case 2697:
case 2161:
case 2595:
case 1625:
case 2491:
case 1801:
case 3483:
case 1958:
case 1905:
case 3332:
case 377:
case 2048:
case 2522:
case 1692:
case 1414:
case 2386:
case 1678:
case 3088:
case 1020:
case 4006:
case 1700:
case 856:
case 422:
case 1645:
case 2075:
case 1418:
case 4087:
case 20:
case 1954:
case 878:
case 3487:
case 2176:
case 2514:
case 3084:
case 1850:
case 3831:
case 2257:
case 1264:
case 618:
case 984:
case 3594:
case 3613:
case 1909:
case 417:
case 2967:
case 3126:
case 691:
case 2938:
case 1649:
case 552:
case 3808:
case 3855:
case 2103:
case 3473:
case 3203:
case 3353:
case 200:
case 2680:
case 3900:
case 1237:
case 645:
case 637:
case 2934:
case 3705:
case 977:
case 2818:
case 1053:
case 771:
case 467:
case 683:
case 3113:
case 3065:
case 495:
case 1847:
case 886:
case 2943:
case 668:
case 3983:
case 3280:
case 2397:
case 2603:
case 1711:
case 3626:
case 2822:
case 2715:
case 354:
case 2321:
case 556:
case 1602:
case 1936:
case 1550:
case 2814:
case 3166:
case 3496:
case 2927:
case 1995:
case 1790:
case 1777:
case 2213:
case 1224:
case 115:
case 1942:
case 1289:
case 3069:
case 1563:
case 3742:
case 2281:
case 1178:
case 3657:
case 3371:
case 3451:
case 3555:
case 3508:
case 3990:
case 3795:
case 1145:
case 2033:
case 3736:
case 323:
case 4051:
case 1384:
case 3894:
case 2782:
case 3504:
case 2141:
case 3439:
case 1032:
case 1060:
case 2719:
case 1174:
case 3898:
case 2676:
case 1388:
case 1046:
case 4039:
case 1285:
case 2463:
case 2530:
case 3181:
case 2380:
case 3400:
case 1665:
case 3973:
case 854:
case 3815:
case 2509:
case 577:
case 801:
case 147:
case 1279:
case 1409:
case 3002:
case 1787:
case 3718:
case 3221:
case 161:
case 2438:
case 75:
case 1669:
case 233:
case 1843:
case 2341:
case 1918:
case 1922:
case 3381:
case 1188:
case 3819:
case 3987:
case 2558:
case 3120:
case 2401:
case 3171:
case 2895:
case 2923:
case 3632:
case 2836:
case 1501:
case 3660:
case 1275:
case 2794:
case 1378:
case 1810:
case 1773:
case 2842:
case 1129:
case 823:
case 1345:
case 1496:
case 2128:
case 1166:
case 3995:
case 1435:
case 3823:
case 3550:
case 1531:
case 2982:
case 3289:
case 315:
case 2061:
case 101:
case 3777:
case 753:
case 2459:
case 2379:
case 2112:
case 1065:
case 3212:
case 2189:
case 2124:
case 2756:
case 1559:
case 3053:
case 2431:
case 2535:
case 2637:
case 408:
case 2919:
case 861:
case 1983:
case 718:
case 2086:
case 459:
case 296:
case 3783:
case 3060:
case 3516:
case 3174:
case 2791:
case 1317:
case 3999:
case 1504:
case 1439:
case 511:
case 2455:
case 1181:
case 2278:
case 791:
case 475:
case 3046:
case 1872:
case 3388:
case 1898:
case 724:
case 2185:
case 1555:
case 3430:
case 3192:
case 1977:
case 3178:
case 23:
case 2344:
case 915:
case 1069:
case 1894:
case 1241:
case 745:
case 4030:
case 2539:
case 4062:
case 1736:
case 2274:
case 480:
case 1795:
case 2727:
case 1313:
case 92:
case 3534:
case 186:
case 3279:
case 2500:
case 361:
case 2747:
case 608:
case 0:
case 2877:
case 3665:
case 1270:
case 1400:
case 407:
case 2328:
case 1366:
case 2225:
case 1653:
case 68:
case 1714:
case 3026:
case 2003:
case 320:
case 347:
case 3706:
case 1815:
case 2994:
case 1882:
case 3378:
case 2144:
case 1906:
case 3275:
case 3405:
case 3501:
case 1632:
case 2385:
case 675:
case 3914:
case 3345:
case 242:
case 4058:
case 4005:
case 3248:
case 3773:
case 3810:
case 2076:
case 717:
case 1646:
case 1117:
case 2229:
case 2284:
case 531:
case 3057:
case 961:
case 3454:
case 3374:
case 1987:
case 3188:
case 1381:
case 3891:
case 32:
case 1471:
case 3330:
case 1351:
case 4084:
case 1018:
case 1690:
case 3158:
case 1957:
case 484:
case 735:
case 720:
case 747:
case 3429:
case 3484:
case 656:
case 2254:
case 1702:
case 3726:
case 322:
case 2023:
case 1339:
case 2703:
case 1611:
case 3006:
case 568:
case 2308:
case 2475:
case 2571:
case 15:
case 1852:
case 1420:
case 1544:
case 761:
case 189:
case 3109:
case 818:
case 1579:
case 227:
case 2776:
case 4025:
case 2619:
case 2331:
case 3807:
case 1683:
case 72:
case 605:
case 922:
case 1833:
case 3425:
case 234:
case 3521:
case 2968:
case 2860:
case 1267:
case 1396:
case 3886:
case 824:
case 1238:
case 3597:
case 2832:
case 3636:
case 682:
case 845:
case 3757:
case 837:
case 2964:
case 150:
case 2479:
case 1216:
case 541:
case 3969:
case 2761:
case 3354:
case 3204:
case 748:
case 2826:
case 1868:
case 2933:
case 918:
case 1837:
case 2230:
case 684:
case 4074:
case 2262:
case 2108:
case 3803:
case 1687:
case 1481:
case 1585:
case 595:
case 1099:
case 3255:
case 937:
case 3305:
case 1932:
case 3358:
case 3162:
case 3478:
case 2485:
case 677:
case 3011:
case 567:
case 1960:
case 1765:
case 4092:
case 924:
case 3445:
case 232:
case 4078:
case 3541:
case 2056:
case 715:
case 1250:
case 3231:
case 953:
case 3746:
case 324:
case 1135:
case 1466:
case 2428:
case 405:
case 3760:
case 2513:
case 1589:
case 337:
case 2489:
case 2424:
case 2540:
case 2707:
case 482:
case 318:
case 1095:
case 3309:
case 838:
case 1036:
case 214:
case 2952:
case 2010:
case 2698:
case 1528:
case 1042:
case 3449:
case 3580:
case 507:
case 4020:
case 3339:
case 3014:
case 2768:
case 1726:
case 3420:
case 2363:
case 3544:
case 1488:
case 3852:
case 2656:
case 2976:
case 1158:
case 3018:
case 3690:
case 1105:
case 3575:
case 3471:
case 3201:
case 3702:
case 3548:
case 1636:
case 2627:
case 2525:
case 3238:
case 1570:
case 1902:
case 3335:
case 431:
case 2072:
case 2610:
case 2643:
case 3579:
case 2:
case 3234:
case 698:
case 95:
case 389:
case 138:
case 497:
case 2691:
case 611:
case 3833:
case 2497:
case 2138:
case 2350:
case 2200:
case 3606:
case 3960:
case 3263:
case 1130:
case 2986:
case 1478:
case 754:
case 1492:
case 1593:
case 58:
case 153:
case 3864:
case 701:
case 1541:
case 3765:
case 4081:
case 1090:
case 2752:
case 1474:
case 1204:
case 1618:
case 1969:
case 1077:
case 3216:
case 371:
case 2647:
case 3139:
case 3687:
case 3481:
case 2015:
case 3837:
case 85:
case 2251:
case 2493:
case 3095:
case 1309:
case 255:
case 3413:
case 971:
case 1449:
case 191:
case 2961:
case 3528:
case 3042:
case 2367:
case 2296:
case 279:
case 2338:
case 3466:
case 3196:
case 2480:
case 124:
case 3135:
case 411:
case 559:
case 3953:
case 3250:
case 3300:
case 145:
case 575:
case 665:
case 3589:
case 3524:
case 850:
case 2019:
case 1760:
case 723:
case 3097:
case 2816:
case 3164:
case 51:
case 3070:
case 821:
case 1226:
case 2102:
case 172:
case 2268:
case 992:
case 4094:
case 2237:
case 3851:
case 939:
case 2649:
case 3573:
case 894:
case 3472:
case 1967:
case 3352:
case 1361:
case 231:
case 569:
case 2264:
case 3839:
case 3701:
case 736:
case 3624:
case 3689:
case 3333:
case 3506:
case 1307:
case 510:
case 10:
case 1044:
case 790:
case 2418:
case 2369:
case 819:
case 3767:
case 188:
case 2071:
case 3738:
case 2020:
case 392:
case 2017:
case 3587:
case 2678:
case 1386:
case 1048:
case 1522:
case 2692:
case 1303:
case 1697:
case 1491:
case 1595:
case 211:
case 2739:
case 596:
case 2040:
case 3265:
case 3337:
case 1012:
case 3368:
case 1028:
case 2066:
case 2510:
case 298:
case 3763:
case 1854:
case 360:
case 3080:
case 1708:
case 53:
case 4082:
case 903:
case 3959:
case 2751:
case 2302:
case 2436:
case 2252:
case 1621:
case 2165:
case 1858:
case 321:
case 3716:
case 3482:
case 1089:
case 3583:
case 1805:
case 443:
case 921:
case 229:
case 3093:
case 2684:
case 2629:
case 3904:
case 36:
case 1759:
case 2556:
case 2233:
case 4015:
case 3644:
case 303:
case 2962:
case 3041:
case 3800:
case 3908:
case 1107:
case 1232:
case 1456:
case 1376:
case 406:
case 960:
case 773:
case 2867:
case 3577:
case 1963:
case 839:
case 544:
case 1731:
case 3750:
case 3648:
case 2499:
case 614:
case 90:
case 2808:
case 2855:
case 963:
case 3361:
case 1472:
case 1202:
case 702:
case 2754:
case 1168:
case 533:
case 1352:
case 3938:
case 988:
case 1573:
case 3079:
case 2594:
case 2613:
case 1701:
case 1839:
case 1021:
case 785:
case 2705:
case 2758:
case 1164:
case 1070:
case 2640:
case 440:
case 427:
case 2025:
case 1097:
case 1851:
case 3226:
case 2203:
case 2473:
case 2353:
case 3680:
case 2900:
case 2572:
case 2598:
case 632:
case 4023:
case 3075:
case 2088:
case 972:
case 2859:
case 3518:
case 2360:
case 3423:
case 3522:
case 2157:
case 2332:
case 1734:
case 4047:
case 3514:
case 3176:
case 2084:
case 3693:
case 2831:
case 557:
case 2709:
case 2681:
case 44:
case 388:
case 874:
case 139:
case 3447:
case 30:
case 2730:
case 509:
case 3410:
case 1679:
case 1364:
case 2762:
case 1583:
case 2153:
case 3858:
case 2519:
case 1482:
case 3427:
case 2996:
case 3704:
case 1368:
case 974:
case 1337:
case 3670:
case 3012:
case 634:
case 3950:
case 205:
case 3303:
case 3697:
case 3161:
case 3595:
case 3491:
case 3708:
case 1080:
case 793:
case 3028:
case 3542:
case 278:
case 2045:
case 3456:
case 1955:
case 2620:
case 80:
case 2092:
case 432:
case 146:
case 119:
case 2411:
case 666:
case 1904:
case 704:
case 1511:
case 612:
case 1415:
case 3916:
case 256:
case 387:
case 2207:
case 2671:
case 2357:
case 1041:
case 558:
case 2490:
case 2160:
case 2074:
case 64:
case 751:
case 1644:
case 3186:
case 870:
case 2981:
case 3156:
case 3724:
case 3789:
case 1433:
case 3825:
case 2387:
case 3993:
case 555:
case 802:
case 4007:
case 116:
case 149:
case 3347:
case 3941:
case 2749:
case 2062:
case 3055:
case 1299:
case 162:
case 259:
case 885:
case 1115:
case 642:
case 3008:
case 3728:
case 2879:
case 1780:
case 951:
case 3486:
case 2190:
case 904:
case 61:
case 3323:
case 275:
case 2177:
case 3884:
case 1050:
case 3031:
case 2792:
case 3110:
case 87:
case 787:
case 304:
case 430:
case 3785:
case 2940:
case 2745:
case 351:
case 2600:
case 3283:
case 2966:
case 2552:
case 28:
case 1182:
case 444:
case 2844:
case 2373:
case 2453:
case 3638:
case 1741:
case 1820:
case 3059:
case 1295:
case 1553:
case 2227:
case 993:
case 1119:
case 543:
case 1452:
case 2774:
case 2848:
case 4061:
case 1793:
case 610:
case 774:
case 1989:
case 2913:
case 3616:
case 1218:
case 385:
case 1604:
case 1721:
case 2106:
case 2377:
case 2651:
case 97:
case 2828:
case 2054:
case 772:
case 1557:
case 2187:
case 1655:
case 1214:
case 2920:
case 3849:
case 3663:
case 3356:
case 1975:
case 5:
case 3206:
case 370:
case 2058:
case 1813:
case 2917:
case 2005:
case 696:
case 2725:
case 1797:
case 2311:
case 136:
case 2639:
case 1948:
case 1437:
case 1631:
case 3650:
case 1198:
case 3997:
case 1319:
case 2426:
case 3273:
case 3403:
case 1034:
case 164:
case 207:
case 644:
case 3502:
case 763:
case 3775:
case 581:
case 625:
case 788:
case 630:
case 2788:
case 3874:
case 2564:
case 1067:
case 410:
case 804:
case 37:
case 1659:
case 3310:
case 2784:
case 2729:
case 3878:
case 2696:
case 1526:
case 2568:
case 1382:
case 3892:
case 985:
case 2635:
case 2537:
case 851:
case 3327:
case 3780:
case 226:
case 2766:
case 1728:
case 1569:
case 3063:
case 413:
case 1055:
case 2978:
case 721:
case 89:
case 528:
case 1712:
case 3985:
case 1993:
case 3532:
case 3433:
case 2897:
case 1004:
case 409:
case 2322:
case 2586:
case 1407:
case 2713:
case 3560:
case 1601:
case 2318:
case 2469:
case 2215:
case 1941:
case 633:
case 4033:
case 349:
case 1347:
case 2051:
case 2974:
case 836:
case 760:
case 514:
case 3236:
case 3452:
case 949:
case 3295:
case 3553:
case 1059:
case 3741:
case 1191:
case 890:
case 2609:
case 3924:
case 2781:
case 3989:
case 2035:
case 1143:
case 719:
case 458:
case 104:
case 267:
case 1110:
case 2142:
case 295:
case 1829:
case 1031:
case 3394:
case 962:
case 3182:
case 2561:
case 2195:
case 3871:
case 2465:
case 3928:
case 1127:
case 532:
case 527:
case 3975:
case 1356:
case 1476:
case 1206:
case 2122:
case 3608:
case 3214:
case 3557:
case 3655:
case 2988:
case 336:
case 3948:
case 849:
case 816:
case 534:
case 2399:
case 2118:
case 964:
case 3813:
case 3770:
case 433:
case 862:
case 2929:
case 3218:
case 185:
case 3840:
case 1616:
case 2880:
case 2662:
case 2114:
case 3866:
case 39:
case 3944:
case 1744:
case 2342:
case 54:
case 17:
case 2771:
case 3038:
case 792:
case 2395:
case 2503:
case 2402:
case 1921:
case 1878:
case 3526:
case 1970:
case 1502:
case 1403:
case 1273:
case 676:
case 364:
case 3034:
case 3172:
case 3198:
case 2925:
case 1748:
case 936:
case 873:
case 1343:
case 283:
case 1874:
case 2841:
case 4068:
case 2000:
case 1775:
case 4037:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744239601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,];
var gg_b = "1744239601/";

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
