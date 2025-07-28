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
case 1378:
case 3049:
case 382:
case 835:
case 3180:
case 287:
case 3527:
case 1160:
case 2068:
case 2577:
case 222:
case 3056:
case 327:
case 1082:
case 1777:
case 507:
case 231:
case 3519:
case 3654:
case 2337:
case 3284:
case 1505:
case 2239:
case 390:
case 921:
case 743:
case 2705:
case 2660:
case 74:
case 2738:
case 2492:
case 3325:
case 218:
case 125:
case 2442:
case 3085:
case 1065:
case 3220:
case 3941:
case 1674:
case 3215:
case 3448:
case 3757:
case 3594:
case 3051:
case 2033:
case 3310:
case 2352:
case 849:
case 2763:
case 3124:
case 2900:
case 3996:
case 1563:
case 3243:
case 1708:
case 1735:
case 3583:
case 3099:
case 168:
case 1899:
case 3444:
case 593:
case 3990:
case 6:
case 3713:
case 75:
case 2906:
case 3354:
case 2009:
case 753:
case 3427:
case 1161:
case 801:
case 3172:
case 854:
case 3865:
case 294:
case 3155:
case 474:
case 3876:
case 4022:
case 1070:
case 3987:
case 4007:
case 2675:
case 974:
case 299:
case 1814:
case 2408:
case 3923:
case 3483:
case 3795:
case 1039:
case 915:
case 462:
case 2652:
case 3610:
case 2064:
case 2282:
case 3803:
case 2821:
case 1769:
case 2271:
case 3882:
case 1607:
case 2542:
case 336:
case 1856:
case 3050:
case 1175:
case 1534:
case 1742:
case 2888:
case 3480:
case 556:
case 875:
case 3241:
case 1561:
case 3915:
case 4004:
case 455:
case 3581:
case 2841:
case 1722:
case 2067:
case 2578:
case 491:
case 2761:
case 796:
case 3555:
case 2970:
case 3920:
case 2104:
case 1377:
case 1604:
case 3943:
case 3296:
case 2737:
case 3053:
case 3198:
case 969:
case 713:
case 1006:
case 2192:
case 2338:
case 2142:
case 2775:
case 3725:
case 248:
case 3758:
case 2766:
case 4069:
case 3586:
case 3695:
case 4042:
case 3148:
case 3259:
case 292:
case 2169:
case 1566:
case 852:
case 3710:
case 2859:
case 3246:
case 1001:
case 109:
case 2474:
case 1707:
case 500:
case 2939:
case 1308:
case 1230:
case 1642:
case 3291:
case 1335:
case 3144:
case 1105:
case 389:
case 68:
case 229:
case 2273:
case 1677:
case 3223:
case 1437:
case 3597:
case 141:
case 445:
case 3481:
case 3240:
case 1560:
case 3127:
case 3472:
case 2840:
case 3345:
case 4077:
case 695:
case 604:
case 939:
case 303:
case 2574:
case 2206:
case 3524:
case 439:
case 2135:
case 3806:
case 609:
case 1774:
case 2890:
case 1163:
case 52:
case 3290:
case 1369:
case 3926:
case 2976:
case 3547:
case 2079:
case 3287:
case 898:
case 3389:
case 2965:
case 376:
case 1933:
case 1466:
case 1635:
case 1342:
case 3017:
case 178:
case 2145:
case 1528:
case 395:
case 2772:
case 2698:
case 3829:
case 2416:
case 2327:
case 933:
case 2781:
case 1555:
case 1241:
case 3817:
case 3778:
case 4045:
case 1480:
case 1572:
case 558:
case 3460:
case 2217:
case 2755:
case 1581:
case 3537:
case 223:
case 3006:
case 1800:
case 3909:
case 2344:
case 830:
case 383:
case 4013:
case 2454:
case 3604:
case 1943:
case 2090:
case 1198:
case 1332:
case 2189:
case 2040:
case 3575:
case 1259:
case 3134:
case 1586:
case 1357:
case 3912:
case 1246:
case 2558:
case 1993:
case 1725:
case 2394:
case 2510:
case 877:
case 246:
case 1758:
case 1984:
case 3308:
case 2830:
case 3642:
case 3335:
case 1291:
case 529:
case 3964:
case 603:
case 2302:
case 43:
case 60:
case 309:
case 96:
case 2398:
case 2914:
case 2132:
case 1801:
case 1597:
case 3437:
case 719:
case 410:
case 3677:
case 2627:
case 1223:
case 4032:
case 1144:
case 2091:
case 2619:
case 2554:
case 2797:
case 1313:
case 2516:
case 1455:
case 1119:
case 860:
case 1428:
case 2780:
case 1240:
case 2059:
case 1127:
case 3560:
case 548:
case 2949:
case 3968:
case 1632:
case 2046:
case 2253:
case 1657:
case 1395:
case 3231:
case 2096:
case 3774:
case 1290:
case 2999:
case 3163:
case 81:
case 813:
case 1806:
case 3466:
case 2747:
case 3608:
case 3933:
case 2951:
case 3475:
case 775:
case 1017:
case 1711:
case 3635:
case 1486:
case 3342:
case 46:
case 2410:
case 2985:
case 256:
case 2511:
case 2348:
case 1389:
case 2867:
case 463:
case 2157:
case 910:
case 184:
case 3322:
case 2372:
case 3082:
case 1519:
case 2381:
case 3818:
case 2021:
case 3003:
case 3071:
case 973:
case 1049:
case 2250:
case 3378:
case 1959:
case 2328:
case 1056:
case 2719:
case 4016:
case 3850:
case 127:
case 2697:
case 1946:
case 759:
case 450:
case 2413:
case 3505:
case 3930:
case 2154:
case 599:
case 1732:
case 1498:
case 906:
case 1757:
case 1594:
case 4011:
case 3674:
case 2489:
case 1448:
case 2386:
case 1085:
case 728:
case 3076:
case 2026:
case 2929:
case 1358:
case 754:
case 3979:
case 1220:
case 3563:
case 3708:
case 2647:
case 765:
case 561:
case 2809:
case 3307:
case 1124:
case 3209:
case 29:
case 2798:
case 2681:
case 917:
case 2628:
case 1444:
case 2043:
case 3438:
case 690:
case 3405:
case 2285:
case 826:
case 1865:
case 3967:
case 1987:
case 3885:
case 2380:
case 1876:
case 1128:
case 3233:
case 311:
case 1181:
case 518:
case 3704:
case 1316:
case 1427:
case 627:
case 666:
case 2324:
case 1483:
case 2084:
case 1610:
case 988:
case 1402:
case 1625:
case 2595:
case 3814:
case 867:
case 843:
case 2158:
case 2249:
case 1288:
case 3856:
case 4010:
case 136:
case 1494:
case 1186:
case 3742:
case 2093:
case 302:
case 531:
case 3268:
case 2125:
case 1311:
case 744:
case 587:
case 3862:
case 2110:
case 1871:
case 522:
case 940:
case 2262:
case 4025:
case 1789:
case 2788:
case 1749:
case 1420:
case 260:
case 345:
case 1521:
case 792:
case 2834:
case 90:
case 3782:
case 1146:
case 1762:
case 3234:
case 1869:
case 1980:
case 2721:
case 2289:
case 3771:
case 1159:
case 2027:
case 903:
case 1353:
case 3409:
case 2646:
case 976:
case 2390:
case 3306:
case 984:
case 2044:
case 3130:
case 489:
case 2954:
case 2094:
case 3533:
case 3776:
case 484:
case 2117:
case 2726:
case 4029:
case 2450:
case 3765:
case 657:
case 1057:
case 2585:
case 3179:
case 296:
case 2696:
case 1526:
case 3845:
case 476:
case 2245:
case 40:
case 1298:
case 2002:
case 2599:
case 3301:
case 2083:
case 403:
case 1484:
case 1629:
case 3813:
case 3008:
case 1924:
case 1617:
case 1799:
case 213:
case 3035:
case 3092:
case 997:
case 3937:
case 1835:
case 1808:
case 3509:
case 2391:
case 1543:
case 1202:
case 1190:
case 2863:
case 2153:
case 2687:
case 2462:
case 1187:
case 1653:
case 542:
case 920:
case 3004:
case 2359:
case 2346:
case 2456:
case 1972:
case 3468:
case 3606:
case 2449:
case 1488:
case 391:
case 1981:
case 2720:
case 3770:
case 2838:
case 3136:
case 1244:
case 2805:
case 3238:
case 13:
case 729:
case 420:
case 3832:
case 2640:
case 1123:
case 2232:
case 1986:
case 3512:
case 647:
case 2925:
case 3975:
case 1877:
case 2958:
case 1593:
case 1140:
case 2623:
case 3966:
case 3673:
case 2341:
case 497:
case 2793:
case 3042:
case 372:
case 2485:
case 846:
case 3811:
case 1120:
case 3567:
case 3078:
case 2643:
case 2388:
case 315:
case 386:
case 1356:
case 1446:
case 3371:
case 2321:
case 3303:
case 1362:
case 2787:
case 3109:
case 1753:
case 1224:
case 936:
case 2913:
case 3531:
case 1998:
case 3706:
case 1590:
case 3430:
case 2620:
case 3670:
case 1540:
case 3260:
case 1025:
case 3376:
case 722:
case 117:
case 2989:
case 1948:
case 2150:
case 4018:
case 3639:
case 606:
case 2740:
case 535:
case 2216:
case 3479:
case 1351:
case 731:
case 436:
case 1010:
case 4050:
case 2254:
case 3536:
case 3701:
case 67:
case 379:
case 3773:
case 362:
case 1399:
case 1649:
case 799:
case 270:
case 2114:
case 2932:
case 1490:
case 640:
case 3682:
case 3938:
case 3431:
case 2453:
case 4014:
case 1944:
case 559:
case 1016:
case 427:
case 688:
case 512:
case 2162:
case 1487:
case 3467:
case 2210:
case 1919:
case 3168:
case 4062:
case 1614:
case 1559:
case 3858:
case 3370:
case 1927:
case 3266:
case 2875:
case 2258:
case 1596:
case 1902:
case 3963:
case 2199:
case 3676:
case 2626:
case 3665:
case 927:
case 2796:
case 3237:
case 1651:
case 2024:
case 565:
case 253:
case 3074:
case 3339:
case 2837:
case 25:
case 466:
case 1541:
case 3261:
case 1318:
case 1272:
case 554:
case 528:
case 1440:
case 3133:
case 2151:
case 321:
case 2047:
case 2741:
case 2957:
case 990:
case 1878:
case 705:
case 1717:
case 4051:
case 501:
case 3579:
case 237:
case 1255:
case 4070:
case 2609:
case 537:
case 1371:
case 3349:
case 716:
case 2170:
case 894:
case 1811:
case 1567:
case 3120:
case 2904:
case 1078:
case 3356:
case 186:
case 2368:
case 2847:
case 265:
case 1706:
case 553:
case 3998:
case 1670:
case 1430:
case 2506:
case 1109:
case 902:
case 2037:
case 3753:
case 2731:
case 861:
case 793:
case 2824:
case 438:
case 1479:
case 2333:
case 3351:
case 402:
case 3010:
case 1816:
case 2664:
case 3385:
case 2880:
case 2969:
case 1260:
case 1376:
case 1112:
case 3280:
case 2066:
case 3441:
case 621:
case 2400:
case 3650:
case 259:
case 2573:
case 2501:
case 2736:
case 911:
case 899:
case 1854:
case 179:
case 1007:
case 1773:
case 1536:
case 3184:
case 570:
case 1905:
case 3807:
case 1682:
case 1530:
case 54:
case 3944:
case 543:
case 2309:
case 3662:
case 350:
case 567:
case 3591:
case 1431:
case 3054:
case 2730:
case 4:
case 3656:
case 3286:
case 4071:
case 674:
case 3614:
case 2060:
case 1266:
case 822:
case 2977:
case 3487:
case 968:
case 1810:
case 2103:
case 3919:
case 615:
case 831:
case 1467:
case 1074:
case 249:
case 2908:
case 2364:
case 2935:
case 1676:
case 1436:
case 3596:
case 3685:
case 1665:
case 679:
case 3983:
case 306:
case 2855:
case 818:
case 2312:
case 9:
case 2278:
case 2165:
case 3717:
case 2828:
case 3011:
case 3994:
case 3272:
case 3318:
case 1261:
case 2779:
case 3729:
case 425:
case 121:
case 3440:
case 1889:
case 2367:
case 1568:
case 3415:
case 3248:
case 1771:
case 1234:
case 577:
case 3869:
case 2582:
case 2470:
case 746:
case 3842:
case 2630:
case 655:
case 2571:
case 441:
case 145:
case 3521:
case 2503:
case 2242:
case 3191:
case 664:
case 3714:
case 3353:
case 1409:
case 1895:
case 824:
case 1845:
case 3057:
case 478:
case 1179:
case 3751:
case 672:
case 2565:
case 363:
case 1776:
case 347:
case 1533:
case 3493:
case 3141:
case 1765:
case 669:
case 72:
case 2974:
case 1813:
case 2100:
case 3298:
case 3196:
case 530:
case 3629:
case 2898:
case 2439:
case 1373:
case 1301:
case 3190:
case 2667:
case 3543:
case 1131:
case 2802:
case 513:
case 2330:
case 1092:
case 1509:
case 2235:
case 2106:
case 3808:
case 909:
case 3515:
case 1468:
case 596:
case 3488:
case 3981:
case 1004:
case 3421:
case 2403:
case 2471:
case 451:
case 3187:
case 2631:
case 3653:
case 2482:
case 3520:
case 871:
case 1167:
case 3955:
case 756:
case 951:
case 3095:
case 1739:
case 219:
case 1832:
case 3123:
case 2764:
case 4001:
case 700:
case 409:
case 3584:
case 2844:
case 333:
case 3244:
case 2712:
case 2819:
case 3750:
case 1952:
case 3426:
case 2636:
case 3219:
case 172:
case 1975:
case 3718:
case 1069:
case 1512:
case 3227:
case 1966:
case 892:
case 169:
case 1673:
case 3089:
case 3329:
case 252:
case 98:
case 357:
case 3593:
case 1083:
case 3679:
case 2484:
case 3898:
case 2629:
case 1599:
case 3439:
case 1323:
case 1002:
case 2298:
case 78:
case 3336:
case 2892:
case 2617:
case 113:
case 803:
case 3292:
case 2924:
case 3100:
case 783:
case 2141:
case 456:
case 555:
case 1726:
case 1094:
case 2493:
case 1551:
case 2785:
case 1911:
case 884:
case 2804:
case 795:
case 3565:
case 1418:
case 4041:
case 1340:
case 2526:
case 2947:
case 1129:
case 2751:
case 196:
case 3733:
case 1696:
case 630:
case 2032:
case 2353:
case 889:
case 1514:
case 956:
case 1954:
case 1044:
case 2191:
case 2521:
case 569:
case 3503:
case 1019:
case 1562:
case 160:
case 3242:
case 4046:
case 1788:
case 1721:
case 2415:
case 1289:
case 1027:
case 1556:
case 2869:
case 2980:
case 2146:
case 1549:
case 3269:
case 545:
case 2140:
case 1048:
case 2089:
case 2329:
case 3379:
case 3034:
case 446:
case 1925:
case 1910:
case 2317:
case 2426:
case 177:
case 1485:
case 4040:
case 1341:
case 3465:
case 3712:
case 3819:
case 2750:
case 23:
case 3907:
case 1805:
case 1838:
case 3844:
case 1499:
case 1784:
case 2095:
case 61:
case 2520:
case 3482:
case 1346:
case 1715:
case 3403:
case 3471:
case 2928:
case 2187:
case 1257:
case 1720:
case 1449:
case 2515:
case 1456:
case 2294:
case 1414:
case 3330:
case 2835:
case 4090:
case 1743:
case 3208:
case 3802:
case 2283:
case 3709:
case 1863:
case 2202:
case 1098:
case 946:
case 2190:
case 3883:
case 3667:
case 2543:
case 42:
case 3139:
case 1254:
case 2184:
case 2496:
case 7:
case 3736:
case 1693:
case 1995:
case 3612:
case 1150:
case 3066:
case 1989:
case 2441:
case 1086:
case 3969:
case 2193:
case 3075:
case 1417:
case 836:
case 1326:
case 681:
case 3942:
case 3052:
case 637:
case 3664:
case 1740:
case 2874:
case 1913:
case 3824:
case 1790:
case 3506:
case 2224:
case 3037:
case 2753:
case 2143:
case 2314:
case 768:
case 2491:
case 240:
case 2998:
case 2356:
case 521:
case 3368:
case 328:
case 2349:
case 1388:
case 354:
case 126:
case 3170:
case 2120:
case 301:
case 532:
case 2362:
case 3609:
case 1787:
case 508:
case 1072:
case 3767:
case 3061:
case 2822:
case 3872:
case 2729:
case 2281:
case 3222:
case 3881:
case 485:
case 2541:
case 416:
case 1529:
case 1185:
case 2255:
case 2878:
case 2350:
case 574:
case 1957:
case 3278:
case 1741:
case 49:
case 1626:
case 866:
case 3500:
case 643:
case 3935:
case 3401:
case 1024:
case 153:
case 349:
case 3473:
case 1796:
case 3633:
case 2651:
case 1384:
case 2919:
case 1210:
case 4088:
case 1746:
case 1162:
case 2487:
case 2016:
case 1315:
case 2121:
case 1852:
case 3103:
case 1258:
case 1080:
case 2188:
case 1149:
case 2927:
case 1875:
case 3977:
case 2286:
case 4021:
case 702:
case 1156:
case 1225:
case 2614:
case 335:
case 2559:
case 1866:
case 579:
case 1791:
case 170:
case 1343:
case 2649:
case 1688:
case 3207:
case 890:
case 250:
case 2662:
case 2591:
case 2054:
case 1736:
case 550:
case 262:
case 1897:
case 34:
case 649:
case 1400:
case 994:
case 2007:
case 790:
case 2854:
case 499:
case 3118:
case 1664:
case 2479:
case 1333:
case 3684:
case 3989:
case 2365:
case 2934:
case 782:
case 838:
case 2260:
case 3326:
case 3417:
case 3086:
case 1880:
case 2430:
case 4009:
case 57:
case 3790:
case 1037:
case 1274:
case 3615:
case 2371:
case 3321:
case 494:
case 101:
case 3787:
case 811:
case 999:
case 274:
case 506:
case 3072:
case 2022:
case 635:
case 644:
case 1368:
case 3211:
case 3945:
case 286:
case 1170:
case 2567:
case 1904:
case 3643:
case 2078:
case 154:
case 326:
case 1176:
case 208:
case 2579:
case 3393:
case 1278:
case 3741:
case 1165:
case 3957:
case 1312:
case 3861:
case 418:
case 2133:
case 1872:
case 588:
case 2261:
case 1881:
case 381:
case 659:
case 1364:
case 922:
case 1633:
case 3024:
case 1401:
case 1908:
case 1473:
case 868:
case 2700:
case 931:
case 2676:
case 3626:
case 601:
case 2370:
case 2266:
case 3320:
case 3258:
case 2168:
case 2275:
case 1060:
case 431:
case 135:
case 2858:
case 487:
case 2252:
case 2810:
case 422:
case 654:
case 1103:
case 3162:
case 3453:
case 2431:
case 3621:
case 2603:
case 2530:
case 665:
case 2905:
case 3791:
case 3097:
case 1668:
case 3932:
case 3688:
case 1730:
case 3213:
case 313:
case 2035:
case 2813:
case 3641:
case 1439:
case 3323:
case 3002:
case 2179:
case 3340:
case 1204:
case 3450:
case 2600:
case 652:
case 2765:
case 424:
case 3094:
case 3551:
case 2776:
case 929:
case 3726:
case 3117:
case 3954:
case 1005:
case 3646:
case 4030:
case 2895:
case 3514:
case 3659:
case 533:
case 1331:
case 3387:
case 2568:
case 3721:
case 2703:
case 3289:
case 2771:
case 3834:
case 675:
case 797:
case 1269:
case 2889:
case 2960:
case 1367:
case 3019:
case 557:
case 245:
case 1768:
case 614:
case 1503:
case 3788:
case 1630:
case 1582:
case 3916:
case 2042:
case 3793:
case 3485:
case 3518:
case 1465:
case 3958:
case 152:
case 1379:
case 3451:
case 3623:
case 2966:
case 2673:
case 1277:
case 3550:
case 2069:
case 2512:
case 480:
case 789:
case 1764:
case 2739:
case 4036:
case 3640:
case 2564:
case 2300:
case 1844:
case 1539:
case 3499:
case 3449:
case 291:
case 1894:
case 3720:
case 2770:
case 175:
case 2468:
case 980:
case 2857:
case 1570:
case 1482:
case 1631:
case 784:
case 2004:
case 563:
case 1978:
case 804:
case 3359:
case 255:
case 3863:
case 3153:
case 1709:
case 3687:
case 1667:
case 264:
case 3098:
case 1106:
case 3414:
case 1235:
case 3743:
case 1330:
case 70:
case 2937:
case 935:
case 2307:
case 1900:
case 3783:
case 699:
case 2209:
case 3495:
case 1508:
case 3702:
case 1843:
case 268:
case 2735:
case 2563:
case 3647:
case 2708:
case 2979:
case 316:
case 788:
case 385:
case 832:
case 3111:
case 118:
case 1375:
case 1469:
case 821:
case 3917:
case 3489:
case 2264:
case 1884:
case 3864:
case 661:
case 1492:
case 3680:
case 3413:
case 3719:
case 3812:
case 717:
case 3355:
case 2160:
case 949:
case 1068:
case 1577:
case 3088:
case 187:
case 444:
case 3328:
case 4060:
case 3381:
case 2818:
case 2003:
case 2777:
case 3116:
case 2322:
case 605:
case 3372:
case 3218:
case 694:
case 4075:
case 1542:
case 412:
case 965:
case 3748:
case 2607:
case 1203:
case 582:
case 618:
case 2862:
case 1282:
case 2152:
case 1821:
case 2534:
case 2742:
case 202:
case 3256:
case 1888:
case 2849:
case 2268:
case 3589:
case 2175:
case 3158:
case 3249:
case 2856:
case 3868:
case 1666:
case 862:
case 199:
case 1973:
case 2814:
case 1408:
case 1901:
case 590:
case 3214:
case 1675:
case 1435:
case 901:
case 1652:
case 2463:
case 1064:
case 954:
case 2039:
case 1107:
case 3324:
case 750:
case 3084:
case 1122:
case 622:
case 2161:
case 454:
case 1477:
case 874:
case 2885:
case 815:
case 4061:
case 3020:
case 1826:
case 2070:
case 3545:
case 631:
case 401:
case 1360:
case 1276:
case 4037:
case 2899:
case 3043:
case 2792:
case 2931:
case 77:
case 465:
case 1906:
case 1592:
case 3672:
case 3798:
case 2622:
case 1634:
case 2001:
case 975:
case 1474:
case 3648:
case 3302:
case 2669:
case 1036:
case 3830:
case 2335:
case 1507:
case 2230:
case 180:
case 914:
case 589:
case 1939:
case 872:
case 1766:
case 2552:
case 346:
case 658:
case 4034:
case 3394:
case 1142:
case 1752:
case 192:
case 1169:
case 3525:
case 3040:
case 3950:
case 2912:
case 3090:
case 1737:
case 1031:
case 3454:
case 2604:
case 864:
case 1338:
case 3344:
case 283:
case 28:
case 952:
case 2006:
case 763:
case 891:
case 1841:
case 3217:
case 2460:
case 251:
case 3319:
case 2817:
case 2778:
case 2692:
case 1522:
case 1970:
case 1104:
case 2377:
case 171:
case 475:
case 2279:
case 3087:
case 295:
case 1761:
case 3772:
case 855:
case 2829:
case 3698:
case 3879:
case 3348:
case 442:
case 2452:
case 2267:
case 3410:
case 356:
case 648:
case 3602:
case 692:
case 3425:
case 278:
case 3747:
case 3458:
case 2000:
case 3694:
case 1574:
case 839:
case 3999:
case 2231:
case 3253:
case 1890:
case 3096:
case 2774:
case 2968:
case 3046:
case 1422:
case 834:
case 3059:
case 2304:
case 1177:
case 241:
case 3949:
case 757:
case 3644:
case 1638:
case 597:
case 1605:
case 3091:
case 300:
case 2105:
case 733:
case 2138:
case 73:
case 2437:
case 2677:
case 1201:
case 3627:
case 1823:
case 4038:
case 3132:
case 3507:
case 220:
case 3036:
case 833:
case 3891:
case 2689:
case 3634:
case 1302:
case 1558:
case 297:
case 734:
case 3752:
case 3859:
case 2586:
case 1950:
case 2357:
case 930:
case 1525:
case 1189:
case 477:
case 3846:
case 146:
case 2758:
case 1394:
case 3142:
case 3775:
case 745:
case 348:
case 1344:
case 3192:
case 2645:
case 600:
case 2332:
case 3896:
case 2198:
case 2296:
case 3031:
case 977:
case 1454:
case 371:
case 1087:
case 1416:
case 3104:
case 1698:
case 3067:
case 3578:
case 2528:
case 3761:
case 1319:
case 3841:
case 2480:
case 2241:
case 2915:
case 2486:
case 2017:
case 1425:
case 496:
case 86:
case 1458:
case 1041:
case 1683:
case 2287:
case 3334:
case 3079:
case 1157:
case 284:
case 1511:
case 3965:
case 3887:
case 156:
case 1999:
case 583:
case 764:
case 1724:
case 3407:
case 2657:
case 1253:
case 960:
case 2183:
case 413:
case 3890:
case 2806:
case 4002:
case 3108:
case 4083:
case 2524:
case 1694:
case 1962:
case 3971:
case 2428:
case 2921:
case 2455:
case 1956:
case 1046:
case 3840:
case 2481:
case 2988:
case 2716:
case 1059:
case 4019:
case 913:
case 3177:
case 3201:
case 2873:
case 3823:
case 1132:
case 2801:
case 623:
case 4044:
case 1398:
case 2313:
case 509:
case 1619:
case 1797:
case 2144:
case 3030:
case 4024:
case 2583:
case 3843:
case 2611:
case 2996:
case 1647:
case 3535:
case 19:
case 2124:
case 3900:
case 193:
case 3508:
case 3815:
case 1917:
case 774:
case 4047:
case 2215:
case 2594:
case 3033:
case 2051:
case 3270:
case 2220:
case 3366:
case 185:
case 481:
case 2147:
case 1929:
case 2325:
case 806:
case 2085:
case 1680:
case 1532:
case 2197:
case 3705:
case 2014:
case 3660:
case 3884:
case 2732:
case 850:
case 2839:
case 1864:
case 2616:
case 3239:
case 779:
case 538:
case 3404:
case 1116:
case 1381:
case 502:
case 3361:
case 2527:
case 3068:
case 3577:
case 2056:
case 322:
case 227:
case 2293:
case 2959:
case 1328:
case 95:
case 2049:
case 1250:
case 3893:
case 387:
case 1125:
case 2311:
case 2548:
case 107:
case 3888:
case 2940:
case 1158:
case 3012:
case 2288:
case 3569:
case 2882:
case 2221:
case 3203:
case 616:
case 2789:
case 1262:
case 3652:
case 44:
case 3064:
case 2483:
case 399:
case 3666:
case 3973:
case 3901:
case 3435:
case 1595:
case 693:
case 3675:
case 2625:
case 1020:
case 3178:
case 3265:
case 2128:
case 2987:
case 4081:
case 3360:
case 305:
case 2865:
case 708:
case 3276:
case 1285:
case 394:
case 4028:
case 2172:
case 2316:
case 2427:
case 3637:
case 2181:
case 361:
case 3009:
case 1513:
case 1798:
case 1672:
case 1655:
case 1299:
case 1953:
case 2598:
case 840:
case 1043:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753729202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,];
var gg_b = "1753729202/";

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
